(() => {
  const SUPABASE_URL = window.SUPABASE_URL || "";
  const SUPABASE_KEY = window.SUPABASE_KEY || "";
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

  function setMessage(text) {
    const node = document.getElementById("learnerAuthMessage");
    if (node) {
      node.textContent = text;
    }
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

  function resolveLoginEmail(rawValue) {
    const value = String(rawValue || "").trim();
    if (!value) {
      return "";
    }
    return value.includes("@") ? value : deriveChildEmailFromUsername(value);
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

  async function loginLearner(event) {
    event.preventDefault();
    const rawLogin = document.getElementById("learnerEmail")?.value.trim() || "";
    const password = document.getElementById("learnerPassword")?.value || "";

    setMessage("");
    if (!supabaseClient) {
      setMessage("Paste your Supabase URL and key into supabase-config.js first.");
      return;
    }
    if (!rawLogin || !password) {
      setMessage("Enter your username or email, and your password.");
      return;
    }

    const email = resolveLoginEmail(rawLogin);
    if (!email) {
      setMessage("Enter a valid username or email.");
      return;
    }

    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(
        rawLogin.includes("@")
          ? `Login error: ${error.message}`
          : `Login error: ${error.message}. Double-check your username with your parent.`
      );
      return;
    }

    setMessage("Login successful. Opening learner hub...");
    window.setTimeout(() => {
      window.location.href = buildUrl("app.html");
    }, 500);
  }

  async function resetLearnerPassword() {
    const rawLogin = document.getElementById("learnerEmail")?.value.trim() || "";
    setMessage("");

    if (!supabaseClient) {
      setMessage("Paste your Supabase URL and key into supabase-config.js first.");
      return;
    }
    if (!rawLogin) {
      setMessage("Enter your email first, then use Forgot Password.");
      return;
    }
    if (!rawLogin.includes("@")) {
      setMessage("Username logins don't have an email on file. Ask your parent to reset your password from their dashboard.");
      return;
    }

    const email = rawLogin;
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: buildUrl("index.html")
    });
    setMessage(error ? `Reset error: ${error.message}` : "Password reset email sent.");
  }

  document.addEventListener("DOMContentLoaded", async () => {
    if (!supabaseClient) {
      setMessage("Paste your Supabase URL and key into supabase-config.js first.");
      return;
    }

    const { data } = await supabaseClient.auth.getSession();
    if (data?.session) {
      window.location.href = buildUrl("app.html");
      return;
    }

    document.getElementById("learnerLoginForm")?.addEventListener("submit", loginLearner);
    document.getElementById("learnerForgotPasswordButton")?.addEventListener("click", resetLearnerPassword);
  });
})();
