(() => {
  const SUPABASE_URL = window.SUPABASE_URL || "";
  const SUPABASE_KEY = window.SUPABASE_KEY || "";
  const learnerSessionKey = "maths-mastery-learner-session-v1";
  const profilesStoreKey = "maths-mastery-profiles-v1";
  const supabaseClient =
    SUPABASE_URL && SUPABASE_KEY && window.supabase?.createClient
      ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
          auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
          }
        })
      : null;

  window.masterySupabase = {
    client: supabaseClient
  };

  function authEnabled() {
    return Boolean(supabaseClient);
  }

  function getPageName() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    return path.toLowerCase();
  }

  function isAppMarkupPresent() {
    return Boolean(document.querySelector(".page-shell") || document.getElementById("auth-check-loading"));
  }

  function isLoginMarkupPresent() {
    return Boolean(document.getElementById("authForm") || document.querySelector(".auth-shell"));
  }

  function getConfiguredBaseUrl() {
    if (window.location.protocol === "file:") {
      return "";
    }

    const configured = (window.APP_BASE_URL || "").trim();
    if (configured) {
      return configured.endsWith("/") ? configured : `${configured}/`;
    }

    const current = new URL(window.location.href);
    const basePath = current.pathname.replace(/[^/]*$/, "");
    return `${current.origin}${basePath}`;
  }

  function isHostedDeployment() {
    return window.location.protocol !== "file:";
  }

  function buildUrl(fileName) {
    const configuredBase = getConfiguredBaseUrl();
    return new URL(fileName, configuredBase || window.location.href).href;
  }

  // index.html is now the login page (the default/landing page for the site) and app.html is
  // the practice app. login.html still exists as a working alias for old links/bookmarks, but
  // index.html is the canonical one going forward.
  function goToLogin() {
    window.location.href = buildUrl("index.html");
  }

  function goToApp() {
    window.location.href = buildUrl("app.html");
  }

  function goToLearnerLogin() {
    window.location.href = buildUrl("learner-login.html");
  }

  function getStoredCurrentProfileId() {
    try {
      const stored = JSON.parse(localStorage.getItem(profilesStoreKey) || "null");
      return stored?.currentProfileId || null;
    } catch (error) {
      return null;
    }
  }

  function isSupabaseProfileId(profileId) {
    return typeof profileId === "string" && profileId.startsWith("supabase:");
  }

  function hasLearnerSession() {
    try {
      return Boolean(JSON.parse(localStorage.getItem(learnerSessionKey) || "null"));
    } catch (error) {
      return false;
    }
  }

  function hasLocalAccessSession() {
    if (isHostedDeployment()) {
      return false;
    }
    const currentProfileId = getStoredCurrentProfileId();
    const hasDeviceOnlyProfile = Boolean(currentProfileId) && !isSupabaseProfileId(currentProfileId);
    return Boolean(hasDeviceOnlyProfile || hasLearnerSession());
  }

  // Must match sanitizeUsername/deriveChildEmailFromUsername/CHILD_LOGIN_EMAIL_DOMAIN in app.js
  // exactly, so a username typed here resolves to the same hidden email the parent's account
  // creation flow generated.
  const CHILD_LOGIN_EMAIL_DOMAIN = "childlogin.mathshub.internal";

  function sanitizeUsername(rawUsername) {
    return String(rawUsername || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9_.-]/g, "");
  }

  function deriveChildEmailFromUsername(rawUsername) {
    const clean = sanitizeUsername(rawUsername);
    return clean ? `${clean}@${CHILD_LOGIN_EMAIL_DOMAIN}` : "";
  }

  function setText(id, value) {
    const node = document.getElementById(id);
    if (node) {
      node.textContent = value;
    }
  }

  function setHidden(id, hidden) {
    const node = document.getElementById(id);
    if (node) {
      node.classList.toggle("hidden", hidden);
    }
  }

  // Header rendering and the "Log Out" button are owned entirely by app.js on index.html (see
  // the comment on handleAppPage below) — there used to be duplicate versions of both here,
  // which raced against app.js and caused real bugs. Removed rather than left unused, so no one
  // accidentally wires them back up later.

  function setAuthMessage(text) {
    const message = document.getElementById("authMessage");
    if (message) {
      message.textContent = text;
    }
  }

  function setUpdatePasswordMessage(text) {
    const message = document.getElementById("updatePasswordMessage");
    if (message) {
      message.textContent = text;
    }
  }

  function inRecoveryMode() {
    return window.location.hash.includes("type=recovery") || window.location.search.includes("type=recovery");
  }

  function setRecoveryMode(enabled) {
    const authForm = document.getElementById("authForm");
    const updatePasswordForm = document.getElementById("updatePasswordForm");
    if (authForm) authForm.hidden = enabled;
    if (updatePasswordForm) updatePasswordForm.hidden = !enabled;
  }

  function getSelectedRole() {
    return document.getElementById("authRole")?.value === "learner" ? "learner" : "parent";
  }

  function updateRoleFields() {
    const role = getSelectedRole();
    const learnerMode = role === "learner";
    const nameGroup = document.getElementById("auth-name-group");
    const gradeGroup = document.getElementById("auth-grade-group");
    const nameInput = document.getElementById("authName");
    const emailLabel = document.getElementById("auth-email-label");
    const emailInput = document.getElementById("authEmail");
    const roleNote = document.getElementById("authRoleNote");

    nameGroup?.classList.toggle("hidden", !learnerMode);
    gradeGroup?.classList.toggle("hidden", !learnerMode);

    if (nameInput) {
      nameInput.placeholder = learnerMode ? "Enter learner name" : "Enter your name";
    }
    if (emailLabel) {
      emailLabel.firstChild.textContent = learnerMode ? "Email or Username" : "Email";
    }
    if (emailInput) {
      emailInput.placeholder = learnerMode ? "Enter your learner email or username" : "Enter your email";
      emailInput.autocomplete = learnerMode ? "username" : "email";
    }

    if (roleNote) {
      roleNote.textContent = learnerMode
        ? "Learner accounts open directly into their own grade-based learning page. Use your own learner email, or a username your parent created for you."
        : "Parent accounts can add learners, set goals, and view learner performance.";
    }
  }

  function resolveLearnerEmail(rawValue) {
    const value = String(rawValue || "").trim();
    if (!value) {
      return "";
    }
    return value.includes("@") ? value : deriveChildEmailFromUsername(value);
  }

  async function signUpUser() {
    const name = document.getElementById("authName")?.value.trim();
    const email = document.getElementById("authEmail")?.value.trim();
    const password = document.getElementById("authPassword")?.value;
    const role = getSelectedRole();
    const grade = Number(document.getElementById("authGrade")?.value || 1);

    setAuthMessage("");
    if (!authEnabled()) {
      setAuthMessage("Paste your Supabase URL and key into supabase-config.js first.");
      return;
    }
    if (!email || !password) {
      setAuthMessage("Please enter email and password.");
      return;
    }
    if (role === "learner" && !name) {
      setAuthMessage("Enter the learner profile name before signing up.");
      return;
    }

    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          user_name: name || "",
          account_type: role,
          grade: role === "learner" ? grade : null
        },
        emailRedirectTo: buildUrl("index.html")
      }
    });

    setAuthMessage(
      error
        ? `Sign up error: ${error.message}`
        : role === "learner"
          ? "Learner account created. You can now log in and start learning."
          : "Parent account created. You can now log in and manage learners."
    );
  }

  async function loginUser() {
    const rawLogin = document.getElementById("authEmail")?.value.trim() || "";
    const password = document.getElementById("authPassword")?.value;
    const selectedRole = getSelectedRole();
    const email = selectedRole === "learner" ? resolveLearnerEmail(rawLogin) : rawLogin;

    setAuthMessage("");
    if (!authEnabled()) {
      setAuthMessage("Paste your Supabase URL and key into supabase-config.js first.");
      return;
    }
    if (!rawLogin || !password) {
      setAuthMessage(selectedRole === "learner" ? "Please enter learner email or username, and password." : "Please enter email and password.");
      return;
    }
    if (!email) {
      setAuthMessage("Please enter a valid learner email or username.");
      return;
    }

    const { data: signInData, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      setAuthMessage(
        selectedRole === "learner"
          ? `Login error: ${error.message}. Use your learner email or the username your parent created for you.`
          : `Login error: ${error.message}`
      );
      return;
    }

    const actualRole = signInData?.user?.user_metadata?.account_type === "learner" ? "learner" : "parent";
    if (actualRole !== selectedRole) {
      await supabaseClient.auth.signOut({ scope: "local" });
      setAuthMessage(
        actualRole === "parent"
          ? "This login belongs to a parent account. A learner must use their own learner email or the username a parent created."
          : "This login belongs to a learner account. Choose Learner to log in."
      );
      return;
    }

    setAuthMessage("Login successful. Opening app...");
    goToApp();
  }

  async function sendPasswordReset() {
    const rawLogin = document.getElementById("authEmail")?.value.trim() || "";
    setAuthMessage("");

    if (!authEnabled()) {
      setAuthMessage("Paste your Supabase URL and key into supabase-config.js first.");
      return;
    }
    if (!rawLogin) {
      setAuthMessage("Enter your email first, then use Forgot password.");
      return;
    }
    if (window.location.protocol === "file:" && !window.APP_BASE_URL) {
      setAuthMessage("Set APP_BASE_URL in supabase-config.js before using reset emails from a local file.");
      return;
    }

    const { error } = await supabaseClient.auth.resetPasswordForEmail(rawLogin, {
      redirectTo: buildUrl("index.html")
    });
    setAuthMessage(error ? `Reset error: ${error.message}` : "Password reset email sent. Open the email and return here.");
  }

  async function updatePassword(event) {
    event.preventDefault();
    const newPassword = document.getElementById("newPassword")?.value || "";
    const confirmPassword = document.getElementById("confirmPassword")?.value || "";
    setUpdatePasswordMessage("");

    if (!authEnabled()) {
      setUpdatePasswordMessage("Paste your Supabase URL and key into supabase-config.js first.");
      return;
    }
    if (!newPassword || !confirmPassword) {
      setUpdatePasswordMessage("Enter and confirm your new password.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setUpdatePasswordMessage("The new passwords do not match.");
      return;
    }

    const { error } = await supabaseClient.auth.updateUser({ password: newPassword });
    if (error) {
      setUpdatePasswordMessage(`Update error: ${error.message}`);
      return;
    }
    setUpdatePasswordMessage("Password updated. Opening the app...");
    window.setTimeout(goToApp, 600);
  }

  // Reveals the app markup that app.html hides by default via CSS (see the inline <style> in
  // app.html's <head>). Only ever called from a branch of handleAppPage() below that has
  // confirmed real access — a Supabase session or a local device profile/learner session.
  function grantAppAccess() {
    document.body.classList.add("access-granted");
  }

  // app.html is protected: if there is no active Supabase session and no locally signed-in
  // learner/parent profile on this device, send the visitor to the login page first. Guests are
  // never shown the app markup — it stays hidden (see app.html's inline CSS) unless this
  // function explicitly grants access. app.js still owns the header/account rendering after
  // access is granted.
  async function handleAppPage() {
    if (!authEnabled()) {
      if (isHostedDeployment()) {
        goToLogin();
        return;
      }
      if (!hasLocalAccessSession()) {
        goToLogin();
        return;
      }
      grantAppAccess();
      return;
    }

    try {
      const { data } = await supabaseClient.auth.getSession();
      const session = data?.session || null;
      if (!session) {
        const storedProfileId = getStoredCurrentProfileId();
        if (isSupabaseProfileId(storedProfileId)) {
          goToLogin();
          return;
        }
        if (isHostedDeployment() || !hasLocalAccessSession()) {
          goToLogin();
          return;
        }
        grantAppAccess();
        return;
      }

      grantAppAccess();

      const applySession = () => window.masteryApp?.applySupabaseSessionToLocalProfile?.(session);
      if (window.masteryApp?.applySupabaseSessionToLocalProfile) {
        applySession();
      } else {
        window.addEventListener("mastery-app-ready", applySession, { once: true });
      }

      supabaseClient.auth.onAuthStateChange((event, nextSession) => {
        if (nextSession) {
          grantAppAccess();
        }
        window.masteryApp?.applySupabaseSessionToLocalProfile?.(nextSession);
      });
    } catch (error) {
      console.error("Session check failed", error);
      // On the hosted app, always fall back to the real login page instead of browser-only
      // profiles, so learner lists and progress stay shared across browsers/devices.
      if (isHostedDeployment() || !hasLocalAccessSession()) {
        goToLogin();
      } else {
        grantAppAccess();
      }
    }
  }

  async function handleLoginPage() {
    if (!authEnabled()) {
      setAuthMessage("Paste your Supabase URL and key into supabase-config.js first.");
      return;
    }

    const { data } = await supabaseClient.auth.getSession();
    if (data?.session && !inRecoveryMode()) {
      setAuthMessage("You are already signed in. Use Log In with another account, or open the app when you are ready.");
    }

    setRecoveryMode(inRecoveryMode());

    document.getElementById("signupButton")?.addEventListener("click", signUpUser);
    document.getElementById("loginButton")?.addEventListener("click", async (event) => {
      event.preventDefault();
      await loginUser();
    });
    document.getElementById("forgotPasswordButton")?.addEventListener("click", sendPasswordReset);
    document.getElementById("authRole")?.addEventListener("change", updateRoleFields);
    document.getElementById("authForm")?.addEventListener("submit", async (event) => {
      event.preventDefault();
      await loginUser();
    });
    document.getElementById("updatePasswordForm")?.addEventListener("submit", updatePassword);
    document.getElementById("backToLoginButton")?.addEventListener("click", () => {
      setRecoveryMode(false);
      history.replaceState({}, document.title, buildUrl("index.html"));
    });
    updateRoleFields();
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const page = getPageName();
    // Prefer the actual markup over the file name. In production the hosted app can be served
    // through index-like routes, and relying only on "app.html" prevented the signed-in
    // Supabase session from hydrating the live practice page.
    if (page === "app.html" || (isAppMarkupPresent() && !isLoginMarkupPresent())) {
      await handleAppPage();
      return;
    }
    await handleLoginPage();
  });
})();
