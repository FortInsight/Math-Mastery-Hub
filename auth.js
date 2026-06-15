(() => {
  const SUPABASE_URL = window.SUPABASE_URL || "";
  const SUPABASE_KEY = window.SUPABASE_KEY || "";
  const learnerSessionKey = "maths-mastery-learner-session-v1";
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

  function getConfiguredBaseUrl() {
    const configured = (window.APP_BASE_URL || "").trim();
    if (configured) {
      return configured.endsWith("/") ? configured : `${configured}/`;
    }

    if (window.location.protocol === "file:") {
      return "";
    }

    const current = new URL(window.location.href);
    const basePath = current.pathname.replace(/[^/]*$/, "");
    return `${current.origin}${basePath}`;
  }

  function buildUrl(fileName) {
    const configuredBase = getConfiguredBaseUrl();
    return new URL(fileName, configuredBase || window.location.href).href;
  }

  function goToLogin() {
    window.location.href = buildUrl("login.html");
  }

  function goToApp() {
    window.location.href = buildUrl("index.html");
  }

  function goToLearnerLogin() {
    window.location.href = buildUrl("learner-login.html");
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

  function getSelectedRole() {
    return document.getElementById("authRole")?.value || "parent";
  }

  function updateRoleMode() {
    const role = getSelectedRole();
    const learnerMode = role === "learner";
    setHidden("auth-email-label", false);
    setHidden("auth-grade-label", !learnerMode);
    setHidden("forgotPasswordButton", false);
    setHidden("parent-flow-note", learnerMode);
    setHidden("learner-flow-note", !learnerMode);

    const help = document.getElementById("auth-role-help");
    if (help) {
      help.textContent = learnerMode
        ? "Learners sign in with their own email and password. A parent can link the learner account and still view performance."
        : "Parents sign in with email and password, then link and manage children inside the dashboard.";
    }

    const signupButton = document.getElementById("signupButton");
    const loginButton = document.getElementById("loginButton");
    const emailInput = document.getElementById("authEmail");

    if (signupButton) {
      signupButton.disabled = false;
      signupButton.textContent = "Sign Up";
    }
    if (loginButton) {
      loginButton.textContent = "Log In";
    }
    if (emailInput) {
      emailInput.disabled = false;
    }
  }

  function updateAppHeader(session) {
    const user = session?.user;
    const metadata = user?.user_metadata || {};
    const displayName = metadata.user_name || user?.email || "Learner";
    const role = metadata.account_type === "parent" ? "Parent account" : "Learner account";

    setText("auth-account-name", displayName);
    setText("auth-account-meta", user ? role : "Open login to continue");
    setHidden("open-login-link", Boolean(user));
    setHidden("open-account-tools-button", !user);
    setHidden("logout-auth-button", !user);
  }

  function updateLearnerHeaderFromSession() {
    try {
      const learnerSession = JSON.parse(localStorage.getItem(learnerSessionKey) || "null");
      if (!learnerSession) {
        return false;
      }

      setText("auth-account-name", learnerSession.childName || "Learner");
      setText("auth-account-meta", "Learner account");
      setHidden("open-login-link", true);
      setHidden("open-account-tools-button", true);
      setHidden("logout-auth-button", false);
      return true;
    } catch (error) {
      return false;
    }
  }

  function bindAppButtons() {
    const logoutButton = document.getElementById("logout-auth-button");
    if (logoutButton) {
      logoutButton.addEventListener("click", async () => {
        if (authEnabled()) {
          await supabaseClient.auth.signOut({ scope: "local" });
        }
        localStorage.removeItem(learnerSessionKey);
        window.masteryApp?.clearLearnerSession?.();
        goToLogin();
      });
    }
  }

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

  async function signUpUser() {
    const name = document.getElementById("authName")?.value.trim();
    const email = document.getElementById("authEmail")?.value.trim();
    const password = document.getElementById("authPassword")?.value;
    const role = document.getElementById("authRole")?.value || "learner";
    const grade = role === "learner" ? Number(document.getElementById("authGrade")?.value || 1) : null;

    setAuthMessage("");
    if (!authEnabled()) {
      setAuthMessage("Paste your Supabase URL and key into supabase-config.js first.");
      return;
    }
    if (!email || !password) {
      setAuthMessage("Please enter email and password.");
      return;
    }

    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          user_name: name || "",
          account_type: role,
          grade
        },
        emailRedirectTo: buildUrl("index.html")
      }
    });

    setAuthMessage(error ? `Sign up error: ${error.message}` : "Account created. You can now log in.");
  }

  async function loginUser() {
    const role = getSelectedRole();
    const email = document.getElementById("authEmail")?.value.trim();
    const password = document.getElementById("authPassword")?.value;

    setAuthMessage("");
    if (!authEnabled()) {
      setAuthMessage("Paste your Supabase URL and key into supabase-config.js first.");
      return;
    }
    if (!email || !password) {
      setAuthMessage("Please enter email and password.");
      return;
    }

    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      setAuthMessage(`Login error: ${error.message}`);
      return;
    }

    setAuthMessage("Login successful. Opening app...");
    goToApp();
  }

  async function sendPasswordReset() {
    const role = getSelectedRole();
    const email = document.getElementById("authEmail")?.value.trim();
    setAuthMessage("");

    if (!authEnabled()) {
      setAuthMessage("Paste your Supabase URL and key into supabase-config.js first.");
      return;
    }
    if (!email) {
      setAuthMessage("Enter your email first, then use Forgot password.");
      return;
    }
    if (window.location.protocol === "file:" && !window.APP_BASE_URL) {
      setAuthMessage("Set APP_BASE_URL in supabase-config.js before using reset emails from a local file.");
      return;
    }

    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: buildUrl("login.html")
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

  async function handleAppPage() {
    updateAppHeader(null);
    bindAppButtons();

    if (!authEnabled()) {
      return;
    }

    const { data } = await supabaseClient.auth.getSession();
    const session = data?.session || null;
    if (!session) {
      goToLogin();
      return;
    }

    updateAppHeader(session);
    const applySession = () => window.masteryApp?.applySupabaseSessionToLocalProfile?.(session);
    if (window.masteryApp?.applySupabaseSessionToLocalProfile) {
      applySession();
    } else {
      window.addEventListener("mastery-app-ready", applySession, { once: true });
    }

    supabaseClient.auth.onAuthStateChange((event, nextSession) => {
      if (!nextSession) {
        goToLogin();
        return;
      }
      updateAppHeader(nextSession);
      window.masteryApp?.applySupabaseSessionToLocalProfile?.(nextSession);
    });
  }

  async function handleLoginPage() {
    if (!authEnabled()) {
      setAuthMessage("Paste your Supabase URL and key into supabase-config.js first.");
      return;
    }

    const { data } = await supabaseClient.auth.getSession();
    if (data?.session && !inRecoveryMode()) {
      goToApp();
      return;
    }

    setRecoveryMode(inRecoveryMode());
    updateRoleMode();

    document.getElementById("signupButton")?.addEventListener("click", signUpUser);
    document.getElementById("loginButton")?.addEventListener("click", async (event) => {
      event.preventDefault();
      await loginUser();
    });
    document.getElementById("authRole")?.addEventListener("change", updateRoleMode);
    document.getElementById("forgotPasswordButton")?.addEventListener("click", sendPasswordReset);
    document.getElementById("authForm")?.addEventListener("submit", async (event) => {
      event.preventDefault();
      await loginUser();
    });
    document.getElementById("updatePasswordForm")?.addEventListener("submit", updatePassword);
    document.getElementById("backToLoginButton")?.addEventListener("click", () => {
      setRecoveryMode(false);
      history.replaceState({}, document.title, buildUrl("login.html"));
    });
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const page = getPageName();
    if (page === "login.html") {
      await handleLoginPage();
      return;
    }
    await handleAppPage();
  });
})();
