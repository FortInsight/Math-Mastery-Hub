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

  function hasLearnerSession() {
    try {
      return Boolean(JSON.parse(localStorage.getItem(learnerSessionKey) || "null"));
    } catch (error) {
      return false;
    }
  }

  function hasLocalAccessSession() {
    return Boolean(getStoredCurrentProfileId() || hasLearnerSession());
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

  // There is no longer a parent/learner choice on this page — every account signs up the same
  // way and gets full access to add learners (with username, grade, and avatar) from inside the
  // dashboard. The separate learner-login.html username flow for kids is untouched by this.

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

  async function signUpUser() {
    const name = document.getElementById("authName")?.value.trim();
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

    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          user_name: name || "",
          // Every account created here is the same "full" account type — it can add learners
          // (with username, grade, avatar) from inside the dashboard, whether or not it ever
          // does. There is no separate parent/learner role to pick at sign-up anymore.
          account_type: "parent"
        },
        emailRedirectTo: buildUrl("index.html")
      }
    });

    setAuthMessage(error ? `Sign up error: ${error.message}` : "Account created. You can now log in.");
  }

  async function loginUser() {
    const email = document.getElementById("authEmail")?.value.trim() || "";
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

    const { data: signInData, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      setAuthMessage(`Login error: ${error.message}`);
      return;
    }

    // Self-heal accounts created before this page dropped the parent/learner choice, so anyone
    // who was previously stamped "learner" (or has no account_type at all) gets full access too.
    // This is a best-effort attempt only — app.js's loadSupabaseAccountData() runs the same
    // check again on app.html itself (and, unlike here, doesn't need a network round trip to
    // finish before the account shows correctly), so a failure here must NOT block navigation:
    // it previously did, and a flaky network call on this one step meant a correct password
    // could leave someone stuck on the login page. Log and move on instead.
    if (signInData?.user?.user_metadata?.account_type !== "parent") {
      const userId = signInData.user.id;
      let isLinkedChild = false;
      try {
        const { data: childLinkRows } = await supabaseClient
          .from("mastery_children")
          .select("id")
          .or(`child_email.eq.${email},linked_profile_id.eq.${userId}`)
          .limit(1);
        isLinkedChild = Boolean(childLinkRows && childLinkRows.length);
      } catch (lookupError) {
        console.error("Could not check for an existing child link before self-healing account_type", lookupError);
      }

      if (!isLinkedChild) {
        try {
          const { error: updateError } = await supabaseClient.auth.updateUser({ data: { account_type: "parent" } });
          if (updateError) {
            throw updateError;
          }
          // updateUser() refreshes the session internally, but app.html loads as a brand-new page
          // (not a single-page navigation), so we explicitly wait for the refreshed session to be
          // persisted to storage before navigating away — otherwise app.html can briefly read the
          // old, pre-update session and show "Learner" instead of "Parent".
          const { error: refreshError } = await supabaseClient.auth.refreshSession();
          if (refreshError) {
            throw refreshError;
          }
        } catch (updateError) {
          console.error("Self-healing account_type to parent failed, continuing to the app anyway", updateError);
        }
      }
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
        if (!hasLocalAccessSession()) {
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
      // Couldn't verify the session either way — don't leave the visitor stuck on a blank
      // hidden page. Fall back to the same local-session check the other branches use.
      if (!hasLocalAccessSession()) {
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
    document.getElementById("authForm")?.addEventListener("submit", async (event) => {
      event.preventDefault();
      await loginUser();
    });
    document.getElementById("updatePasswordForm")?.addEventListener("submit", updatePassword);
    document.getElementById("backToLoginButton")?.addEventListener("click", () => {
      setRecoveryMode(false);
      history.replaceState({}, document.title, buildUrl("index.html"));
    });
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const page = getPageName();
    // app.html is the practice app; everything else that loads auth.js (index.html — the
    // default/landing page — plus the legacy login.html alias) is treated as the login page.
    if (page === "app.html") {
      await handleAppPage();
      return;
    }
    await handleLoginPage();
  });
})();
