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
    const email = document.getElementById("learnerEmail")?.value.trim() || "";
    const password = document.getElementById("learnerPassword")?.value || "";

    setMessage("");
    if (!supabaseClient) {
      setMessage("Paste your Supabase URL and key into supabase-config.js first.");
      return;
    }
    if (!email || !password) {
      setMessage("Enter both email and password.");
      return;
    }

    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(`Login error: ${error.message}`);
      return;
    }

    setMessage("Login successful. Opening learner hub...");
    window.setTimeout(() => {
      window.location.href = buildUrl("index.html");
    }, 500);
  }

  async function resetLearnerPassword() {
    const email = document.getElementById("learnerEmail")?.value.trim() || "";
    setMessage("");

    if (!supabaseClient) {
      setMessage("Paste your Supabase URL and key into supabase-config.js first.");
      return;
    }
    if (!email) {
      setMessage("Enter your email first, then use Forgot Password.");
      return;
    }

    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: buildUrl("login.html")
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
      window.location.href = buildUrl("index.html");
      return;
    }

    document.getElementById("learnerLoginForm")?.addEventListener("submit", loginLearner);
    document.getElementById("learnerForgotPasswordButton")?.addEventListener("click", resetLearnerPassword);
  });
})();
