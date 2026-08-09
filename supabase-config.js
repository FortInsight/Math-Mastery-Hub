// Pointed at the same Supabase project as the study planner app, so both apps share one
// backend/database. Table names don't collide: this app uses mastery_profiles/mastery_children/
// mastery_progress, the planner uses profiles/tasks.
window.SUPABASE_URL = "https://wlwwvtuwwvszifsjgjei.supabase.co";
window.SUPABASE_KEY = "sb_publishable_eJp5ZjVG3Xmu3A_93JweVw_8k2xOwBw";
// Set this to your live deployed app URL so sign-up and password reset emails
// return people to this app instead of a local file URL.
window.APP_BASE_URL = "https://math-and-english-mastery-hub.fortinsight.com";
