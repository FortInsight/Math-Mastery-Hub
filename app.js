const grades = Array.from({ length: 12 }, (_, index) => index + 1);
const ENABLE_PAT_PRACTICE = true;

const UI_EMOJIS = {
  hint: String.fromCodePoint(0x1F4A1),
  success: String.fromCodePoint(0x1F604),
  error: String.fromCodePoint(0x1F622)
};

const curriculum = {
  1: [
    makeCategory("numbers", "Numbers to 100", "Count, compare, order, and build number sense.", "numberSense", { min: 0, max: 100 }),
    makeCategory("add-sub", "Addition & Subtraction", "Solve simple number stories and number sentences.", "additionSubtraction", { maxA: 20, maxB: 20 }),
    makeCategory("counting", "Counting & Ordering", "Practice counting forward, backward, and ordering numbers.", "numberSense", { min: 0, max: 50 }),
    makeCategory("shapes", "Shapes & Space", "Identify 2D and 3D shapes and their features.", "geometry", { level: 1 }),
    makeCategory("measurement", "Measurement & Time", "Compare length, mass, time, and money ideas.", "measurement", { level: 1 }),
    makeCategory("time", "Time & Calendar", "Read clocks, days, and everyday time ideas.", "measurement", { level: 1 }),
    makeCategory("patterns", "Patterns & Data", "Extend patterns and read picture data.", "patternsData", { level: 1 })
  ],
  2: [
    makeCategory("numbers", "Place Value", "Work with ones, tens, and numbers to 1,000.", "numberSense", { min: 10, max: 1000 }),
    makeCategory("add-sub", "Addition & Subtraction", "Add and subtract with regrouping ideas.", "additionSubtraction", { maxA: 150, maxB: 150 }),
    makeCategory("skip-counting", "Skip Counting", "Build fluency with 2s, 5s, 10s, and repeated patterns.", "patternsData", { level: 2 }),
    makeCategory("measurement", "Measurement & Money", "Tell time, count coins, and compare measures.", "measurement", { level: 2 }),
    makeCategory("shapes", "Shapes & Fractions", "Name shapes and equal parts.", "geometry", { level: 2 }),
    makeCategory("fractions", "Equal Parts", "Recognize halves, thirds, and fourths in shapes.", "fractionsDecimalsPercent", { stage: "basicFractions" }),
    makeCategory("patterns", "Patterns & Graphs", "Use skip counting and read simple graphs.", "patternsData", { level: 2 })
  ],
  3: [
    makeCategory("numbers", "Numbers & Place Value", "Build fluency with numbers to 10,000.", "numberSense", { min: 100, max: 10000 }),
    makeCategory("mult-div", "Multiplication & Division", "Use arrays, groups, and fact families.", "multiplicationDivision", { max: 12 }),
    makeCategory("fractions", "Fractions", "Understand halves, thirds, fourths, and simple comparisons.", "fractionsDecimalsPercent", { stage: "basicFractions" }),
    makeCategory("measurement", "Measurement", "Perimeter, time, mass, capacity, and money.", "measurement", { level: 3 }),
    makeCategory("geometry", "Geometry & Data", "Angles, shapes, bar graphs, and tables.", "geometry", { level: 3 }),
    makeCategory("graphs", "Graphs & Tables", "Read bar graphs, tables, and simple data displays.", "patternsData", { level: 3 }),
    makeCategory("money", "Money Problems", "Solve everyday spending and change questions.", "measurement", { level: 3 })
  ],
  4: [
    makeCategory("numbers", "Whole Numbers", "Compare, round, and estimate larger numbers.", "numberSense", { min: 100, max: 100000 }),
    makeCategory("mult-div", "Multiplication & Division", "Multi-step operations with larger factors.", "multiplicationDivision", { max: 16 }),
    makeCategory("fractions", "Fractions & Decimals", "Equivalent fractions and tenths.", "fractionsDecimalsPercent", { stage: "fractionDecimalBridge" }),
    makeCategory("measurement", "Measurement & Area", "Area, perimeter, elapsed time, and conversions.", "measurement", { level: 4 }),
    makeCategory("patterns", "Patterns & Algebra", "Number patterns and input-output rules.", "patternsData", { level: 4 }),
    makeCategory("geometry", "Lines, Angles & Shapes", "Study lines, angles, symmetry, and polygons.", "geometry", { level: 4 }),
    makeCategory("data", "Data & Graphing", "Read charts, graphs, and line plot style questions.", "patternsData", { level: 4 })
  ],
  5: [
    makeCategory("numbers", "Number Sense", "Place value, rounding, and powers of 10.", "numberSense", { min: 1000, max: 1000000 }),
    makeCategory("operations", "Operations", "Multiply, divide, and solve word problems.", "multiplicationDivision", { max: 25 }),
    makeCategory("fractions", "Fractions, Decimals & Percent", "Operate with fractions and decimals.", "fractionsDecimalsPercent", { stage: "upperElementary" }),
    makeCategory("ratios", "Ratios & Intro Proportions", "Compare quantities using simple ratios, part-to-part thinking, and scaling.", "ratiosProportions", { level: 5 }),
    makeCategory("geometry", "Geometry", "Volume, coordinates, and classification.", "geometry", { level: 5 }),
    makeCategory("data", "Data & Patterns", "Graphs, mean ideas, and pattern rules.", "patternsData", { level: 5 }),
    makeCategory("measurement", "Measurement & Conversions", "Convert units and solve area and volume questions.", "measurement", { level: 5 }),
    makeCategory("graphing", "Coordinate Graphing", "Plot points and describe positions on a grid.", "geometry", { level: 5 })
  ],
  6: [
    makeCategory("numbers", "Factors & Number Sense", "Factors, multiples, and rational number foundations.", "numberSense", { min: 10, max: 750 }),
    makeCategory("operations", "Fractions & Decimals", "Compute with fractions, decimals, and percent.", "fractionsDecimalsPercent", { stage: "middleSchoolStart" }),
    makeCategory("algebra", "Expressions & Equations", "Use variables, order of operations, and simple equations.", "algebra", { level: 6 }),
    makeCategory("geometry", "Geometry & Measurement", "Area, surface area, and volume.", "geometry", { level: 6 }),
    makeCategory("data", "Statistics", "Interpret data sets and probability language.", "statisticsProbability", { level: 6 }),
    makeCategory("ratios", "Ratios & Rates", "Use unit rates, ratio language, and percent ideas.", "ratiosProportions", { level: 6 }),
    makeCategory("integers", "Integers Intro", "Prepare for signed number thinking with ordered values.", "integersRational", { level: 6 })
  ],
  7: [
    makeCategory("integers", "Integers", "Add, subtract, multiply, and divide signed numbers.", "integersRational", { level: 7 }),
    makeCategory("fractions", "Fractions", "Compare, convert, add, and subtract fractions with growing complexity.", "fractionsDecimalsPercent", { stage: "grade7Fractions" }),
    makeCategory("decimals", "Decimals", "Order, add, subtract, multiply, and divide decimals.", "fractionsDecimalsPercent", { stage: "grade7Decimals" }),
    makeCategory("percents", "Percents & Decimals", "Connect percents, decimals, fractions, discounts, and percent of a quantity.", "fractionsDecimalsPercent", { stage: "grade7Percents" }),
    makeCategory("patterns", "Patterns & Expressions", "Extend patterns, write expressions, and connect tables to rules.", "algebra", { level: 7, skill: "grade7PatternsExpressions" }),
    makeCategory("algebra", "Algebra", "Evaluate expressions and solve equations and inequalities.", "algebra", { level: 7, skill: "grade7Algebra" }),
    makeCategory("coordinates", "Coordinates & Transformations", "Plot points in four quadrants and describe translations and reflections.", "functionsGraphing", { level: 7, skill: "grade7CoordinatesTransformations" }),
    makeCategory("geometry", "Geometry & Measurement", "Work with angles, area, perimeter, volume, and rotational symmetry.", "geometry", { level: 7, skill: "grade7GeometryMeasurement" }),
    makeCategory("circles", "Circles", "Use radius, diameter, circumference, and circle relationships.", "geometry", { level: 7, skill: "grade7Circles" }),
    makeCategory("data", "Data (Central Tendency)", "Use mean, median, mode, and simple data comparisons.", "statisticsProbability", { level: 7, skill: "grade7CentralTendency" }),
    makeCategory("probability", "Probability", "Compare theoretical and experimental probability and interpret outcomes.", "statisticsProbability", { level: 7, skill: "grade7Probability" }),
    makeCategory("probability-mastery", "Probability Mastery", "Study Grade 7 worksheet examples, then solve mastery questions with step-by-step solutions and sample-space models.", "grade7ProbabilityMastery", { level: 7, skill: "probability-mastery" }),
    makeCategory("ratios", "Ratios & Proportions", "Use rates, ratios, and proportional reasoning in context.", "ratiosProportions", { level: 7 })
  ],
  8: [
    makeCategory("numbers", "Rational & Irrational Numbers", "Classify numbers and use exponents.", "integersRational", { level: 8, skill: "rationalIrrational" }),
    makeCategory("algebra", "Linear Equations & Inequalities", "Solve linear equations and inequalities and analyze linear relationships.", "algebra", { level: 8 }),
    makeCategory("functions", "Functions", "Understand input-output rules, tables, and graphs.", "functionsGraphing", { level: 8 }),
    makeCategory("ratios", "Ratios, Rates & Proportions", "Use proportional reasoning, unit rates, and scale relationships in context.", "ratiosProportions", { level: 8 }),
    makeCategory("geometry", "Transformations & Geometry", "Congruence, similarity, rotational symmetry, and the Pythagorean theorem.", "geometry", { level: 8 }),
    makeCategory("data", "Statistics", "Scatter plots, lines of best fit, and probability.", "statisticsProbability", { level: 8 }),
    makeCategory("exponents", "Exponents & Roots", "Work with powers, roots, and scientific notation ideas.", "integersRational", { level: 8, skill: "exponentsRoots" }),
    makeCategory("systems", "Linear Patterns", "Compare patterns in tables, graphs, and equations.", "functionsGraphing", { level: 8.5, skill: "linearPatterns" })
  ],
  9: [
    makeCategory("algebra", "Algebra Foundations", "Laws of exponents, factoring, solving equations, and linear inequalities.", "algebra", { level: 9 }),
    makeCategory("functions", "Linear Functions", "Slope, intercepts, tables, and graphs.", "functionsGraphing", { level: 9 }),
    makeCategory("ratios", "Proportional Reasoning", "Use scale factors, similarity, direct variation, and proportional relationships.", "ratiosProportions", { level: 9 }),
    makeCategory("geometry", "Geometry", "Triangles, similarity, and coordinate geometry.", "geometry", { level: 9 }),
    makeCategory("statistics", "Statistics & Probability", "Analyze distributions and probability models.", "statisticsProbability", { level: 9 }),
    makeCategory("financial", "Financial Math", "Discounts, tax, interest, and budgeting.", "financialMath", { level: 9 }),
    makeCategory("quadratics", "Intro to Quadratics", "Explore quadratic patterns, forms, and solutions.", "algebra", { level: 9.5, skill: "quadraticsIntro" }),
    makeCategory("relations", "Relations & Graphs", "Interpret graphs, relations, and domain-range ideas.", "functionsGraphing", { level: 9, skill: "relationsGraphs" })
  ],
  10: [
    makeCategory("algebra", "Math 10 Algebra", "Quadratics, radicals, polynomial operations, and algebra foundations.", "algebra", { level: 10 }),
    makeCategory("functions", "Math 10 Relations & Functions", "Linear, quadratic, and exponential behaviour.", "functionsGraphing", { level: 10 }),
    makeCategory("trig", "Math 10 Trigonometry", "Use right triangle ratios and angle relationships.", "trigonometry", { level: 10 }),
    makeCategory("statistics", "Math 10 Statistics & Probability", "Variation, event probability, and data reasoning.", "statisticsProbability", { level: 10 }),
    makeCategory("geometry", "Math 10 Measurement & Geometry", "Surface area, volume, and coordinate geometry.", "geometry", { level: 10 }),
    makeCategory("exponents", "Math 10 Powers & Radicals", "Simplify radical and exponent expressions.", "algebra", { level: 10, skill: "powersRadicals" }),
    makeCategory("finance", "Math 10 Financial Applications", "Use percentage models, budgeting, and interest.", "financialMath", { level: 10 })
  ],
  11: [
    makeCategory("functions", "Math 20 Functions", "Polynomial, rational, logarithmic, and exponential ideas.", "functionsGraphing", { level: 11 }),
    makeCategory("algebra", "Math 20 Algebra", "Equation solving, quadratic factoring, and exponent laws.", "algebra", { level: 11 }),
    makeCategory("trig", "Math 20 Trigonometry", "Unit circle, identities, and solving trig equations.", "trigonometry", { level: 11 }),
    makeCategory("statistics", "Math 20 Statistics", "Sampling, distributions, counting principles, and inference ideas.", "statisticsProbability", { level: 11 }),
    makeCategory("precalc", "Math 20 Pre-Calculus", "Rates of change and model analysis.", "functionsGraphing", { level: 11.5, skill: "precalc20" }),
    makeCategory("sequences", "Math 20 Sequences & Series", "Work with arithmetic and geometric sequences.", "algebra", { level: 11, skill: "sequencesSeries" }),
    makeCategory("logarithms", "Math 20 Exponential & Logarithmic Models", "Study growth, decay, and logarithmic behaviour.", "functionsGraphing", { level: 11.2, skill: "expLogModels" })
  ],
  12: [
    makeCategory("calculus", "Math 30 Calculus", "Limits, derivatives, and real-world applications.", "calculus", { level: 12 }),
    makeCategory("advanced-func", "Math 30 Advanced Functions", "Composite, inverse, and transformed functions.", "functionsGraphing", { level: 12 }),
    makeCategory("trig", "Math 30 Trigonometry", "Advanced identities and modelling.", "trigonometry", { level: 12 }),
    makeCategory("statistics", "Math 30 Statistics & Probability", "Expected value, inference, and model-based reasoning.", "statisticsProbability", { level: 12 }),
    makeCategory("financial", "Math 30 Financial Math", "Loans, annuities, and growth models.", "financialMath", { level: 12 }),
    makeCategory("derivatives", "Math 30 Derivatives & Applications", "Use derivative rules and interpret rates of change.", "calculus", { level: 12, skill: "derivativeApplications" }),
    makeCategory("integrated-func", "Math 30 Function Transformations", "Combine advanced functions, graphs, and modelling.", "functionsGraphing", { level: 12.2, skill: "functionTransformations" })
  ]
};

grades.forEach((grade) => {
  curriculum[grade].push(...makeEnglishCategories(grade));
});

const masteryTracks = [];

const state = {
  selectedGrade: 1,
  selectedCategoryId: null,
  selectedPatTab: null,
  selectedProbabilityMode: "mastery",
  selectedLevel: null,
  searchQuery: "",
  currentQuestions: [],
  currentIndex: 0,
  score: 0,
  answered: false,
  lastResults: [],
  questionResults: [],
  currentProfileId: null,
  studyTimerId: null,
  lastStudyTickAt: 0,
  isStartingLevel: false,
  supabaseUserId: null,
  supabaseUserEmail: "",
  supabaseSessionActive: false,
  supabaseHydrating: false,
  supabaseChildRecoveryInFlight: false,
  supabaseChildrenSyncInFlight: false,
  childViewMode: false,
  avatarLibraryOpen: false,
  parentEditorChildId: null,
  parentGoalDraftKey: "",
  parentGoalDraftDirty: false
};

const questionBankCache = new Map();
const levelQuestionCache = new Map();
let topicSearchCatalogCache = null;
const profilesStoreKey = "maths-mastery-profiles-v1";
const profilesStore = loadProfilesStore();
const guestStoreKey = "maths-mastery-guest-v1";
const guestStore = loadGuestStore();
const learnerSessionKey = "maths-mastery-learner-session-v1";
const studyTickMs = 1000;
const LEVEL_COUNT = 5;
const QUESTIONS_PER_LEVEL = 15;
const QUESTIONS_PER_TOPIC = LEVEL_COUNT * QUESTIONS_PER_LEVEL;
const WEAK_TOPIC_THRESHOLD = 70;
const AVATAR_MAX_SIZE = 160;
const AVATAR_JPEG_QUALITY = 0.82;
let supabaseWriteQueue = Promise.resolve();
let lastProfilesStoreError = "";
let profileMessageTimerId = null;

function getSupabaseClient() {
  return window.masterySupabase?.client || null;
}

async function getSupabaseSessionUser() {
  const client = getSupabaseClient();
  if (!client) {
    state.supabaseSessionActive = false;
    return null;
  }

  try {
    const { data, error } = await client.auth.getSession();
    if (error) {
      console.error("Could not read the active Supabase session", error);
      state.supabaseSessionActive = false;
      return null;
    }
    const user = data?.session?.user || null;
    state.supabaseSessionActive = Boolean(user?.id);
    return user;
  } catch (error) {
    console.error("Reading the Supabase session failed", error);
    state.supabaseSessionActive = false;
    return null;
  }
}

function isSupabaseProfileId(profileId) {
  return typeof profileId === "string" && profileId.startsWith("supabase:");
}

function hasSupabasePersistence() {
  const account = getCurrentAccount();
  return Boolean(
    getSupabaseClient() &&
    state.supabaseUserId &&
    (isSupabaseProfileId(state.currentProfileId) || account?.type === "parent" || account?.type === "learner")
  );
}

function queueSupabaseWrite(task) {
  if (!hasSupabasePersistence() || state.supabaseHydrating) {
    return Promise.resolve(null);
  }

  supabaseWriteQueue = supabaseWriteQueue
    .then(() => task(getSupabaseClient(), state.supabaseUserId))
    .catch((error) => {
      console.error("Supabase sync error", error);
    });

  return supabaseWriteQueue;
}

function normalizeSupabaseResults(results) {
  return Array.isArray(results) ? results : [];
}

function normalizeProfileName(value) {
  return String(value || "").trim().toLowerCase();
}

function cloneChildMap(children) {
  const nextChildren = {};
  for (const [childId, child] of Object.entries(children || {})) {
    nextChildren[childId] = {
      ...child,
      progress: child?.progress ? JSON.parse(JSON.stringify(child.progress)) : createProgressBundle().progress,
      scoreHistory: Array.isArray(child?.scoreHistory) ? [...child.scoreHistory] : [],
      studyTime: child?.studyTime ? JSON.parse(JSON.stringify(child.studyTime)) : createStudyTimeBundle()
    };
  }
  return nextChildren;
}

function findLegacyParentChildrenForSupabaseParent(profileId, fallbackName) {
  const normalizedFallbackName = normalizeProfileName(fallbackName);
  const localParents = Object.values(profilesStore.profiles || {}).filter((profile) => {
    if (!profile || profile.id === profileId || profile.type !== "parent" || isSupabaseProfileId(profile.id)) {
      return false;
    }
    return Object.keys(profile.children || {}).length > 0;
  });

  if (!localParents.length) {
    return null;
  }

  const exactNameMatches = localParents.filter((profile) => normalizeProfileName(profile.name) === normalizedFallbackName);
  if (exactNameMatches.length === 1) {
    return cloneChildMap(exactNameMatches[0].children);
  }

  if (exactNameMatches.length > 1) {
    return exactNameMatches.reduce((merged, profile) => ({ ...merged, ...cloneChildMap(profile.children) }), {});
  }

  if (localParents.length === 1) {
    return cloneChildMap(localParents[0].children);
  }

  return null;
}

function mergeChildrenIntoParentAccount(targetAccount, sourceChildren) {
  if (!targetAccount || targetAccount.type !== "parent" || !sourceChildren) {
    return;
  }

  if (!targetAccount.children || typeof targetAccount.children !== "object") {
    targetAccount.children = {};
  }

  for (const child of Object.values(sourceChildren)) {
    if (!child?.name) {
      continue;
    }
    const childId = child.id || buildProfileId(child.name);
    if (!targetAccount.children[childId]) {
      targetAccount.children[childId] = {
        ...child,
        id: childId
      };
    }
  }

  if (!targetAccount.activeChildId || !targetAccount.children[targetAccount.activeChildId]) {
    targetAccount.activeChildId = Object.keys(targetAccount.children)[0] || null;
  }
}

function getSupabaseFetchHelpMessage(error, actionLabel = "save online") {
  const rawMessage = String(error?.message || "").toLowerCase();
  const isFetchFailure = rawMessage.includes("failed to fetch") || rawMessage.includes("networkerror");
  if (!isFetchFailure) {
    return null;
  }

  if (typeof navigator !== "undefined" && navigator.onLine === false) {
    return `Could not ${actionLabel} because this device appears to be offline. Reconnect to the internet and try again.`;
  }

  if (typeof window !== "undefined" && window.location?.protocol === "file:") {
    return `Could not ${actionLabel} from this local file page. Open the deployed site and sign in there, or serve this folder from a local web server, then try again.`;
  }

  return `Could not ${actionLabel} because this browser could not reach Supabase. Check your internet connection, browser privacy settings, or any blocker extension and try again.`;
}

function getUnsyncedParentLearners(account) {
  if (!account || account.type !== "parent") {
    return [];
  }
  return Object.values(account.children || {}).filter((child) => !child?.supabaseChildId);
}

async function syncParentChildrenOnline(account, { silent = false, sessionUser = null } = {}) {
  if (!account || account.type !== "parent") {
    return false;
  }
  if (!isSupabaseProfileId(account.id)) {
    return false;
  }
  if (state.supabaseChildrenSyncInFlight) {
    return false;
  }

  const learners = Object.values(account.children || {});
  if (!learners.length) {
    return false;
  }

  const activeSessionUser = sessionUser || await getSupabaseSessionUser();
  if (!activeSessionUser?.id) {
    if (!silent) {
      showProfileMessage("Your online parent session expired. Sign in again, then sync the learners.", "error");
    }
    return false;
  }

  const localOnlyLearners = getUnsyncedParentLearners(account);
  if (!localOnlyLearners.length) {
    if (!silent) {
      showProfileMessage("All current learners are already saved to your account.", "success");
    }
    return true;
  }

  state.supabaseChildrenSyncInFlight = true;
  try {
    if (elements.syncParentDashboardButton && !silent) {
      elements.syncParentDashboardButton.disabled = true;
      elements.syncParentDashboardButton.textContent = "Syncing...";
    }

    await ensureSupabaseProfileRow(account, activeSessionUser);
    await syncSupabaseChildren(account, activeSessionUser.id);

    profilesStore.profiles[account.id] = account;
    saveProfilesStore();
    renderProfilePanel();
    renderStudyTime();
    renderHeroActivity();
    renderParentDashboard();

    if (!silent) {
      showProfileMessage(
        `${localOnlyLearners.length} learner${localOnlyLearners.length === 1 ? "" : "s"} saved to your parent account.`,
        "success"
      );
    }
    return true;
  } catch (error) {
    console.error("Syncing parent learners to Supabase failed", error);
    if (!silent) {
      showProfileMessage(
        getSupabaseFetchHelpMessage(error, "save learners to your account") || `Could not save learners to your account: ${error?.message || "Unknown error"}`,
        "error"
      );
    }
    return false;
  } finally {
    state.supabaseChildrenSyncInFlight = false;
    if (elements.syncParentDashboardButton) {
      elements.syncParentDashboardButton.disabled = false;
      elements.syncParentDashboardButton.textContent = "Save Learners";
    }
  }
}

async function recoverParentChildrenFromSupabase(account) {
  const client = getSupabaseClient();
  if (!client || !account || account.type !== "parent" || !state.supabaseUserId || state.supabaseChildRecoveryInFlight) {
    return false;
  }

  state.supabaseChildRecoveryInFlight = true;
  try {
    const { data: childRows, error } = await client
      .from("mastery_children")
      .select("id, parent_id, child_name, child_email, child_username, linked_profile_id, avatar_data_url, grade")
      .eq("parent_id", state.supabaseUserId);

    if (error) {
      throw error;
    }

    if (!Array.isArray(childRows) || !childRows.length) {
      return false;
    }

    childRows.forEach((childRow) => {
      const childLocalId = buildProfileId(childRow.child_name);
      const existingChild = account.children[childLocalId];
      const remotePasswordHash = decodeLearnerCredential(childRow.child_username);
      const nextChild = createLearnerRecord({
        id: childLocalId,
        name: childRow.child_name,
        grade: Number(childRow.grade || existingChild?.grade || 1),
        childEmail: childRow.child_email || existingChild?.childEmail || "",
        childUsername: childRow.child_username || existingChild?.childUsername || "",
        passwordHash: remotePasswordHash || existingChild?.passwordHash || "",
        avatarDataUrl: childRow.avatar_data_url || existingChild?.avatarDataUrl || "",
        supabaseChildId: childRow.id,
        linkedProfileId: childRow.linked_profile_id || existingChild?.linkedProfileId || null
      });

      if (existingChild) {
        nextChild.progress = existingChild.progress || nextChild.progress;
        nextChild.scoreHistory = existingChild.scoreHistory || nextChild.scoreHistory;
        nextChild.studyTime = existingChild.studyTime || nextChild.studyTime;
      }

      account.children[childLocalId] = nextChild;
    });

    ensureAccountShape(account);
    profilesStore.profiles[account.id] = account;
    saveProfilesStore();
    renderProfilePanel();
    renderStudyTime();
    renderHeroActivity();
    return true;
  } catch (error) {
    console.error("Recovering parent learners directly from Supabase failed", error);
    return false;
  } finally {
    state.supabaseChildRecoveryInFlight = false;
  }
}

async function handleSyncParentDashboardLearners() {
  const account = getCurrentAccount();
  if (!account || account.type !== "parent") {
    showProfileMessage("Open a parent account first before syncing learners online.", "error");
    return;
  }

  if (!isSupabaseProfileId(account.id)) {
    showProfileMessage("Sign in with your online parent account before syncing learners across browsers.", "error");
    return;
  }
  if (!Object.keys(account.children || {}).length) {
    showProfileMessage("Add at least one learner before syncing.", "error");
    return;
  }
  await syncParentChildrenOnline(account, { silent: false });
}

function createProgressBundle() {
  return {
    progress: {},
    scoreHistory: [],
    studyTime: createEmptyStudyTime()
  };
}

function addRemoteRowToBundle(bundle, row) {
  const grade = Number(row.grade);
  const categoryId = row.category_id;
  const level = Number(row.level);
  const completedAt = row.completed_at || new Date().toISOString();
  const score = Number(row.score || 0);
  const percentage = Number(row.percentage || 0);

  if (!bundle.progress[grade]) {
    bundle.progress[grade] = {};
  }
  if (!bundle.progress[grade][categoryId]) {
    bundle.progress[grade][categoryId] = {};
  }

  bundle.progress[grade][categoryId][level] = {
    score,
    completedAt,
    results: normalizeSupabaseResults(row.results),
    recordId: row.id
  };

  bundle.scoreHistory.push({
    grade,
    categoryId,
    categoryTitle: row.category_title,
    level,
    score,
    percentage,
    completedAt
  });

  ensureStudyTimeShape(bundle.studyTime);
  const studySeconds = Number(row.study_time_seconds || 0);
  const subjectFocus = getCategorySubject(grade, categoryId);
  bundle.studyTime.byCourse[categoryId] = (bundle.studyTime.byCourse[categoryId] || 0) + studySeconds;
  const dayKey = String(completedAt).slice(0, 10);
  bundle.studyTime.byDay[dayKey] = (bundle.studyTime.byDay[dayKey] || 0) + studySeconds;
  bundle.studyTime.bySubject[subjectFocus] = (bundle.studyTime.bySubject[subjectFocus] || 0) + studySeconds;
  if (!bundle.studyTime.byDaySubject[dayKey] || typeof bundle.studyTime.byDaySubject[dayKey] !== "object") {
    bundle.studyTime.byDaySubject[dayKey] = {};
  }
  bundle.studyTime.byDaySubject[dayKey][subjectFocus] = (bundle.studyTime.byDaySubject[dayKey][subjectFocus] || 0) + studySeconds;
}

function buildBundleFromProgressRows(rows) {
  const bundle = createProgressBundle();
  const orderedRows = [...rows].sort((left, right) => {
    const leftTime = new Date(left.completed_at || 0).getTime();
    const rightTime = new Date(right.completed_at || 0).getTime();
    return rightTime - leftTime;
  });

  orderedRows.forEach((row) => addRemoteRowToBundle(bundle, row));
  bundle.scoreHistory = bundle.scoreHistory.slice(0, 30);
  return bundle;
}

function resolveCategoryTitle(grade, categoryId, fallbackTitle = "") {
  const category = getCategoryById(categoryId, grade);
  return category?.title || fallbackTitle || categoryId;
}

async function ensureSupabaseProfileRow(account, user) {
  const client = getSupabaseClient();
  if (!client || !user?.id || !account) {
    return;
  }

  const profilePayload = {
    id: user.id,
    email: user.email || state.supabaseUserEmail || null,
    display_name: account.name,
    account_type: account.type === "parent" ? "parent" : "learner",
    grade: account.type === "learner" ? Number(account.grade || state.selectedGrade || 1) : null,
    updated_at: new Date().toISOString()
  };

  const { error } = await client.from("mastery_profiles").upsert(profilePayload, { onConflict: "id" });
  if (error) {
    throw error;
  }
}

async function updateLinkedChildEmailForLearner(ownerId, nextEmail) {
  const client = getSupabaseClient();
  if (!client || !ownerId || !nextEmail) {
    return;
  }

  const { error } = await client
    .from("mastery_children")
    .update({ child_email: nextEmail })
    .eq("linked_profile_id", ownerId);

  if (error) {
    throw error;
  }
}

async function syncSupabaseChildren(account, ownerId) {
  const client = getSupabaseClient();
  if (!client || !ownerId || account?.type !== "parent") {
    return [];
  }

  const { data: existingRows, error } = await client
    .from("mastery_children")
    .select("id, child_name, child_email, child_username, linked_profile_id, avatar_data_url, grade")
    .eq("parent_id", ownerId);

  if (error) {
    throw error;
  }

  const existingById = new Map((existingRows || []).map((row) => [row.id, row]));
  const existingByName = new Map((existingRows || []).map((row) => [row.child_name.trim().toLowerCase(), row]));
  const activeChildIds = new Set();

  for (const child of Object.values(account.children || {})) {
    const normalizedName = child.name.trim().toLowerCase();
    const payload = {
      child_name: child.name,
      child_email: child.childEmail || null,
      child_username: child.childUsername || null,
      linked_profile_id: child.linkedProfileId || null,
      avatar_data_url: child.avatarDataUrl || null,
      grade: Number(child.grade)
    };
    const existing = child.supabaseChildId
      ? existingById.get(child.supabaseChildId) || existingByName.get(normalizedName)
      : existingByName.get(normalizedName);

    if (existing) {
      child.supabaseChildId = existing.id;
      activeChildIds.add(existing.id);
      if (
        existing.child_name !== child.name ||
        existing.child_email !== (child.childEmail || null) ||
        existing.child_username !== (child.childUsername || null) ||
        existing.linked_profile_id !== (child.linkedProfileId || null) ||
        existing.avatar_data_url !== (child.avatarDataUrl || null) ||
        Number(existing.grade) !== Number(child.grade)
      ) {
        try {
          const { data: syncedChildId, error: updateError } = await client
            .rpc("upsert_mastery_child", {
              p_child_id: existing.id,
              p_child_name: payload.child_name,
              p_grade: payload.grade,
              p_child_email: payload.child_email,
              p_child_username: payload.child_username,
              p_linked_profile_id: payload.linked_profile_id,
              p_avatar_data_url: payload.avatar_data_url
            });

          if (updateError) {
            throw updateError;
          }
          child.supabaseChildId = syncedChildId || existing.id;
        } catch (rpcError) {
          console.warn("RPC child update failed, falling back to direct update", rpcError);
          const { data: updatedRow, error: directUpdateError } = await client
            .from("mastery_children")
            .update({ ...payload, parent_id: ownerId })
            .eq("id", existing.id)
            .eq("parent_id", ownerId)
            .select("id")
            .single();

          if (directUpdateError) {
            throw directUpdateError;
          }
          child.supabaseChildId = updatedRow?.id || existing.id;
        }
      }
      continue;
    }

    let syncedInsertId = null;
    try {
      const { data: insertedChildId, error: insertError } = await client
        .rpc("upsert_mastery_child", {
          p_child_name: payload.child_name,
          p_grade: payload.grade,
          p_child_email: payload.child_email,
          p_child_username: payload.child_username,
          p_linked_profile_id: payload.linked_profile_id,
          p_avatar_data_url: payload.avatar_data_url
        });

      if (insertError) {
        throw insertError;
      }

      child.supabaseChildId = insertedChildId;
      syncedInsertId = insertedChildId;
    } catch (rpcError) {
      console.warn("RPC child insert failed, falling back to direct insert", rpcError);
      const { data: insertedRow, error: directInsertError } = await client
        .from("mastery_children")
        .insert({ ...payload, parent_id: ownerId })
        .select("id")
        .single();

      if (directInsertError) {
        throw directInsertError;
      }

      child.supabaseChildId = insertedRow?.id || null;
      syncedInsertId = insertedRow?.id || null;
    }
    if (syncedInsertId) {
      activeChildIds.add(syncedInsertId);
    }
  }

  const staleRows = (existingRows || []).filter((row) => !activeChildIds.has(row.id));
  if (staleRows.length) {
    const { error: deleteError } = await client
      .from("mastery_children")
      .delete()
      .in("id", staleRows.map((row) => row.id));

    if (deleteError) {
      throw deleteError;
    }
  }

  return existingRows || [];
}

async function upsertSingleSupabaseChild(ownerId, child) {
  const client = getSupabaseClient();
  if (!client || !ownerId || !child) {
    return null;
  }

  const payload = {
    parent_id: ownerId,
    child_name: child.name,
    child_email: child.childEmail || null,
    child_username: child.childUsername || null,
    linked_profile_id: child.linkedProfileId || null,
    avatar_data_url: child.avatarDataUrl || null,
    grade: Number(child.grade)
  };

  let childId = null;
  const rpcResponse = await client.rpc("upsert_mastery_child", {
    p_child_id: child.supabaseChildId || null,
    p_child_name: payload.child_name,
    p_grade: payload.grade,
    p_child_email: payload.child_email,
    p_child_username: payload.child_username,
    p_linked_profile_id: payload.linked_profile_id,
    p_avatar_data_url: payload.avatar_data_url
  });

  if (rpcResponse.error) {
    console.warn("RPC child upsert failed, falling back to direct table write", rpcResponse.error);
    if (child.supabaseChildId) {
      const updateResponse = await client
        .from("mastery_children")
        .update(payload)
        .eq("id", child.supabaseChildId)
        .eq("parent_id", ownerId)
        .select("id")
        .single();

      if (updateResponse.error) {
        throw updateResponse.error;
      }
      childId = updateResponse.data?.id || child.supabaseChildId;
    } else {
      const insertResponse = await client
        .from("mastery_children")
        .insert(payload)
        .select("id")
        .single();

      if (insertResponse.error) {
        throw insertResponse.error;
      }
      childId = insertResponse.data?.id || null;
    }
  } else {
    childId = rpcResponse.data || null;
  }

  child.supabaseChildId = childId;
  return child.supabaseChildId;
}

function applyChildFilter(query, childId) {
  return childId ? query.eq("child_id", childId) : query.is("child_id", null);
}

async function upsertSupabaseProgressEntry(ownerId, childId, entry) {
  const client = getSupabaseClient();
  if (!client || !ownerId || !entry) {
    return null;
  }

  const payload = {
    owner_id: ownerId,
    child_id: childId || null,
    grade: Number(entry.grade),
    category_id: entry.categoryId,
    category_title: entry.categoryTitle,
    level: Number(entry.level),
    score: Number(entry.attempt.score || 0),
    percentage: Number(entry.percentage || 0),
    results: normalizeSupabaseResults(entry.attempt.results),
    study_time_seconds: Number(entry.studyTimeSeconds || 0),
    completed_at: entry.attempt.completedAt || new Date().toISOString()
  };

  if (entry.attempt.recordId) {
    const { error: updateError } = await client
      .from("mastery_progress")
      .update(payload)
      .eq("id", entry.attempt.recordId);

    if (updateError) {
      throw updateError;
    }
    return entry.attempt.recordId;
  }

  let existingQuery = client
    .from("mastery_progress")
    .select("id")
    .eq("owner_id", ownerId)
    .eq("grade", payload.grade)
    .eq("category_id", payload.category_id)
    .eq("level", payload.level)
    .limit(1);

  existingQuery = applyChildFilter(existingQuery, childId);
  const { data: existingRows, error: lookupError } = await existingQuery;
  if (lookupError) {
    throw lookupError;
  }

  const existingId = existingRows?.[0]?.id || null;
  if (existingId) {
    const { error: updateError } = await client
      .from("mastery_progress")
      .update(payload)
      .eq("id", existingId);

    if (updateError) {
      throw updateError;
    }

    entry.attempt.recordId = existingId;
    return existingId;
  }

  const { data: insertedRow, error: insertError } = await client
    .from("mastery_progress")
    .insert(payload)
    .select("id")
    .single();

  if (insertError) {
    throw insertError;
  }

  entry.attempt.recordId = insertedRow.id;
  return insertedRow.id;
}

function getStudySecondsForCategory(profile, categoryId) {
  const studyTime = profile?.studyTime;
  if (!studyTime || typeof studyTime !== "object") {
    return 0;
  }

  ensureStudyTimeShape(studyTime);
  return Number(studyTime.byCourse?.[categoryId] || 0);
}

function getSupabaseProgressOwnerId(account, profile, fallbackOwnerId) {
  if (account?.type === "parent" && profile?.linkedProfileId) {
    return profile.linkedProfileId;
  }
  return fallbackOwnerId;
}

async function syncLearnerProgressEntries(profile, ownerId, childId = null) {
  for (const [gradeKey, gradeProgress] of Object.entries(profile.progress || {})) {
    for (const [categoryId, levelEntries] of Object.entries(gradeProgress || {})) {
      for (const [levelKey, attempt] of Object.entries(levelEntries || {})) {
        await upsertSupabaseProgressEntry(ownerId, childId, {
          grade: Number(gradeKey),
          categoryId,
          categoryTitle: resolveCategoryTitle(Number(gradeKey), categoryId, profile.scoreHistory.find((entry) => entry.grade === Number(gradeKey) && entry.categoryId === categoryId)?.categoryTitle || ""),
          level: Number(levelKey),
          attempt,
          percentage: Math.round((Number(attempt.score || 0) / QUESTIONS_PER_LEVEL) * 100),
          studyTimeSeconds: getStudySecondsForCategory(profile, categoryId)
        });
      }
    }
  }
}

async function syncSupabaseAccountSnapshot(account, user) {
  if (!account || !user?.id) {
    return;
  }

  await ensureSupabaseProfileRow(account, user);
  if (account.type === "parent") {
    await syncSupabaseChildren(account, user.id);
    for (const child of Object.values(account.children || {})) {
      await syncLearnerProgressEntries(child, child.linkedProfileId || user.id, child.supabaseChildId || null);
    }
    return;
  }

  await syncLearnerProgressEntries(account, user.id, null);
}

function createParentAccountFromRemote(profileId, profileRow, childrenRows, progressRows, fallbackAccount) {
  const account = {
    id: profileId,
    type: "parent",
    name: profileRow?.display_name || fallbackAccount?.name || "Parent",
    passwordHash: "",
    children: {},
    activeChildId: fallbackAccount?.activeChildId || null
  };

  const progressByChildId = new Map();
  for (const row of progressRows) {
    const childId = row.child_id || row.owner_id;
    if (!childId) {
      continue;
    }
    if (!progressByChildId.has(childId)) {
      progressByChildId.set(childId, []);
    }
    progressByChildId.get(childId).push(row);
  }

  const remoteNames = new Set();
  for (const childRow of childrenRows) {
    const childLocalId = buildProfileId(childRow.child_name);
    remoteNames.add(childRow.child_name.trim().toLowerCase());
    const fallbackChild = fallbackAccount?.children?.[childLocalId];
    const remotePasswordHash = decodeLearnerCredential(childRow.child_username);
    const child = createLearnerRecord({
      id: childLocalId,
      name: childRow.child_name,
      grade: Number(childRow.grade || fallbackChild?.grade || 1),
      childEmail: childRow.child_email || fallbackChild?.childEmail || "",
      childUsername: childRow.child_username || fallbackChild?.childUsername || "",
      avatarDataUrl: childRow.avatar_data_url || fallbackChild?.avatarDataUrl || "",
      supabaseChildId: childRow.id,
      linkedProfileId: childRow.linked_profile_id || fallbackChild?.linkedProfileId || null,
      passwordHash: remotePasswordHash || fallbackChild?.passwordHash || ""
    });
    const bundle = buildBundleFromProgressRows(
      progressByChildId.get(childRow.id)
      || progressByChildId.get(childRow.linked_profile_id)
      || []
    );
    child.progress = bundle.progress;
    child.scoreHistory = bundle.scoreHistory;
    child.studyTime = bundle.studyTime;
    account.children[child.id] = child;
  }

  // Keep any locally-added child that hasn't made it to Supabase yet (e.g. the
  // background sync hadn't finished before this page reloaded). Without this,
  // a remote snapshot that's missing a just-added child would silently erase it.
  for (const [childId, fallbackChild] of Object.entries(fallbackAccount?.children || {})) {
    const normalizedName = (fallbackChild?.name || "").trim().toLowerCase();
    if (!remoteNames.has(normalizedName) && !account.children[childId]) {
      account.children[childId] = fallbackChild;
    }
  }

  const childIds = Object.keys(account.children);
  if (!account.activeChildId || !account.children[account.activeChildId]) {
    account.activeChildId = childIds[0] || null;
  }

  return account;
}

function createLearnerAccountFromRemote(profileId, profileRow, progressRows, fallbackAccount) {
  const learner = createLearnerRecord({
    id: profileId,
    name: profileRow?.display_name || fallbackAccount?.name || "Learner",
    grade: Number(profileRow?.grade || fallbackAccount?.grade || 1),
    passwordHash: fallbackAccount?.passwordHash || ""
  });
  const bundle = buildBundleFromProgressRows(progressRows);
  learner.progress = bundle.progress;
  learner.scoreHistory = bundle.scoreHistory;
  learner.studyTime = bundle.studyTime;
  return learner;
}

async function loadSupabaseAccountData(session) {
  const client = getSupabaseClient();
  const user = session?.user;
  if (!client || !user?.id) {
    return;
  }

  state.supabaseHydrating = true;
  state.supabaseUserId = user.id;
  state.supabaseUserEmail = user.email || "";
  state.supabaseSessionActive = true;

  const profileId = buildSupabaseProfileId(user.id);
  const metadata = user.user_metadata || {};
  const role = metadata.account_type === "learner" ? "learner" : "parent";

  const fallbackName = metadata.user_name || user.email || "Learner";
  const fallbackGrade = Number(metadata.grade) || 1;
  let localAccount = profilesStore.profiles[profileId];

  if (!localAccount) {
    localAccount = role === "parent"
      ? {
          id: profileId,
          type: "parent",
          name: fallbackName,
          passwordHash: "",
          children: {},
          activeChildId: null
        }
      : createLearnerRecord({
          id: profileId,
          name: fallbackName,
          grade: fallbackGrade,
          passwordHash: ""
        });
  }

  localAccount.name = fallbackName;
  localAccount.type = role;
  if (role === "parent" && (!localAccount.children || !Object.keys(localAccount.children).length)) {
    const recoveredChildren = findLegacyParentChildrenForSupabaseParent(profileId, fallbackName);
    if (recoveredChildren && Object.keys(recoveredChildren).length) {
      localAccount.children = recoveredChildren;
      localAccount.activeChildId = localAccount.activeChildId || Object.keys(recoveredChildren)[0] || null;
    }
  }
  if (role === "learner") {
    localAccount.grade = Number(localAccount.grade || fallbackGrade || 1);
  }

  ensureAccountShape(localAccount);
  // Adopt the signed-in account immediately so the app header/profile stops showing Guest
  // while the fuller Supabase sync is still loading in the background.
  profilesStore.profiles[profileId] = localAccount;
  profilesStore.currentProfileId = profileId;
  saveProfilesStore();
  state.currentProfileId = profileId;
  applyCurrentProfile();
  restoreLearnerViewSession(localAccount);
  renderGradeButtons();
  renderCategories();
  restoreResumeStateIfAvailable();
  if (role === "parent" && Object.keys(localAccount.children || {}).length) {
    setParentDashboardVisible(true);
  }

  try {
    await ensureSupabaseProfileRow(localAccount, user);
  } catch (error) {
    // A hiccup saving the profile row (flaky network, ad blocker, etc.) shouldn't nuke the whole
    // sign-in â€” the account is already showing locally with the right role at this point. Log it
    // and keep going instead of aborting the rest of the hydration below.
    console.error("Saving the profile row to Supabase failed, continuing anyway", error);
  }

  if (role === "learner" && user.email) {
    const { data: pendingLinks, error: pendingLinkError } = await client
      .from("mastery_children")
      .select("id, parent_id, child_name, child_email, linked_profile_id, avatar_data_url, grade")
      .eq("child_email", user.email);

    if (pendingLinkError) {
      throw pendingLinkError;
    }

    for (const pendingLink of pendingLinks || []) {
      if (pendingLink.linked_profile_id !== user.id) {
        const { error: claimError } = await client
          .from("mastery_children")
          .update({ linked_profile_id: user.id })
          .eq("id", pendingLink.id);

        if (claimError) {
          throw claimError;
        }
      }

      localAccount.childEmail = pendingLink.child_email || user.email;
      localAccount.avatarDataUrl = pendingLink.avatar_data_url || localAccount.avatarDataUrl || "";
      localAccount.grade = Number(pendingLink.grade || localAccount.grade || fallbackGrade || 1);

      const { error: profileParentUpdateError } = await client
        .from("mastery_profiles")
        .update({ parent_id: pendingLink.parent_id, grade: Number(pendingLink.grade || localAccount.grade || 1) })
        .eq("id", user.id);

      if (profileParentUpdateError) {
        throw profileParentUpdateError;
      }
    }
  }

  const [profileResponse, childrenResponse, progressResponse] = await Promise.all([
    client.from("mastery_profiles").select("*").eq("id", user.id).maybeSingle(),
    role === "parent"
      ? client.from("mastery_children").select("*").eq("parent_id", user.id)
      : Promise.resolve({ data: [], error: null }),
    role === "parent"
      ? Promise.resolve({ data: [], error: null })
      : client.from("mastery_progress").select("*").eq("owner_id", user.id)
  ]);

  if (profileResponse.error) {
    throw profileResponse.error;
  }
  if (childrenResponse.error) {
    throw childrenResponse.error;
  }
  if (progressResponse.error) {
    throw progressResponse.error;
  }

  const profileRow = profileResponse.data;
  const childrenRows = childrenResponse.data || [];
  let progressRows = progressResponse.data || [];
  if (role === "parent") {
    const linkedIds = childrenRows.map((row) => row.linked_profile_id).filter(Boolean);
    const ownerIds = [user.id, ...linkedIds];
    const { data: parentProgressRows, error: parentProgressError } = await client
      .from("mastery_progress")
      .select("*")
      .in("owner_id", ownerIds);

    if (parentProgressError) {
      throw parentProgressError;
    }
    progressRows = parentProgressRows || [];
  }
  const hasRemoteLearningData = childrenRows.length > 0 || progressRows.length > 0;

  const account = hasRemoteLearningData
    ? role === "parent"
      ? createParentAccountFromRemote(profileId, profileRow, childrenRows, progressRows, localAccount)
      : createLearnerAccountFromRemote(profileId, profileRow, progressRows, localAccount)
    : localAccount;

  if (role === "parent") {
    const recoveredChildren = findLegacyParentChildrenForSupabaseParent(profileId, fallbackName);
    if (recoveredChildren && Object.keys(recoveredChildren).length) {
      mergeChildrenIntoParentAccount(account, recoveredChildren);
    }
  }

  ensureAccountShape(account);
  profilesStore.profiles[profileId] = account;
  profilesStore.currentProfileId = profileId;
  saveProfilesStore();

  state.currentProfileId = profileId;
  applyCurrentProfile();
  restoreLearnerViewSession(account);
  renderGradeButtons();
  renderCategories();
  restoreResumeStateIfAvailable();

  if (!hasRemoteLearningData) {
    await syncSupabaseAccountSnapshot(account, user);
  } else if (role === "parent") {
    // Hydration is still in progress here, so queued writes would be skipped.
    // Push recovered local learners immediately so they appear in Supabase
    // across devices after the first parent refresh.
    try {
      await syncParentChildrenOnline(account, { silent: true, sessionUser: user });
    } catch (error) {
      console.error("Syncing recovered parent learners during hydration failed", error);
    }
  }

  if (role === "parent" && Object.keys(account.children || {}).length) {
    setParentDashboardVisible(true);
  }

  state.supabaseHydrating = false;
}

async function deleteSupabaseProgressForCategory(ownerId, childId, grade, categoryId) {
  const client = getSupabaseClient();
  if (!client || !ownerId) {
    return;
  }

  let query = client
    .from("mastery_progress")
    .delete()
    .eq("owner_id", ownerId)
    .eq("grade", Number(grade))
    .eq("category_id", categoryId);

  query = applyChildFilter(query, childId);
  const { error } = await query;
  if (error) {
    throw error;
  }
}

const elements = {
  profileNameLabel: document.getElementById("profile-name-label"),
  profileTypeLabel: document.getElementById("profile-type-label"),
  profileChildLabel: document.getElementById("profile-child-label"),
  profileRoleInput: document.getElementById("profile-role"),
  profileGradeLabel: document.getElementById("profile-grade-label"),
  profileEmailLabel: document.getElementById("profile-email-label"),
  profileNameInput: document.getElementById("profile-name"),
  profileEmailGroup: document.getElementById("profile-email-group"),
  profileEmailInput: document.getElementById("profile-email"),
  profileGradeGroup: document.getElementById("profile-grade-group"),
  profileGradeInput: document.getElementById("profile-grade"),
  profilePasswordGroup: document.getElementById("profile-password-group"),
  profilePasswordInput: document.getElementById("profile-password"),
  profileFormNote: document.getElementById("profile-form-note"),
  saveProfileButton: document.getElementById("save-profile-button"),
  createProfileButton: document.getElementById("create-profile-button"),
  loginProfileButton: document.getElementById("login-profile-button"),
  logoutProfileButton: document.getElementById("logout-profile-button"),
  profileMessage: document.getElementById("profile-message"),
  globalProfileMessage: document.getElementById("global-profile-message"),
  parentPanel: document.getElementById("parent-panel"),
  parentChildSelect: document.getElementById("parent-child-select"),
  switchChildButton: document.getElementById("switch-child-button"),
  headerChildSelectLabel: document.getElementById("header-child-select-label"),
  headerChildSelect: document.getElementById("header-child-select"),
  headerChildSwitchButton: document.getElementById("header-child-switch-button"),
  childNameInput: document.getElementById("child-name"),
  childGradeInput: document.getElementById("child-grade"),
  childEmailInput: document.getElementById("child-email"),
  childUsernameInput: document.getElementById("child-username"),
  childPasswordInput: document.getElementById("child-password"),
  childUsernameGroup: document.getElementById("child-username-group"),
  childUsernameNote: document.getElementById("child-username-note"),
  childPhotoInput: document.getElementById("child-photo"),
  childPhotoPreview: document.getElementById("child-photo-preview"),
  avatarSection: document.getElementById("avatar-section"),
  currentAvatarPreview: document.getElementById("current-avatar-preview"),
  currentAvatarPlaceholder: document.getElementById("current-avatar-placeholder"),
  currentAvatarName: document.getElementById("current-avatar-name"),
  toggleAvatarLibraryButton: document.getElementById("toggle-avatar-library-button"),
  currentAvatarUpload: document.getElementById("current-avatar-upload"),
  clearAvatarButton: document.getElementById("clear-avatar-button"),
  avatarLibraryPanel: document.getElementById("avatar-library-panel"),
  avatarLibraryEmpty: document.getElementById("avatar-library-empty"),
  avatarLibraryGrid: document.getElementById("avatar-library-grid"),
  addChildButton: document.getElementById("add-child-button"),
  saveChildButton: document.getElementById("save-child-button"),
  deleteChildButton: document.getElementById("delete-child-button"),
  parentKidsDashboard: document.getElementById("parent-kids-dashboard"),
  parentDashboardSection: document.getElementById("parent-dashboard-section"),
  parentDashboardSyncSummary: document.getElementById("parent-dashboard-sync-summary"),
  syncParentDashboardButton: document.getElementById("sync-parent-dashboard-button"),
  toggleParentDashboardButton: document.getElementById("toggle-parent-dashboard-button"),
  parentDashboardContent: document.getElementById("parent-dashboard-content"),
  parentDashboardEmpty: document.getElementById("parent-dashboard-empty"),
  parentDashboardBody: document.getElementById("parent-dashboard-body"),
  parentDashboardLearnerGrid: document.getElementById("parent-dashboard-learner-grid"),
  parentDashboardName: document.getElementById("parent-dashboard-name"),
  parentDashboardAvatar: document.getElementById("parent-dashboard-avatar"),
  parentDashboardTotalTime: document.getElementById("parent-dashboard-total-time"),
  parentDashboardWeekTime: document.getElementById("parent-dashboard-week-time"),
  parentDashboardLevels: document.getElementById("parent-dashboard-levels"),
  parentDashboardAverage: document.getElementById("parent-dashboard-average"),
  parentDashboardStreak: document.getElementById("parent-dashboard-streak"),
  parentDashboardWeekAverage: document.getElementById("parent-dashboard-week-average"),
  parentDashboardChart: document.getElementById("parent-dashboard-chart"),
  parentDashboardAnalysis: document.getElementById("parent-dashboard-analysis"),
  parentDashboardWeakAreas: document.getElementById("parent-dashboard-weak-areas"),
  parentGoalSubjectInput: document.getElementById("parent-goal-subject"),
  parentGoalDailyMinutesInput: document.getElementById("parent-goal-daily-minutes"),
  parentGoalDailyLevelsInput: document.getElementById("parent-goal-daily-levels"),
  parentGoalsApplyAllInput: document.getElementById("parent-goals-apply-all"),
  parentGoalsSaveButton: document.getElementById("parent-goals-save-button"),
  parentGoalEditorName: document.getElementById("parent-goal-editor-name"),
  parentGoalEditorCurrent: document.getElementById("parent-goal-editor-current"),
  parentGoalMathStatus: document.getElementById("parent-goal-math-status"),
  parentGoalMathMeta: document.getElementById("parent-goal-math-meta"),
  parentGoalEnglishStatus: document.getElementById("parent-goal-english-status"),
  parentGoalEnglishMeta: document.getElementById("parent-goal-english-meta"),
  parentGoalSubjectChart: document.getElementById("parent-goal-subject-chart"),
  parentGoalMathMinutesLabel: document.getElementById("parent-goal-math-minutes-label"),
  parentGoalMathMinutesStatus: document.getElementById("parent-goal-math-minutes-status"),
  parentGoalMathMinutesBar: document.getElementById("parent-goal-math-minutes-bar"),
  parentGoalMathLevelsLabel: document.getElementById("parent-goal-math-levels-label"),
  parentGoalMathLevelsStatus: document.getElementById("parent-goal-math-levels-status"),
  parentGoalMathLevelsBar: document.getElementById("parent-goal-math-levels-bar"),
  parentGoalEnglishMinutesLabel: document.getElementById("parent-goal-english-minutes-label"),
  parentGoalEnglishMinutesStatus: document.getElementById("parent-goal-english-minutes-status"),
  parentGoalEnglishMinutesBar: document.getElementById("parent-goal-english-minutes-bar"),
  parentGoalEnglishLevelsLabel: document.getElementById("parent-goal-english-levels-label"),
  parentGoalEnglishLevelsStatus: document.getElementById("parent-goal-english-levels-status"),
  parentGoalEnglishLevelsBar: document.getElementById("parent-goal-english-levels-bar"),
  accountToolsSection: document.getElementById("account-tools-section"),
  openAccountToolsButton: document.getElementById("open-account-tools-button"),
  backToParentButton: document.getElementById("back-to-parent-button"),
  authAccountName: document.getElementById("auth-account-name"),
  authAccountMeta: document.getElementById("auth-account-meta"),
  headerAccountAvatar: document.getElementById("header-account-avatar"),
  headerAccountAvatarPlaceholder: document.getElementById("header-account-avatar-placeholder"),
  headerAvatarUploadLabel: document.getElementById("header-avatar-upload-label"),
  headerAvatarUploadInput: document.getElementById("header-avatar-upload"),
  openLoginLink: document.getElementById("open-login-link"),
  logoutAuthButton: document.getElementById("logout-auth-button"),
  toggleHeroCopyButton: document.getElementById("toggle-hero-copy-button"),
  heroCopy: document.querySelector(".hero-copy"),
  heroCopyContent: document.getElementById("hero-copy-content"),
  openHeroPanelButton: document.getElementById("open-hero-panel-button"),
  heroPanel: document.getElementById("hero-panel"),
  heroPanelOverlay: document.getElementById("hero-panel-overlay"),
  toggleHeroPanelButton: document.getElementById("toggle-hero-panel-button"),
  heroPanelContent: document.getElementById("hero-panel-content"),
  learnerGoalProgressWrap: document.getElementById("learner-goal-progress-wrap"),
  learnerGoalProgress: document.getElementById("learner-goal-progress"),
  learnerSubjectProgressWrap: document.getElementById("learner-subject-progress-wrap"),
  learnerSubjectProgressChart: document.getElementById("learner-subject-progress-chart"),
  learnerCourseAnalysisWrap: document.getElementById("learner-course-analysis-wrap"),
  learnerCourseAnalysis: document.getElementById("learner-course-analysis"),
  toggleProfilePanelButton: document.getElementById("toggle-profile-panel-button"),
  profilePanelContent: document.getElementById("profile-panel-content"),
  toggleGradePanelButton: document.getElementById("toggle-grade-panel-button"),
  gradePanelContent: document.getElementById("grade-panel-content"),
  gradePanelSection: document.getElementById("grade-panel-section"),
  gradeButtons: document.getElementById("grade-buttons"),
  mathCategorySelect: document.getElementById("math-category-select"),
  englishCategorySelect: document.getElementById("english-category-select"),
  topicSearchInput: document.getElementById("topic-search-input"),
  topicSearchButton: document.getElementById("topic-search-button"),
  clearSearchButton: document.getElementById("clear-search-button"),
  topicSearchResults: document.getElementById("topic-search-results"),
  toggleSearchPanelButton: document.getElementById("toggle-search-panel-button"),
  topicSearchPanelContent: document.getElementById("topic-search-panel-content"),
  categoryCurrentCard: document.getElementById("category-current-card"),
  topicsEmptyState: document.getElementById("topics-empty-state"),
  patTabSection: document.getElementById("pat-tab-section"),
  patTabTitle: document.getElementById("pat-tab-title"),
  patTabDescription: document.getElementById("pat-tab-description"),
  patTabBar: document.getElementById("pat-tab-bar"),
  probabilityModeSection: document.getElementById("probability-mode-section"),
  probabilityModeTitle: document.getElementById("probability-mode-title"),
  probabilityModeDescription: document.getElementById("probability-mode-description"),
  probabilityModeBar: document.getElementById("probability-mode-bar"),
  probabilityExampleSection: document.getElementById("probability-example-section"),
  probabilityExampleTitle: document.getElementById("probability-example-title"),
  probabilityExampleDescription: document.getElementById("probability-example-description"),
  probabilityExampleContent: document.getElementById("probability-example-content"),
  levelGrid: document.getElementById("level-grid"),
  levelSection: document.getElementById("level-section"),
  resetTopicProgressButton: document.getElementById("reset-topic-progress-button"),
  quizSection: document.getElementById("quiz-section"),
  resultsSection: document.getElementById("results-section"),
  selectedGradeLabel: document.getElementById("selected-grade-label"),
  topicsSection: document.getElementById("topics-section"),
  saveStatusLabel: document.getElementById("save-status-label"),
  selectedCategoryLabel: document.getElementById("selected-category-label"),
  completedLevelsLabel: document.getElementById("completed-levels-label"),
  courseTimeLabel: document.getElementById("course-time-label"),
  dailyTimeLabel: document.getElementById("daily-time-label"),
  scoreHistoryEmpty: document.getElementById("score-history-empty"),
  scoreHistoryList: document.getElementById("score-history-list"),
  heroTodayTime: document.getElementById("hero-today-time"),
  heroWeekAchievement: document.getElementById("hero-week-achievement"),
  heroActivityChart: document.getElementById("hero-activity-chart"),
  quizMeta: document.getElementById("quiz-meta"),
  questionTitle: document.getElementById("question-title"),
  questionInstruction: document.getElementById("question-instruction"),
  questionText: document.getElementById("question-text"),
  questionDiagram: document.getElementById("question-diagram"),
  hintButton: document.getElementById("hint-button"),
  hintBox: document.getElementById("hint-box"),
  optionsList: document.getElementById("options-list"),
  writingResponse: document.getElementById("writing-response"),
  writingAnswer: document.getElementById("writing-answer"),
  submitWritingButton: document.getElementById("submit-writing-button"),
  feedbackBox: document.getElementById("feedback-box"),
  previousButton: document.getElementById("previous-button"),
  nextButton: document.getElementById("next-button"),
  progressBar: document.getElementById("progress-bar"),
  liveScore: document.getElementById("live-score"),
  resultsSummary: document.getElementById("results-summary"),
  resultsDashboard: document.getElementById("results-dashboard"),
  resultsMetrics: document.getElementById("results-metrics"),
  resultsChart: document.getElementById("results-chart"),
  resultsBreakdown: document.getElementById("results-breakdown"),
  retryLevelButton: document.getElementById("retry-level-button"),
  nextLevelButton: document.getElementById("next-level-button"),
  reviewSection: document.getElementById("review-section"),
  reviewLevelSelect: document.getElementById("review-level-select"),
  openReviewButton: document.getElementById("open-review-button"),
  reviewEmpty: document.getElementById("review-empty"),
  reviewDetails: document.getElementById("review-details"),
  reviewSummary: document.getElementById("review-summary"),
  reviewBreakdown: document.getElementById("review-breakdown"),
  parentPasswordModal: document.getElementById("parent-password-modal"),
  parentPasswordModalOverlay: document.getElementById("parent-password-modal-overlay"),
  parentPasswordModalTitle: document.getElementById("parent-password-modal-title"),
  parentPasswordModalMessage: document.getElementById("parent-password-modal-message"),
  parentPasswordModalInput: document.getElementById("parent-password-modal-input"),
  parentPasswordModalError: document.getElementById("parent-password-modal-error"),
  parentPasswordModalCancel: document.getElementById("parent-password-modal-cancel"),
  parentPasswordModalSubmit: document.getElementById("parent-password-modal-submit")
};

init();
window.masteryApp = {
  applySupabaseSessionToLocalProfile,
  setAccountToolsVisible,
  clearLearnerSession
};
window.dispatchEvent(new CustomEvent("mastery-app-ready"));

function init() {
  populateProfileGradeOptions();
  applyCurrentProfile();
  restoreLearnerViewSession();
  renderGradeButtons();
  renderCategories();
  restoreResumeStateIfAvailable();
  attachEvents();
  if (elements.openHeroPanelButton) {
    elements.openHeroPanelButton.textContent = "Activity";
  }
  collapseHeroCopyByDefault();
  renderScoreHistory();
  renderStudyTime();
  renderHeroActivity();
  startStudyTimer();
}

function bindClick(element, handler) {
  if (!element || typeof handler !== "function") {
    return;
  }
  element.addEventListener("click", handler);
}

function bindChange(element, handler) {
  if (!element || typeof handler !== "function") {
    return;
  }
  element.addEventListener("change", handler);
}

function attachEvents() {
  bindClick(elements.saveProfileButton, handleSaveProfileSettings);
  bindClick(elements.createProfileButton, handleCreateProfile);
  bindClick(elements.loginProfileButton, handleLoginProfile);
  bindClick(elements.logoutProfileButton, handleLogoutProfile);
  bindChange(elements.profileRoleInput, renderAccountFormMode);
  bindClick(elements.addChildButton, handleAddChild);
  bindClick(elements.saveChildButton, handleSaveChildSettings);
  bindClick(elements.deleteChildButton, handleDeleteChild);
  bindClick(elements.switchChildButton, handleSwitchChild);
  bindChange(elements.parentChildSelect, handleParentChildEditorChange);
  bindClick(elements.headerChildSwitchButton, handleHeaderChildSwitch);
  bindClick(elements.backToParentButton, handleBackToParent);
  bindChange(elements.childPhotoInput, handleChildPhotoSelected);
  bindChange(elements.headerAvatarUploadInput, handleHeaderAvatarSelected);
  bindClick(elements.toggleAvatarLibraryButton, toggleAvatarLibraryPanel);
  bindChange(elements.currentAvatarUpload, handleCurrentAvatarUploadSelected);
  bindClick(elements.clearAvatarButton, handleClearCurrentAvatar);
  bindClick(elements.avatarLibraryGrid, handleAvatarLibraryGridClick);
  bindClick(elements.parentGoalsSaveButton, handleSaveParentGoals);
  bindChange(elements.parentGoalSubjectInput, handleParentGoalSubjectChange);
  elements.parentGoalDailyMinutesInput?.addEventListener("input", () => {
    state.parentGoalDraftDirty = true;
  });
  elements.parentGoalDailyLevelsInput?.addEventListener("input", () => {
    state.parentGoalDraftDirty = true;
  });
  elements.topicSearchInput?.addEventListener("focus", clearEmailAutofillFromTopicSearch);
  window.setTimeout(clearEmailAutofillFromTopicSearch, 250);
  window.setTimeout(clearEmailAutofillFromTopicSearch, 1200);
  bindClick(elements.openAccountToolsButton, () => {
    if (!getCurrentAccount()) {
      // Guests don't have a local account to open â€” send them to the real (Supabase) sign-in
      // page instead, since that's the account system going forward. index.html is now the
      // login page.
      window.location.href = "login.html";
      return;
    }
    const shouldShow = elements.accountToolsSection?.classList.contains("hidden") ?? true;
    setAccountToolsVisible(shouldShow);
  });
  bindClick(elements.logoutAuthButton, handleHeaderLogout);
  bindClick(elements.previousButton, moveToPreviousQuestion);
  bindClick(elements.nextButton, moveToNextQuestion);
  bindClick(elements.submitWritingButton, submitWritingAnswer);
  bindClick(elements.retryLevelButton, () => startLevel(state.selectedLevel));
  bindClick(elements.nextLevelButton, moveToNextLevel);
  bindClick(elements.openReviewButton, openSelectedReview);
  bindClick(elements.resetTopicProgressButton, resetSelectedTopicProgress);
  bindClick(elements.hintButton, toggleHint);
  bindChange(elements.mathCategorySelect, (event) => handleCategorySelect(event, "maths"));
  bindChange(elements.englishCategorySelect, (event) => handleCategorySelect(event, "english"));
  elements.levelGrid?.addEventListener("click", handleLevelGridClick);
  elements.topicSearchInput?.addEventListener("input", (event) => {
    state.searchQuery = event.target.value;
    renderTopicSearch();
  });
  elements.topicSearchInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      state.searchQuery = event.target.value;
      renderTopicSearch();
      elements.topicSearchInput.blur();
    }
  });
  bindClick(elements.topicSearchButton, () => {
    state.searchQuery = elements.topicSearchInput?.value || "";
    renderTopicSearch();
  });
  bindClick(elements.clearSearchButton, clearTopicSearch);
  elements.topicSearchResults?.addEventListener("click", handleTopicSearchJump);
  bindClick(elements.toggleProfilePanelButton, toggleProfilePanel);
  bindClick(elements.toggleHeroPanelButton, toggleHeroPanel);
  bindClick(elements.toggleHeroCopyButton, toggleHeroCopy);
  bindClick(elements.toggleGradePanelButton, toggleGradePanel);
  bindClick(elements.toggleParentDashboardButton, toggleParentDashboard);
  bindClick(elements.syncParentDashboardButton, handleSyncParentDashboardLearners);
  elements.parentDashboardLearnerGrid?.addEventListener("click", handleParentDashboardLearnerClick);
  bindClick(elements.toggleSearchPanelButton, toggleSearchPanel);
  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.addEventListener("online", handleBrowserOnline);
  window.addEventListener("beforeunload", flushStudyTime);
}

function clearEmailAutofillFromTopicSearch() {
  const input = elements.topicSearchInput;
  if (!input) {
    return;
  }

  const value = String(input.value || "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return;
  }

  input.value = "";
  state.searchQuery = "";
  renderTopicSearchResults();
}


function toggleProfilePanel() {
  const isHidden = elements.profilePanelContent.classList.toggle("hidden");
  elements.toggleProfilePanelButton.textContent = isHidden ? "Show Tools" : "Hide Tools";
  elements.toggleProfilePanelButton.setAttribute("aria-expanded", String(!isHidden));
}

function handleBrowserOnline() {
  const account = getCurrentAccount();
  if (!account || account.type !== "parent" || !isSupabaseProfileId(account.id)) {
    return;
  }
  if (!getUnsyncedParentLearners(account).length) {
    return;
  }
  syncParentChildrenOnline(account, { silent: true }).catch((error) => {
    console.error("Retrying learner sync after browser reconnect failed", error);
  });
}

function setHeroCopyCollapsed(collapsed) {
  if (!elements.heroCopyContent || !elements.toggleHeroCopyButton) {
    return;
  }

  elements.heroCopyContent.classList.toggle("hidden", collapsed);
  elements.heroCopy?.classList.toggle("hero-copy--compact", collapsed);
  elements.toggleHeroCopyButton.textContent = collapsed ? "Show Header" : "Hide Header";
  elements.toggleHeroCopyButton.setAttribute("aria-expanded", String(!collapsed));
}

function collapseHeroCopyByDefault() {
  setHeroCopyCollapsed(true);
}

function toggleHeroCopy() {
  if (!elements.heroCopyContent) {
    return;
  }

  const collapsed = !elements.heroCopyContent.classList.contains("hidden");
  setHeroCopyCollapsed(collapsed);
}

function setHeroPanelVisible(visible) {
  if (!elements.heroPanelContent || !elements.toggleHeroPanelButton) {
    return;
  }
  elements.heroPanelContent.classList.toggle("hidden", !visible);
  elements.toggleHeroPanelButton.textContent = visible
    ? "Hide Performance"
    : state.childViewMode ? "View Performance" : "Show Performance";
  elements.toggleHeroPanelButton.setAttribute("aria-expanded", String(visible));
}

function toggleHeroPanel() {
  if (!elements.heroPanelContent) {
    return;
  }
  setHeroPanelVisible(elements.heroPanelContent.classList.contains("hidden"));
}

function setAccountToolsVisible(visible) {
  if (!elements.accountToolsSection) {
    return;
  }
  elements.accountToolsSection.classList.toggle("hidden", !visible);
  if (elements.profilePanelContent) {
    elements.profilePanelContent.classList.toggle("hidden", !visible);
  }
  if (elements.toggleProfilePanelButton) {
    elements.toggleProfilePanelButton.textContent = visible ? "Hide Tools" : "Show Tools";
    elements.toggleProfilePanelButton.setAttribute("aria-expanded", String(visible));
  }
  if (visible) {
    elements.accountToolsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setParentDashboardVisible(visible) {
  if (!elements.parentDashboardSection) {
    return;
  }
  const effectiveVisible = visible && !state.childViewMode;
  elements.parentDashboardSection.classList.toggle("hidden", !effectiveVisible);
  if (effectiveVisible) {
    renderParentDashboard();
    elements.parentDashboardSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Once a parent explicitly hands the device off to a child (via the child switcher), hide every
// parent-only control (Manage Learners, Family Dashboard) so the child only sees the learning
// area. A small "Back to Parent" control is the only way back in, keeping this a deliberate,
// two-step action rather than something a curious kid can undo with one tap.
function setChildViewMode(enabled, { allowGradeChange = false } = {}) {
  state.childViewMode = enabled;
  if (enabled) {
    setParentDashboardVisible(false);
    setAccountToolsVisible(false);
  }
  elements.backToParentButton?.classList.toggle("hidden", !enabled);
  // A learner added by a parent only ever plays at the grade their parent assigned them, so the
  // grade picker is parent-only tooling and stays hidden for them. The exception is the
  // account holder's own "self" learner profile (see ensureSelfLearnerProfile) â€” when someone
  // signs in and chooses "I'm a Learner" for themselves, they pick their own grade directly, so
  // allowGradeChange keeps the grade picker visible in that one case.
  elements.gradePanelSection?.classList.toggle("hidden", enabled && !allowGradeChange);
  // Learners may view only their own activity. Parent-only family controls remain hidden.
  if (enabled) {
    setHeroPanelVisible(false);
  }
  elements.toggleHeroPanelButton?.classList.remove("hidden");
  if (elements.toggleHeroPanelButton) {
    elements.toggleHeroPanelButton.textContent = enabled ? "View Performance" : "Show Performance";
  }
  renderProfilePanel();
}

function saveLearnerViewSession(account, child) {
  if (!account?.id || !child?.id) {
    return;
  }
  localStorage.setItem(learnerSessionKey, JSON.stringify({
    accountId: account.id,
    childId: child.id,
    learnerName: child.name || ""
  }));
}

function restoreLearnerViewSession(account = getCurrentAccount()) {
  if (!account || account.type !== "parent") {
    return false;
  }

  let learnerSession = null;
  try {
    learnerSession = JSON.parse(localStorage.getItem(learnerSessionKey) || "null");
  } catch (_error) {
    clearLearnerSession();
    return false;
  }

  if (!learnerSession || learnerSession.accountId !== account.id) {
    return false;
  }

  let child = account.children?.[learnerSession.childId] || null;
  if (!child && learnerSession.learnerName) {
    const normalizedName = learnerSession.learnerName.trim().toLowerCase();
    child = Object.values(account.children || {}).find(
      (candidate) => String(candidate?.name || "").trim().toLowerCase() === normalizedName
    ) || null;
  }
  if (!child) {
    clearLearnerSession();
    return false;
  }

  account.activeChildId = child.id;
  profilesStore.profiles[account.id] = account;
  saveProfilesStore();
  state.selectedGrade = Number(child.grade || 1);
  setChildViewMode(true, { allowGradeChange: false });
  return true;
}

function askParentPassword(actionLabel) {
  return new Promise((resolve) => {
    if (!elements.parentPasswordModal || !elements.parentPasswordModalInput) {
      resolve(window.prompt(`Enter the parent password to ${actionLabel}.`));
      return;
    }

    if (elements.parentPasswordModalTitle) {
      elements.parentPasswordModalTitle.textContent = "Enter parent password";
    }
    elements.parentPasswordModalMessage.textContent = `Enter the parent password to ${actionLabel}.`;
    elements.parentPasswordModalInput.placeholder = "Parent password";
    elements.parentPasswordModalInput.value = "";
    if (elements.parentPasswordModalError) {
      elements.parentPasswordModalError.textContent = "";
      elements.parentPasswordModalError.classList.add("hidden");
    }
    elements.parentPasswordModal.classList.remove("hidden");

    let settled = false;
    const cleanup = () => {
      elements.parentPasswordModal.classList.add("hidden");
      elements.parentPasswordModalSubmit?.removeEventListener("click", onSubmit);
      elements.parentPasswordModalCancel?.removeEventListener("click", onCancel);
      elements.parentPasswordModalOverlay?.removeEventListener("click", onCancel);
      elements.parentPasswordModalInput?.removeEventListener("keydown", onKeydown);
    };
    const finish = (value) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      resolve(value);
    };
    const onSubmit = () => finish(elements.parentPasswordModalInput.value);
    const onCancel = () => finish(null);
    const onKeydown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        onSubmit();
      } else if (event.key === "Escape") {
        event.preventDefault();
        onCancel();
      }
    };

    elements.parentPasswordModalSubmit?.addEventListener("click", onSubmit);
    elements.parentPasswordModalCancel?.addEventListener("click", onCancel);
    elements.parentPasswordModalOverlay?.addEventListener("click", onCancel);
    elements.parentPasswordModalInput?.addEventListener("keydown", onKeydown);

    window.requestAnimationFrame(() => {
      elements.parentPasswordModalInput?.focus();
    });
  });
}

async function verifyParentPasswordForAction(actionLabel = "continue") {
  const account = getCurrentAccount();
  if (!account || account.type !== "parent") {
    return false;
  }

  const password = await askParentPassword(actionLabel);
  if (!password) {
    showProfileMessage("Parent password is required for that action.", "error");
    return false;
  }

  if (account.passwordHash) {
    const matches = account.passwordHash === hashPassword(password);
    if (!matches) {
      showProfileMessage("That parent password is not correct.", "error");
    }
    return matches;
  }

  const client = getSupabaseClient();
  if (!client || !state.supabaseUserEmail) {
    showProfileMessage("Parent password check is not available right now. Please sign in again.", "error");
    return false;
  }

  const { error } = await client.auth.signInWithPassword({
    email: state.supabaseUserEmail,
    password
  });

  if (error) {
    showProfileMessage("That parent password is not correct.", "error");
    return false;
  }

  return true;
}

function toggleGradePanel() {
  const isHidden = elements.gradePanelContent.classList.toggle("hidden");
  elements.toggleGradePanelButton.textContent = isHidden ? "Show Grades" : "Hide Grades";
  elements.toggleGradePanelButton.setAttribute("aria-expanded", String(!isHidden));
}

function toggleParentDashboard() {
  if (!elements.parentDashboardContent || !elements.toggleParentDashboardButton) {
    return;
  }
  const isHidden = elements.parentDashboardContent.classList.toggle("hidden");
  elements.toggleParentDashboardButton.textContent = isHidden ? "Show Dashboard" : "Hide Dashboard";
  elements.toggleParentDashboardButton.setAttribute("aria-expanded", String(!isHidden));
}

function toggleSearchPanel() {
  if (!elements.topicSearchPanelContent || !elements.toggleSearchPanelButton) {
    return;
  }
  const isHidden = elements.topicSearchPanelContent.classList.toggle("hidden");
  elements.toggleSearchPanelButton.textContent = isHidden ? "Show Search" : "Hide Search";
  elements.toggleSearchPanelButton.setAttribute("aria-expanded", String(!isHidden));
}

function handleCategorySelect(event, track) {
  flushStudyTime();
  state.selectedCategoryId = event.target.value || null;
  state.selectedPatTab = getDefaultPatTabId(state.selectedCategoryId);
  state.selectedProbabilityMode = getDefaultProbabilityMode(state.selectedCategoryId, state.selectedGrade);
  if (track === "maths" && elements.englishCategorySelect) {
    elements.englishCategorySelect.value = "";
  }
  if (track === "english" && elements.mathCategorySelect) {
    elements.mathCategorySelect.value = "";
  }
  state.selectedLevel = null;
  clearCurrentResumeState();
  hideQuizViews();
  renderCategories();
  renderTopicSearch();
  renderLevels();
  renderReviewOptions();
  renderStudyTime();
}

function renderGradeButtons() {
  elements.gradeButtons.innerHTML = "";

  grades.forEach((grade) => {
    const button = document.createElement("button");
    button.className = `grade-button ${grade === state.selectedGrade ? "active" : ""}`;
    button.textContent = `Grade ${grade}`;
    button.addEventListener("click", () => {
      flushStudyTime();
      state.selectedGrade = grade;
      syncProfileGrade();
      state.selectedCategoryId = null;
      state.selectedPatTab = null;
      state.selectedProbabilityMode = "mastery";
      state.selectedLevel = null;
      state.currentQuestions = [];
      clearCurrentResumeState();
      hideQuizViews();
      renderGradeButtons();
      renderCategories();
      renderTopicSearch();
      renderStudyTime();
      window.setTimeout(() => {
        elements.topicsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    });
    elements.gradeButtons.appendChild(button);
  });
}

function renderCategories() {
  const categories = curriculum[state.selectedGrade];
  const completedLevels = getCompletedLevelsCount(state.selectedGrade);

  elements.selectedGradeLabel.textContent = `Grade ${state.selectedGrade}`;
  elements.selectedCategoryLabel.textContent = "None yet";
  elements.completedLevelsLabel.textContent = String(completedLevels);
  elements.levelGrid.innerHTML = "";
  elements.levelSection.classList.add("hidden");
  renderCategorySelector(categories);
  renderTopicSearch();

  renderLevels();
  renderReviewOptions();
}

function renderCategorySelector(categories) {
  if (!elements.mathCategorySelect || !elements.englishCategorySelect) {
    return;
  }

  if (!categories.length) {
    elements.mathCategorySelect.innerHTML = "";
    elements.englishCategorySelect.innerHTML = "";
    elements.categoryCurrentCard?.classList.add("hidden");
    elements.patTabSection?.classList.add("hidden");
    elements.probabilityModeSection?.classList.add("hidden");
    elements.probabilityExampleSection?.classList.add("hidden");
    elements.topicsEmptyState?.classList.remove("hidden");
    return;
  }

  if (state.selectedCategoryId && !categories.some((category) => category.id === state.selectedCategoryId)) {
    state.selectedCategoryId = null;
    state.selectedPatTab = null;
  }

  const mathsCategories = categories.filter((category) => !category.id.startsWith("english-"));
  const englishCategories = categories.filter((category) => category.id.startsWith("english-"));
  const selectedId = state.selectedCategoryId || "";

  elements.mathCategorySelect.innerHTML = [
    `<option value="" ${selectedId === "" || selectedId.startsWith("english-") ? "" : "selected"}>Choose a maths topic</option>`,
    ...mathsCategories.map((category) => `<option value="${category.id}" ${category.id === selectedId ? "selected" : ""}>${category.title}</option>`)
  ].join("");

  elements.englishCategorySelect.innerHTML = [
    `<option value="" ${selectedId === "" || !selectedId.startsWith("english-") ? "" : "selected"}>Choose an English topic</option>`,
    ...englishCategories.map((category) => `<option value="${category.id}" ${category.id === selectedId ? "selected" : ""}>${category.title}</option>`)
  ].join("");

  if (!selectedId) {
    elements.mathCategorySelect.value = "";
    elements.englishCategorySelect.value = "";
  }

  const selectedCategory = getSelectedCategory();
  if (!selectedCategory) {
    elements.categoryCurrentCard?.classList.add("hidden");
    elements.patTabSection?.classList.add("hidden");
    elements.probabilityModeSection?.classList.add("hidden");
    elements.probabilityExampleSection?.classList.add("hidden");
    elements.topicsEmptyState?.classList.remove("hidden");
    if (elements.categoryCurrentCard) {
      elements.categoryCurrentCard.innerHTML = "";
    }
    return;
  }

  elements.topicsEmptyState?.classList.add("hidden");
  if (elements.categoryCurrentCard) {
    elements.categoryCurrentCard.classList.remove("hidden");
    elements.categoryCurrentCard.innerHTML = `
      <h3>${getContextDisplayTitle(selectedCategory)}</h3>
      <p>${selectedCategory.description}</p>
      <small>${QUESTIONS_PER_TOPIC} questions | ${LEVEL_COUNT} levels</small>
    `;
  }

  renderPatTabs(selectedCategory);
}

function getPatTabDefinitions(categoryId, grade = state.selectedGrade) {
  if (!ENABLE_PAT_PRACTICE) {
    return [];
  }

  if (grade === 9 && categoryId === "english-pat-part-a") {
    return [
      { id: "essay", label: "Essay", description: "Practice thesis writing, support, organization, tone, and conclusions for essay responses." },
      { id: "narrative", label: "Narrative", description: "Practice openings, conflict, vivid detail, sequencing, voice, and meaningful endings for narratives." },
      { id: "business-writing", label: "Business Writing", description: "Practice audience, purpose, tone, format, clarity, and conventions for functional and business writing." }
    ];
  }

  if (grade === 9 && categoryId === "english-pat-part-b") {
    return [
      { id: "literary", label: "Literary", description: "Practice poetry and narrative reading: inference, purpose, word choice, and main ideas." },
      { id: "visual", label: "Visual", description: "Practice cartoon and visual-text questions: emphasis, humour, character reactions, and effect." },
      { id: "informational", label: "Informational", description: "Practice informational reading: locating details, context clues, and synthesizing meaning." }
    ];
  }

  if (grade === 6 && categoryId === "english-pat6-part-b") {
    return [
      { id: "story", label: "Story", description: "Practice fiction and narrative questions: urgency, conflict, character feelings, and inference." },
      { id: "poetry", label: "Poetry", description: "Practice poem questions: cliches, similes, tone, and meaning." },
      { id: "visual", label: "Visual", description: "Practice cartoon questions: bold text, exaggeration, character reactions, and humour." },
      { id: "informational", label: "Informational", description: "Practice articles and informational texts: stated details, purpose, vocabulary, and main ideas." }
    ];
  }

  if (grade === 7 && categoryId === "probability-mastery") {
    return [
      { id: "probability-basics", label: "5.1 Probability", description: "Use the worksheet examples to review favourable outcomes, fractions, ratios, percents, theoretical probability, and experimental probability, then solve mastery questions." },
      { id: "organize-outcomes", label: "5.2 Organize Outcomes", description: "Use the worksheet examples to organize outcomes with tables, lists, and tree diagrams, then solve mastery questions on sample spaces." },
      { id: "independent-events", label: "5.3 Independent Events", description: "Use the worksheet examples to model simple independent events, then solve mastery questions with clear step-by-step probability reasoning." }
    ];
  }

  return [];
}

function getDefaultPatTabId(categoryId, grade = state.selectedGrade) {
  const tabs = getPatTabDefinitions(categoryId, grade);
  return tabs.length ? tabs[0].id : null;
}

function isProbabilityMasteryCategory(categoryId = state.selectedCategoryId, grade = state.selectedGrade) {
  return grade === 7 && categoryId === "probability-mastery";
}

function getProbabilityModeDefinitions(categoryId = state.selectedCategoryId, grade = state.selectedGrade) {
  return [];
}

function getDefaultProbabilityMode(categoryId = state.selectedCategoryId, grade = state.selectedGrade) {
  return "mastery";
}

function getSelectedPatTabDefinition() {
  return getPatTabDefinitions(state.selectedCategoryId, state.selectedGrade).find((tab) => tab.id === state.selectedPatTab) || null;
}

function renderPatTabs(selectedCategory) {
  if (!elements.patTabSection || !elements.patTabBar || !elements.patTabTitle || !elements.patTabDescription) {
    return;
  }

  const tabs = getPatTabDefinitions(selectedCategory.id, state.selectedGrade);
  if (!tabs.length) {
    state.selectedPatTab = null;
    elements.patTabSection.classList.add("hidden");
    elements.patTabBar.innerHTML = "";
    renderProbabilityModeTabs(selectedCategory);
    return;
  }

  if (!tabs.some((tab) => tab.id === state.selectedPatTab)) {
    state.selectedPatTab = tabs[0].id;
  }

  const activeTab = tabs.find((tab) => tab.id === state.selectedPatTab) || tabs[0];
  elements.patTabSection.classList.remove("hidden");
  elements.patTabTitle.textContent = `${selectedCategory.title} Sections`;
  elements.patTabDescription.textContent = activeTab.description;
  elements.patTabBar.innerHTML = "";

  tabs.forEach((tab) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `pat-tab-button ${tab.id === state.selectedPatTab ? "active" : ""}`;
    button.textContent = tab.label;
    button.addEventListener("click", () => {
      flushStudyTime();
      state.selectedPatTab = tab.id;
      state.selectedLevel = null;
      state.currentQuestions = [];
      hideQuizViews();
      renderCategories();
      renderLevels();
      renderReviewOptions();
      renderStudyTime();
    });
    elements.patTabBar.appendChild(button);
  });

  renderProbabilityModeTabs(selectedCategory);
}

function renderProbabilityModeTabs(selectedCategory) {
  if (!elements.probabilityModeSection || !elements.probabilityModeBar || !elements.probabilityModeTitle || !elements.probabilityModeDescription) {
    return;
  }

  const modes = getProbabilityModeDefinitions(selectedCategory?.id, state.selectedGrade);
  if (!modes.length) {
    elements.probabilityModeSection.classList.add("hidden");
    elements.probabilityModeBar.innerHTML = "";
    elements.probabilityExampleSection?.classList.add("hidden");
    return;
  }

  if (!modes.some((mode) => mode.id === state.selectedProbabilityMode)) {
    state.selectedProbabilityMode = modes[0].id;
  }

  const activeMode = modes.find((mode) => mode.id === state.selectedProbabilityMode) || modes[0];
  elements.probabilityModeSection.classList.remove("hidden");
  elements.probabilityModeTitle.textContent = "Choose Study Mode";
  elements.probabilityModeDescription.textContent = activeMode.description;
  elements.probabilityModeBar.innerHTML = "";

  modes.forEach((mode) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `pat-tab-button ${mode.id === state.selectedProbabilityMode ? "active" : ""}`;
    button.textContent = mode.label;
    button.addEventListener("click", () => {
      flushStudyTime();
      state.selectedProbabilityMode = mode.id;
      state.selectedLevel = null;
      state.currentQuestions = [];
      hideQuizViews();
      renderLevels();
      renderReviewOptions();
      renderStudyTime();
    });
    elements.probabilityModeBar.appendChild(button);
  });

  renderProbabilityExamples();
}

function renderProbabilityExamples() {
  if (!elements.probabilityExampleSection || !elements.probabilityExampleContent || !elements.probabilityExampleTitle || !elements.probabilityExampleDescription) {
    return;
  }

  elements.probabilityExampleSection.classList.add("hidden");
  elements.probabilityExampleContent.innerHTML = "";
}

function showHintAfterWrong(question) {
  if (!elements.hintButton || !elements.hintBox || !question.hint) {
    return;
  }

  elements.hintButton.classList.remove("hidden");
  elements.hintButton.textContent = `${UI_EMOJIS.hint} Show Hint`;
  elements.hintBox.classList.add("hidden");
}

function renderLevels() {
  elements.levelGrid.innerHTML = "";

  if (!state.selectedCategoryId) {
    elements.levelSection.classList.add("hidden");
    elements.probabilityExampleSection?.classList.add("hidden");
    renderResetTopicButton();
    return;
  }

  const category = getSelectedCategory();
  const activeContext = getActiveCategoryContext();
  renderProbabilityExamples();

  if (isProbabilityMasteryCategory(category?.id, state.selectedGrade) && state.selectedProbabilityMode === "examples") {
    elements.levelSection.classList.add("hidden");
    renderResetTopicButton();
    return;
  }

  elements.levelSection.classList.remove("hidden");
  elements.selectedCategoryLabel.textContent = activeContext.title;

  for (let level = 1; level <= LEVEL_COUNT; level += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.level = String(level);
    const savedAttempt = getSavedAttempt(state.selectedGrade, activeContext.key, level);
    const isCompleted = Boolean(savedAttempt);
    button.className = `level-card ${isCompleted ? "completed" : "pending"} ${level === state.selectedLevel ? "active" : ""}`;
    button.innerHTML = `
      <strong>Level ${level}</strong>
      <span>${isCompleted ? `Completed | Best ${savedAttempt.score}/${QUESTIONS_PER_LEVEL}` : "Not completed yet"}</span>
    `;
    elements.levelGrid.appendChild(button);
  }

  renderResetTopicButton();
}

function handleLevelGridClick(event) {
  const button = event.target.closest(".level-card");
  if (!button) {
    return;
  }

  const level = Number(button.dataset.level);
  if (!Number.isInteger(level) || level < 1 || level > LEVEL_COUNT) {
    return;
  }

  openLevel(level);
}

function openLevel(level) {
  if (state.isStartingLevel) {
    return;
  }

  if (!Number.isInteger(level) || level < 1 || level > LEVEL_COUNT) {
    return;
  }

  state.isStartingLevel = true;
  if (elements.levelGrid) {
    elements.levelGrid.setAttribute("aria-busy", "true");
  }

  renderLevelLoading(level);

  window.setTimeout(() => {
    try {
      startLevel(level);
    } finally {
      state.isStartingLevel = false;
      elements.levelGrid?.removeAttribute("aria-busy");
    }
  }, 0);
}

function renderLevelLoading(level) {
  state.selectedLevel = level;
  elements.resultsSection.classList.add("hidden");
  elements.reviewSection?.classList.add("hidden");
  elements.quizSection.classList.remove("hidden");
  elements.quizMeta.textContent = `Grade ${state.selectedGrade} | Preparing Level ${level}`;
  elements.questionTitle.textContent = "Loading questions...";
  elements.questionInstruction.textContent = "";
  elements.questionInstruction.classList.add("hidden");
  elements.questionText.textContent = "Please wait a moment while the quiz opens.";
  elements.questionDiagram.classList.add("hidden");
  elements.optionsList.innerHTML = "";
  elements.feedbackBox.className = "feedback-box hidden";
  elements.hintButton?.classList.add("hidden");
  elements.hintBox?.classList.add("hidden");
  elements.previousButton.classList.add("hidden");
  elements.nextButton.classList.add("hidden");
  elements.progressBar.style.width = "0%";
  elements.liveScore.textContent = "0 / 0";
}

function generateLevelQuestionOnDemand(grade, categoryId, patTabId, level, questionIndex, existingQuestions = []) {
  const category = getCategoryById(categoryId, grade);
  if (!category || !questionFactories[category.factory]) {
    return null;
  }

  const absoluteIndex = ((level - 1) * QUESTIONS_PER_LEVEL) + questionIndex;
  const bankQuestion = getQuestionBank(grade, categoryId, patTabId)[absoluteIndex];
  if (bankQuestion) {
    return bankQuestion;
  }

  return buildEmergencyQuestion(category, grade, level, absoluteIndex);
}

function startLevel(level, resumeState = null) {
  try {
    if (isProbabilityMasteryCategory() && state.selectedProbabilityMode !== "mastery") {
      state.selectedProbabilityMode = "mastery";
      renderProbabilityModeTabs(getSelectedCategory());
    }

    flushStudyTime();
    state.selectedLevel = level;
    state.currentQuestions = Array.from({ length: QUESTIONS_PER_LEVEL }, () => null);
    state.currentIndex = 0;
    state.score = 0;
    state.answered = false;
    state.lastResults = [];
    state.questionResults = Array.from({ length: QUESTIONS_PER_LEVEL }, () => null);

    if (resumeState && Number(resumeState.level) === Number(level) && resumeState.categoryId === state.selectedCategoryId) {
      const restoredResults = Array.isArray(resumeState.questionResults)
        ? resumeState.questionResults.slice(0, QUESTIONS_PER_LEVEL).map((result) => (result ? { ...result } : null))
        : [];
      while (restoredResults.length < QUESTIONS_PER_LEVEL) {
        restoredResults.push(null);
      }
      state.questionResults = restoredResults;
      state.currentIndex = Math.max(0, Math.min(Number(resumeState.currentIndex || 0), QUESTIONS_PER_LEVEL - 1));
      state.score = restoredResults.filter((result) => result?.correct).length;
      state.lastResults = restoredResults
        .filter(Boolean)
        .map(({ selectedIndex: ignoredSelectedIndex, ...result }) => result);
    }

    elements.resultsSection.classList.add("hidden");
    elements.quizSection.classList.remove("hidden");
    elements.reviewSection?.classList.add("hidden");
    renderLevels();
    if (state.currentQuestions.length) {
      renderQuestion();
    }
    saveCurrentResumeState();
    renderStudyTime();
    elements.quizSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    console.error("Level start failed", error);
    const category = getSelectedCategory();
    state.selectedLevel = level;
    state.currentQuestions = category ? [buildEmergencyQuestion(category, state.selectedGrade, level, level)] : Array.from({ length: QUESTIONS_PER_LEVEL }, () => null);
    state.currentIndex = 0;
    state.score = 0;
    state.answered = false;
    state.lastResults = [];
    state.questionResults = Array.from({ length: QUESTIONS_PER_LEVEL }, () => null);
    elements.resultsSection.classList.add("hidden");
    elements.quizSection.classList.remove("hidden");
    elements.reviewSection?.classList.add("hidden");
    renderLevels();
    if (state.currentQuestions.length) {
      renderQuestion();
    }
    saveCurrentResumeState();
    renderStudyTime();
    elements.quizSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderQuestion() {
  const existingQuestion = state.currentQuestions[state.currentIndex];
  state.currentQuestions[state.currentIndex] = existingQuestion
    ? ensureRenderableQuestion(existingQuestion, state.currentIndex)
    : generateLevelQuestionOnDemand(
        state.selectedGrade,
        state.selectedCategoryId,
        state.selectedPatTab,
        state.selectedLevel,
        state.currentIndex,
        state.currentQuestions
      );

  const question = state.currentQuestions[state.currentIndex];
  if (!question) {
    return;
  }
  const questionNumber = state.currentIndex + 1;
  let existingResult = state.questionResults[state.currentIndex];
  if (existingResult && question.type !== "writing") {
    const invalidSelectedIndex = !Number.isInteger(existingResult.selectedIndex)
      || existingResult.selectedIndex < 0
      || existingResult.selectedIndex >= question.options.length;
    const mismatchedSelectedAnswer = existingResult.selectedAnswer && question.options[existingResult.selectedIndex] !== existingResult.selectedAnswer;
    const mismatchedCorrectAnswer = question.options[question.answerIndex] !== existingResult.answer;
    if (invalidSelectedIndex || mismatchedSelectedAnswer || mismatchedCorrectAnswer) {
      clearSavedResultForCurrentQuestion();
      existingResult = null;
      saveCurrentResumeState();
    }
  }
  const answeredCount = getAnsweredCount();
  const promptParts = splitQuestionPrompt(question.prompt);

  const categoryPrefix = isMasteryCategory(getActiveCategoryContext().category)
    ? `Cross-Grade Mastery`
    : `Grade ${state.selectedGrade}`;
  elements.quizMeta.textContent = `${categoryPrefix} | ${getActiveCategoryContext().title} | Level ${state.selectedLevel}`;
  elements.questionTitle.textContent = `Question ${questionNumber} of ${QUESTIONS_PER_LEVEL}`;
  elements.questionInstruction.textContent = promptParts.instruction;
  elements.questionInstruction.classList.toggle("hidden", !promptParts.instruction);
  elements.questionText.textContent = promptParts.body;
  renderQuestionDiagram(question);
  renderHint(question);
  elements.optionsList.innerHTML = "";
  elements.optionsList.classList.toggle("hidden", question.type === "writing");
  elements.writingResponse?.classList.toggle("hidden", question.type !== "writing");
  if (elements.writingAnswer) {
    elements.writingAnswer.value = existingResult?.selectedAnswer || "";
    elements.writingAnswer.disabled = Boolean(existingResult);
  }
  if (elements.submitWritingButton) {
    elements.submitWritingButton.disabled = Boolean(existingResult);
  }
  elements.feedbackBox.classList.add("hidden");
  elements.feedbackBox.className = "feedback-box hidden";
  elements.previousButton.classList.toggle("hidden", state.currentIndex === 0);
  elements.previousButton.disabled = state.currentIndex === 0;
  elements.nextButton.classList.add("hidden");
  elements.liveScore.textContent = `${state.score} / ${answeredCount}`;
  elements.progressBar.style.width = `${(answeredCount / state.currentQuestions.length) * 100}%`;

  if (question.type !== "writing") {
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "option-button";
      const optionLetter = String.fromCharCode(65 + index);
      button.innerHTML = `<span class="option-letter">${optionLetter}.</span><span class="option-text">${escapeHtml(option)}</span>`;
      button.addEventListener("click", () => checkAnswer(index, button));
      elements.optionsList.appendChild(button);
    });
  }

  state.answered = Boolean(existingResult);

  if (!existingResult) {
    return;
  }

  if (question.type !== "writing") {
    const buttons = [...elements.optionsList.querySelectorAll(".option-button")];
    buttons.forEach((button, index) => {
      button.disabled = true;
      if (index === question.answerIndex) {
        button.classList.add("correct");
      }
      if (!existingResult.correct && index === existingResult.selectedIndex) {
        button.classList.add("wrong");
      }
    });
  }

  if (!existingResult.correct) {
    showHintAfterWrong(question);
  }

  showFeedback(existingResult.correct, question.explanation);
  elements.nextButton.textContent = state.currentIndex === state.currentQuestions.length - 1 ? "See Score" : "Next Question";
  elements.nextButton.classList.remove("hidden");
}

function checkAnswer(selectedIndex, selectedButton) {
  if (state.answered) {
    return;
  }

  state.answered = true;
  const question = state.currentQuestions[state.currentIndex];
  const buttons = [...elements.optionsList.querySelectorAll(".option-button")];
  const isCorrect = selectedIndex === question.answerIndex;

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === question.answerIndex) {
      button.classList.add("correct");
    }
  });

  if (!isCorrect) {
    selectedButton.classList.add("wrong");
  }

  if (isCorrect) {
    state.score += 1;
    triggerConfetti(16);
  }

  state.questionResults[state.currentIndex] = {
    prompt: question.prompt,
    correct: isCorrect,
    explanation: question.explanation,
    answer: question.options[question.answerIndex],
    selectedAnswer: question.options[selectedIndex],
    selectedIndex
  };
  state.lastResults = state.questionResults
    .filter(Boolean)
    .map(({ selectedIndex: ignoredSelectedIndex, ...result }) => result);
  saveCurrentResumeState();

  elements.liveScore.textContent = `${state.score} / ${state.currentIndex + 1}`;
  elements.feedbackBox.classList.remove("hidden");
  elements.feedbackBox.classList.add(isCorrect ? "success" : "error");
  elements.feedbackBox.innerHTML = `
    <div class="feedback-reaction">
      <span class="feedback-emoji">${isCorrect ? UI_EMOJIS.success : UI_EMOJIS.error}</span>
      <strong class="feedback-title">${isCorrect ? "Correct!" : "Not quite."}</strong>
    </div>
    <div>${question.explanation}</div>
  `;
  if (!isCorrect) {
    showHintAfterWrong(question);
  }
  showFeedback(isCorrect, question.explanation);
  playAnswerFeedback(isCorrect);
  elements.nextButton.textContent = state.currentIndex === state.currentQuestions.length - 1 ? "See Score" : "Next Question";
  elements.nextButton.classList.remove("hidden");
}

function submitWritingAnswer() {
  if (state.answered) {
    return;
  }

  const question = state.currentQuestions[state.currentIndex];
  if (question.type !== "writing" || !elements.writingAnswer) {
    return;
  }

  const response = elements.writingAnswer.value.trim();
  if (!response) {
    showFeedback(false, "Write an answer first so the app can check it.");
    return;
  }

  const evaluation = evaluateWritingResponse(question, response);
  state.answered = true;

  if (evaluation.correct) {
    state.score += 1;
  }

  state.questionResults[state.currentIndex] = {
    prompt: question.prompt,
    correct: evaluation.correct,
    explanation: evaluation.explanation,
    answer: question.sampleAnswer || question.modelAnswer || "See model answer in feedback.",
    selectedAnswer: response,
    selectedIndex: null
  };
  state.lastResults = state.questionResults
    .filter(Boolean)
    .map(({ selectedIndex: ignoredSelectedIndex, ...result }) => result);
  saveCurrentResumeState();

  elements.liveScore.textContent = `${state.score} / ${state.currentIndex + 1}`;
  if (elements.writingAnswer) {
    elements.writingAnswer.disabled = true;
  }
  if (elements.submitWritingButton) {
    elements.submitWritingButton.disabled = true;
  }
  if (!evaluation.correct) {
    showHintAfterWrong(question);
  }
  showFeedback(evaluation.correct, evaluation.explanation);
  playAnswerFeedback(evaluation.correct);
  elements.nextButton.textContent = state.currentIndex === state.currentQuestions.length - 1 ? "See Score" : "Next Question";
  elements.nextButton.classList.remove("hidden");
}

function renderHint(question) {
  if (!elements.hintButton || !elements.hintBox) {
    return;
  }

  const hasHint = Boolean(question.hint);
  elements.hintButton.classList.add("hidden");
  elements.hintButton.textContent = `${UI_EMOJIS.hint} Show Hint`;
  elements.hintButton.textContent = `${UI_EMOJIS.hint} Show Hint`;
  elements.hintBox.className = "feedback-box hint-box hidden";
  elements.hintBox.innerHTML = hasHint ? `<strong>${UI_EMOJIS.hint} Hint</strong><div>${question.hint}</div>` : "";
  elements.hintBox.innerHTML = hasHint ? `<strong>${UI_EMOJIS.hint} Hint</strong><div>${question.hint}</div>` : "";
  elements.hintButton.textContent = `${UI_EMOJIS.hint} Show Hint`;
  elements.hintBox.innerHTML = hasHint ? `<strong>${UI_EMOJIS.hint} Hint</strong><div>${question.hint}</div>` : "";
}

function toggleHint() {
  if (!elements.hintButton || !elements.hintBox) {
    return;
  }

  const isHidden = elements.hintBox.classList.contains("hidden");
  elements.hintBox.classList.toggle("hidden", !isHidden);
  elements.hintButton.textContent = isHidden ? `${UI_EMOJIS.hint} Hide Hint` : `${UI_EMOJIS.hint} Show Hint`;
  elements.hintButton.textContent = isHidden ? `${UI_EMOJIS.hint} Hide Hint` : `${UI_EMOJIS.hint} Show Hint`;
  elements.hintButton.textContent = isHidden ? `${UI_EMOJIS.hint} Hide Hint` : `${UI_EMOJIS.hint} Show Hint`;
}

function moveToPreviousQuestion() {
  if (state.currentIndex === 0) {
    return;
  }

  state.currentIndex -= 1;
  saveCurrentResumeState();
  renderQuestion();
}

function moveToNextQuestion() {
  if (!state.answered) {
    return;
  }

  if (state.currentIndex === state.currentQuestions.length - 1) {
    completeLevel();
    return;
  }

  state.currentIndex += 1;
  state.answered = false;
  saveCurrentResumeState();
  renderQuestion();
}

function completeLevel() {
  flushStudyTime();
  const activeContext = getActiveCategoryContext();
  const currentProfile = getCurrentProfile();
  state.lastResults = state.questionResults
    .filter(Boolean)
    .map(({ selectedIndex: ignoredSelectedIndex, ...result }) => result);
  clearCurrentResumeState();
  const savedToProfile = saveCompletedLevel(state.selectedGrade, activeContext.key, activeContext.title, state.selectedLevel, state.score);
  elements.quizSection.classList.add("hidden");
  elements.resultsSection.classList.remove("hidden");
  elements.reviewSection?.classList.remove("hidden");
  elements.progressBar.style.width = "100%";

  const percentage = Math.round((state.score / state.currentQuestions.length) * 100);
  triggerConfetti(percentage >= 70 ? 70 : 30);
  showCelebrationToast(
    percentage === 100 ? "🏆 Perfect score!" : percentage >= 70 ? "🎉 Great job!" : "✨ Level complete!"
  );
  const saveMessage = savedToProfile
    ? currentProfile
      ? `Saved to ${currentProfile.name}'s profile.`
      : "Saved in this browser for guest progress."
    : "Create or log in to a profile to save this progress.";
  const resultPrefix = isMasteryCategory(activeContext.category)
    ? `Cross-grade mastery`
    : `Grade ${state.selectedGrade}`;
  elements.resultsSummary.textContent = `You scored ${state.score} out of ${QUESTIONS_PER_LEVEL} in ${resultPrefix} ${activeContext.title}, Level ${state.selectedLevel} (${percentage}%). ${saveMessage}`;
  renderResultsDashboard(state.lastResults, state.score);
  elements.resultsBreakdown.innerHTML = state.lastResults
    .map((result, index) => renderResultItem(result, index))
    .join("");

  const nextLevel = Math.min(10, state.selectedLevel + 1);
  elements.nextLevelButton.disabled = state.selectedLevel === 10;
  elements.nextLevelButton.textContent = state.selectedLevel === 10 ? "Final Level Reached" : `Start Level ${nextLevel}`;
  elements.completedLevelsLabel.textContent = String(getCompletedLevelsCount(state.selectedGrade));
  renderLevels();
  renderReviewOptions();
  renderScoreHistory();
  renderStudyTime();
}

function moveToNextLevel() {
  if (state.selectedLevel < 10) {
    startLevel(state.selectedLevel + 1);
  }
}

function renderQuestionDiagram(question) {
  if (question.diagram) {
    elements.questionDiagram.innerHTML = question.diagram;
    elements.questionDiagram.classList.remove("hidden");
    return;
  }

  elements.questionDiagram.innerHTML = "";
  elements.questionDiagram.classList.add("hidden");
}

function splitQuestionPrompt(prompt) {
  if (!prompt || !elements.questionInstruction) {
    return {
      instruction: "",
      body: prompt || ""
    };
  }

  const colonIndex = prompt.indexOf(":");
  if (colonIndex === -1) {
    return {
      instruction: "",
      body: prompt
    };
  }

  const instruction = prompt.slice(0, colonIndex).trim();
  const body = prompt.slice(colonIndex + 1).trim();
  const lowerInstruction = instruction.toLowerCase();
  const instructionalStarters = [
    "fill in the gap",
    "choose",
    "select",
    "pick",
    "complete",
    "solve",
    "round",
    "find",
    "identify",
    "match",
    "write",
    "use",
    "calculate",
    "which sentence",
    "which word",
    "what is the value",
    "what number",
    "what fraction"
  ];

  if (!body || !instructionalStarters.some((starter) => lowerInstruction.startsWith(starter))) {
    return {
      instruction: "",
      body: prompt
    };
  }

  return { instruction, body };
}

function hideQuizViews() {
  elements.quizSection.classList.add("hidden");
  elements.resultsSection.classList.add("hidden");
  elements.reviewSection?.classList.remove("hidden");
}

function getAnsweredCount() {
  return state.questionResults.filter(Boolean).length;
}

function showFeedback(isCorrect, explanation) {
  elements.feedbackBox.classList.remove("hidden");
  elements.feedbackBox.classList.add(isCorrect ? "success" : "error");
  elements.feedbackBox.innerHTML = `
    <div class="feedback-reaction">
      <span class="feedback-emoji">${isCorrect ? UI_EMOJIS.success : UI_EMOJIS.error}</span>
      <strong class="feedback-title">${isCorrect ? "Yeah!" : "Oh no."}</strong>
    </div>
    <div>${isCorrect ? "Yeah, you got it." : "That is not correct. Check the hint to learn more."}</div>
    <div>${explanation}</div>
  `;
}

function playAnswerFeedback() {
  // Sound and spoken feedback were tried and removed by request. Kept as a no-op so the
  // existing call sites in checkAnswer()/submitWritingAnswer() don't need to change.
}

function renderReviewOptions() {
  const attempts = getSavedAttemptsForSelection();

  if (!state.selectedCategoryId) {
    elements.reviewSection.classList.add("hidden");
    elements.reviewLevelSelect.innerHTML = `<option value="">Choose a topic first</option>`;
    elements.reviewLevelSelect.disabled = true;
    elements.openReviewButton.disabled = true;
    elements.reviewEmpty.classList.remove("hidden");
    elements.reviewDetails.classList.add("hidden");
    return;
  }

  elements.reviewSection.classList.remove("hidden");

  if (attempts.length === 0) {
    elements.reviewLevelSelect.innerHTML = `<option value="">No saved levels yet</option>`;
    elements.reviewLevelSelect.disabled = true;
    elements.openReviewButton.disabled = true;
    elements.reviewEmpty.classList.remove("hidden");
    elements.reviewDetails.classList.add("hidden");
    return;
  }

  elements.reviewLevelSelect.disabled = false;
  elements.openReviewButton.disabled = false;
  elements.reviewLevelSelect.innerHTML = attempts
    .map((attempt) => `<option value="${attempt.level}">Level ${attempt.level} | Score ${attempt.score}/${QUESTIONS_PER_LEVEL}</option>`)
    .join("");
  elements.reviewEmpty.classList.add("hidden");
}

function renderResetTopicButton() {
  if (!elements.resetTopicProgressButton) {
    return;
  }

  if (!state.selectedCategoryId) {
    elements.resetTopicProgressButton.disabled = true;
    return;
  }

  const hasSavedAttempts = getSavedAttemptsForSelection().length > 0;
  elements.resetTopicProgressButton.disabled = !hasSavedAttempts;
}

function resetSelectedTopicProgress() {
  if (!state.selectedCategoryId) {
    return;
  }

  flushStudyTime();
  const activeContext = getActiveCategoryContext();
  const account = getCurrentAccount();
  const profile = getCurrentProfile();
  if (profile) {
    const gradeProgress = profile.progress?.[state.selectedGrade];
    if (!gradeProgress?.[activeContext.key]) {
      renderResetTopicButton();
      return;
    }

    delete gradeProgress[activeContext.key];
    if (Object.keys(gradeProgress).length === 0) {
      delete profile.progress[state.selectedGrade];
    }

    profile.scoreHistory = (profile.scoreHistory || []).filter((entry) => {
      return !(entry.grade === state.selectedGrade && entry.categoryId === activeContext.key);
    });
    clearStudyTimeForContext(profile.studyTime, activeContext.key);

    if (account?.type === "parent") {
      account.children[account.activeChildId] = profile;
      profilesStore.profiles[account.id] = account;
    } else {
      profilesStore.profiles[profile.id] = profile;
    }
    saveProfilesStore();

    queueSupabaseWrite(async (_client, ownerId) => {
      const progressOwnerId = getSupabaseProgressOwnerId(account, profile, ownerId);
      await deleteSupabaseProgressForCategory(
        progressOwnerId,
        account?.type === "parent" ? profile.supabaseChildId || null : null,
        state.selectedGrade,
        activeContext.key
      );
    });
  } else {
    ensureGuestStoreShape();
    const gradeProgress = guestStore.progress?.[state.selectedGrade];
    if (!gradeProgress?.[activeContext.key]) {
      renderResetTopicButton();
      return;
    }

    delete gradeProgress[activeContext.key];
    if (Object.keys(gradeProgress).length === 0) {
      delete guestStore.progress[state.selectedGrade];
    }

    guestStore.scoreHistory = (guestStore.scoreHistory || []).filter((entry) => {
      return !(entry.grade === state.selectedGrade && entry.categoryId === activeContext.key);
    });
    clearStudyTimeForContext(guestStore.studyTime, activeContext.key);
    saveGuestStore();
  }

  state.selectedLevel = null;
  state.currentQuestions = [];
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;
  state.lastResults = [];
  state.questionResults = [];
  clearCurrentResumeState();

  hideQuizViews();
  elements.reviewDetails.classList.add("hidden");
  elements.completedLevelsLabel.textContent = String(getCompletedLevelsCount(state.selectedGrade));
  renderLevels();
  renderReviewOptions();
  renderScoreHistory();
  renderStudyTime();
  showProfileMessage(`Saved progress for ${activeContext.title} was cleared. You can now start fresh from Level 1.`, "success");
}

function openSelectedReview() {
  if (!state.selectedCategoryId) {
    return;
  }

  const level = Number(elements.reviewLevelSelect.value);
  const activeContext = getActiveCategoryContext();
  const attempt = getSavedAttempt(state.selectedGrade, activeContext.key, level);
  if (!attempt) {
    return;
  }

  elements.reviewDetails.classList.remove("hidden");
  const reviewPrefix = isMasteryCategory(activeContext.category) ? "Cross-Grade Mastery" : `Grade ${state.selectedGrade}`;
  elements.reviewSummary.textContent = `${reviewPrefix} | ${activeContext.title} | Level ${level} | Score ${attempt.score}/${QUESTIONS_PER_LEVEL}`;
  elements.reviewBreakdown.innerHTML = attempt.results
    .map((result, index) => renderResultItem(result, index))
    .join("");
}

function renderResultItem(result, index) {
  return `
    <div class="result-item">
      <strong>Q${index + 1}: ${result.correct ? "Correct" : "Review needed"}</strong>
      <span>${result.prompt}</span>
      <span>Your answer: ${result.selectedAnswer}</span>
      <span>Correct answer: ${result.answer}</span>
      <span>${result.explanation}</span>
    </div>
  `;
}

function renderResultsDashboard(results, score) {
  if (!elements.resultsMetrics || !elements.resultsChart) {
    return;
  }

  const total = results.length || QUESTIONS_PER_LEVEL;
  const correct = results.filter((item) => item.correct).length;
  const wrong = Math.max(0, total - correct);
  const percentage = total ? Math.round((correct / total) * 100) : 0;

  elements.resultsMetrics.innerHTML = `
    <div class="results-metric-card">
      <span class="results-metric-label">Score</span>
      <strong>${score}/${total}</strong>
    </div>
    <div class="results-metric-card success">
      <span class="results-metric-label">Correct</span>
      <strong>${correct}</strong>
    </div>
    <div class="results-metric-card error">
      <span class="results-metric-label">Wrong</span>
      <strong>${wrong}</strong>
    </div>
    <div class="results-metric-card highlight">
      <span class="results-metric-label">Accuracy</span>
      <strong>${percentage}%</strong>
      <div class="results-accuracy-bar" aria-hidden="true">
        <div class="results-accuracy-fill" style="width:${percentage}%"></div>
      </div>
    </div>
  `;

  elements.resultsChart.innerHTML = results
    .map((result, index) => `
      <div class="results-chart-item ${result.correct ? "is-correct" : "is-wrong"}" title="Question ${index + 1}: ${result.correct ? "Correct" : "Wrong"}">
        <span class="results-chart-bar"></span>
        <small>Q${index + 1}</small>
      </div>
    `)
    .join("");
}

function getSelectedCategory() {
  return getCategoryById(state.selectedCategoryId, state.selectedGrade);
}

function getActiveCategoryContext() {
  const category = getSelectedCategory();
  const tab = getSelectedPatTabDefinition();
  if (!category) {
    return { key: "", title: "", category: null, tab: null };
  }

  if (isMasteryCategory(category)) {
    return {
      key: `${category.id}::from-grade-${state.selectedGrade}`,
      title: getContextDisplayTitle(category),
      category,
      tab: null
    };
  }

  if (!tab) {
    return { key: category.id, title: category.title, category, tab: null };
  }

  return {
    key: `${category.id}::${tab.id}`,
    title: `${category.title} - ${tab.label}`,
    category,
    tab
  };
}

function getQuestionBank(grade, categoryId, patTabId = null) {
  const cacheKey = `${grade}-${categoryId}-${patTabId || "base"}`;
  if (questionBankCache.has(cacheKey)) {
    return questionBankCache.get(cacheKey);
  }

  const category = getCategoryById(categoryId, grade);
  if (!category || !questionFactories[category.factory]) {
    return [];
  }
  const seedBase = hashCode(cacheKey);
  const bank = [];
  const seenPrompts = new Set();

  for (let index = 0; index < QUESTIONS_PER_TOPIC; index += 1) {
    const difficulty = Math.floor(index / QUESTIONS_PER_LEVEL) + 1;
    let question = null;

    // Reject duplicates across all five levels, not just within one level.
    // A different seed and a widely spaced index give template-based factories
    // enough variation to produce a genuinely different question.
    for (let attempt = 0; attempt < 20; attempt += 1) {
      const rng = mulberry32(seedBase + index * 977 + attempt * 7919 + 1);
      const candidateIndex = index + attempt;
      const candidate = safeGenerateQuestion(category, rng, grade, patTabId, candidateIndex, difficulty);
      const signature = normalizeQuestionPrompt(candidate?.prompt);
      if (candidate && signature && !seenPrompts.has(signature)) {
        question = candidate;
        seenPrompts.add(signature);
        break;
      }
    }

    if (!question) {
      const fallback = buildEmergencyQuestion(category, grade, difficulty, index);
      const signature = normalizeQuestionPrompt(fallback.prompt);
      question = seenPrompts.has(signature)
        ? uniquifyQuestionPrompt(fallback, index + 2)
        : fallback;
      seenPrompts.add(normalizeQuestionPrompt(question.prompt));
    }

    bank.push(question);
  }

  questionBankCache.set(cacheKey, bank);
  return bank;
}

function getQuestionsForLevel(grade, categoryId, patTabId = null, level = 1) {
  const cacheKey = `${grade}-${categoryId}-${patTabId || "base"}-level-${level}`;
  if (levelQuestionCache.has(cacheKey)) {
    return levelQuestionCache.get(cacheKey);
  }

  const category = getCategoryById(categoryId, grade);
  if (!category || !questionFactories[category.factory]) {
    return [];
  }

  const seedBase = hashCode(cacheKey);
  const difficulty = level;
  const bank = Array.from({ length: QUESTIONS_PER_LEVEL }, (_, questionIndex) => {
    const absoluteIndex = ((level - 1) * QUESTIONS_PER_LEVEL) + questionIndex;
    const rng = mulberry32(seedBase + questionIndex * 97 + 1);
    return safeGenerateQuestion(category, rng, grade, patTabId, absoluteIndex, difficulty)
      || buildEmergencyQuestion(category, grade, difficulty, absoluteIndex);
  });

  const uniqueBank = enforceUniqueQuestionPrompts(bank);
  levelQuestionCache.set(cacheKey, uniqueBank);
  return uniqueBank;
}

function renderTopicSearch() {
  if (!elements.topicSearchResults) {
    return;
  }

  const query = normalizeTopicSearchText(state.searchQuery || "");
  if (elements.topicSearchInput && elements.topicSearchInput.value !== state.searchQuery) {
    elements.topicSearchInput.value = state.searchQuery;
  }

  if (!query) {
    elements.topicSearchResults.innerHTML = "";
    return;
  }

  if (query.length < 2) {
    elements.topicSearchResults.innerHTML = `<div class="topic-search-empty">Type at least 2 letters to search.</div>`;
    return;
  }

  const results = searchTopicsAcrossGrades(query);
  if (!results.length) {
    elements.topicSearchResults.innerHTML = `<div class="topic-search-empty">No matches found. Try another keyword or a broader topic name.</div>`;
    return;
  }

  elements.topicSearchResults.innerHTML = results.map((result) => `
    <div class="topic-search-result">
      <strong>${escapeHtml(result.category.title)}</strong>
      <span>${escapeHtml(result.trackLabel)} | ${escapeHtml(formatSearchGradeLabel(result))}</span>
      <small>${escapeHtml(result.preview)}</small>
      <div class="topic-search-actions">
        <button type="button" class="secondary-button topic-search-action" data-action="open-topic" data-grade="${result.grade}" data-category-id="${escapeHtml(result.category.id)}">Open Topic</button>
      </div>
    </div>
  `).join("");
}

function buildTopicSearchCatalog() {
  const gradeEntries = grades.flatMap((grade) => {
    const categories = curriculum[grade] || [];
    return categories.flatMap((category) => {
      const tabs = getPatTabDefinitions(category.id, grade);
      const baseEntry = {
        grade,
        category,
        patTabId: null,
        searchableText: normalizeTopicSearchText(`${category.title} ${category.description}`),
        titleText: normalizeTopicSearchText(category.title),
        trackLabel: category.id.startsWith("english-") ? "English" : "Maths",
        preview: category.description
      };

      if (!tabs.length) {
        return [baseEntry];
      }

      return tabs.map((tab) => ({
        ...baseEntry,
        patTabId: tab.id,
        searchableText: normalizeTopicSearchText(`${category.title} ${category.description} ${tab.label} ${tab.description}`),
        titleText: normalizeTopicSearchText(`${category.title} ${tab.label}`),
        trackLabel: `${category.id.startsWith("english-") ? "English" : "Maths"} | ${tab.label}`,
        preview: tab.description
      }));
    });
  });

  const masteryEntries = grades.flatMap((grade) =>
    masteryTracks
      .filter((category) => {
        const minGrade = category.config?.minGrade || 1;
        const maxGrade = category.config?.maxGrade || 12;
        return grade >= minGrade && grade <= maxGrade;
      })
      .map((category) => ({
        grade,
        category,
        patTabId: null,
        searchableText: normalizeTopicSearchText(`${category.title} ${category.description} mastery across grades`),
        titleText: normalizeTopicSearchText(category.title),
        trackLabel: "Topic Mastery",
        preview: `${category.description} Starts from Grade ${grade}.`
      }))
  );

  return [...gradeEntries, ...masteryEntries];
}

function getTopicSearchCatalog() {
  if (!topicSearchCatalogCache) {
    topicSearchCatalogCache = buildTopicSearchCatalog();
  }
  return topicSearchCatalogCache;
}

function formatSearchGradeLabel(result) {
  if (isMasteryCategory(result.category)) {
    return `Starts at Grade ${result.grade}`;
  }
  return `Grade ${result.grade}`;
}

function searchTopicsForGrade(query, grade) {
  return getTopicSearchCatalog()
    .filter((entry) => entry.grade === grade && entry.searchableText.includes(query))
    .map((entry) => ({
      category: entry.category,
      patTabId: entry.patTabId,
      trackLabel: entry.trackLabel,
      level: null,
      preview: entry.preview,
      titleText: entry.titleText
    }))
    .sort((a, b) => {
      const aStarts = a.titleText.startsWith(query) ? 0 : 1;
      const bStarts = b.titleText.startsWith(query) ? 0 : 1;
      return aStarts - bStarts || a.category.title.localeCompare(b.category.title);
    });
}

function searchTopicsAcrossGrades(query) {
  return grades.flatMap((grade) =>
    searchTopicsForGrade(query, grade).map((result) => ({
      ...result,
      grade
    }))
  ).sort((a, b) => {
    const aStarts = (a.titleText || normalizeTopicSearchText(a.category.title)).startsWith(query) ? 0 : 1;
    const bStarts = (b.titleText || normalizeTopicSearchText(b.category.title)).startsWith(query) ? 0 : 1;
    return aStarts - bStarts || a.grade - b.grade || a.category.title.localeCompare(b.category.title);
  });
}

function clearTopicSearch() {
  state.searchQuery = "";
  if (elements.topicSearchInput) {
    elements.topicSearchInput.value = "";
  }
  renderTopicSearch();
}

function handleTopicSearchJump(event) {
  event.preventDefault();
  const button = event.target.closest("[data-action]");
  if (!button) {
    return;
  }

  const categoryId = button.dataset.categoryId;
  const targetGrade = Number(button.dataset.grade) || state.selectedGrade;
  if (!categoryId) {
    return;
  }

  flushStudyTime();
  state.selectedGrade = targetGrade;
  state.selectedCategoryId = categoryId;
  state.selectedPatTab = button.dataset.patTabId || getDefaultPatTabId(categoryId, targetGrade);
  state.selectedProbabilityMode = button.dataset.action === "open-level"
    ? "mastery"
    : getDefaultProbabilityMode(categoryId, targetGrade);
  state.selectedLevel = null;
  state.currentQuestions = [];
  clearCurrentResumeState();
  hideQuizViews();

  if (isMasteryCategoryId(categoryId)) {
    if (elements.masteryCategorySelect) {
      elements.masteryCategorySelect.value = categoryId;
    }
    if (elements.mathCategorySelect) {
      elements.mathCategorySelect.value = "";
    }
    if (elements.englishCategorySelect) {
      elements.englishCategorySelect.value = "";
    }
  } else if (categoryId.startsWith("english-")) {
    if (elements.englishCategorySelect) {
      elements.englishCategorySelect.value = categoryId;
    }
    if (elements.mathCategorySelect) {
      elements.mathCategorySelect.value = "";
    }
    if (elements.masteryCategorySelect) {
      elements.masteryCategorySelect.value = "";
    }
  } else {
    if (elements.mathCategorySelect) {
      elements.mathCategorySelect.value = categoryId;
    }
    if (elements.englishCategorySelect) {
      elements.englishCategorySelect.value = "";
    }
    if (elements.masteryCategorySelect) {
      elements.masteryCategorySelect.value = "";
    }
  }

  renderGradeButtons();
  renderCategories();
  renderLevels();
  renderReviewOptions();
  renderStudyTime();
  clearTopicSearch();

  if (button.dataset.action === "open-level") {
    const level = Number(button.dataset.level);
    if (level >= 1 && level <= LEVEL_COUNT) {
      startLevel(level);
    }
    return;
  }

  window.requestAnimationFrame(() => {
    elements.categoryCurrentCard?.classList.remove("hidden");
    (elements.categoryCurrentCard || elements.levelSection)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function normalizeTopicSearchText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s&-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildQuestionPreview(prompt) {
  const parts = splitQuestionPrompt(prompt);
  return parts.body || parts.instruction || prompt;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const CONFETTI_COLORS = ["#f43f5e", "#f59e0b", "#22c55e", "#3b82f6", "#a855f7", "#ec4899", "#06b6d4"];

function triggerConfetti(count = 24) {
  if (typeof document === "undefined") {
    return;
  }
  const fragment = document.createDocumentFragment();
  const pieces = [];
  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    const size = 6 + Math.random() * 8;
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.width = `${size}px`;
    piece.style.height = `${size}px`;
    piece.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    piece.style.animationDuration = `${1100 + Math.random() * 700}ms`;
    piece.style.animationDelay = `${Math.random() * 200}ms`;
    fragment.appendChild(piece);
    pieces.push(piece);
  }
  document.body.appendChild(fragment);
  window.setTimeout(() => {
    pieces.forEach((piece) => piece.remove());
  }, 2200);
}

function showCelebrationToast(message) {
  if (typeof document === "undefined") {
    return;
  }
  const toast = document.createElement("div");
  toast.className = "celebration-toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 1600);
}

function normalizeQuestionPrompt(prompt) {
  return String(prompt || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function isDecimalAnswerPrompt(prompt) {
  const text = String(prompt || "").toLowerCase();
  return text.includes("what decimal is equal to")
    || (text.includes("convert") && text.includes("to a decimal"))
    || (text.includes("write") && text.includes(" as a decimal"))
    || text.includes("which decimal is greatest");
}

function looksLikeDecimalOption(value) {
  return /^-?\d+(\.\d+)?$/.test(String(value || "").trim());
}

function hasBrokenQuestionText(value) {
  return /Ã|ðŸ|�/.test(String(value || ""));
}

function isPlaceholderChoiceLabel(value) {
  return /^choice\s+[a-z]$/i.test(String(value || "").trim());
}

function clearSavedResultForCurrentQuestion() {
  state.questionResults[state.currentIndex] = null;
  state.lastResults = state.questionResults
    .filter(Boolean)
    .map(({ selectedIndex: ignoredSelectedIndex, ...result }) => result);
  state.score = state.questionResults.filter((result) => result?.correct).length;
}

function ensureRenderableQuestion(question, questionIndex) {
  if (isValidQuestion(question)) {
    return question;
  }

  const rebuiltQuestion = generateLevelQuestionOnDemand(
    state.selectedGrade,
    state.selectedCategoryId,
    state.selectedPatTab,
    state.selectedLevel,
    questionIndex,
    state.currentQuestions.filter((item, index) => index !== questionIndex)
  );

  return isValidQuestion(rebuiltQuestion) ? rebuiltQuestion : null;
}

function isValidQuestion(question) {
  if (!question || typeof question.prompt !== "string" || !question.prompt.trim()) {
    return false;
  }

  if (hasBrokenQuestionText(question.prompt) || hasBrokenQuestionText(question.explanation) || hasBrokenQuestionText(question.hint)) {
    return false;
  }

  if (question.type === "writing") {
    return true;
  }

  const hasValidOptions = Array.isArray(question.options)
    && question.options.length === 4
    && Number.isInteger(question.answerIndex)
    && question.answerIndex >= 0
    && question.answerIndex < question.options.length;

  if (!hasValidOptions) {
    return false;
  }

  const normalizedOptions = question.options.map((option) => String(option || "").trim());
  if (normalizedOptions.some((option) => !option || hasBrokenQuestionText(option) || isPlaceholderChoiceLabel(option))) {
    return false;
  }

  if (new Set(normalizedOptions.map((option) => option.toLowerCase())).size !== normalizedOptions.length) {
    return false;
  }

  if (isDecimalAnswerPrompt(question.prompt)) {
    return question.options.every((option) => looksLikeDecimalOption(option));
  }

  return true;
}

function buildEmergencyQuestion(category, grade, difficulty, index) {
  if (category?.factory === "fractionsDecimalsPercent") {
    const fractionDecimalPool = [
      { fraction: "1/2", decimal: "0.5" },
      { fraction: "1/4", decimal: "0.25" },
      { fraction: "3/4", decimal: "0.75" },
      { fraction: "1/5", decimal: "0.2" },
      { fraction: "2/5", decimal: "0.4" },
      { fraction: "4/5", decimal: "0.8" }
    ];
    const selected = fractionDecimalPool[index % fractionDecimalPool.length];
    const { options, answerIndex } = buildOptions(
      selected.decimal,
      fractionDecimalPool.filter((item) => item.decimal !== selected.decimal).slice(0, 3).map((item) => item.decimal),
      mulberry32(hashCode(`fraction-decimal-fallback-${category.id}-${grade}-${difficulty}-${index}`))
    );
    return {
      prompt: `What decimal is equal to ${selected.fraction}?`,
      options,
      answerIndex,
      explanation: `${selected.fraction} is equal to ${selected.decimal} as a decimal.`,
      hint: "Divide the numerator by the denominator to write the fraction as a decimal."
    };
  }

  const fallbackRng = mulberry32(hashCode(`${category.id}-${grade}-${difficulty}-${index}`));
  const compareA = number(Math.max(5, grade * 2), Math.max(20, grade * 20), fallbackRng);
  const compareB = number(Math.max(5, grade * 2), Math.max(20, grade * 20), fallbackRng);
  const correct = compareA > compareB ? ">" : compareA < compareB ? "<" : "=";
  const { options, answerIndex } = buildOptions(correct, ["<", ">", "="].filter((item) => item !== correct), fallbackRng);
  return {
    prompt: `Which sign makes this true for ${category.title}: ${compareA} __ ${compareB}?`,
    options,
    answerIndex,
    explanation: `${compareA} ${correct} ${compareB}, so ${correct} is the correct sign.`,
    hint: "Compare the two numbers carefully from greatest to least."
  };
}

function getFractionsMasteryRoadmap(startGrade) {
  const masteryConfig = masteryTracks.find((track) => track.id === "mastery-fractions")?.config || {};
  const startFloor = masteryConfig.startGradeFloor || 2;
  const startCap = masteryConfig.startGradeCap || 7;
  const effectiveStartGrade = Math.max(startFloor, Math.min(startGrade, startCap));
  const roadmap = [
    { grade: 2, config: { stage: "basicFractions" } },
    { grade: 3, config: { stage: "basicFractions" } },
    { grade: 4, config: { stage: "fractionDecimalBridge" } },
    { grade: 5, config: { stage: "upperElementary" } },
    { grade: 6, config: { stage: "middleSchoolStart" } },
    { grade: 7, config: { stage: "middleSchoolStart" } }
  ].filter((step) => step.grade >= effectiveStartGrade);

  if (!roadmap.length) {
    return Array.from({ length: LEVEL_COUNT }, () => ({ grade: 7, config: { stage: "middleSchoolStart" } }));
  }

  while (roadmap.length < LEVEL_COUNT) {
    roadmap.push(roadmap[roadmap.length - 1]);
  }

  return roadmap.slice(0, LEVEL_COUNT);
}

function getMasteryRoadmapByTrack(trackId, startGrade, steps) {
  const masteryConfig = masteryTracks.find((track) => track.id === trackId)?.config || {};
  const startFloor = masteryConfig.startGradeFloor || 1;
  const startCap = masteryConfig.startGradeCap || 12;
  const effectiveStartGrade = Math.max(startFloor, Math.min(startGrade, startCap));
  const roadmap = steps.filter((step) => step.grade >= effectiveStartGrade);

  if (!roadmap.length) {
    return Array.from({ length: LEVEL_COUNT }, () => steps[steps.length - 1]);
  }

  while (roadmap.length < LEVEL_COUNT) {
    roadmap.push(roadmap[roadmap.length - 1]);
  }

  return roadmap.slice(0, LEVEL_COUNT);
}

function getNumbersMasteryRoadmap(startGrade) {
  return getMasteryRoadmapByTrack("mastery-numbers", startGrade, [
    { grade: 1, config: { min: 0, max: 100 } },
    { grade: 2, config: { min: 10, max: 1000 } },
    { grade: 3, config: { min: 100, max: 10000 } },
    { grade: 4, config: { min: 100, max: 100000 } },
    { grade: 5, config: { min: 1000, max: 1000000 } }
  ]);
}

function getMeasurementMasteryRoadmap(startGrade) {
  return getMasteryRoadmapByTrack("mastery-measurement", startGrade, [
    { grade: 1, config: { level: 1 } },
    { grade: 3, config: { level: 3 } },
    { grade: 5, config: { level: 5 } },
    { grade: 7, config: { level: 7 } },
    { grade: 10, config: { level: 10 } }
  ]);
}

function getGeometryMasteryRoadmap(startGrade) {
  return getMasteryRoadmapByTrack("mastery-geometry", startGrade, [
    { grade: 2, config: { level: 2 } },
    { grade: 4, config: { level: 4 } },
    { grade: 6, config: { level: 6 } },
    { grade: 8, config: { level: 8 } },
    { grade: 10, config: { level: 10 } }
  ]);
}

function getAlgebraMasteryRoadmap(startGrade) {
  return getMasteryRoadmapByTrack("mastery-algebra", startGrade, [
    { grade: 6, config: { level: 6 } },
    { grade: 7, config: { level: 7 } },
    { grade: 8, config: { level: 8 } },
    { grade: 10, config: { level: 10 } },
    { grade: 12, config: { level: 12 } }
  ]);
}

function getDataMasteryRoadmap(startGrade) {
  return getMasteryRoadmapByTrack("mastery-data", startGrade, [
    { grade: 6, config: { level: 6 } },
    { grade: 7, config: { level: 7 } },
    { grade: 8, config: { level: 8 } },
    { grade: 10, config: { level: 10 } },
    { grade: 12, config: { level: 12 } }
  ]);
}

function getEnglishMasteryRoadmap(trackId, startGrade) {
  return getMasteryRoadmapByTrack(trackId, startGrade, [
    { grade: 1, config: {} },
    { grade: 4, config: {} },
    { grade: 7, config: {} },
    { grade: 9, config: {} },
    { grade: 12, config: {} }
  ]);
}

function buildCrossGradeMasteryQuestion(domain, rng, grade, index, difficulty) {
  if (domain === "fractions") {
    const roadmap = getFractionsMasteryRoadmap(grade);
    const targetStep = roadmap[Math.max(0, Math.min(roadmap.length - 1, difficulty - 1))];
    const localDifficulty = Math.min(10, Math.max(1, difficulty + Math.max(0, targetStep.grade - grade)));
    return questionFactories.fractionsDecimalsPercent(rng, targetStep.grade, targetStep.config, index, localDifficulty);
  }

  if (domain === "numbers") {
    const roadmap = getNumbersMasteryRoadmap(grade);
    const targetStep = roadmap[Math.max(0, Math.min(roadmap.length - 1, difficulty - 1))];
    const localDifficulty = Math.min(10, Math.max(1, difficulty + Math.max(0, targetStep.grade - grade)));
    return questionFactories.numberSense(rng, targetStep.grade, targetStep.config, index, localDifficulty);
  }

  if (domain === "measurement") {
    const roadmap = getMeasurementMasteryRoadmap(grade);
    const targetStep = roadmap[Math.max(0, Math.min(roadmap.length - 1, difficulty - 1))];
    const localDifficulty = Math.min(10, Math.max(1, difficulty + Math.max(0, targetStep.grade - grade)));
    return questionFactories.measurement(rng, targetStep.grade, targetStep.config, index, localDifficulty);
  }

  if (domain === "geometry") {
    const roadmap = getGeometryMasteryRoadmap(grade);
    const targetStep = roadmap[Math.max(0, Math.min(roadmap.length - 1, difficulty - 1))];
    const localDifficulty = Math.min(10, Math.max(1, difficulty + Math.max(0, targetStep.grade - grade)));
    return questionFactories.geometry(rng, targetStep.grade, targetStep.config, index, localDifficulty);
  }

  if (domain === "algebra") {
    const roadmap = getAlgebraMasteryRoadmap(grade);
    const targetStep = roadmap[Math.max(0, Math.min(roadmap.length - 1, difficulty - 1))];
    const localDifficulty = Math.min(10, Math.max(1, difficulty + Math.max(0, targetStep.grade - grade)));
    return questionFactories.algebra(rng, targetStep.grade, targetStep.config, index, localDifficulty);
  }

  if (domain === "data") {
    const roadmap = getDataMasteryRoadmap(grade);
    const targetStep = roadmap[Math.max(0, Math.min(roadmap.length - 1, difficulty - 1))];
    const localDifficulty = Math.min(10, Math.max(1, difficulty + Math.max(0, targetStep.grade - grade)));
    return questionFactories.statisticsProbability(rng, targetStep.grade, targetStep.config, index, localDifficulty);
  }

  if (domain === "grammar") {
    const roadmap = getEnglishMasteryRoadmap("mastery-grammar", grade);
    const targetStep = roadmap[Math.max(0, Math.min(roadmap.length - 1, difficulty - 1))];
    return questionFactories.englishGrammar(rng, targetStep.grade, targetStep.config, index, Math.min(10, difficulty + Math.max(0, Math.floor((targetStep.grade - grade) / 2))));
  }

  if (domain === "vocabulary") {
    const roadmap = getEnglishMasteryRoadmap("mastery-vocabulary", grade);
    const targetStep = roadmap[Math.max(0, Math.min(roadmap.length - 1, difficulty - 1))];
    return questionFactories.englishVocabulary(rng, targetStep.grade, targetStep.config, index, Math.min(10, difficulty + Math.max(0, Math.floor((targetStep.grade - grade) / 2))));
  }

  if (domain === "writing") {
    const roadmap = getEnglishMasteryRoadmap("mastery-writing", grade);
    const targetStep = roadmap[Math.max(0, Math.min(roadmap.length - 1, difficulty - 1))];
    return questionFactories.englishWriting(rng, targetStep.grade, targetStep.config, index, Math.min(10, difficulty + Math.max(0, Math.floor((targetStep.grade - grade) / 2))));
  }

  return null;
}

function safeGenerateQuestion(category, rng, grade, patTabId, index, difficulty) {
  try {
    const rawQuestion = questionFactories[category.factory](rng, grade, { ...category.config, patTabId }, index, difficulty);
    const question = ensureQuestionHint(category.factory, rawQuestion, difficulty, category.config);
    return isValidQuestion(question) ? question : null;
  } catch (error) {
    return null;
  }
}

function uniquifyQuestionPrompt(question, occurrence) {
  const prompt = String(question.prompt || "").trim();
  if (!prompt) {
    return question;
  }

  const replacements = [
    (text) => text.replace(/^Which\b/i, "Select which"),
    (text) => text.replace(/^What is\b/i, "Find"),
    (text) => text.replace(/^What\b/i, "Choose what"),
    (text) => text.replace(/^Choose\b/i, "Select"),
    (text) => text.replace(/^A\b/i, "Practice: a")
  ];

  // Try the word-swap variants first (keeps phrasing natural), but always fall
  // back to a guaranteed-different prefix so this can never produce the same
  // text twice in a row (that would stall the caller's dedup loop forever).
  const variantBuilder = replacements[Math.min(occurrence - 1, replacements.length - 1)];
  const variant = variantBuilder(prompt);
  const nextPrompt = variant !== prompt ? variant : `Practice version ${occurrence}: ${prompt}`;

  return {
    ...question,
    prompt: nextPrompt
  };
}

function enforceUniqueQuestionPrompts(bank) {
  const seen = new Map();

  return bank.map((question) => {
    let nextQuestion = question;
    let normalizedPrompt = normalizeQuestionPrompt(nextQuestion.prompt);
    let occurrence = (seen.get(normalizedPrompt) || 0) + 1;
    let safetyCounter = 0;

    while (occurrence > 1 && safetyCounter < 25) {
      nextQuestion = uniquifyQuestionPrompt(nextQuestion, occurrence);
      normalizedPrompt = normalizeQuestionPrompt(nextQuestion.prompt);
      occurrence = (seen.get(normalizedPrompt) || 0) + 1;
      safetyCounter += 1;
    }

    seen.set(normalizedPrompt, occurrence);
    return nextQuestion;
  });
}

function ensureQuestionHint(factoryName, question, difficulty, config = {}) {
  if (question.hint) {
    return question;
  }

  return {
    ...question,
    hint: buildMathHint(factoryName, question.prompt, difficulty, config)
  };
}

function buildMathHint(factoryName, prompt, difficulty, config = {}) {
  switch (factoryName) {
    case "numberSense":
      if (/Round /.test(prompt)) {
        return "Look at the digit to the right of the place you are rounding to. If it is 5 or more, round up.";
      }
      if (/Fill in the missing number/.test(prompt)) {
        return "Check how the numbers are counting. Look at the difference between the numbers you can see.";
      }
      return "Compare the numbers carefully and look at place value from left to right.";
    case "additionSubtraction":
      return difficulty <= 4
        ? "Line up the numbers and count carefully. Check whether the question is asking you to add or subtract."
        : "Work step by step and watch for regrouping or borrowing if the numbers are larger.";
    case "multiplicationDivision":
      return / x /.test(prompt)
        ? "Think of multiplication as equal groups or repeated addition."
        : "Use the fact family. Ask yourself what number times the divisor gives the dividend.";
    case "fractionsDecimalsPercent":
      if (/Convert .*% to a decimal/.test(prompt)) {
        return "Percent means out of 100, so move the decimal two places to the left.";
      }
      if (/as a decimal/.test(prompt) || /What decimal is equal/.test(prompt)) {
        return "A fraction becomes a decimal when you divide the numerator by the denominator.";
      }
      return "Look at the whole, then compare how many parts are chosen out of the total equal parts.";
    case "measurement":
      if (/area/.test(prompt.toLowerCase())) {
        return "For a rectangle, multiply length by width. Keep the square units.";
      }
      if (/time/.test(prompt.toLowerCase()) || /say the time/.test(prompt.toLowerCase())) {
        return "Notice whether the minutes show o'clock, quarter past, half past, or quarter to.";
      }
      return "Compare the measurements carefully and pay attention to what the question is asking you to find.";
    case "geometry":
      if (/surface area/i.test(prompt)) {
        return "Surface area means add the area of every outside face.";
      }
      if (/volume/i.test(prompt)) {
        return "Volume tells how much space is inside a solid. For a cube, multiply side x side x side.";
      }
      if (/hypotenuse/i.test(prompt)) {
        return "Use the Pythagorean theorem: square the legs, add them, then take the square root.";
      }
      if (/angle/i.test(prompt.toLowerCase())) {
        return "Compare the angle to 90 degrees: less than 90 is acute, 90 is right, more than 90 is obtuse.";
      }
      return "Use the shape facts you know, like number of sides, angle size, or the correct geometry formula.";
    case "patternsData":
      return /pattern/i.test(prompt)
        ? "Find how the numbers are changing each time, then use the same rule once more."
        : "Add or compare the data values carefully before choosing the answer.";
    case "algebra":
      if (/Solve:/.test(prompt)) {
        return "Undo the operation on x by doing the opposite operation to both sides.";
      }
      if (/Simplify:/.test(prompt)) {
        return "Combine only like terms. Terms with the same variable can be added together.";
      }
      return "Substitute the value in place of the variable, then follow the order of operations.";
    case "statisticsProbability":
      if (/mean/i.test(prompt)) {
        return "Add all the values, then divide by how many values there are.";
      }
      return "Probability is favorable outcomes over total outcomes. Count the total equally likely outcomes first.";
    case "integersRational":
      return "Watch the signs carefully. A minus beside a negative number can change the operation.";
    case "ratiosProportions":
      return "Keep the ratio balanced by multiplying or dividing both parts by the same number.";
    case "functionsGraphing":
      return /what is y when x/i.test(prompt.toLowerCase()) || /what is f\(/i.test(prompt.toLowerCase()) || /what is g\(/i.test(prompt.toLowerCase())
        ? "Substitute the given x-value into the rule, then simplify step by step."
        : "Use the rule carefully and check the order of operations.";
    case "trigonometry":
      return "Use the special-angle values you know from triangles or the unit circle.";
    case "calculus":
      return "Use the power rule: bring the exponent down, then subtract 1 from the exponent.";
    case "financialMath":
      if (/discount/i.test(prompt.toLowerCase())) {
        return "Find the percent off, then subtract it from the original price or multiply by 1 minus the discount rate.";
      }
      return "For simple interest, use principal x rate x time. Convert the percent to a decimal if needed.";
    default:
      return "Break the question into steps and use the math rule or formula that matches the topic.";
  }
}

function loadProfilesStore() {
  try {
    const stored = JSON.parse(localStorage.getItem(profilesStoreKey));
    return stored && typeof stored === "object"
      ? { currentProfileId: stored.currentProfileId || null, profiles: stored.profiles || {} }
      : { currentProfileId: null, profiles: {} };
  } catch (error) {
    return { currentProfileId: null, profiles: {} };
  }
}

function loadGuestStore() {
  try {
    const stored = JSON.parse(localStorage.getItem(guestStoreKey));
    return stored && typeof stored === "object"
      ? { progress: stored.progress || {}, scoreHistory: stored.scoreHistory || [], studyTime: stored.studyTime || null, resumeState: stored.resumeState || null }
      : { progress: {}, scoreHistory: [], studyTime: null, resumeState: null };
  } catch (error) {
    return { progress: {}, scoreHistory: [], studyTime: null, resumeState: null };
  }
}

function saveProfilesStore() {
  try {
    localStorage.setItem(profilesStoreKey, JSON.stringify(profilesStore));
    lastProfilesStoreError = "";
    return true;
  } catch (error) {
    lastProfilesStoreError = error?.message || "Could not save this profile in browser storage.";
    console.error("Saving profiles store failed", error);
    return false;
  }
}

function saveGuestStore() {
  localStorage.setItem(guestStoreKey, JSON.stringify(guestStore));
}

function populateProfileGradeOptions() {
  const options = grades
    .map((grade) => `<option value="${grade}">Grade ${grade}</option>`)
    .join("");
  elements.profileGradeInput.innerHTML = options;
  if (elements.childGradeInput) {
    elements.childGradeInput.innerHTML = options;
  }
}

function applyCurrentProfile() {
  flushStudyTime();
  state.currentProfileId = profilesStore.currentProfileId;
  const profile = getCurrentProfile();

  if (profile) {
    state.selectedGrade = profile.grade;
    elements.profileGradeInput.value = String(profile.grade);
    if (elements.childGradeInput) {
      elements.childGradeInput.value = String(profile.grade);
    }
  } else {
    state.selectedGrade = 1;
    elements.profileGradeInput.value = "1";
    if (elements.childGradeInput) {
      elements.childGradeInput.value = "1";
    }
  }

  renderProfilePanel();
  renderAccountFormMode();
  renderReviewOptions();
  renderScoreHistory();
  renderStudyTime();
  renderHeroActivity();
}

function renderProfilePanel() {
  const account = getCurrentAccount();
  const learner = getCurrentProfile();
  const loginEmail = account?.type === "parent"
    ? state.supabaseUserEmail || "Parent signs in with email"
    : learner?.childEmail || state.supabaseUserEmail || "Not linked yet";

  if (account) {
    elements.profileNameLabel.textContent = account.name;
    elements.profileTypeLabel.textContent = account.type === "parent" ? "Parent account" : "Learner account";
    elements.profileChildLabel.textContent = learner ? learner.name : account.type === "parent" ? "No child selected" : account.name;
    elements.profileGradeLabel.textContent = learner ? `Grade ${learner.grade}` : "Not set";
    if (elements.profileEmailLabel) {
      elements.profileEmailLabel.textContent = loginEmail;
    }
    elements.saveStatusLabel.textContent = learner
      ? account.type === "parent" ? `${account.name} / ${learner.name}` : learner.name
      : account.name;
    elements.logoutProfileButton.classList.remove("hidden");
    elements.parentPanel?.classList.toggle("hidden", account.type !== "parent" || state.childViewMode);
    if (elements.openAccountToolsButton) {
      if (account.type === "parent" && !state.childViewMode) {
        elements.openAccountToolsButton.textContent = "Manage Learners";
        elements.openAccountToolsButton.classList.remove("hidden");
      } else {
        elements.openAccountToolsButton.textContent = "Profile";
        elements.openAccountToolsButton.classList.remove("hidden");
      }
    }
    if (account.type !== "parent") {
      setAccountToolsVisible(false);
      setParentDashboardVisible(false);
    }
    if (elements.profileRoleInput) {
      elements.profileRoleInput.value = account.type || "learner";
    }
    if (elements.profileNameInput) {
      elements.profileNameInput.value = account.name || "";
    }
    if (elements.profileEmailInput) {
      elements.profileEmailInput.value = state.supabaseUserEmail || learner?.childEmail || "";
    }
    if (elements.profileGradeInput) {
      elements.profileGradeInput.value = String(learner?.grade || account.grade || state.selectedGrade || 1);
    }
    renderParentPanel(account);
  } else {
    elements.profileNameLabel.textContent = "Guest";
    elements.profileTypeLabel.textContent = "Guest";
    elements.profileChildLabel.textContent = "Guest";
    elements.profileGradeLabel.textContent = "Not set";
    if (elements.profileEmailLabel) {
      elements.profileEmailLabel.textContent = "Not linked yet";
    }
    elements.saveStatusLabel.textContent = "Guest browser";
    elements.logoutProfileButton.classList.add("hidden");
    elements.parentPanel?.classList.add("hidden");
    if (elements.openAccountToolsButton) {
      // Guests need a visible way in now that the separate online Parent/Learner Login
      // links are gone â€” this is the only entry point to the local Create Profile / Log In form.
      elements.openAccountToolsButton.textContent = "Sign In / Sign Up";
      elements.openAccountToolsButton.classList.remove("hidden");
    }
    if (elements.profileRoleInput) {
      elements.profileRoleInput.value = "learner";
    }
    if (elements.profileNameInput) {
      elements.profileNameInput.value = "";
    }
    if (elements.profileEmailInput) {
      elements.profileEmailInput.value = "";
    }
    if (elements.profileGradeInput) {
      elements.profileGradeInput.value = String(state.selectedGrade || 1);
    }
    renderParentPanel(null);
  }

  renderHeaderAccountBadge(account, learner);
  renderAvatarSection();
  renderAccountFormMode();
}

// Shows who's actually using the app right now in the top header. In child view mode this
// swaps from the parent's name to the active learner's own name and avatar (which the learner
// can change themselves via the "Change Photo" control) so a kid handed the device sees their
// own identity up top, not their parent's.
function renderHeaderAccountBadge(account, learner) {
  const showingChild = Boolean(state.childViewMode && account?.type === "parent" && learner);
  const learnerInControl = account?.type === "learner" ? learner : showingChild ? learner : null;
  const displayName = learnerInControl ? learnerInControl.name : null;
  const avatarDataUrl = learnerInControl ? learnerInControl.avatarDataUrl || "" : "";

  if (elements.authAccountName) {
    elements.authAccountName.textContent = showingChild ? (displayName || "Learner") : account?.name || "Guest";
  }
  if (elements.authAccountMeta) {
    if (showingChild) {
      elements.authAccountMeta.textContent = `Grade ${learner.grade}`;
    } else if (account) {
      // This app has two separate parent login systems (a local, device-only login and an
      // email-based online login) that do NOT share data with each other. Spelling out which
      // one is active makes it obvious when a child was added under the "other" account.
      const accountSource = isSupabaseProfileId(account.id)
        ? state.supabaseSessionActive
          ? state.supabaseUserEmail || "signed in online"
          : `${state.supabaseUserEmail || account.name} (session expired - sign in again to sync learners)`
        : `${account.name} (saved on this device only)`;
      elements.authAccountMeta.textContent = account.type === "parent"
        ? `Parent account · ${accountSource}`
        : "Learner account";
    } else {
      elements.authAccountMeta.textContent = "Open login to continue";
    }
  }

  if (elements.headerAccountAvatar && elements.headerAccountAvatarPlaceholder) {
    if (learnerInControl && avatarDataUrl) {
      elements.headerAccountAvatar.src = avatarDataUrl;
      elements.headerAccountAvatar.alt = displayName || "Learner avatar";
      elements.headerAccountAvatar.classList.remove("hidden");
      elements.headerAccountAvatarPlaceholder.classList.add("hidden");
    } else if (learnerInControl) {
      elements.headerAccountAvatarPlaceholder.textContent = (displayName || "?").charAt(0).toUpperCase();
      elements.headerAccountAvatarPlaceholder.classList.remove("hidden");
      elements.headerAccountAvatar.classList.add("hidden");
    } else {
      elements.headerAccountAvatar.classList.add("hidden");
      elements.headerAccountAvatarPlaceholder.classList.add("hidden");
    }
  }

  elements.headerAvatarUploadLabel?.classList.toggle("hidden", !learnerInControl);
  elements.logoutAuthButton?.classList.toggle("hidden", !account || state.childViewMode);
  if (elements.openAccountToolsButton) {
    elements.openAccountToolsButton.classList.toggle("hidden", Boolean(account && state.childViewMode));
  }
}

function renderAccountFormMode() {
  if (!elements.profileRoleInput || !elements.profileGradeInput) {
    return;
  }
  const account = getCurrentAccount();
  const selectedRole = account?.type || elements.profileRoleInput.value || "learner";
  const isParentMode = selectedRole === "parent";
  const hasSignedInAccount = Boolean(account);

  elements.profileRoleInput.value = selectedRole;
  elements.profileRoleInput.disabled = hasSignedInAccount;
  elements.profileNameInput.placeholder = isParentMode ? "Enter account name" : "Enter learner name";
  elements.profileEmailGroup?.classList.toggle("hidden", !hasSignedInAccount);
  if (elements.profileEmailInput) {
    elements.profileEmailInput.disabled = !hasSignedInAccount;
  }
  elements.profileGradeInput.disabled = isParentMode;
  elements.profileGradeGroup?.classList.toggle("hidden", isParentMode);
  elements.profilePasswordGroup?.classList.toggle("hidden", hasSignedInAccount);
  elements.profilePasswordInput.disabled = hasSignedInAccount;
  elements.saveProfileButton?.classList.toggle("hidden", !hasSignedInAccount);
  elements.createProfileButton?.classList.toggle("hidden", hasSignedInAccount);
  elements.loginProfileButton?.classList.toggle("hidden", hasSignedInAccount);

  if (elements.profileFormNote) {
    elements.profileFormNote.textContent = hasSignedInAccount
      ? isParentMode
        ? "Update the parent account name and login email here. Child names, grades, and linked learner emails are managed below."
        : "Update the learner name, login email, and grade here. The parent connects to this learner using this same login email."
      : "Create or log in to an account here. Once signed in, this area becomes your profile editor.";
  }
}

async function handleSaveProfileSettings() {
  const account = getCurrentAccount();
  if (!account) {
    showProfileMessage("Log in first, then update the profile here.", "error");
    return;
  }

  const nextName = elements.profileNameInput?.value.trim();
  const currentEmail = state.supabaseUserEmail || "";
  const nextEmail = elements.profileEmailInput?.value.trim() || currentEmail;
  const nextGrade = Number(elements.profileGradeInput?.value || state.selectedGrade || 1);
  if (!nextName) {
    showProfileMessage("Enter a name before saving the profile.", "error");
    return;
  }
  if (!nextEmail) {
    showProfileMessage("Enter the login email before saving the profile.", "error");
    return;
  }

  account.name = nextName;
  if (account.type !== "parent") {
    account.grade = nextGrade;
    account.childEmail = nextEmail;
    state.selectedGrade = nextGrade;
  }

  profilesStore.profiles[account.id] = account;
  saveProfilesStore();

  if (account.type !== "parent") {
    renderGradeButtons();
    renderCategories();
  }
  renderProfilePanel();
  renderReviewOptions();
  renderScoreHistory();
  renderStudyTime();
  renderHeroActivity();

  const client = getSupabaseClient();
  if (client && state.supabaseUserId && isSupabaseProfileId(account.id)) {
    try {
      const metadata = {
        user_name: account.name,
        account_type: account.type,
        grade: account.type === "learner" ? Number(account.grade || nextGrade || 1) : null
      };
      const updatePayload = { data: metadata };
      const emailChanged = Boolean(nextEmail && nextEmail !== currentEmail);
      if (emailChanged) {
        updatePayload.email = nextEmail;
      }

      const { error: authUpdateError } = await client.auth.updateUser(updatePayload);
      if (authUpdateError) {
        throw authUpdateError;
      }

      if (emailChanged) {
        await updateLinkedChildEmailForLearner(state.supabaseUserId, nextEmail);
        state.supabaseUserEmail = nextEmail;
      }

      await ensureSupabaseProfileRow(account, {
        id: state.supabaseUserId,
        email: nextEmail || state.supabaseUserEmail
      });
    } catch (error) {
      console.error("Profile update sync failed", error);
      showProfileMessage("Profile saved on this device, but Supabase sync needs another try.", "error");
      return;
    }
  }

  const emailChanged = Boolean(nextEmail && nextEmail !== currentEmail);
  showProfileMessage(
    emailChanged
      ? "Profile updated. If Supabase asks for email confirmation, please confirm the new email."
      : account.type === "parent" ? "Parent profile updated." : "Learner profile updated.",
    "success"
  );
}

function renderParentPanel(account) {
  if (!elements.parentChildSelect || !elements.parentKidsDashboard) {
    return;
  }

  if (!account || account.type !== "parent") {
    elements.parentChildSelect.innerHTML = `<option value="">No child selected</option>`;
    elements.parentChildSelect.disabled = true;
    elements.switchChildButton && (elements.switchChildButton.disabled = true);
    elements.deleteChildButton?.classList.add("hidden");
    elements.parentKidsDashboard.innerHTML = `<div class="history-empty">Create or open a parent account to view children here.</div>`;
    setChildPhotoPreview("");
    elements.headerChildSelectLabel?.classList.add("hidden");
    elements.headerChildSelect?.classList.add("hidden");
    elements.headerChildSwitchButton?.classList.add("hidden");
    return;
  }

  const childEntries = Object.values(account.children || {});
  const editorChildId = state.parentEditorChildId && account.children?.[state.parentEditorChildId]
    ? state.parentEditorChildId
    : "";
  // The auto-created "self" profile (see ensureSelfLearnerProfile) is a personal view mode for
  // the account holder, not a real learner someone added â€” it stays out of the parent-facing
  // Manage Learners list and Family Dashboard so it doesn't clutter or get confused with actual
  // children. It's still reachable through the header's "Switch to Learner" control below,
  // which uses childEntries (including it), not this filtered list.
  const showHeaderChildSwitchControls = childEntries.length > 0;

  if (isSupabaseProfileId(account.id) && state.supabaseSessionActive && !state.supabaseChildRecoveryInFlight) {
    recoverParentChildrenFromSupabase(account);
  }

  if (elements.headerChildSelect) {
    elements.headerChildSelectLabel?.classList.toggle("hidden", !showHeaderChildSwitchControls);
    elements.headerChildSelect.classList.toggle("hidden", !showHeaderChildSwitchControls);
    elements.headerChildSelect.innerHTML = childEntries
      .map((child) => `<option value="${child.id}" ${child.id === account.activeChildId ? "selected" : ""}>${escapeHtml(child.name)}</option>`)
      .join("");
  }
  elements.headerChildSwitchButton?.classList.toggle("hidden", !showHeaderChildSwitchControls);

  if (!childEntries.length) {
    if (isSupabaseProfileId(account.id) && state.supabaseSessionActive) {
      recoverParentChildrenFromSupabase(account);
    }
    elements.parentChildSelect.innerHTML = `<option value="">No children added yet</option>`;
    elements.parentChildSelect.disabled = true;
    elements.switchChildButton && (elements.switchChildButton.disabled = true);
    elements.deleteChildButton?.classList.add("hidden");
    elements.parentKidsDashboard.innerHTML = `<div class="history-empty">Add a child to start tracking progress.</div>`;
    setChildPhotoPreview("");
    return;
  }

  elements.parentChildSelect.disabled = false;
  elements.switchChildButton && (elements.switchChildButton.disabled = false);
  elements.parentChildSelect.innerHTML = [`<option value="" ${!editorChildId ? "selected" : ""}>Add new learner</option>`]
    .concat(childEntries.map((child) => `<option value="${child.id}" ${child.id === editorChildId ? "selected" : ""}>${child.name} | Grade ${child.grade}</option>`))
    .join("");

  const childCountLabel = `<p class="profile-note">${childEntries.length} ${childEntries.length === 1 ? "child" : "children"} saved to this account.</p>`;
  elements.parentKidsDashboard.innerHTML = childCountLabel + childEntries
    .map((child) => {
      const totalLevels = countCompletedLevelsFromProgress(child.progress || {});
      const lastEntry = Array.isArray(child.scoreHistory) && child.scoreHistory.length ? child.scoreHistory[0] : null;
      const totalSeconds = getTotalStudySeconds(child.studyTime);
      return `
        <div class="parent-kid-card ${child.id === account.activeChildId ? "is-active" : ""}">
          <div class="parent-kid-head">
            ${child.avatarDataUrl ? `<img class="parent-kid-avatar" src="${child.avatarDataUrl}" alt="${escapeHtml(child.name)}" />` : `<div class="parent-kid-avatar parent-kid-avatar--placeholder">${escapeHtml((child.name || "?").charAt(0).toUpperCase())}</div>`}
            <div>
              <strong>${escapeHtml(child.name)}</strong>
              <small>${escapeHtml(child.childEmail || "Learner profile")}</small>
            </div>
          </div>
          <div class="parent-kid-meta">
            <span>Grade ${child.grade}</span>
            <span>${totalLevels} completed</span>
            <span>${lastEntry ? `Last score ${lastEntry.score}/${QUESTIONS_PER_LEVEL}` : "No score yet"}</span>
            <span>${formatStudyTime(totalSeconds)} studied</span>
          </div>
          <small>${lastEntry ? `Last activity: ${escapeHtml(lastEntry.categoryTitle)} on ${formatDateTime(lastEntry.completedAt)}` : "No activity saved yet."}</small>
        </div>
      `;
    })
    .join("");

  const activeChild = editorChildId ? account.children[editorChildId] : null;
  if (activeChild) {
    elements.childNameInput && (elements.childNameInput.value = activeChild.name || "");
    elements.childGradeInput && (elements.childGradeInput.value = String(activeChild.grade || state.selectedGrade || 1));
    elements.childEmailInput && (elements.childEmailInput.value = activeChild.childEmail || "");
    setChildPhotoPreview(activeChild.avatarDataUrl || "");

    elements.childUsernameGroup?.classList.add("hidden");
    if (elements.childUsernameInput) {
      elements.childUsernameInput.value = "";
      elements.childUsernameInput.disabled = true;
    }
    if (elements.childPasswordInput) {
      elements.childPasswordInput.value = "";
      elements.childPasswordInput.disabled = false;
      elements.childPasswordInput.placeholder = "Enter a new learner password";
    }
    if (elements.childUsernameNote) {
      elements.childUsernameNote.textContent = "Update the learner name, grade, photo, or learner password here. Learners use their password to switch into their own profile.";
    }
    elements.deleteChildButton?.classList.remove("hidden");
  } else {
    clearProfileFields();
    if (elements.childGradeInput) {
      elements.childGradeInput.value = String(state.selectedGrade || 1);
    }
    if (elements.childUsernameInput) {
      elements.childUsernameInput.value = "";
      elements.childUsernameInput.disabled = true;
    }
    elements.childUsernameGroup?.classList.add("hidden");
    if (elements.childPasswordInput) {
      elements.childPasswordInput.disabled = false;
      elements.childPasswordInput.placeholder = "Set a learner password";
    }
    if (elements.childUsernameNote) {
      elements.childUsernameNote.textContent = "Add a new learner here. A learner password is required so they can switch into their own profile later.";
    }
    elements.deleteChildButton?.classList.add("hidden");
  }

  renderParentDashboard();
}

function handleParentDashboardLearnerClick(event) {
  const button = event.target.closest("[data-parent-dashboard-child]");
  if (!button) {
    return;
  }

  const childId = button.getAttribute("data-parent-dashboard-child");
  const account = getCurrentAccount();
  if (!account || account.type !== "parent" || !childId || !account.children?.[childId]) {
    return;
  }

  account.activeChildId = childId;
  state.parentEditorChildId = childId;
  profilesStore.profiles[account.id] = account;
  saveProfilesStore();
  applyCurrentProfile();
  showProfileMessage(`Now viewing ${account.children[childId].name}'s family dashboard.`, "success");
}

async function askLearnerPassword(actionLabel, learnerName) {
  const promptLabel = learnerName
    ? `Enter ${learnerName}'s learner password to ${actionLabel}.`
    : `Enter the learner password to ${actionLabel}.`;

  if (!elements.parentPasswordModal || !elements.parentPasswordModalInput) {
    return window.prompt(promptLabel);
  }

  return new Promise((resolve) => {
    if (elements.parentPasswordModalTitle) {
      elements.parentPasswordModalTitle.textContent = "Enter learner password";
    }
    if (elements.parentPasswordModalMessage) {
      elements.parentPasswordModalMessage.textContent = promptLabel;
    }
    elements.parentPasswordModalInput.value = "";
    elements.parentPasswordModalInput.placeholder = "Learner password";
    if (elements.parentPasswordModalError) {
      elements.parentPasswordModalError.textContent = "";
      elements.parentPasswordModalError.classList.add("hidden");
    }
    elements.parentPasswordModal.classList.remove("hidden");

    let settled = false;
    const cleanup = () => {
      elements.parentPasswordModal.classList.add("hidden");
      elements.parentPasswordModalSubmit?.removeEventListener("click", onSubmit);
      elements.parentPasswordModalCancel?.removeEventListener("click", onCancel);
      elements.parentPasswordModalOverlay?.removeEventListener("click", onCancel);
      elements.parentPasswordModalInput?.removeEventListener("keydown", onKeydown);
    };
    const finish = (value) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      resolve(value);
    };
    const onSubmit = () => finish(elements.parentPasswordModalInput.value);
    const onCancel = () => finish("");
    const onKeydown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        onSubmit();
      }
      if (event.key === "Escape") {
        event.preventDefault();
        onCancel();
      }
    };

    elements.parentPasswordModalSubmit?.addEventListener("click", onSubmit);
    elements.parentPasswordModalCancel?.addEventListener("click", onCancel);
    elements.parentPasswordModalOverlay?.addEventListener("click", onCancel);
    elements.parentPasswordModalInput?.addEventListener("keydown", onKeydown);
    window.requestAnimationFrame(() => {
      elements.parentPasswordModalInput?.focus();
    });
  });
}

async function verifyLearnerPasswordForSwitch(childId, actionLabel = "open this learner") {
  const account = getCurrentAccount();
  if (!account || account.type !== "parent" || !childId || !account.children?.[childId]) {
    return false;
  }

  const learner = account.children[childId];
  const savedCredential = getLearnerPasswordCredential(account.id, childId, learner.name);
  const cloudCredential = decodeLearnerCredential(learner.childUsername);
  const recoveredCredential = learner.passwordHash || cloudCredential || savedCredential;
  if (recoveredCredential && learner.passwordHash !== recoveredCredential) {
    learner.passwordHash = recoveredCredential;
    learner.childUsername = encodeLearnerCredential(recoveredCredential, learner.id);
    account.children[childId] = learner;
    profilesStore.profiles[account.id] = account;
    saveProfilesStore();
  }
  if (!learner.passwordHash) {
    state.parentEditorChildId = childId;
    setAccountToolsVisible(true);
    renderParentPanel(account);
    showProfileMessage(`${learner.name} does not have a learner password saved yet. Enter one in Learner Password, then click Save Selected Child.`, "error");
    return false;
  }

  const password = await askLearnerPassword(actionLabel, learner.name);
  if (!password) {
    showProfileMessage("Learner password is required to switch profiles.", "error");
    return false;
  }

  const matches = learner.passwordHash === hashPassword(password);
  if (!matches) {
    showProfileMessage(`That learner password is not correct for ${learner.name}.`, "error");
  }
  return matches;
}

function handleParentChildEditorChange() {
  const account = getCurrentAccount();
  if (!account || account.type !== "parent") {
    return;
  }

  const childId = elements.parentChildSelect?.value || "";
  state.parentEditorChildId = childId || null;

  if (childId && account.children?.[childId]) {
    account.activeChildId = childId;
    profilesStore.profiles[account.id] = account;
    saveProfilesStore();
  }

  renderProfilePanel();
}

function getAverageScorePercentage(scoreHistory) {
  if (!Array.isArray(scoreHistory) || !scoreHistory.length) {
    return 0;
  }
  const total = scoreHistory.reduce((sum, entry) => sum + Number(entry.percentage || 0), 0);
  return Math.round(total / scoreHistory.length);
}

function getTodayCompletedLevels(scoreHistory) {
  const todayKey = getTodayKey();
  return (scoreHistory || []).reduce((count, entry) => {
    return count + (formatDayKeyFromValue(entry.completedAt) === todayKey ? 1 : 0);
  }, 0);
}

function getTodayCompletedLevelsBySubject(scoreHistory, subjectFocus = "math") {
  const todayKey = getTodayKey();
  return (scoreHistory || []).reduce((count, entry) => {
    if (formatDayKeyFromValue(entry.completedAt) !== todayKey) {
      return count;
    }
    return count + (getCategorySubject(entry.grade, entry.categoryId) === subjectFocus ? 1 : 0);
  }, 0);
}

function getWeeklySeconds(studyTime) {
  if (!studyTime || typeof studyTime !== "object") {
    return 0;
  }
  ensureStudyTimeShape(studyTime);
  const dayItems = getPastSevenDaysActivity(studyTime.byDay || {}, []);
  return dayItems.reduce((sum, item) => sum + Number(item.seconds || 0), 0);
}

function getStudyStreakDays(studyTime) {
  if (!studyTime || typeof studyTime !== "object") {
    return 0;
  }
  ensureStudyTimeShape(studyTime);

  let streak = 0;
  for (let offset = 0; offset < 365; offset += 1) {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - offset);
    const key = buildDayKey(date);
    const seconds = Number(studyTime.byDay?.[key] || 0);
    if (seconds > 0) {
      streak += 1;
      continue;
    }
    break;
  }
  return streak;
}

function getWeeklyAverageSeconds(studyTime) {
  return Math.round(getWeeklySeconds(studyTime) / 7);
}

function getTodaySubjectSeconds(studyTime, subjectFocus = "math", scoreHistory = []) {
  if (!studyTime || typeof studyTime !== "object") {
    return 0;
  }

  ensureStudyTimeShape(studyTime);
  const todayKey = getTodayKey();
  const todaySubjectMap = studyTime.byDaySubject?.[todayKey] || {};
  const todaySubjectSeconds = Number(todaySubjectMap?.[subjectFocus] || 0);
  if (todaySubjectSeconds > 0) {
    return todaySubjectSeconds;
  }

  const todayTotalSeconds = Number(studyTime.byDay?.[todayKey] || 0);
  if (todayTotalSeconds <= 0) {
    return 0;
  }

  const hasAnyTrackedSubject = Object.values(todaySubjectMap).some((value) => Number(value || 0) > 0);
  if (hasAnyTrackedSubject) {
    return 0;
  }

  const todayEntries = (scoreHistory || []).filter((entry) => formatDayKeyFromValue(entry.completedAt) === todayKey);
  if (!todayEntries.length) {
    return 0;
  }

  const subjectsSeen = new Set(todayEntries.map((entry) => getCategorySubject(entry.grade, entry.categoryId)));
  if (subjectsSeen.size === 1 && subjectsSeen.has(subjectFocus)) {
    return todayTotalSeconds;
  }

  return 0;
}

function getCategorySubject(grade, categoryId) {
  const normalizedId = String(categoryId || "");
  if (!normalizedId) {
    return "math";
  }
  if (normalizedId.startsWith("english-")) {
    return "english";
  }
  const category = getCategoryById(normalizedId, grade);
  if (String(category?.factory || "").startsWith("english")) {
    return "english";
  }
  return "math";
}

function createSubjectSummary() {
  return {
    math: { levels: 0, timeSeconds: 0, totalPercentage: 0, scoredLevels: 0, averagePercentage: 0 },
    english: { levels: 0, timeSeconds: 0, totalPercentage: 0, scoredLevels: 0, averagePercentage: 0 }
  };
}

function formatGoalSubjectLabel(subjectFocus) {
  return String(subjectFocus || "math") === "english" ? "English only" : "Math only";
}

function formatGoalSubjectShortLabel(subjectFocus) {
  return String(subjectFocus || "math") === "english" ? "English" : "Maths";
}

function createSubjectGoal(minutes = 0, levels = 0, enabled = false) {
  return {
    dailyMinutes: Number(minutes || 0),
    dailyLevels: Number(levels || 0),
    enabled: Boolean(enabled)
  };
}

function getNormalizedSubjectGoal(goal) {
  if (!goal || typeof goal !== "object") {
    return createSubjectGoal();
  }
  return createSubjectGoal(
    Number.isFinite(Number(goal.dailyMinutes)) ? Number(goal.dailyMinutes) : 0,
    Number.isFinite(Number(goal.dailyLevels)) ? Number(goal.dailyLevels) : 0,
    Boolean(goal.enabled)
  );
}

function getLearnerGoalBucket(goals, subjectFocus = "math") {
  const subjectKey = String(subjectFocus || "math") === "english" ? "english" : "math";
  return getNormalizedSubjectGoal(goals?.subjects?.[subjectKey]);
}

function formatSubjectGoalSummary(subjectLabel, goal) {
  const normalized = getNormalizedSubjectGoal(goal);
  if (!normalized.enabled) {
    return `${subjectLabel} not set yet`;
  }
  return `${subjectLabel} ${normalized.dailyMinutes} minutes | ${normalized.dailyLevels} unit${normalized.dailyLevels === 1 ? "" : "s"}`;
}

function getSubjectProgressSummary(profile) {
  const summary = createSubjectSummary();
  const progress = profile?.progress || {};
  const studyTime = profile?.studyTime || createEmptyStudyTime();
  ensureStudyTimeShape(studyTime);

  Object.entries(progress).forEach(([gradeKey, gradeProgress]) => {
    Object.entries(gradeProgress || {}).forEach(([categoryId, levelEntries]) => {
      const subject = getCategorySubject(Number(gradeKey), categoryId);
      const bucket = summary[subject] || summary.math;
      Object.values(levelEntries || {}).forEach((attempt) => {
        bucket.levels += 1;
        const score = Number(attempt?.score || 0);
        bucket.totalPercentage += Math.round((score / QUESTIONS_PER_LEVEL) * 100);
        bucket.scoredLevels += 1;
      });
    });
  });

  Object.entries(studyTime.byCourse || {}).forEach(([categoryId, seconds]) => {
    const subject = getCategorySubject(state.selectedGrade, categoryId);
    const bucket = summary[subject] || summary.math;
    bucket.timeSeconds += Number(seconds || 0);
  });

  Object.values(summary).forEach((bucket) => {
    bucket.averagePercentage = bucket.scoredLevels
      ? Math.round(bucket.totalPercentage / bucket.scoredLevels)
      : 0;
  });

  return summary;
}

function getTopicAnalytics(profile) {
  const analyticsByCategory = new Map();
  const progress = profile?.progress || {};
  const studyTime = profile?.studyTime || createEmptyStudyTime();
  ensureStudyTimeShape(studyTime);

  Object.entries(progress).forEach(([gradeKey, gradeProgress]) => {
    Object.entries(gradeProgress || {}).forEach(([categoryId, levelEntries]) => {
      const attempts = Object.values(levelEntries || {});
      if (!attempts.length) {
        return;
      }
      const analyticsKey = `${gradeKey}::${categoryId}`;
      const existing = analyticsByCategory.get(analyticsKey) || {
        analyticsKey,
        categoryId,
        title: resolveCategoryTitle(Number(gradeKey), categoryId, categoryId),
        grade: Number(gradeKey),
        attempts: 0,
        bestScore: 0,
        bestPercentage: 0,
        timeSeconds: 0
      };
      existing.attempts += attempts.length;
      attempts.forEach((attempt) => {
        const score = Number(attempt?.score || 0);
        const percentage = Math.round((score / QUESTIONS_PER_LEVEL) * 100);
        existing.bestScore = Math.max(existing.bestScore, score);
        existing.bestPercentage = Math.max(existing.bestPercentage, percentage);
      });
      existing.timeSeconds += Number(studyTime.byCourse?.[categoryId] || 0);
      analyticsByCategory.set(analyticsKey, existing);
    });
  });

  return [...analyticsByCategory.values()].sort((left, right) => {
    if (right.bestPercentage !== left.bestPercentage) {
      return right.bestPercentage - left.bestPercentage;
    }
    return right.attempts - left.attempts;
  });
}

function getWeakestTopics(profile, { threshold = WEAK_TOPIC_THRESHOLD, limit = 6 } = {}) {
  const topicAnalytics = getTopicAnalytics(profile);
  const weak = topicAnalytics.filter((item) => item.bestPercentage < threshold);
  weak.sort((left, right) => {
    if (left.bestPercentage !== right.bestPercentage) {
      return left.bestPercentage - right.bestPercentage;
    }
    return right.attempts - left.attempts;
  });
  return weak.slice(0, limit);
}

function renderMiniActivityChart(target, studyTime, scoreHistory) {
  if (!target) {
    return;
  }

  ensureStudyTimeShape(studyTime);
  const dayItems = getPastSevenDaysActivity(studyTime.byDay || {}, scoreHistory || []);
  const maxSeconds = Math.max(...dayItems.map((item) => item.seconds), 0);
  target.innerHTML = dayItems
    .map((item) => {
      const height = maxSeconds > 0 ? Math.max(10, Math.round((item.seconds / maxSeconds) * 100)) : 10;
      return `
        <div class="hero-activity-day">
          <div class="hero-activity-meta">
            <span class="hero-activity-time">${formatCompactStudyTime(item.seconds)}</span>
            <span class="hero-activity-achievement">${item.levelsCompleted} done</span>
          </div>
          <div class="hero-activity-bar-wrap">
            <div class="hero-activity-bar ${item.seconds === 0 ? "is-empty" : ""}" style="height:${height}px"></div>
          </div>
          <span class="hero-activity-label">${item.label}</span>
        </div>
      `;
    })
    .join("");
}

function renderSubjectProgressChart(target, subjectSummary) {
  if (!target) {
    return;
  }

  const math = subjectSummary?.math || createSubjectSummary().math;
  const english = subjectSummary?.english || createSubjectSummary().english;
  const maxTime = Math.max(math.timeSeconds, english.timeSeconds, 1);
  const maxLevels = Math.max(math.levels, english.levels, 1);

  const subjects = [
    {
      key: "math",
      label: "Maths",
      timeSeconds: math.timeSeconds,
      levels: math.levels,
      averagePercentage: math.averagePercentage
    },
    {
      key: "english",
      label: "English",
      timeSeconds: english.timeSeconds,
      levels: english.levels,
      averagePercentage: english.averagePercentage
    }
  ];

  target.innerHTML = subjects
    .map((item) => {
      const timeWidth = Math.max(8, Math.round((item.timeSeconds / maxTime) * 100));
      const levelWidth = Math.max(8, Math.round((item.levels / maxLevels) * 100));
      return `
        <div class="subject-progress-chart-row subject-progress-chart-row--${item.key}">
          <div class="subject-progress-chart-label">
            <strong>${item.label}</strong>
            <small>${item.averagePercentage}% avg score</small>
          </div>
          <div class="subject-progress-chart-bars">
            <div class="subject-progress-chart-line">
              <span>Time</span>
              <div class="subject-progress-chart-track">
                <div class="subject-progress-chart-fill subject-progress-chart-fill--time" style="width:${timeWidth}%"></div>
              </div>
              <strong>${formatCompactStudyTime(item.timeSeconds)}</strong>
            </div>
            <div class="subject-progress-chart-line">
              <span>Levels</span>
              <div class="subject-progress-chart-track">
                <div class="subject-progress-chart-fill subject-progress-chart-fill--levels" style="width:${levelWidth}%"></div>
              </div>
              <strong>${item.levels}</strong>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function getGoalProgressPercent(actual, target) {
  const safeTarget = Number(target || 0);
  if (safeTarget <= 0) {
    return 0;
  }
  return Math.max(0, Math.min(100, Math.round((Number(actual || 0) / safeTarget) * 100)));
}

function setGoalProgressBar(element, actual, target) {
  if (!element) {
    return;
  }
  element.style.width = `${getGoalProgressPercent(actual, target)}%`;
}

function syncInputValueIfNotFocused(element, nextValue) {
  if (!element) {
    return;
  }

  if (document.activeElement === element) {
    return;
  }

  const normalized = String(nextValue);
  if (element.value !== normalized) {
    element.value = normalized;
  }
}

function renderParentDashboard() {
  const account = getCurrentAccount();
  if (!elements.parentDashboardSection) {
    return;
  }

  const isParent = account?.type === "parent" && !state.childViewMode;
  elements.parentDashboardSection.classList.toggle("hidden", !isParent);
  if (!isParent) {
    return;
  }

  // The auto-created "self" profile (see ensureSelfLearnerProfile) is excluded here too â€” the
  // Family Dashboard is for tracking real children a parent added, not the account holder's own
  // practice mode.
  const childEntries = Object.values(account.children || {});
  const localOnlyChildren = childEntries.filter((child) => !child?.supabaseChildId);
  const selectedChildId = (account.activeChildId && account.children[account.activeChildId] ? account.activeChildId : null) || childEntries[0]?.id || "";
  const activeChild = selectedChildId ? account.children?.[selectedChildId] : null;

  if (elements.parentDashboardSyncSummary) {
    if (!childEntries.length) {
      elements.parentDashboardSyncSummary.textContent = "No learners yet.";
    } else if (!localOnlyChildren.length) {
      elements.parentDashboardSyncSummary.textContent = `${childEntries.length} learner${childEntries.length === 1 ? "" : "s"} saved to account.`;
    } else {
      elements.parentDashboardSyncSummary.textContent = `${localOnlyChildren.length} learner${localOnlyChildren.length === 1 ? "" : "s"} only on this browser. Save them to your account to see them on other devices.`;
    }
  }

  if (elements.syncParentDashboardButton) {
    const canSyncParentLearners = isSupabaseProfileId(account.id) && state.supabaseSessionActive && localOnlyChildren.length > 0;
    elements.syncParentDashboardButton.classList.toggle("hidden", !canSyncParentLearners);
  }

  if (!childEntries.length || !activeChild) {
    if (isSupabaseProfileId(account.id) && state.supabaseSessionActive) {
      recoverParentChildrenFromSupabase(account);
    }
    elements.parentDashboardEmpty?.classList.remove("hidden");
    elements.parentDashboardBody?.classList.add("hidden");
    return;
  }

  elements.parentDashboardEmpty?.classList.add("hidden");
  elements.parentDashboardBody?.classList.remove("hidden");

  if (elements.parentDashboardLearnerGrid) {
    elements.parentDashboardLearnerGrid.innerHTML = childEntries
      .map((child) => `
        <button type="button" class="parent-dashboard-learner-card ${child.id === selectedChildId ? "is-active" : ""}" data-parent-dashboard-child="${child.id}">
          ${child.avatarDataUrl
            ? `<img class="parent-dashboard-learner-photo" src="${child.avatarDataUrl}" alt="${escapeHtml(child.name)}" />`
            : `<div class="parent-dashboard-learner-photo parent-dashboard-learner-photo--placeholder">${escapeHtml((child.name || "?").charAt(0).toUpperCase())}</div>`}
          <strong>${escapeHtml(child.name)}</strong>
          <small>Grade ${child.grade}</small>
        </button>
      `)
      .join("");
  }

  const totalStudy = getTotalStudySeconds(activeChild.studyTime);
  const weeklyStudy = getWeeklySeconds(activeChild.studyTime);
  const completedLevels = countCompletedLevelsFromProgress(activeChild.progress || {});
  const averageScore = getAverageScorePercentage(activeChild.scoreHistory || []);
  const topicAnalytics = getTopicAnalytics(activeChild);
  const subjectSummary = getSubjectProgressSummary(activeChild);
  const goals = activeChild.goals || createEmptyLearnerGoals();
  const selectedSubject = ["math", "english"].includes(String(goals.selectedSubject || "math"))
    ? String(goals.selectedSubject || "math")
    : "math";
  const selectedGoal = getLearnerGoalBucket(goals, selectedSubject);
  const mathGoal = getLearnerGoalBucket(goals, "math");
  const englishGoal = getLearnerGoalBucket(goals, "english");
  const todayMathSeconds = getTodaySubjectSeconds(activeChild.studyTime, "math", activeChild.scoreHistory || []);
  const todayEnglishSeconds = getTodaySubjectSeconds(activeChild.studyTime, "english", activeChild.scoreHistory || []);
  const todayMathMinutes = Math.round(todayMathSeconds / 60);
  const todayEnglishMinutes = Math.round(todayEnglishSeconds / 60);
  const todayMathLevels = getTodayCompletedLevelsBySubject(activeChild.scoreHistory || [], "math");
  const todayEnglishLevels = getTodayCompletedLevelsBySubject(activeChild.scoreHistory || [], "english");
  const streakDays = getStudyStreakDays(activeChild.studyTime);
  const weekAverageSeconds = getWeeklyAverageSeconds(activeChild.studyTime);

  if (elements.parentDashboardName) {
    elements.parentDashboardName.textContent = activeChild.name;
  }
  if (elements.parentDashboardAvatar) {
    if (activeChild.avatarDataUrl) {
      elements.parentDashboardAvatar.innerHTML = `<img src="${activeChild.avatarDataUrl}" alt="${escapeHtml(activeChild.name)}" />`;
      elements.parentDashboardAvatar.classList.remove("parent-dashboard-avatar--placeholder");
    } else {
      elements.parentDashboardAvatar.textContent = (activeChild.name || "?").charAt(0).toUpperCase();
      elements.parentDashboardAvatar.classList.add("parent-dashboard-avatar--placeholder");
    }
  }
  elements.parentDashboardTotalTime && (elements.parentDashboardTotalTime.textContent = formatStudyTime(totalStudy));
  elements.parentDashboardWeekTime && (elements.parentDashboardWeekTime.textContent = formatStudyTime(weeklyStudy));
  elements.parentDashboardLevels && (elements.parentDashboardLevels.textContent = String(completedLevels));
  elements.parentDashboardAverage && (elements.parentDashboardAverage.textContent = `${averageScore}%`);
  elements.parentDashboardStreak && (elements.parentDashboardStreak.textContent = `${streakDays} day${streakDays === 1 ? "" : "s"}`);
  elements.parentDashboardWeekAverage && (elements.parentDashboardWeekAverage.textContent = formatCompactStudyTime(weekAverageSeconds));

  renderMiniActivityChart(elements.parentDashboardChart, activeChild.studyTime || createEmptyStudyTime(), activeChild.scoreHistory || []);
  renderSubjectProgressChart(elements.parentGoalSubjectChart, subjectSummary);

  const goalDraftKey = `${activeChild.id}:${selectedSubject}`;
  if (state.parentGoalDraftKey !== goalDraftKey || !state.parentGoalDraftDirty) {
    syncInputValueIfNotFocused(elements.parentGoalDailyMinutesInput, Number(selectedGoal.dailyMinutes || 0));
    syncInputValueIfNotFocused(elements.parentGoalDailyLevelsInput, Number(selectedGoal.dailyLevels || 0));
    state.parentGoalDraftKey = goalDraftKey;
  }
  syncInputValueIfNotFocused(elements.parentGoalSubjectInput, selectedSubject);
  if (elements.parentGoalEditorName) {
    elements.parentGoalEditorName.textContent = `Editing goals for: ${activeChild.name}`;
  }
  if (elements.parentGoalEditorCurrent) {
    elements.parentGoalEditorCurrent.textContent = `Current goals: ${formatSubjectGoalSummary("Maths", mathGoal)} | ${formatSubjectGoalSummary("English", englishGoal)}`;
  }
  if (elements.parentGoalMathMinutesStatus) {
    elements.parentGoalMathMinutesStatus.textContent = mathGoal.enabled
      ? `${todayMathMinutes}m / ${Number(mathGoal.dailyMinutes || 0)}m`
      : "Not set";
  }
  if (elements.parentGoalMathLevelsStatus) {
    elements.parentGoalMathLevelsStatus.textContent = mathGoal.enabled
      ? `${todayMathLevels} / ${Number(mathGoal.dailyLevels || 0)}`
      : "Not set";
  }
  if (elements.parentGoalEnglishMinutesStatus) {
    elements.parentGoalEnglishMinutesStatus.textContent = englishGoal.enabled
      ? `${todayEnglishMinutes}m / ${Number(englishGoal.dailyMinutes || 0)}m`
      : "Not set";
  }
  if (elements.parentGoalEnglishLevelsStatus) {
    elements.parentGoalEnglishLevelsStatus.textContent = englishGoal.enabled
      ? `${todayEnglishLevels} / ${Number(englishGoal.dailyLevels || 0)}`
      : "Not set";
  }
  if (elements.parentGoalMathStatus) {
    elements.parentGoalMathStatus.textContent = `${subjectSummary.math.levels} levels | ${formatCompactStudyTime(subjectSummary.math.timeSeconds)}`;
  }
  if (elements.parentGoalMathMeta) {
    elements.parentGoalMathMeta.textContent = `${subjectSummary.math.averagePercentage}% average score`;
  }
  if (elements.parentGoalEnglishStatus) {
    elements.parentGoalEnglishStatus.textContent = `${subjectSummary.english.levels} levels | ${formatCompactStudyTime(subjectSummary.english.timeSeconds)}`;
  }
  if (elements.parentGoalEnglishMeta) {
    elements.parentGoalEnglishMeta.textContent = `${subjectSummary.english.averagePercentage}% average score`;
  }

  setGoalProgressBar(elements.parentGoalMathMinutesBar, mathGoal.enabled ? todayMathMinutes : 0, mathGoal.dailyMinutes);
  setGoalProgressBar(elements.parentGoalMathLevelsBar, mathGoal.enabled ? todayMathLevels : 0, mathGoal.dailyLevels);
  setGoalProgressBar(elements.parentGoalEnglishMinutesBar, englishGoal.enabled ? todayEnglishMinutes : 0, englishGoal.dailyMinutes);
  setGoalProgressBar(elements.parentGoalEnglishLevelsBar, englishGoal.enabled ? todayEnglishLevels : 0, englishGoal.dailyLevels);

  if (elements.parentDashboardAnalysis) {
    if (!topicAnalytics.length) {
      elements.parentDashboardAnalysis.innerHTML = `<div class="history-empty">This learner has not completed any topic yet.</div>`;
    } else {
      elements.parentDashboardAnalysis.innerHTML = `
        <div class="parent-dashboard-analysis-table">
          <div class="parent-dashboard-analysis-head">Topic</div>
          <div class="parent-dashboard-analysis-head">Grade</div>
          <div class="parent-dashboard-analysis-head">Attempts</div>
          <div class="parent-dashboard-analysis-head">Best Score</div>
          <div class="parent-dashboard-analysis-head">Study Time</div>
          ${topicAnalytics.slice(0, 12).map((item) => `
            <div class="parent-dashboard-analysis-cell">${escapeHtml(item.title)}</div>
            <div class="parent-dashboard-analysis-cell">Grade ${item.grade}</div>
            <div class="parent-dashboard-analysis-cell">${item.attempts}</div>
            <div class="parent-dashboard-analysis-cell">${item.bestScore}/${QUESTIONS_PER_LEVEL} (${item.bestPercentage}%)</div>
            <div class="parent-dashboard-analysis-cell">${formatStudyTime(item.timeSeconds)}</div>
          `).join("")}
        </div>
      `;
    }
  }

  if (elements.parentDashboardWeakAreas) {
    const weakTopics = getWeakestTopics(activeChild);
    if (!topicAnalytics.length) {
      elements.parentDashboardWeakAreas.innerHTML = `<div class="history-empty">This learner has not completed any topic yet.</div>`;
    } else if (!weakTopics.length) {
      elements.parentDashboardWeakAreas.innerHTML = `<div class="history-empty">Nice work - every topic is scoring ${WEAK_TOPIC_THRESHOLD}% or higher.</div>`;
    } else {
      elements.parentDashboardWeakAreas.innerHTML = `
        <div class="parent-dashboard-analysis-table">
          <div class="parent-dashboard-analysis-head">Topic</div>
          <div class="parent-dashboard-analysis-head">Grade</div>
          <div class="parent-dashboard-analysis-head">Attempts</div>
          <div class="parent-dashboard-analysis-head">Best Score</div>
          <div class="parent-dashboard-analysis-head">Study Time</div>
          ${weakTopics.map((item) => `
            <div class="parent-dashboard-analysis-cell parent-dashboard-analysis-cell--weak">${escapeHtml(item.title)}</div>
            <div class="parent-dashboard-analysis-cell">Grade ${item.grade}</div>
            <div class="parent-dashboard-analysis-cell">${item.attempts}</div>
            <div class="parent-dashboard-analysis-cell parent-dashboard-analysis-cell--weak">${item.bestScore}/${QUESTIONS_PER_LEVEL} (${item.bestPercentage}%)</div>
            <div class="parent-dashboard-analysis-cell">${formatStudyTime(item.timeSeconds)}</div>
          `).join("")}
        </div>
      `;
    }
  }
}

function handleParentGoalSubjectChange() {
  const account = getCurrentAccount();
  const activeChild = account?.activeChildId ? account.children?.[account.activeChildId] : null;
  if (!activeChild || account?.type !== "parent" || state.childViewMode) {
    return;
  }

  ensureLearnerShape(activeChild);
  const selectedSubject = elements.parentGoalSubjectInput?.value === "english" ? "english" : "math";
  activeChild.goals.selectedSubject = selectedSubject;
  state.parentGoalDraftKey = `${activeChild.id}:${selectedSubject}`;
  state.parentGoalDraftDirty = false;
  const selectedGoal = getLearnerGoalBucket(activeChild.goals, selectedSubject);
  if (elements.parentGoalDailyMinutesInput) {
    elements.parentGoalDailyMinutesInput.value = String(selectedGoal.dailyMinutes || 0);
  }
  if (elements.parentGoalDailyLevelsInput) {
    elements.parentGoalDailyLevelsInput.value = String(selectedGoal.dailyLevels || 0);
  }
  profilesStore.profiles[account.id] = account;
  saveProfilesStore();
}

function handleSaveParentGoals() {
  const account = getCurrentAccount();
  if (!account || account.type !== "parent" || state.childViewMode) {
    showProfileMessage("Open the parent dashboard to save learner goals.", "error");
    return;
  }

  const activeChildId = account.activeChildId;
  const activeChild = activeChildId ? account.children?.[activeChildId] : null;
  if (!activeChild) {
    showProfileMessage("Choose a learner before saving goals.", "error");
    return;
  }

  ensureLearnerShape(activeChild);
  const subjectFocus = String(elements.parentGoalSubjectInput?.value || "math");
  const dailyMinutes = Math.max(0, Number(elements.parentGoalDailyMinutesInput?.value || 0));
  const dailyLevels = Math.max(0, Number(elements.parentGoalDailyLevelsInput?.value || 0));
  const applyToAllLearners = Boolean(elements.parentGoalsApplyAllInput?.checked);

  const targetChildren = applyToAllLearners
    ? Object.values(account.children || {})
    : [activeChild];

  targetChildren.forEach((child) => {
    ensureLearnerShape(child);
    const selectedSubject = ["math", "english"].includes(subjectFocus) ? subjectFocus : "math";
    child.goals.selectedSubject = selectedSubject;
    if (!child.goals.subjects || typeof child.goals.subjects !== "object") {
      child.goals.subjects = {
        math: createSubjectGoal(),
        english: createSubjectGoal()
      };
    }
    child.goals.subjects[selectedSubject] = createSubjectGoal(dailyMinutes, dailyLevels, true);
    account.children[child.id] = child;
  });

  profilesStore.profiles[account.id] = account;
  saveProfilesStore();
  state.parentGoalDraftKey = `${activeChild.id}:${subjectFocus === "english" ? "english" : "math"}`;
  state.parentGoalDraftDirty = false;
  if (elements.parentGoalsApplyAllInput) {
    elements.parentGoalsApplyAllInput.checked = false;
  }
  renderParentDashboard();
  showProfileMessage(
    applyToAllLearners
      ? "Goals saved for all learners."
      : `Goals saved for ${activeChild.name}.`,
    "success"
  );
}

async function handleAddChild() {
  try {
    const account = getCurrentAccount();
    if (!account || account.type !== "parent") {
      showProfileMessage("Log in to a parent account before adding children.", "error");
      return;
    }

    const signedInSupabaseParent = isSupabaseProfileId(account.id);
    if (signedInSupabaseParent) {
      const activeSessionUser = await getSupabaseSessionUser();
      if (!activeSessionUser?.id) {
        renderProfilePanel();
        renderHeroActivity();
        showProfileMessage("Your online parent session expired on this page. Sign in again before adding learners so they save to Supabase across browsers.", "error");
        return;
      }
    }

    const childName = elements.childNameInput?.value.trim();
    const childGrade = Number(elements.childGradeInput?.value || state.selectedGrade || 1);
    const childEmail = elements.childEmailInput?.value.trim() || "";
    const childPassword = elements.childPasswordInput?.value || "";
    const avatarDataUrl = elements.childPhotoPreview?.getAttribute("src") || "";

    if (!childName) {
      showProfileMessage("Enter the child's name before adding them.", "error");
      return;
    }
    if (!childPassword) {
      showProfileMessage("Set a learner password before adding this learner.", "error");
      return;
    }

    const childId = buildProfileId(childName);
    const editorChildId = state.parentEditorChildId || elements.parentChildSelect?.value || "";
    const activeEditorChild = editorChildId ? account.children?.[editorChildId] : null;
    const isEditingExistingChild = Boolean(activeEditorChild);
    if (account.children[childId] && (!isEditingExistingChild || childId !== editorChildId)) {
      const existingChild = account.children[childId];
      if (!existingChild.supabaseChildId) {
        const retrySessionUser = await getSupabaseSessionUser();
        const retryOwnerId = retrySessionUser?.id || state.supabaseUserId || null;
        if (retryOwnerId && getSupabaseClient()) {
          try {
            if (retrySessionUser) {
              state.supabaseUserId = retrySessionUser.id;
              state.supabaseUserEmail = retrySessionUser.email || state.supabaseUserEmail || "";
              await ensureSupabaseProfileRow(account, retrySessionUser);
            }
            await upsertSingleSupabaseChild(retryOwnerId, existingChild);
            await syncSupabaseChildren(account, retryOwnerId);
            account.activeChildId = childId;
            profilesStore.profiles[account.id] = account;
            saveProfilesStore();
            renderProfilePanel();
            renderStudyTime();
            renderHeroActivity();
            showProfileMessage(`${existingChild.name} was already on this device and has now been saved to your online parent account.`, "success");
            return;
          } catch (retryError) {
            console.error("Retrying online sync for an existing local learner failed", retryError);
          }
        }
      }
      // The child already exists in the data even though the visible list may not show it
      // (e.g. an earlier render step failed silently) â€” select them and force a fresh render
      // so the parent can actually see they're already there instead of just getting an error.
      account.activeChildId = childId;
      profilesStore.profiles[account.id] = account;
      saveProfilesStore();
      try {
        renderProfilePanel();
        renderGradeButtons();
        renderCategories();
        renderStudyTime();
        renderHeroActivity();
      } catch (error) {
        console.error("Refreshing the learner list failed", error);
      }
      showProfileMessage(`${childName} already exists and is shown below.`, "error");
      return;
    }
    if (childEmail && findChildByEmail(childEmail)) {
      showProfileMessage("That learner email is already linked. Please choose another one.", "error");
      return;
    }

    if (isEditingExistingChild) {
      const currentChild = activeEditorChild;
      const nextChildId = childId;
      if (currentChild.id !== nextChildId && account.children[nextChildId]) {
        showProfileMessage("Another learner already uses that name. Choose a different learner name.", "error");
        return;
      }

      const nextChild = {
        ...currentChild,
        id: nextChildId,
        name: childName,
        grade: childGrade,
        childEmail,
        avatarDataUrl
      };

      if (childPassword) {
        nextChild.passwordHash = hashPassword(childPassword);
        nextChild.childUsername = encodeLearnerCredential(nextChild.passwordHash, nextChild.id);
        saveLearnerPasswordCredential(account.id, nextChild.id, nextChild.passwordHash, nextChild.name);
      }

      if (currentChild.id !== nextChildId) {
        delete account.children[currentChild.id];
      }
      account.children[nextChildId] = nextChild;
      account.activeChildId = nextChildId;
      state.parentEditorChildId = nextChildId;
      profilesStore.profiles[account.id] = account;
      saveProfilesStore();

      try {
        const sessionUser = await getSupabaseSessionUser();
        if (sessionUser?.id && account.type === "parent") {
          state.supabaseUserId = sessionUser.id;
          state.supabaseUserEmail = sessionUser.email || state.supabaseUserEmail || "";
          await syncParentChildrenOnline(account, { silent: true, sessionUser });
        }
      } catch (error) {
        console.error("Sync after learner update failed", error);
      }

      renderProfilePanel();
      renderGradeButtons();
      renderCategories();
      renderStudyTime();
      renderHeroActivity();
      showProfileMessage(
        childPassword
          ? `${childName}'s profile was updated and their learner password was saved.`
          : `${childName}'s profile was updated.`,
        "success"
      );
      return;
    }

    const newLearnerPasswordHash = childPassword ? hashPassword(childPassword) : "";
    account.children[childId] = createLearnerRecord({
      id: childId,
      name: childName,
      grade: childGrade,
      passwordHash: newLearnerPasswordHash,
      childEmail,
      childUsername: encodeLearnerCredential(newLearnerPasswordHash, childId),
      avatarDataUrl,
      linkedProfileId: null
    });
    if (childPassword) {
      saveLearnerPasswordCredential(account.id, childId, account.children[childId].passwordHash, childName);
    }
    account.activeChildId = childId;
    state.parentEditorChildId = null;
    profilesStore.profiles[account.id] = account;
    saveProfilesStore();

    state.selectedGrade = childGrade;
    state.selectedCategoryId = null;
    state.selectedLevel = null;
    state.currentQuestions = [];
    hideQuizViews();
    clearProfileFields();
    try {
      renderProfilePanel();
      renderGradeButtons();
      renderCategories();
      renderStudyTime();
      renderHeroActivity();
    } catch (error) {
      console.error("Rendering after adding a child failed", error);
      try {
        renderParentPanel(account);
      } catch (fallbackError) {
        console.error("Fallback learner list refresh also failed", fallbackError);
      }
    }
    let syncNote = "";
    let syncStatus = "success";
    const sessionUser = await getSupabaseSessionUser();
    const canSyncOnline = Boolean(sessionUser?.id && account.type === "parent");
    if (canSyncOnline) {
      try {
        state.supabaseUserId = sessionUser.id;
        state.supabaseUserEmail = sessionUser.email || state.supabaseUserEmail || "";
        await syncParentChildrenOnline(account, { silent: true, sessionUser });
        const sessionResponse = await getSupabaseClient().auth.getSession();
        const session = sessionResponse?.data?.session || null;
        if (session) {
          await loadSupabaseAccountData(session);
        }
        syncNote = " Saved to your online parent account.";
      } catch (error) {
        console.error("Immediate learner sync failed", error);
        syncNote = ` Added here, but the online sync failed: ${error?.message || "Unknown error"}.`;
        syncStatus = "error";
      }
    } else {
      syncNote = " This learner is only saved on this device/browser â€” sign in with your online parent account to see them on other devices too.";
    }
    showProfileMessage(
      `${childName} was added and is now the active learner.` + syncNote,
      syncStatus
    );
  } catch (error) {
    console.error("Add child flow failed", error);
    showProfileMessage(`Could not add learner: ${error?.message || "Unknown error"}`, "error");
  }
}

async function handleSaveChildSettings() {
  const account = getCurrentAccount();
  const editorChildId = state.parentEditorChildId || elements.parentChildSelect?.value || "";
  if (!account || account.type !== "parent" || !editorChildId || !account.children?.[editorChildId]) {
    showProfileMessage("Choose a child first before saving learner settings.", "error");
    return;
  }

  const child = account.children[editorChildId];
  const nextName = elements.childNameInput?.value.trim() || child.name;
  const nextGrade = Number(elements.childGradeInput?.value || child.grade || state.selectedGrade || 1);
  const nextAvatarDataUrl = elements.childPhotoPreview?.getAttribute("src") || "";
  const nextPassword = elements.childPasswordInput?.value || "";

  if (!nextName) {
    showProfileMessage("Enter the child's name before saving.", "error");
    return;
  }

  child.name = nextName;
  child.grade = nextGrade;
  child.avatarDataUrl = nextAvatarDataUrl;
  if (nextPassword) {
    child.passwordHash = hashPassword(nextPassword);
    child.childUsername = encodeLearnerCredential(child.passwordHash, child.id);
    saveLearnerPasswordCredential(account.id, child.id, child.passwordHash, child.name);
  }

  account.children[child.id] = child;
  profilesStore.profiles[account.id] = account;
  if (!saveProfilesStore()) {
    showProfileMessage(lastProfilesStoreError || "Could not save this learner photo in browser storage.", "error");
    return;
  }

  state.selectedGrade = nextGrade;
  applyCurrentProfile();
  renderGradeButtons();
  renderCategories();
  renderStudyTime();
  renderHeroActivity();

  if (elements.childPasswordInput) {
    elements.childPasswordInput.value = "";
  }

  const sessionUser = await getSupabaseSessionUser();
  if (sessionUser?.id) {
    try {
      await upsertSingleSupabaseChild(sessionUser.id, child);
      account.children[child.id] = child;
      profilesStore.profiles[account.id] = account;
      saveProfilesStore();
    } catch (error) {
      console.error("Saving learner settings online failed", error);
      showProfileMessage(
        `Saved ${child.name} on this browser, but the online save failed: ${error?.message || "Unknown error"}.`,
        "error"
      );
      return;
    }
  }

  showProfileMessage(
    nextPassword
      ? `Saved learner settings and learner password for ${child.name}.`
      : `Saved learner settings for ${child.name}.`,
    "success"
  );

  if (elements.childUsernameNote) {
    elements.childUsernameNote.textContent = nextPassword
      ? `Password saved for ${child.name}. Use Open Learner to enter their profile.`
      : `Learner settings saved for ${child.name}.`;
    elements.childUsernameNote.classList.add("learner-save-confirmation");
  }
  if (elements.saveChildButton) {
    const originalLabel = elements.saveChildButton.textContent;
    elements.saveChildButton.textContent = nextPassword ? "Password Saved" : "Settings Saved";
    window.setTimeout(() => {
      elements.saveChildButton.textContent = originalLabel;
    }, 2500);
  }

}

async function handleDeleteChild() {
  const account = getCurrentAccount();
  const editorChildId = state.parentEditorChildId || elements.parentChildSelect?.value || "";
  if (!account || account.type !== "parent" || !editorChildId || !account.children?.[editorChildId]) {
    showProfileMessage("Choose a child first before deleting.", "error");
    return;
  }

  const child = account.children[editorChildId];
  const confirmed = window.confirm(`Delete ${child.name}? This removes the learner from this parent account.`);
  if (!confirmed) {
    return;
  }

  try {
    if (isSupabaseProfileId(account.id) && state.supabaseSessionActive && child.supabaseChildId && getSupabaseClient()) {
      const { error } = await getSupabaseClient()
        .from("mastery_children")
        .delete()
        .eq("id", child.supabaseChildId);

      if (error) {
        throw error;
      }
    }

    delete account.children[editorChildId];
    const remainingChildIds = Object.keys(account.children || {});
    account.activeChildId = remainingChildIds[0] || null;
    state.parentEditorChildId = null;
    profilesStore.profiles[account.id] = account;
    saveProfilesStore();
    clearProfileFields();
    applyCurrentProfile();
    renderGradeButtons();
    renderCategories();
    renderStudyTime();
    renderHeroActivity();
    showProfileMessage(`${child.name} was deleted.`, "success");
  } catch (error) {
    console.error("Delete child flow failed", error);
    showProfileMessage(`Could not delete learner: ${error?.message || "Unknown error"}`, "error");
  }
}

function handleChildPhotoSelected(event) {
  const file = event.target?.files?.[0];
  if (!file) {
    return;
  }
  readImageFileAsAvatarDataUrl(file)
    .then((dataUrl) => {
      setChildPhotoPreview(dataUrl);
    })
    .catch((error) => {
      showProfileMessage(error?.message || "Could not load that image.", "error");
    });
}

// Lets the active learner set their own avatar directly from the header's "Change Photo"
// control, without needing access to the parent-only Add Child / Manage Learners form. Saves
// immediately (no separate "Save" step) since this control only appears in child view mode.
function handleHeaderAvatarSelected(event) {
  const file = event.target?.files?.[0];
  if (!file) {
    return;
  }
  readImageFileAsAvatarDataUrl(file)
    .then((dataUrl) => {
      if (persistCurrentLearnerAvatar(dataUrl)) {
        showProfileMessage("Photo updated!", "success");
      } else {
        showProfileMessage(lastProfilesStoreError || "Could not save that photo.", "error");
      }
    })
    .catch((error) => {
      showProfileMessage(error?.message || "Could not load that image.", "error");
    });
}

function getChildSwitchLabel(child) {
  return child.name;
}

function switchToChild(childId, { silent = false, enterChildMode = false } = {}) {
  const account = getCurrentAccount();
  if (!account || account.type !== "parent") {
    return;
  }

  if (!childId || !account.children?.[childId]) {
    if (!silent) {
      showProfileMessage("Choose a child profile to open.", "error");
    }
    return;
  }

  const child = account.children[childId];

    account.activeChildId = childId;
  profilesStore.profiles[account.id] = account;
  saveProfilesStore();

  state.selectedGrade = child.grade;
  state.selectedCategoryId = null;
  state.selectedLevel = null;
  state.currentQuestions = [];
  hideQuizViews();
  setHeroPanelVisible(false);
  if (enterChildMode) {
    saveLearnerViewSession(account, child);
    setChildViewMode(true, { allowGradeChange: false });
  }
  renderProfilePanel();
  renderGradeButtons();
  renderCategories();
  renderStudyTime();
  renderHeroActivity();
  if (!silent) {
    showProfileMessage(`Now viewing ${child.name}'s learning progress.`, "success");
  }
}

async function handleSwitchChild() {
  const childId = elements.parentChildSelect?.value || "";
  if (state.childViewMode) {
    const canSwitch = await verifyLearnerPasswordForSwitch(childId, "switch to this learner");
    if (!canSwitch) {
      return;
    }
  }
  switchToChild(childId, { enterChildMode: true });
}

async function handleHeaderChildSwitch(event) {
  event?.preventDefault?.();
  const account = getCurrentAccount();
  const childId = elements.headerChildSelect?.value || account?.activeChildId || "";
  if (!account || account.type !== "parent" || !childId || !account.children?.[childId]) {
    showProfileMessage("Choose a learner before selecting Open Learner.", "error");
    return;
  }
  const learner = account.children[childId];
  if (state.childViewMode) {
    showProfileMessage(`Enter ${learner.name}'s learner password to continue.`, "success");
    const canSwitch = await verifyLearnerPasswordForSwitch(childId, "switch to this learner");
    if (!canSwitch) {
      return;
    }
  }
  switchToChild(childId, { enterChildMode: true });
}

async function handleBackToParent() {
  const canReturn = await verifyParentPasswordForAction("return to the parent view");
  if (!canReturn) {
    return;
  }
  clearLearnerSession();
  setChildViewMode(false);
  // setChildViewMode() only updates the profile panel/header â€” refresh the rest of the page
  // (grade buttons, topics, study time, activity chart, Family Dashboard) so the parent sees
  // everything unlocked immediately instead of needing to reload the page.
  renderGradeButtons();
  renderCategories();
  renderStudyTime();
  renderHeroActivity();
  const refreshedAccount = getCurrentAccount();
  if (refreshedAccount?.type === "parent" && Object.keys(refreshedAccount.children || {}).length) {
    setParentDashboardVisible(true);
  }
  showProfileMessage("Back in parent view.", "success");
}

async function handleHeaderLogout() {
  // handleLogoutProfile() below now owns the full logout sequence (Supabase sign-out + local
  // profile clear + redirect to the login page), so the header's "Log Out" button just delegates
  // to it. This used to duplicate the Supabase sign-out call and then leave the visitor sitting
  // on the now-signed-out app.html page in a "Guest" state instead of sending them to login.
  await handleLogoutProfile();
}

function handleCreateProfile() {
  if (window.location.protocol !== "file:") {
    showProfileMessage("On the live site, sign in from the login page so learners and progress sync across browsers.", "error");
    window.location.href = "login.html";
    return;
  }

  state.childViewMode = false;
  elements.backToParentButton?.classList.add("hidden");
  const name = elements.profileNameInput.value.trim();
  const password = elements.profilePasswordInput.value;
  const grade = Number(elements.profileGradeInput.value);
  const role = elements.profileRoleInput?.value || "learner";

  if (!name || !password) {
    showProfileMessage("Enter both a name and password to create an account.", "error");
    return;
  }

  const profileId = buildProfileId(name);
  if (profilesStore.profiles[profileId]) {
    showProfileMessage("That account name already exists. Log in or choose a different name.", "error");
    return;
  }

  profilesStore.profiles[profileId] = role === "parent"
    ? {
        id: profileId,
        type: "parent",
        name,
        passwordHash: hashPassword(password),
        children: {},
        activeChildId: null
      }
    : createLearnerRecord({
        id: profileId,
        name,
        grade,
        passwordHash: hashPassword(password)
      });
  profilesStore.currentProfileId = profileId;
  saveProfilesStore();
  state.selectedCategoryId = null;
  state.selectedLevel = null;
  state.currentQuestions = [];
  hideQuizViews();
  clearProfileFields();
  applyCurrentProfile();
  renderGradeButtons();
  renderCategories();
  renderStudyTime();
  renderHeroActivity();
  showProfileMessage(
    role === "parent"
      ? `Parent account created for ${name}. You can now add children and monitor their progress.`
      : `Profile created for ${name}. Progress will now be saved to this learner.`,
    "success"
  );
}

function handleLoginProfile() {
  if (window.location.protocol !== "file:") {
    showProfileMessage("On the live site, use the email login page so learners and progress sync across browsers.", "error");
    window.location.href = "login.html";
    return;
  }

  state.childViewMode = false;
  elements.backToParentButton?.classList.add("hidden");
  const name = elements.profileNameInput.value.trim();
  const password = elements.profilePasswordInput.value;

  if (!name || !password) {
    showProfileMessage("Enter the account name and password to log in.", "error");
    return;
  }

  const profileId = buildProfileId(name);
  const account = profilesStore.profiles[profileId];

  if (!account || account.passwordHash !== hashPassword(password)) {
    showProfileMessage("The name or password does not match a saved account.", "error");
    return;
  }

  profilesStore.currentProfileId = profileId;
  saveProfilesStore();
  state.selectedCategoryId = null;
  state.selectedLevel = null;
  state.currentQuestions = [];
  hideQuizViews();
  clearProfileFields();
  applyCurrentProfile();
  renderGradeButtons();
  renderCategories();
  renderStudyTime();
  renderHeroActivity();
  if (account.type === "parent" && Object.keys(account.children || {}).length) {
    setParentDashboardVisible(true);
  }
  showProfileMessage(`Welcome back, ${account.name}. Your saved work has been loaded.`, "success");
}

async function handleLogoutProfile() {
  // Sign out of Supabase too (not just the local profile store) â€” otherwise a persisted
  // Supabase session would just re-hydrate the same account on the next page load/refresh,
  // making "Log Out" not actually work for accounts signed in online.
  const client = getSupabaseClient();
  if (client) {
    try {
      await client.auth.signOut({ scope: "local" });
    } catch (error) {
      console.error("Sign-out failed", error);
    }
  }

  profilesStore.currentProfileId = null;
  saveProfilesStore();
  clearLearnerSession();
  state.currentProfileId = null;
  state.selectedCategoryId = null;
  state.selectedLevel = null;
  state.currentQuestions = [];
  state.childViewMode = false;
  elements.backToParentButton?.classList.add("hidden");
  hideQuizViews();

  // app.html is a protected page (see auth.js handleAppPage/grantAppAccess) â€” once signed out
  // there is no account left to show here, so return to the login page instead of falling back
  // to a visible "Guest" state on this same page.
  window.location.href = "index.html";
}

function clearProfileFields() {
  elements.profileNameInput.value = "";
  elements.profilePasswordInput.value = "";
  if (elements.childNameInput) {
    elements.childNameInput.value = "";
  }
  if (elements.childEmailInput) {
    elements.childEmailInput.value = "";
  }
  if (elements.childUsernameInput) {
    elements.childUsernameInput.value = "";
  }
  if (elements.childPasswordInput) {
    elements.childPasswordInput.value = "";
  }
  if (elements.childPhotoInput) {
    elements.childPhotoInput.value = "";
  }
  if (elements.childPhotoPreview) {
    elements.childPhotoPreview.removeAttribute("src");
    elements.childPhotoPreview.classList.add("hidden");
  }
}

function showProfileMessage(message, type) {
  const messageClass = `feedback-box ${type === "error" ? "error" : "success"}`;
  if (elements.profileMessage) {
    elements.profileMessage.className = messageClass;
    elements.profileMessage.textContent = message;
    elements.profileMessage.classList.remove("hidden");
  }
  if (elements.globalProfileMessage) {
    elements.globalProfileMessage.className = `${messageClass} profile-toast`;
    elements.globalProfileMessage.textContent = message;
    elements.globalProfileMessage.classList.remove("hidden");
  }
  if (profileMessageTimerId) {
    window.clearTimeout(profileMessageTimerId);
  }
  profileMessageTimerId = window.setTimeout(() => {
    elements.profileMessage?.classList.add("hidden");
    elements.globalProfileMessage?.classList.add("hidden");
    profileMessageTimerId = null;
  }, type === "error" ? 6500 : 4000);
}

function setChildPhotoPreview(src) {
  if (!elements.childPhotoPreview) {
    return;
  }

  if (!src) {
    elements.childPhotoPreview.removeAttribute("src");
    elements.childPhotoPreview.classList.add("hidden");
    return;
  }

  elements.childPhotoPreview.src = src;
  elements.childPhotoPreview.classList.remove("hidden");
}

function readImageFileAsAvatarDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("No image file was selected."));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const rawDataUrl = typeof reader.result === "string" ? reader.result : "";
      if (!rawDataUrl) {
        reject(new Error("Could not read the selected image."));
        return;
      }

      const image = new Image();
      image.onload = () => {
        const maxSide = AVATAR_MAX_SIZE;
        const scale = Math.min(1, maxSide / Math.max(image.width || 1, image.height || 1));
        const targetWidth = Math.max(1, Math.round((image.width || 1) * scale));
        const targetHeight = Math.max(1, Math.round((image.height || 1) * scale));

        const canvas = document.createElement("canvas");
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const context = canvas.getContext("2d");
        if (!context) {
          resolve(rawDataUrl);
          return;
        }

        context.drawImage(image, 0, 0, targetWidth, targetHeight);
        resolve(canvas.toDataURL("image/jpeg", AVATAR_JPEG_QUALITY));
      };
      image.onerror = () => reject(new Error("The selected file is not a supported image."));
      image.src = rawDataUrl;
    };
    reader.onerror = () => reject(new Error("Could not load the selected image."));
    reader.readAsDataURL(file);
  });
}

function getAvatarLibraryEntries() {
  const entries = Array.isArray(window.MASTERY_AVATAR_LIBRARY) ? window.MASTERY_AVATAR_LIBRARY : [];
  return entries
    .map((entry, index) => ({
      id: String(entry?.id || `avatar-${index + 1}`),
      label: String(entry?.label || `Avatar ${index + 1}`),
      src: String(entry?.src || "").trim()
    }))
    .filter((entry) => entry.src);
}

function getEditableLearnerTarget() {
  const account = getCurrentAccount();
  const learner = getCurrentProfile();
  if (!account || !learner) {
    return null;
  }

  if (account.type === "parent") {
    const activeChildId = account.activeChildId;
    if (!activeChildId || !account.children?.[activeChildId]) {
      return null;
    }
    return {
      account,
      learner: account.children[activeChildId],
      childId: activeChildId
    };
  }

  return {
    account,
    learner: account,
    childId: null
  };
}

function renderCurrentAvatarPreview(learner) {
  if (!elements.currentAvatarPreview || !elements.currentAvatarPlaceholder || !elements.currentAvatarName) {
    return;
  }

  const name = learner?.name || "Learner";
  const avatarSrc = learner?.avatarDataUrl || "";
  elements.currentAvatarName.textContent = `${name}'s avatar`;

  if (avatarSrc) {
    elements.currentAvatarPreview.src = avatarSrc;
    elements.currentAvatarPreview.classList.remove("hidden");
    elements.currentAvatarPlaceholder.classList.add("hidden");
  } else {
    elements.currentAvatarPreview.removeAttribute("src");
    elements.currentAvatarPreview.classList.add("hidden");
    elements.currentAvatarPlaceholder.textContent = name.charAt(0).toUpperCase();
    elements.currentAvatarPlaceholder.classList.remove("hidden");
  }
}

function renderAvatarLibraryGrid() {
  if (!elements.avatarLibraryGrid || !elements.avatarLibraryEmpty) {
    return;
  }

  const entries = getAvatarLibraryEntries();
  if (!entries.length) {
    elements.avatarLibraryGrid.innerHTML = "";
    elements.avatarLibraryEmpty.textContent = "No avatar images are loaded yet. Add file paths in avatar-library.js to build the library.";
    elements.avatarLibraryEmpty.classList.remove("hidden");
    return;
  }

  elements.avatarLibraryEmpty.classList.add("hidden");
  elements.avatarLibraryGrid.innerHTML = entries
    .map((entry) => `
      <button type="button" class="avatar-library-item" data-avatar-src="${escapeHtml(entry.src)}" data-avatar-label="${escapeHtml(entry.label)}">
        <img src="${escapeHtml(entry.src)}" alt="${escapeHtml(entry.label)}" />
        <span>${escapeHtml(entry.label)}</span>
      </button>
    `)
    .join("");
}

function renderAvatarSection() {
  const target = getEditableLearnerTarget();
  if (!elements.avatarSection) {
    return;
  }

  if (!target) {
    state.avatarLibraryOpen = false;
    elements.avatarSection.classList.add("hidden");
    return;
  }

  elements.avatarSection.classList.remove("hidden");
  renderCurrentAvatarPreview(target.learner);
  renderAvatarLibraryGrid();
  elements.avatarLibraryPanel?.classList.toggle("hidden", !state.avatarLibraryOpen);
  if (elements.toggleAvatarLibraryButton) {
    elements.toggleAvatarLibraryButton.textContent = state.avatarLibraryOpen ? "Hide Library" : "Choose from Library";
  }
}

function toggleAvatarLibraryPanel() {
  const target = getEditableLearnerTarget();
  if (!target) {
    return;
  }
  state.avatarLibraryOpen = !state.avatarLibraryOpen;
  renderAvatarSection();
}

function persistCurrentLearnerAvatar(nextAvatarDataUrl) {
  const target = getEditableLearnerTarget();
  if (!target) {
    return false;
  }

  const { account, learner, childId } = target;
  learner.avatarDataUrl = nextAvatarDataUrl;

  if (account.type === "parent" && childId) {
    account.children[childId] = learner;
  }
  profilesStore.profiles[account.id] = account;
  if (!saveProfilesStore()) {
    return false;
  }

  renderProfilePanel();
  renderParentDashboard();

  queueSupabaseWrite(async (_client, ownerId) => {
    if (account.type === "parent") {
      await syncSupabaseChildren(account, ownerId);
      return;
    }
    await ensureSupabaseProfileRow(account, {
      id: ownerId,
      email: state.supabaseUserEmail,
      user_metadata: {
        user_name: account.name,
        account_type: account.type,
        grade: account.grade
      }
    });
  });

  return true;
}

function handleCurrentAvatarUploadSelected(event) {
  const file = event.target?.files?.[0];
  if (!file) {
    return;
  }
  readImageFileAsAvatarDataUrl(file)
    .then((dataUrl) => {
      if (persistCurrentLearnerAvatar(dataUrl)) {
        showProfileMessage("Profile image updated from this device.", "success");
      } else {
        showProfileMessage(lastProfilesStoreError || "Could not save that photo.", "error");
      }
    })
    .catch((error) => {
      showProfileMessage(error?.message || "Could not load that image.", "error");
    });
}

function handleClearCurrentAvatar() {
  if (persistCurrentLearnerAvatar("")) {
    showProfileMessage("Profile image removed.", "success");
  }
}

function handleAvatarLibraryGridClick(event) {
  const button = event.target.closest("[data-avatar-src]");
  if (!button) {
    return;
  }

  const avatarSrc = button.getAttribute("data-avatar-src") || "";
  if (!avatarSrc) {
    return;
  }

  if (persistCurrentLearnerAvatar(avatarSrc)) {
    showProfileMessage("Avatar selected from the library.", "success");
  }
}

function findChildByEmail(email, excludedParentId = "", excludedChildId = "") {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  if (!normalizedEmail) {
    return null;
  }

  for (const [accountId, account] of Object.entries(profilesStore.profiles || {})) {
    if (!account?.children) {
      continue;
    }

    for (const child of Object.values(account.children)) {
      if (accountId === excludedParentId && child.id === excludedChildId) {
        continue;
      }
      if (String(child.childEmail || "").trim().toLowerCase() === normalizedEmail) {
        return { accountId, child };
      }
    }
  }

  return null;
}

function buildProfileId(name) {
  return name.trim().toLowerCase();
}

// Kids log in with a plain username instead of an email. Supabase Auth still needs an
// email under the hood, so we deterministically turn the username into a hidden internal
// address nobody ever sees or emails. This same domain/logic must match learner-login.js.
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

// Creates a real Supabase Auth account for a child so they can log in on their own with a
// username + password. Calling supabase.auth.signUp() switches the shared client's active
// session to the newly created user, which would silently log the parent out mid-flow. We
// save the parent's session first and restore it right after, so the parent stays signed in
// in this browser tab. The child's own mastery_profiles row is written while briefly
// authenticated as the child (their own row-level-security policy allows that); the
// mastery_children link row is written back on the parent's session afterwards.
async function createChildSupabaseLogin({ childName, grade, username, password }) {
  const client = getSupabaseClient();
  if (!client) {
    return { error: "Supabase is not configured yet." };
  }

  const cleanUsername = sanitizeUsername(username);
  if (!cleanUsername) {
    return { error: "Choose a username using letters, numbers, dots, dashes, or underscores." };
  }
  if (!password || password.length < 6) {
    return { error: "Choose a password with at least 6 characters." };
  }

  const parentSessionResponse = await client.auth.getSession();
  const parentSession = parentSessionResponse?.data?.session || null;
  if (!parentSession) {
    return { error: "Your parent session expired. Please log in again." };
  }
  const parentUserId = parentSession.user.id;
  const childEmail = deriveChildEmailFromUsername(cleanUsername);

  const restoreParentSession = () => client.auth.setSession({
    access_token: parentSession.access_token,
    refresh_token: parentSession.refresh_token
  });

  try {
    const { data: signUpData, error: signUpError } = await client.auth.signUp({
      email: childEmail,
      password,
      options: {
        data: {
          user_name: childName,
          account_type: "learner",
          grade: Number(grade)
        }
      }
    });

    if (signUpError) {
      await restoreParentSession();
      const friendly = /already registered|already exists/i.test(signUpError.message)
        ? "That username is already taken. Please choose another one."
        : signUpError.message;
      return { error: friendly };
    }

    const childUserId = signUpData?.user?.id;
    if (!childUserId) {
      await restoreParentSession();
      return { error: "Could not create the child's login. Please try again." };
    }

    // Still briefly authenticated as the new child here: write their own profile row.
    const { error: childProfileError } = await client.from("mastery_profiles").upsert({
      id: childUserId,
      email: childEmail,
      display_name: childName,
      account_type: "learner",
      parent_id: parentUserId,
      grade: Number(grade),
      updated_at: new Date().toISOString()
    }, { onConflict: "id" });

    await restoreParentSession();

    if (childProfileError) {
      return { error: childProfileError.message };
    }

    return { linkedProfileId: childUserId, childEmail, username: cleanUsername };
  } catch (error) {
    await restoreParentSession();
    return { error: error?.message || "Could not create the child's login." };
  }
}

function createLearnerRecord({ id, name, grade, passwordHash = "", childEmail = "", childUsername = "", avatarDataUrl = "", supabaseChildId = null, linkedProfileId = null, goals = null }) {
  return {
    id,
    type: "learner",
    name,
    grade,
    passwordHash,
    childEmail,
    childUsername,
    avatarDataUrl,
    supabaseChildId,
    linkedProfileId,
    progress: {},
    scoreHistory: [],
    studyTime: createEmptyStudyTime(),
    resumeState: null,
    goals: goals && typeof goals === "object"
      ? {
        selectedSubject: ["math", "english"].includes(String(goals.selectedSubject || goals.subjectFocus || "math"))
          ? String(goals.selectedSubject || goals.subjectFocus || "math")
          : "math",
        subjects: {
          math: getNormalizedSubjectGoal(goals.subjects?.math || (String(goals.subjectFocus || "math") === "math"
            ? createSubjectGoal(goals.dailyMinutes, goals.dailyLevels, true)
            : null)),
          english: getNormalizedSubjectGoal(goals.subjects?.english || (String(goals.subjectFocus || "math") === "english"
            ? createSubjectGoal(goals.dailyMinutes, goals.dailyLevels, true)
            : null))
        }
      }
      : createEmptyLearnerGoals()
  };
}

function ensureSelfLearnerProfile(account) {
  return;
}

function hashPassword(password) {
  return String(hashCode(`maths-profile:${password}`));
}

const learnerPasswordCredentialKey = "mastery-hub-learner-passwords-v1";
const learnerCredentialPrefix = "pwdhash:";

function encodeLearnerCredential(passwordHash, childId = "") {
  const suffix = String(childId || "").trim().toLowerCase().replace(/[^a-z0-9-]/g, "-");
  return passwordHash ? `${learnerCredentialPrefix}${passwordHash}:${suffix || "learner"}` : "";
}

function decodeLearnerCredential(value) {
  const credential = String(value || "");
  if (!credential.startsWith(learnerCredentialPrefix)) {
    return "";
  }
  return credential.slice(learnerCredentialPrefix.length).split(":")[0] || "";
}

function getLearnerPasswordCredentials() {
  try {
    const parsed = JSON.parse(localStorage.getItem(learnerPasswordCredentialKey) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (_error) {
    return {};
  }
}

function getLearnerPasswordCredential(accountId, childId, learnerName = "") {
  if (!accountId || !childId) {
    return "";
  }
  const credentials = getLearnerPasswordCredentials();
  const normalizedName = String(learnerName || "").trim().toLowerCase();
  return credentials[`${accountId}:${childId}`]
    || (normalizedName ? credentials[`${accountId}:name:${normalizedName}`] : "")
    || (normalizedName ? credentials[`learner:name:${normalizedName}`] : "")
    || "";
}

function saveLearnerPasswordCredential(accountId, childId, passwordHash, learnerName = "") {
  if (!accountId || !childId || !passwordHash) {
    return;
  }
  const credentials = getLearnerPasswordCredentials();
  credentials[`${accountId}:${childId}`] = passwordHash;
  const normalizedName = String(learnerName || "").trim().toLowerCase();
  if (normalizedName) {
    credentials[`${accountId}:name:${normalizedName}`] = passwordHash;
    credentials[`learner:name:${normalizedName}`] = passwordHash;
  }
  localStorage.setItem(learnerPasswordCredentialKey, JSON.stringify(credentials));
}

function clearLearnerSession() {
  localStorage.removeItem(learnerSessionKey);
}

function buildSupabaseProfileId(userId) {
  return `supabase:${userId}`;
}

function applySupabaseSessionToLocalProfile(session) {
  const user = session?.user;
  if (!user?.id) {
    return;
  }

  loadSupabaseAccountData(session).catch((error) => {
    state.supabaseHydrating = false;
    console.error("Supabase account load failed", error);
  });
}

function getCurrentAccount() {
  if (!state.currentProfileId) {
    return null;
  }

  const account = profilesStore.profiles[state.currentProfileId] || null;
  if (account) {
    ensureAccountShape(account);
  }
  return account;
}

function getCurrentProfile() {
  const account = getCurrentAccount();
  if (!account) {
    return null;
  }

  if (account.type === "parent") {
    if (!account.activeChildId || !account.children?.[account.activeChildId]) {
      return null;
    }
    const child = account.children[account.activeChildId];
    ensureLearnerShape(child);
    return child;
  }

  ensureLearnerShape(account);
  return account;
}

function getCurrentResumeState() {
  const account = getCurrentAccount();
  const profile = getCurrentProfile();
  if (profile) {
    return profile.resumeState || null;
  }
  if (account) {
    return null;
  }
  ensureGuestStoreShape();
  return guestStore.resumeState || null;
}

function persistCurrentProfileState() {
  const account = getCurrentAccount();
  const profile = getCurrentProfile();
  if (profile) {
    if (account?.type === "parent") {
      account.children[account.activeChildId] = profile;
      profilesStore.profiles[account.id] = account;
    } else {
      profilesStore.profiles[profile.id] = profile;
    }
    saveProfilesStore();
    return;
  }

  if (!account) {
    saveGuestStore();
  }
}

function saveCurrentResumeState() {
  const account = getCurrentAccount();
  const profile = getCurrentProfile();
  const snapshot = state.selectedCategoryId && state.selectedLevel
    ? {
        grade: state.selectedGrade,
        categoryId: state.selectedCategoryId,
        patTabId: state.selectedPatTab || null,
        probabilityMode: state.selectedProbabilityMode || "mastery",
        level: state.selectedLevel,
        currentIndex: state.currentIndex,
        score: state.score,
        questionResults: Array.isArray(state.questionResults)
          ? state.questionResults.map((result) => (result ? { ...result } : null))
          : [],
        updatedAt: new Date().toISOString()
      }
    : null;

  if (profile) {
    profile.resumeState = snapshot;
    persistCurrentProfileState();
    return;
  }

  if (!account) {
    ensureGuestStoreShape();
    guestStore.resumeState = snapshot;
    saveGuestStore();
  }
}

function clearCurrentResumeState() {
  const account = getCurrentAccount();
  const profile = getCurrentProfile();

  if (profile) {
    profile.resumeState = null;
    persistCurrentProfileState();
    return;
  }

  if (!account) {
    ensureGuestStoreShape();
    guestStore.resumeState = null;
    saveGuestStore();
  }
}

function restoreResumeStateIfAvailable() {
  const resumeState = getCurrentResumeState();
  if (!resumeState?.categoryId || !resumeState?.level) {
    return false;
  }

  const categories = curriculum[Number(resumeState.grade)] || [];
  if (!categories.some((category) => category.id === resumeState.categoryId)) {
    return false;
  }

  if (getSavedAttempt(Number(resumeState.grade), resumeState.categoryId, Number(resumeState.level))) {
    return false;
  }

  state.selectedGrade = Number(resumeState.grade) || state.selectedGrade;
  state.selectedCategoryId = resumeState.categoryId;
  state.selectedPatTab = resumeState.patTabId || getDefaultPatTabId(state.selectedCategoryId, state.selectedGrade);
  state.selectedProbabilityMode = resumeState.probabilityMode || getDefaultProbabilityMode(state.selectedCategoryId, state.selectedGrade);

  renderGradeButtons();
  renderCategories();
  renderLevels();
  renderReviewOptions();
  renderStudyTime();

  window.setTimeout(() => {
    startLevel(Number(resumeState.level), resumeState);
  }, 0);

  return true;
}

function getActiveProgress() {
  const account = getCurrentAccount();
  const profile = getCurrentProfile();
  if (profile) {
    return profile.progress || {};
  }
  if (account) {
    return {};
  }
  ensureGuestStoreShape();
  return guestStore.progress || {};
}

function syncProfileGrade() {
  const account = getCurrentAccount();
  const profile = getCurrentProfile();
  if (!account || !profile) {
    return;
  }

  profile.grade = state.selectedGrade;
  if (account.type === "parent") {
    account.children[account.activeChildId] = profile;
    profilesStore.profiles[account.id] = account;
  } else {
    profilesStore.profiles[profile.id] = profile;
  }
  saveProfilesStore();
  elements.profileGradeInput.value = String(state.selectedGrade);
  if (elements.childGradeInput) {
    elements.childGradeInput.value = String(state.selectedGrade);
  }
  renderProfilePanel();

  queueSupabaseWrite(async (_client, ownerId) => {
    if (account.type === "parent") {
      await syncSupabaseChildren(account, ownerId);
      return;
    }

    await ensureSupabaseProfileRow(account, {
      id: ownerId,
      email: state.supabaseUserEmail
    });
  });
}

function saveCompletedLevel(grade, categoryId, categoryTitle, level, score) {
  const account = getCurrentAccount();
  const profile = getCurrentProfile();
  const completedAt = new Date().toISOString();

  if (profile) {
    if (!profile.progress[grade]) {
      profile.progress[grade] = {};
    }
    if (!profile.progress[grade][categoryId]) {
      profile.progress[grade][categoryId] = {};
    }
    profile.progress[grade][categoryId][level] = {
      score,
      completedAt,
      results: state.lastResults
    };
    profile.scoreHistory.unshift({
      grade,
      categoryId,
      categoryTitle,
      level,
      score,
      percentage: Math.round((score / 10) * 100),
      completedAt
    });
    profile.scoreHistory = profile.scoreHistory.slice(0, 30);
    if (account?.type === "parent") {
      account.children[account.activeChildId] = profile;
      profilesStore.profiles[account.id] = account;
    } else {
      profilesStore.profiles[profile.id] = profile;
    }
    saveProfilesStore();

    queueSupabaseWrite(async (_client, ownerId) => {
      if (account?.type === "parent") {
        await syncSupabaseChildren(account, ownerId);
      }

      const progressOwnerId = getSupabaseProgressOwnerId(account, profile, ownerId);
      await upsertSupabaseProgressEntry(progressOwnerId, account?.type === "parent" ? profile.supabaseChildId || null : null, {
        grade,
        categoryId,
        categoryTitle,
        level,
        attempt: profile.progress[grade][categoryId][level],
        percentage: Math.round((score / QUESTIONS_PER_LEVEL) * 100),
        studyTimeSeconds: getStudySecondsForCategory(profile, categoryId)
      });
    });
    return true;
  }

  if (account) {
    return false;
  }

  ensureGuestStoreShape();
  if (!guestStore.progress[grade]) {
    guestStore.progress[grade] = {};
  }
  if (!guestStore.progress[grade][categoryId]) {
    guestStore.progress[grade][categoryId] = {};
  }
  guestStore.progress[grade][categoryId][level] = {
    score,
    completedAt,
    results: state.lastResults
  };
  guestStore.scoreHistory.unshift({
    grade,
    categoryId,
    categoryTitle,
    level,
    score,
    percentage: Math.round((score / 10) * 100),
    completedAt
  });
  guestStore.scoreHistory = guestStore.scoreHistory.slice(0, 30);
  saveGuestStore();
  return true;
}

function renderScoreHistory() {
  const account = getCurrentAccount();
  const profile = getCurrentProfile();
  ensureGuestStoreShape();
  const scoreHistory = profile ? profile.scoreHistory : account ? [] : guestStore.scoreHistory;

  if (!scoreHistory.length) {
    elements.scoreHistoryEmpty.classList.remove("hidden");
    elements.scoreHistoryList.innerHTML = "";
    renderHeroActivity();
    return;
  }

  elements.scoreHistoryEmpty.classList.add("hidden");
  elements.scoreHistoryList.innerHTML = scoreHistory
    .slice(0, 10)
    .map((entry) => `
      <div class="history-item">
        <strong>Grade ${entry.grade} | ${entry.categoryTitle}</strong>
        <span>Level ${entry.level} | Score ${entry.score}/${QUESTIONS_PER_LEVEL} (${entry.percentage}%)</span>
        <small>${formatDateTime(entry.completedAt)}</small>
      </div>
    `)
    .join("");

  renderHeroActivity();
}

function ensureLearnerShape(profile) {
  if (typeof profile.passwordHash !== "string") {
    profile.passwordHash = "";
  }
  if (typeof profile.childEmail !== "string") {
    profile.childEmail = "";
  }
  if (typeof profile.avatarDataUrl !== "string") {
    profile.avatarDataUrl = "";
  }
  if (typeof profile.supabaseChildId !== "string" && profile.supabaseChildId !== null) {
    profile.supabaseChildId = null;
  }
  if (typeof profile.linkedProfileId !== "string" && profile.linkedProfileId !== null) {
    profile.linkedProfileId = null;
  }
  if (!profile.progress || typeof profile.progress !== "object") {
    profile.progress = {};
  }
  if (!Array.isArray(profile.scoreHistory)) {
    profile.scoreHistory = [];
  }
  if (!profile.studyTime || typeof profile.studyTime !== "object") {
    profile.studyTime = createEmptyStudyTime();
  } else {
    ensureStudyTimeShape(profile.studyTime);
  }
  if (!profile.resumeState || typeof profile.resumeState !== "object") {
    profile.resumeState = null;
  }
  if (!profile.goals || typeof profile.goals !== "object") {
    profile.goals = createEmptyLearnerGoals();
  } else {
    const hasLegacyShape = Object.prototype.hasOwnProperty.call(profile.goals, "subjectFocus")
      || Object.prototype.hasOwnProperty.call(profile.goals, "dailyMinutes")
      || Object.prototype.hasOwnProperty.call(profile.goals, "dailyLevels");

    if (hasLegacyShape) {
      const legacySubject = ["math", "english"].includes(String(profile.goals.subjectFocus || "math"))
        ? String(profile.goals.subjectFocus || "math")
        : "math";
      const legacyMinutes = Number.isFinite(Number(profile.goals.dailyMinutes)) ? Number(profile.goals.dailyMinutes) : 0;
      const legacyLevels = Number.isFinite(Number(profile.goals.dailyLevels)) ? Number(profile.goals.dailyLevels) : 0;
      profile.goals = {
        selectedSubject: legacySubject,
        subjects: {
          math: legacySubject === "math" ? createSubjectGoal(legacyMinutes, legacyLevels, true) : createSubjectGoal(),
          english: legacySubject === "english" ? createSubjectGoal(legacyMinutes, legacyLevels, true) : createSubjectGoal()
        }
      };
    } else {
      profile.goals.selectedSubject = ["math", "english"].includes(String(profile.goals.selectedSubject || "math"))
        ? String(profile.goals.selectedSubject || "math")
        : "math";
      if (!profile.goals.subjects || typeof profile.goals.subjects !== "object") {
        profile.goals.subjects = {
          math: createSubjectGoal(),
          english: createSubjectGoal()
        };
      }
      profile.goals.subjects.math = getNormalizedSubjectGoal(profile.goals.subjects.math);
      profile.goals.subjects.english = getNormalizedSubjectGoal(profile.goals.subjects.english);
    }
  }
}

function ensureAccountShape(account) {
  if (!account.type) {
    account.type = "learner";
  }

  if (account.type === "parent") {
    if (!account.children || typeof account.children !== "object") {
      account.children = {};
    }

    Object.keys(account.children).forEach((childId) => {
      if (account.children[childId]?.isSelfProfile) {
        delete account.children[childId];
      }
    });

    Object.values(account.children).forEach((child) => ensureLearnerShape(child));
    if (account.activeChildId && !account.children[account.activeChildId]) {
      account.activeChildId = null;
    }
    if (!account.activeChildId) {
      account.activeChildId = Object.keys(account.children)[0] || null;
    }
    return;
  }

  ensureLearnerShape(account);
}

function ensureGuestStoreShape() {
  if (!guestStore.progress || typeof guestStore.progress !== "object") {
    guestStore.progress = {};
  }
  if (!Array.isArray(guestStore.scoreHistory)) {
    guestStore.scoreHistory = [];
  }
  if (!guestStore.studyTime || typeof guestStore.studyTime !== "object") {
    guestStore.studyTime = createEmptyStudyTime();
  } else {
    ensureStudyTimeShape(guestStore.studyTime);
  }
  if (!guestStore.resumeState || typeof guestStore.resumeState !== "object") {
    guestStore.resumeState = null;
  }
}

function formatDateTime(value) {
  try {
    return new Date(value).toLocaleString();
  } catch (error) {
    return value;
  }
}

function getCompletedLevelsCount(grade) {
  const gradeProgress = getActiveProgress()[grade] || {};
  return countCompletedLevelsFromProgress({ [grade]: gradeProgress });
}

function isLevelCompleted(grade, categoryId, level) {
  return Boolean(getActiveProgress()[grade]?.[categoryId]?.[level]);
}

function getSavedAttempt(grade, categoryId, level) {
  return getActiveProgress()[grade]?.[categoryId]?.[level] || null;
}

function getSavedAttemptsForSelection() {
  if (!state.selectedCategoryId) {
    return [];
  }

  const activeContext = getActiveCategoryContext();
  const categoryProgress = getActiveProgress()[state.selectedGrade]?.[activeContext.key] || {};
  return Object.entries(categoryProgress)
    .map(([level, attempt]) => ({ level: Number(level), ...attempt }))
    .sort((a, b) => a.level - b.level);
}

function createEmptyStudyTime() {
  return {
    byCourse: {},
    byDay: {},
    bySubject: {},
    byDaySubject: {}
  };
}

function createEmptyLearnerGoals() {
  return {
    selectedSubject: "math",
    subjects: {
      math: createSubjectGoal(),
      english: createSubjectGoal()
    }
  };
}

function countCompletedLevelsFromProgress(progress) {
  return Object.values(progress || {}).reduce((gradeTotal, categoryMap) => {
    return gradeTotal + Object.values(categoryMap || {}).reduce((categoryTotal, levelMap) => {
      return categoryTotal + Object.keys(levelMap || {}).length;
    }, 0);
  }, 0);
}

function ensureStudyTimeShape(studyTime) {
  if (!studyTime.byCourse || typeof studyTime.byCourse !== "object") {
    studyTime.byCourse = {};
  }
  if (!studyTime.byDay || typeof studyTime.byDay !== "object") {
    studyTime.byDay = {};
  }
  if (!studyTime.bySubject || typeof studyTime.bySubject !== "object") {
    studyTime.bySubject = {};
  }
  if (!studyTime.byDaySubject || typeof studyTime.byDaySubject !== "object") {
    studyTime.byDaySubject = {};
  }
}

function getActiveStudyTimeStore() {
  const account = getCurrentAccount();
  const profile = getCurrentProfile();
  if (profile) {
    ensureLearnerShape(profile);
    return profile.studyTime;
  }
  if (account) {
    return createEmptyStudyTime();
  }
  ensureGuestStoreShape();
  return guestStore.studyTime;
}

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getTotalStudySeconds(studyTime) {
  if (!studyTime || typeof studyTime !== "object") {
    return 0;
  }
  ensureStudyTimeShape(studyTime);
  return Object.values(studyTime.byCourse || {}).reduce((total, value) => total + Number(value || 0), 0);
}

function isStudySessionActive() {
  return document.visibilityState === "visible" && Boolean(state.selectedCategoryId);
}

function handleVisibilityChange() {
  if (document.visibilityState !== "visible") {
    flushStudyTime();
  }
}

function startStudyTimer() {
  if (state.studyTimerId) {
    return;
  }

  state.lastStudyTickAt = Date.now();
  state.studyTimerId = window.setInterval(() => {
    const now = Date.now();
    const elapsedMs = now - state.lastStudyTickAt;
    state.lastStudyTickAt = now;

    if (!isStudySessionActive()) {
      renderStudyTime();
      return;
    }

    addStudyTime(elapsedMs);
  }, studyTickMs);
}

function flushStudyTime() {
  if (!state.lastStudyTickAt) {
    state.lastStudyTickAt = Date.now();
    return;
  }

  const now = Date.now();
  const elapsedMs = now - state.lastStudyTickAt;
  state.lastStudyTickAt = now;

  if (isStudySessionActive() && elapsedMs > 0) {
    addStudyTime(elapsedMs);
    return;
  }

  renderStudyTime();
}

function addStudyTime(elapsedMs) {
  if (!state.selectedCategoryId || elapsedMs <= 0) {
    renderStudyTime();
    return;
  }

  const secondsToAdd = Math.max(1, Math.round(elapsedMs / 1000));
  const activeContext = getActiveCategoryContext();
  if (!activeContext.key) {
    renderStudyTime();
    return;
  }

  const studyTime = getActiveStudyTimeStore();
  ensureStudyTimeShape(studyTime);
  const subjectFocus = getCategorySubject(state.selectedGrade, activeContext.key);

  studyTime.byCourse[activeContext.key] = (studyTime.byCourse[activeContext.key] || 0) + secondsToAdd;
  const todayKey = getTodayKey();
  studyTime.byDay[todayKey] = (studyTime.byDay[todayKey] || 0) + secondsToAdd;
  studyTime.bySubject[subjectFocus] = (studyTime.bySubject[subjectFocus] || 0) + secondsToAdd;
  if (!studyTime.byDaySubject[todayKey] || typeof studyTime.byDaySubject[todayKey] !== "object") {
    studyTime.byDaySubject[todayKey] = {};
  }
  studyTime.byDaySubject[todayKey][subjectFocus] = (studyTime.byDaySubject[todayKey][subjectFocus] || 0) + secondsToAdd;

  persistStudyTime();
  renderStudyTime();
}

function persistStudyTime() {
  const account = getCurrentAccount();
  const profile = getCurrentProfile();
  if (profile) {
    if (account?.type === "parent") {
      account.children[account.activeChildId] = profile;
      profilesStore.profiles[account.id] = account;
    } else {
      profilesStore.profiles[profile.id] = profile;
    }
    saveProfilesStore();
    return;
  }
  if (account) {
    return;
  }
  saveGuestStore();
}

function clearStudyTimeForContext(studyTime, contextKey) {
  if (!studyTime || !contextKey) {
    return;
  }
  ensureStudyTimeShape(studyTime);
  delete studyTime.byCourse[contextKey];
}

function renderStudyTime() {
  if (!elements.courseTimeLabel || !elements.dailyTimeLabel) {
    return;
  }

  const studyTime = getActiveStudyTimeStore();
  ensureStudyTimeShape(studyTime);
  const activeContext = getActiveCategoryContext();
  const courseSeconds = activeContext.key ? (studyTime.byCourse[activeContext.key] || 0) : 0;
  const todaySeconds = studyTime.byDay[getTodayKey()] || 0;

  elements.courseTimeLabel.textContent = formatStudyTime(courseSeconds);
  elements.dailyTimeLabel.textContent = formatStudyTime(todaySeconds);
  renderHeroActivity();
  renderParentDashboard();
}

function formatStudyTime(totalSeconds) {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds || 0));
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = safeSeconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m ${seconds}s`;
}

function renderHeroActivity() {
  if (!elements.heroTodayTime || !elements.heroWeekAchievement || !elements.heroActivityChart) {
    return;
  }

  const account = getCurrentAccount();
  const profile = getCurrentProfile();
  ensureGuestStoreShape();
  const studyTime = profile ? profile.studyTime : account ? createEmptyStudyTime() : guestStore.studyTime;
  const scoreHistory = profile ? profile.scoreHistory : account ? [] : guestStore.scoreHistory;
  ensureStudyTimeShape(studyTime);

  const todayKey = getTodayKey();
  elements.heroTodayTime.textContent = formatStudyTime(studyTime.byDay[todayKey] || 0);

  const dayItems = getPastSevenDaysActivity(studyTime.byDay, scoreHistory);
  const weeklyLevels = dayItems.reduce((total, item) => total + item.levelsCompleted, 0);
  elements.heroWeekAchievement.textContent = `${weeklyLevels} level${weeklyLevels === 1 ? "" : "s"}`;

  const maxSeconds = Math.max(...dayItems.map((item) => item.seconds), 0);
  elements.heroActivityChart.innerHTML = dayItems
    .map((item) => {
      const height = maxSeconds > 0 ? Math.max(10, Math.round((item.seconds / maxSeconds) * 100)) : 10;
      return `
        <div class="hero-activity-day">
          <div class="hero-activity-meta">
            <span class="hero-activity-time">${formatCompactStudyTime(item.seconds)}</span>
            <span class="hero-activity-achievement">${item.levelsCompleted} done</span>
          </div>
          <div class="hero-activity-bar-wrap">
            <div class="hero-activity-bar ${item.seconds === 0 ? "is-empty" : ""}" style="height:${height}px"></div>
          </div>
          <span class="hero-activity-label">${item.label}</span>
        </div>
      `;
    })
    .join("");

  renderLearnerCourseAnalysis(profile);
  renderLearnerGoalProgress(profile);
}

function renderLearnerGoalProgress(profile) {
  if (!elements.learnerGoalProgressWrap || !elements.learnerGoalProgress) {
    return;
  }

  const account = getCurrentAccount();
  const learnerCanView = Boolean(profile) && (account?.type === "learner" || state.childViewMode);
  elements.learnerGoalProgressWrap.classList.toggle("hidden", !learnerCanView);
  if (!learnerCanView) {
    elements.learnerGoalProgress.innerHTML = "";
    elements.learnerSubjectProgressWrap?.classList.add("hidden");
    if (elements.learnerSubjectProgressChart) {
      elements.learnerSubjectProgressChart.innerHTML = "";
    }
    return;
  }

  ensureLearnerShape(profile);
  const mathGoal = getLearnerGoalBucket(profile.goals, "math");
  const englishGoal = getLearnerGoalBucket(profile.goals, "english");
  if (elements.learnerSubjectProgressWrap && elements.learnerSubjectProgressChart) {
    elements.learnerSubjectProgressWrap.classList.remove("hidden");
    renderSubjectProgressChart(elements.learnerSubjectProgressChart, getSubjectProgressSummary(profile));
  }

  const rows = [
    {
      label: "Maths study time",
      actual: Math.round(getTodaySubjectSeconds(profile.studyTime, "math", profile.scoreHistory || []) / 60),
      target: mathGoal.dailyMinutes,
      enabled: mathGoal.enabled,
      suffix: "m"
    },
    {
      label: "Maths units",
      actual: getTodayCompletedLevelsBySubject(profile.scoreHistory || [], "math"),
      target: mathGoal.dailyLevels,
      enabled: mathGoal.enabled,
      suffix: ""
    },
    {
      label: "English study time",
      actual: Math.round(getTodaySubjectSeconds(profile.studyTime, "english", profile.scoreHistory || []) / 60),
      target: englishGoal.dailyMinutes,
      enabled: englishGoal.enabled,
      suffix: "m"
    },
    {
      label: "English units",
      actual: getTodayCompletedLevelsBySubject(profile.scoreHistory || [], "english"),
      target: englishGoal.dailyLevels,
      enabled: englishGoal.enabled,
      suffix: ""
    }
  ];

  elements.learnerGoalProgress.innerHTML = rows.map((row) => `
    <div class="goal-progress-block">
      <div class="goal-progress-head">
        <span>${row.label}</span>
        <strong>${row.enabled ? `${row.actual}${row.suffix} / ${row.target}${row.suffix}` : "Not set"}</strong>
      </div>
      <div class="goal-progress-track">
        <div class="goal-progress-bar" style="width:${row.enabled ? getGoalProgressPercent(row.actual, row.target) : 0}%"></div>
      </div>
    </div>
  `).join("");
}

function renderLearnerCourseAnalysis(profile) {
  if (!elements.learnerCourseAnalysisWrap || !elements.learnerCourseAnalysis) {
    return;
  }

  const account = getCurrentAccount();
  const learnerCanView = Boolean(profile) && (account?.type === "learner" || state.childViewMode);
  elements.learnerCourseAnalysisWrap.classList.toggle("hidden", !learnerCanView);
  if (!learnerCanView) {
    elements.learnerCourseAnalysis.innerHTML = "";
    return;
  }

  const analytics = getTopicAnalytics(profile);
  if (!analytics.length) {
    elements.learnerCourseAnalysis.innerHTML = `<div class="history-empty">Complete a level to see your course analysis here.</div>`;
    return;
  }

  elements.learnerCourseAnalysis.innerHTML = `
    <div class="parent-dashboard-analysis-table">
      <div class="parent-dashboard-analysis-head">Course</div>
      <div class="parent-dashboard-analysis-head">Grade</div>
      <div class="parent-dashboard-analysis-head">Attempts</div>
      <div class="parent-dashboard-analysis-head">Best Score</div>
      <div class="parent-dashboard-analysis-head">Study Time</div>
      ${analytics.map((item) => `
        <div class="parent-dashboard-analysis-cell">${escapeHtml(item.title)}</div>
        <div class="parent-dashboard-analysis-cell">Grade ${item.grade}</div>
        <div class="parent-dashboard-analysis-cell">${item.attempts}</div>
        <div class="parent-dashboard-analysis-cell">${item.bestScore}/${QUESTIONS_PER_LEVEL} (${item.bestPercentage}%)</div>
        <div class="parent-dashboard-analysis-cell">${formatStudyTime(item.timeSeconds)}</div>
      `).join("")}
    </div>
  `;
}

function getPastSevenDaysActivity(byDay, scoreHistory) {
  const items = [];
  const completedByDay = {};

  (scoreHistory || []).forEach((entry) => {
    const dayKey = formatDayKeyFromValue(entry.completedAt);
    if (!dayKey) {
      return;
    }
    completedByDay[dayKey] = (completedByDay[dayKey] || 0) + 1;
  });

  for (let offset = 6; offset >= 0; offset -= 1) {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - offset);
    const key = buildDayKey(date);
    items.push({
      key,
      label: date.toLocaleDateString(undefined, { weekday: "short" }),
      seconds: byDay[key] || 0,
      levelsCompleted: completedByDay[key] || 0
    });
  }

  return items;
}

function buildDayKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDayKeyFromValue(value) {
  try {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return "";
    }
    return buildDayKey(date);
  } catch (error) {
    return "";
  }
}

function formatCompactStudyTime(totalSeconds) {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds || 0));
  if (safeSeconds >= 3600) {
    return `${Math.floor(safeSeconds / 3600)}h`;
  }
  if (safeSeconds >= 60) {
    return `${Math.floor(safeSeconds / 60)}m`;
  }
  return `${safeSeconds}s`;
}

function makeCategory(id, title, description, factory, config) {
  return { id, title, description, factory, config };
}

function getAvailableMasteryTracks(grade = state.selectedGrade) {
  return masteryTracks.filter((category) => {
    const minGrade = category.config?.minGrade || 1;
    const maxGrade = category.config?.maxGrade || 12;
    return grade >= minGrade && grade <= maxGrade;
  });
}

function isMasteryCategoryId(categoryId) {
  return masteryTracks.some((category) => category.id === categoryId);
}

function isMasteryCategory(category) {
  return Boolean(category && isMasteryCategoryId(category.id));
}

function getCategoryById(categoryId, grade = state.selectedGrade) {
  if (!categoryId) {
    return null;
  }

  return [...(curriculum[grade] || []), ...getAvailableMasteryTracks(grade)]
    .find((category) => category.id === categoryId) || null;
}

function getContextDisplayTitle(category, grade = state.selectedGrade) {
  if (!isMasteryCategory(category)) {
    return category?.title || "";
  }
  return `${category.title} (from Grade ${grade})`;
}

function makeEnglishCategories(grade) {
  const categories = [
    makeCategory(
      "english-grammar",
      "English Grammar",
      englishGrammarDescription(grade),
      "englishGrammar",
      { grade, skill: "grammar" }
    ),
    makeCategory(
      "english-reading",
      "English Reading",
      englishReadingDescription(grade),
      "englishReading",
      { grade, skill: "reading" }
    ),
    makeCategory(
      "english-vocabulary",
      "English Vocabulary",
      englishVocabularyDescription(grade),
      "englishVocabulary",
      { grade, skill: "vocabulary" }
    ),
    makeCategory(
      "english-writing",
      "English Writing",
      englishWritingDescription(grade),
      "englishWriting",
      { grade, skill: "writing" }
    )
  ];

  if (!ENABLE_PAT_PRACTICE) {
    return categories;
  }

  if (grade === 9) {
    categories.push(
      makeCategory(
        "english-pat-part-a",
        "PAT Prep Part A",
        englishPatPartADescription(),
        "englishPatPartA",
        { grade, skill: "pat-part-a" }
      )
    );
    categories.push(
      makeCategory(
        "english-pat-part-b",
        "PAT Prep Part B",
        englishPatPartBDescription(),
        "englishPatPartB",
        { grade, skill: "pat-part-b" }
      )
    );
  }

  if (grade === 6) {
    categories.push(
      makeCategory(
        "english-pat6-part-b",
        "PAT Prep Part B",
        englishPatGrade6PartBDescription(),
        "englishPatGrade6PartB",
        { grade, skill: "pat-grade-6-part-b" }
      )
    );
  }

  return categories;
}

function englishGrammarDescription(grade) {
  if (grade <= 3) {
    return "Build sentence basics, punctuation, and grammar confidence.";
  }
  if (grade <= 6) {
    return "Strengthen grammar rules, parts of speech, and sentence control.";
  }
  if (grade <= 9) {
    return "Practice clauses, verb use, sentence structure, and formal grammar.";
  }
  return "Master advanced grammar, style, usage, and formal sentence patterns.";
}

function englishVocabularyDescription(grade) {
  if (grade <= 3) {
    return "Grow everyday word meaning with simple synonym and antonym practice.";
  }
  if (grade <= 6) {
    return "Strengthen vocabulary, word meaning, prefixes, and context clues.";
  }
  if (grade <= 9) {
    return "Practice academic vocabulary, precise word choice, and meaning in context.";
  }
  return "Master advanced vocabulary, nuanced meaning, and precise diction.";
}

function englishReadingDescription(grade) {
  if (grade <= 3) {
    return "Practice main idea, details, sequence, and early story understanding.";
  }
  if (grade <= 6) {
    return "Build comprehension with inference, context clues, theme, and text features.";
  }
  if (grade <= 9) {
    return "Practice literary and informational reading, evidence, inference, and author's purpose.";
  }
  return "Develop advanced comprehension, analysis, argument, tone, bias, and evidence-based reading.";
}

function englishWritingDescription(grade) {
  if (grade <= 3) {
    return "Practice complete sentences, story openings, and simple writing choices.";
  }
  if (grade <= 6) {
    return "Build topic sentences, paragraph endings, and clear writing structure.";
  }
  if (grade <= 9) {
    return "Practice stronger revisions, paragraph development, and writing organization.";
  }
  return "Develop thesis writing, revision choices, style, and clear written argument.";
}

function englishPatPartADescription() {
  return "Practice Grade 9 PAT Part A writing choices, organization, sentence control, vocabulary, voice, and conventions.";
}

function englishPatPartBDescription() {
  return "Practice Grade 9 PAT Part B reading skills: details, text structure, word meaning, inference, and main idea.";
}

function englishPatGrade6PartBDescription() {
  return "Practice Grade 6 PAT Part B reading skills: stated details, context clues, figurative language, cartoons, poems, and main idea.";
}

function number(min, max, rng) {
  return Math.floor(rng() * (max - min + 1)) + min;
}

function factorsOf(value) {
  const n = Math.max(1, Math.round(Math.abs(value)));
  const result = [];
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  return result;
}

function greatestCommonFactor(a, b) {
  let x = Math.abs(Math.round(a));
  let y = Math.abs(Math.round(b));
  while (y) {
    [x, y] = [y, x % y];
  }
  return x || 1;
}

function leastCommonMultiple(a, b) {
  return Math.round(Math.abs(a * b) / greatestCommonFactor(a, b));
}

function isPrimeNumber(value) {
  const n = Math.round(value);
  if (n < 2) {
    return false;
  }
  for (let i = 2; i * i <= n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Grade 6+ "factors, multiples, and rational number foundations" content â€” used by
// questionFactories.numberSense in place of the elementary comparison/place-value/sequence
// questions used for grades below 6 (see the branch in that factory).
function buildFactorsAndMultiplesQuestion(rng, difficulty, index) {
  const operandCeiling = lerpRange(6, 60, difficulty);
  const mode = index % 4;

  if (mode === 0) {
    const a = number(6, operandCeiling, rng);
    const b = number(6, operandCeiling, rng);
    const correct = greatestCommonFactor(a, b);
    const { options, answerIndex } = buildOptions(correct, [
      correct + 1,
      Math.max(1, correct - 1),
      correct + 3
    ], rng);
    return {
      prompt: `What is the greatest common factor (GCF) of ${a} and ${b}?`,
      options,
      answerIndex,
      explanation: `The largest number that divides evenly into both ${a} and ${b} is ${correct}.`
    };
  }

  if (mode === 1) {
    const a = number(4, Math.max(6, Math.round(operandCeiling / 2)), rng);
    const b = number(4, Math.max(6, Math.round(operandCeiling / 2)), rng);
    const correct = leastCommonMultiple(a, b);
    const { options, answerIndex } = buildOptions(correct, [
      correct + a,
      Math.max(1, correct - b),
      a * b === correct ? correct + b : a * b
    ], rng);
    return {
      prompt: `What is the least common multiple (LCM) of ${a} and ${b}?`,
      options,
      answerIndex,
      explanation: `The smallest number that both ${a} and ${b} divide evenly into is ${correct}.`
    };
  }

  if (mode === 2) {
    const value = number(12, Math.max(20, operandCeiling * 2), rng);
    const correct = factorsOf(value).length;
    const { options, answerIndex } = buildOptions(correct, [
      correct + 1,
      Math.max(1, correct - 1),
      correct + 2
    ], rng);
    return {
      prompt: `How many whole-number factors does ${value} have?`,
      options,
      answerIndex,
      explanation: `The factors of ${value} are ${factorsOf(value).join(", ")} â€” that's ${correct} factors in total.`
    };
  }

  const target = number(11, Math.max(30, operandCeiling * 2 + 11), rng);
  const targetIsPrime = isPrimeNumber(target);
  const correctLabel = targetIsPrime ? "Prime" : "Composite";
  const otherLabel = targetIsPrime ? "Composite" : "Prime";
  const { options, answerIndex } = buildOptions(correctLabel, [otherLabel, "Neither", "Both"], rng);
  const smallestFactor = !targetIsPrime ? factorsOf(target).find((factor) => factor > 1 && factor < target) : null;
  return {
    prompt: `Is ${target} a prime number or a composite number?`,
    options,
    answerIndex,
    explanation: targetIsPrime
      ? `${target} is only divisible by 1 and itself, so it is prime.`
      : `${target} can also be divided evenly by ${smallestFactor} (not just 1 and itself), so it is composite.`
  };
}

function lerpRange(min, max, difficulty) {
  const span = max - min;
  const scaledMax = min + Math.max(1, Math.round((span * difficulty) / LEVEL_COUNT));
  return Math.max(min, scaledMax);
}

function difficultyStep(base, difficulty, cap = 1000) {
  return Math.min(cap, Math.max(base, base + (difficulty - 1) * Math.max(1, Math.round(base / 2))));
}

function mulberry32(seed) {
  return function random() {
    let t = seed += 0x6d2b79f5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashCode(text) {
  let hash = 0;
  for (let index = 0; index < text.length; index += 1) {
    hash = ((hash << 5) - hash) + text.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function shuffle(list, rng) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildOptions(correct, distractors, rng, formatter = (value) => String(value)) {
  const rawPool = shuffle([correct, ...distractors], rng);
  const options = [];
  const seenLabels = new Set();
  const seenMathKeys = new Set();
  const correctLabel = formatter(correct);

  rawPool.forEach((value) => {
    const label = formatter(value);
    const mathKey = mathEquivalentKey(label);
    if (!seenLabels.has(label) && (!mathKey || !seenMathKeys.has(mathKey))) {
      seenLabels.add(label);
      if (mathKey) {
        seenMathKeys.add(mathKey);
      }
      options.push(label);
    }
  });

  let attempt = 1;
  while (options.length < 4 && attempt <= 20) {
    const fallbackLabel = canAutoGenerateFallbackOptions(correct)
      ? formatter(buildFallbackOptionValue(correct, attempt))
      : buildGenericFallbackOptionLabel(correctLabel, attempt);
    const fallbackMathKey = mathEquivalentKey(fallbackLabel);
    if (!seenLabels.has(fallbackLabel) && (!fallbackMathKey || !seenMathKeys.has(fallbackMathKey))) {
      seenLabels.add(fallbackLabel);
      if (fallbackMathKey) {
        seenMathKeys.add(fallbackMathKey);
      }
      options.push(fallbackLabel);
    }
    attempt += 1;
  }

  const shuffledOptions = shuffle(options.slice(0, 4), rng);
  return {
    options: shuffledOptions,
    answerIndex: shuffledOptions.indexOf(correctLabel)
  };
}

function buildGenericFallbackOptionLabel(correctLabel, attempt) {
  const text = String(correctLabel || "").trim();

  if ([">", "<", "="].includes(text)) {
    return [">", "<", "=", "≠"][attempt % 4];
  }

  if (/^-?\d+x$/.test(text)) {
    const coefficient = Number(text.replace("x", ""));
    return `${coefficient + attempt}x`;
  }

  if (/^-?x$/.test(text)) {
    return `${attempt + 1}x`;
  }

  if (/^-?\d+(\.\d+)?x\s*[+\-]\s*\d+(\.\d+)?$/.test(text)) {
    return text.replace(/-?\d+(\.\d+)?x/, `${attempt + 1}x`);
  }

  if (/^\d+\s*degrees?$/.test(text)) {
    const value = Number(text);
    return `${value + (attempt * 15)} degrees`;
  }

  if (/^pi\/\d+$/.test(text)) {
    const denominator = Number(text.split("/")[1]);
    return `pi/${denominator + attempt}`;
  }

  if (/^sqrt\(\d+\)\/\d+$/.test(text)) {
    const match = text.match(/^sqrt\((\d+)\)\/(\d+)$/);
    if (match) {
      const radical = Number(match[1]);
      const denominator = Number(match[2]);
      return `sqrt(${radical + attempt})/${denominator}`;
    }
  }

  if (["Rational", "Irrational"].includes(text)) {
    return ["Neither", "Both"][((attempt - 1) % 2)];
  }

  if (["Opens upward", "Opens downward"].includes(text)) {
    return ["It is a straight line", "It is horizontal"][((attempt - 1) % 2)];
  }

  if (["Yes, it is a function", "No, it is not a function"].includes(text)) {
    return ["Not enough information", "It depends on the inputs"][((attempt - 1) % 2)];
  }

  return ["None of these", "More than one answer", "Neither", "Both"][((attempt - 1) % 4)];
}

function canAutoGenerateFallbackOptions(correct) {
  if (typeof correct === "number" && Number.isFinite(correct)) {
    return true;
  }

  const text = String(correct || "").trim();
  return /^-?\d+(\.\d+)?$/.test(text)
    || /^-?\d+\/-?\d+$/.test(text)
    || /^\$-?\d+(\.\d+)?$/.test(text)
    || /^-?\d+(\.\d+)?%$/.test(text);
}

function buildFallbackOptionValue(correct, attempt) {
  if (typeof correct === "number" && Number.isFinite(correct)) {
    const step = Math.max(1, Math.abs(Math.round(correct / 5)) || 1);
    return correct + (step * attempt);
  }

  const text = String(correct || "").trim();

  if (/^\$-?\d+(\.\d+)?$/.test(text)) {
    const value = Number(text.replace("$", ""));
    const step = Math.max(1, Math.abs(Math.round(value / 5)) || 1);
    return `$${(value + (step * attempt)).toFixed(2)}`;
  }

  if (/^-?\d+(\.\d+)?%$/.test(text)) {
    const value = Number(text.replace("%", ""));
    return `${value + attempt}%`;
  }

  if (/^-?\d+\/-?\d+$/.test(text)) {
    const [numerator, denominator] = text.split("/").map(Number);
    const nextNumerator = numerator + attempt;
    return `${nextNumerator}/${denominator}`;
  }

  if (/^-?\d+(\.\d+)?$/.test(text)) {
    const value = Number(text);
    const step = Math.max(1, Math.abs(Math.round(value / 5)) || 1);
    const fallback = value + (step * attempt);
    return Number.isInteger(value) ? String(Math.round(fallback)) : String(Math.round(fallback * 100) / 100);
  }

  return text;
}

function englishBand(grade) {
  if (grade <= 3) {
    return "lower";
  }
  if (grade <= 6) {
    return "upper";
  }
  if (grade <= 9) {
    return "middle";
  }
  return "senior";
}

function pick(list, rng) {
  return list[number(0, list.length - 1, rng)];
}

function difficultyTier(difficulty) {
  if (difficulty <= Math.ceil(LEVEL_COUNT / 3)) {
    return 1;
  }
  if (difficulty <= Math.ceil((2 * LEVEL_COUNT) / 3)) {
    return 2;
  }
  return 3;
}

function progressivePool(pool, difficulty, minimum = 4) {
  if (!pool.length) {
    return [];
  }

  const step = LEVEL_COUNT > 1 ? 0.7 / (LEVEL_COUNT - 1) : 0.7;
  const unlockedRatio = 0.3 + ((Math.max(1, difficulty) - 1) * step);
  const unlockedCount = Math.min(
    pool.length,
    Math.max(Math.min(minimum, pool.length), Math.ceil(pool.length * unlockedRatio))
  );
  return pool.slice(0, unlockedCount);
}

function chooseFromProgressivePool(pool, rng, difficulty, index, minimum = 4) {
  const available = progressivePool(pool, difficulty, minimum);
  const source = available.length ? available : pool;
  const offset = source.length ? ((difficulty - 1) * 3) % source.length : 0;
  return source[(index + offset) % source.length];
}

function chooseFromProgressiveGroups(groups, rng, difficulty, index) {
  const tier = difficultyTier(difficulty);
  const availableGroups = groups.slice(0, tier).flat().filter((item) => Array.isArray(item) ? item.length : Boolean(item));
  const normalizedPool = availableGroups.flatMap((entry) => Array.isArray(entry) ? entry : [entry]);
  const offset = normalizedPool.length ? ((difficulty - 1) * 2) % normalizedPool.length : 0;
  return normalizedPool[(index + offset) % normalizedPool.length];
}

function gcd(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    [x, y] = [y, x % y];
  }
  return x || 1;
}

function simplifyFraction(numerator, denominator) {
  const divisor = gcd(numerator, denominator);
  return {
    numerator: numerator / divisor,
    denominator: denominator / divisor
  };
}

function fractionString(numerator, denominator, simplify = false) {
  const value = simplify ? simplifyFraction(numerator, denominator) : { numerator, denominator };
  return `${value.numerator}/${value.denominator}`;
}

function percentString(numerator, denominator) {
  const percent = (numerator / denominator) * 100;
  const rounded = Math.round(percent * 100) / 100;
  return Number.isInteger(rounded) ? `${rounded}%` : `${rounded.toFixed(2).replace(/0+$/, "").replace(/\.$/, "")}%`;
}

function decimalString(numerator, denominator) {
  const value = numerator / denominator;
  const rounded = Math.round(value * 100) / 100;
  return rounded.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

function factorial(value) {
  let total = 1;
  for (let current = 2; current <= value; current += 1) {
    total *= current;
  }
  return total;
}

function permutation(n, r) {
  if (r > n || r < 0) {
    return 0;
  }
  return factorial(n) / factorial(n - r);
}

function combination(n, r) {
  if (r > n || r < 0) {
    return 0;
  }
  return permutation(n, r) / factorial(r);
}

function unitLabel(value, singular = "unit", plural = "units") {
  return `${value} ${Number(value) === 1 ? singular : plural}`;
}

function formatDecimalAnswer(value, digits = 2, minimumPlaces = 1) {
  const fixed = Number(value).toFixed(digits);
  const [whole, fraction = ""] = fixed.split(".");
  if (!fraction.length) {
    return whole;
  }

  let trimmed = fraction.replace(/0+$/, "");
  if (minimumPlaces > 0) {
    trimmed = trimmed.padEnd(minimumPlaces, "0");
  }

  return trimmed ? `${whole}.${trimmed}` : whole;
}

function fractionResultString(numerator, denominator) {
  const value = simplifyFraction(numerator, denominator);
  return value.denominator === 1
    ? String(value.numerator)
    : `${value.numerator}/${value.denominator}`;
}

function mathEquivalentKey(value) {
  const text = String(value ?? "").trim();
  if (!text) {
    return null;
  }

  if (/^-?\d+\/-?\d+$/.test(text)) {
    const [rawNumerator, rawDenominator] = text.split("/").map(Number);
    if (!rawDenominator) {
      return null;
    }
    const denominatorSign = rawDenominator < 0 ? -1 : 1;
    const simplified = simplifyFraction(rawNumerator * denominatorSign, Math.abs(rawDenominator));
    return `number:${(simplified.numerator / simplified.denominator).toFixed(8)}`;
  }

  if (/^\$-?\d+(\.\d+)?$/.test(text)) {
    return `number:${Number(text.replace("$", "")).toFixed(8)}`;
  }

  if (/^-?\d+(\.\d+)?%$/.test(text)) {
    return `number:${(Number(text.replace("%", "")) / 100).toFixed(8)}`;
  }

  if (/^-?\d+(\.\d+)?$/.test(text)) {
    return `number:${Number(text).toFixed(8)}`;
  }

  return null;
}

function probabilityExplanation(steps) {
  return steps.map((step, index) => `Step ${index + 1}: ${step}`).join("<br>");
}

function plainListDiagram(title, entries) {
  return `
    <div class="probability-diagram">
      <strong>${title}</strong>
      <div>${entries.join(" | ")}</div>
    </div>
  `;
}

function sampleSpaceTableDiagram(rowLabel, columnLabel, rows, columns, formatter) {
  const headerCells = columns.map((column) => `<th>${column}</th>`).join("");
  const bodyRows = rows.map((row) => `
    <tr>
      <th>${row}</th>
      ${columns.map((column) => `<td>${formatter(row, column)}</td>`).join("")}
    </tr>
  `).join("");
  return `
    <div class="probability-diagram">
      <strong>Sample space table</strong>
      <table class="probability-table">
        <thead>
          <tr>
            <th>${rowLabel} \\ ${columnLabel}</th>
            ${headerCells}
          </tr>
        </thead>
        <tbody>${bodyRows}</tbody>
      </table>
    </div>
  `;
}

function makeProbabilityQuestion({ prompt, correct, distractors, hint, steps, diagram }) {
  return { prompt, correct, distractors, hint, explanation: probabilityExplanation(steps), diagram };
}

function getProbabilityWorksheetExamples(tabId) {
  const exampleSets = {
    "probability-basics": [
      {
        title: "Example 1: Spinner probability",
        question: "A spinner has 8 equal sections. Three sections are blue. What is the probability of landing on blue? Write the answer as a fraction, decimal, and percent.",
        howTo: "Count the favourable outcomes first, then count the total outcomes. Probability is favourable over total.",
        solution: `There are 3 blue sections out of 8 total sections, so the probability is ${fractionString(3, 8, true)}. As a decimal, ${decimalString(3, 8)}. As a percent, ${percentString(3, 8)}.`,
        diagram: plainListDiagram("Spinner sections", ["Blue", "Blue", "Blue", "Red", "Yellow", "Green", "Red", "Yellow"]),
        masteryQuestion: "A spinner has 10 equal sections and 4 are green. What is the probability of landing on green as a fraction, decimal, and percent?"
      },
      {
        title: "Example 2: Theoretical and experimental probability",
        question: "A coin is flipped 20 times and lands on heads 11 times. Compare the experimental probability of heads to the theoretical probability.",
        howTo: "Experimental probability uses what actually happened. Theoretical probability uses what should happen if outcomes are equally likely.",
        solution: `Experimental probability of heads = ${fractionString(11, 20)} = ${decimalString(11, 20)}. Theoretical probability of heads for a fair coin = ${fractionString(1, 2)} = ${decimalString(1, 2)}. The experimental result is close to the theoretical result, but not exactly the same.`,
        diagram: plainListDiagram("Coin-flip record", ["Heads: 11", "Tails: 9", "Total flips: 20"]),
        masteryQuestion: "A die is rolled 30 times and a 6 appears 7 times. Compare the experimental probability of rolling a 6 to the theoretical probability."
      },
      {
        title: "Example 3: Probability with cards",
        question: "A bag contains 5 red cards, 3 blue cards, and 2 green cards. What is the probability of choosing a blue card?",
        howTo: "Find the number of blue cards, then divide by the total number of cards in the bag.",
        solution: `There are 3 blue cards. Total cards = 5 + 3 + 2 = 10. So the probability of blue is ${fractionString(3, 10, true)}. This is ${decimalString(3, 10)} or ${percentString(3, 10)}.`,
        diagram: plainListDiagram("Cards in the bag", ["Red: 5", "Blue: 3", "Green: 2", "Total: 10"]),
        masteryQuestion: "A bag contains 6 yellow cards, 2 black cards, and 4 white cards. What is the probability of choosing a black card?"
      },
      {
        title: "Example 4: Number cube probability",
        question: "A 12-sided die is numbered 1 to 12. What is the probability of rolling a number greater than 9?",
        howTo: "List the favourable outcomes, count them, then divide by the total number of outcomes.",
        solution: `The numbers greater than 9 are 10, 11, and 12. That gives 3 favourable outcomes out of 12 total, so the probability is ${fractionString(3, 12, true)} = ${fractionString(1, 4)}.`,
        diagram: plainListDiagram("12-sided die", ["Favourable: 10, 11, 12", "Total outcomes: 12"]),
        masteryQuestion: "A 12-sided die is numbered 1 to 12. What is the probability of rolling an even number greater than 6?"
      }
    ],
    "organize-outcomes": [
      {
        title: "Example 1: Make a list of outcomes",
        question: "A lunch special lets a student choose one main dish and one drink. Mains: burger, wrap. Drinks: juice, milk, water. List all possible outcomes.",
        howTo: "Pair each main dish with every drink. This creates the sample space.",
        solution: "The outcomes are burger + juice, burger + milk, burger + water, wrap + juice, wrap + milk, wrap + water. There are 6 total outcomes.",
        diagram: sampleSpaceTableDiagram("Main", "Drink", ["Burger", "Wrap"], ["Juice", "Milk", "Water"], (main, drink) => `${main} + ${drink}`),
        masteryQuestion: "A student chooses one sandwich from ham or cheese and one fruit from apple, banana, or orange. List the full sample space."
      },
      {
        title: "Example 2: Use a sample space table",
        question: "A coin is tossed and a marker is chosen from the colours red, blue, and green. How many outcomes are there?",
        howTo: "Put one event on the left and the other across the top. Fill the table with all combinations.",
        solution: "A coin has 2 outcomes: heads and tails. The markers have 3 outcomes: red, blue, green. Total outcomes = 2 × 3 = 6.",
        diagram: sampleSpaceTableDiagram("Coin", "Marker", ["Heads", "Tails"], ["Red", "Blue", "Green"], (coin, marker) => `${coin}-${marker}`),
        masteryQuestion: "A spinner can land on A or B, and a coin can land on heads or tails. Use a sample space table to show all outcomes."
      },
      {
        title: "Example 3: Count outcomes for a condition",
        question: "A pizza shop offers crusts thin and regular, and toppings cheese, pepperoni, and veggie. What is the probability of choosing a regular crust with veggie topping if all outcomes are equally likely?",
        howTo: "First build the full sample space, then count the outcomes that match the condition.",
        solution: "There are 2 crust choices and 3 topping choices, so 2 × 3 = 6 total outcomes. Only one outcome is regular + veggie, so the probability is 1/6.",
        diagram: sampleSpaceTableDiagram("Crust", "Topping", ["Thin", "Regular"], ["Cheese", "Pepperoni", "Veggie"], (crust, topping) => `${crust} + ${topping}`),
        masteryQuestion: "A hockey net prize board offers 3 puck colours and 4 target zones. What is the probability of choosing blue and top-left if all outcomes are equally likely?"
      },
      {
        title: "Example 4: Tree-diagram thinking",
        question: "A student chooses one of 2 sauces and one of 3 side dishes. How can a tree diagram help organize the outcomes?",
        howTo: "A tree starts each first choice, then branches again for every second choice.",
        solution: "Start with the 2 sauces. From each sauce, draw 3 branches for the side dishes. That gives 2 × 3 = 6 outcomes in a clear organized way.",
        diagram: plainListDiagram("Tree-diagram idea", ["Sauce 1 -> Side 1, Side 2, Side 3", "Sauce 2 -> Side 1, Side 2, Side 3"]),
        masteryQuestion: "A student chooses one book genre and one reading spot. Explain how a tree diagram can organize the sample space."
      }
    ],
    "independent-events": [
      {
        title: "Example 1: Two independent events",
        question: "A student picks one snack from chips, fruit, or crackers and one drink from water or milk. What is the probability of getting fruit and milk?",
        howTo: "Because the two choices do not affect each other, multiply the separate probabilities or count one matching outcome from the sample space.",
        solution: "There are 3 snack choices and 2 drink choices, so 3 × 2 = 6 total outcomes. Only one outcome is fruit + milk, so the probability is 1/6.",
        diagram: sampleSpaceTableDiagram("Snack", "Drink", ["Chips", "Fruit", "Crackers"], ["Water", "Milk"], (snack, drink) => `${snack} + ${drink}`),
        masteryQuestion: "A student picks one sandwich from chicken, tuna, or egg and one juice from orange or apple. What is the probability of chicken and apple?"
      },
      {
        title: "Example 2: Spinner and coin together",
        question: "A spinner has 4 equal sections labelled 1, 2, 3, 4 and a coin is tossed. What is the probability of landing on 2 and getting tails?",
        howTo: "One event is the spinner result and the other is the coin result. Count the matching pair in the full sample space.",
        solution: "The spinner has 4 outcomes and the coin has 2 outcomes, so total outcomes = 8. Only one outcome is 2 and tails, so the probability is 1/8.",
        diagram: sampleSpaceTableDiagram("Spinner", "Coin", ["1", "2", "3", "4"], ["Heads", "Tails"], (spinner, coin) => `${spinner}-${coin}`),
        masteryQuestion: "A spinner has 5 equal sections labelled A, B, C, D, E and a coin is tossed. What is the probability of landing on C and getting heads?"
      },
      {
        title: "Example 3: Ordered pair from two choices",
        question: "A student chooses one home town from Calgary or Edmonton and one sport from soccer, basketball, or track. What is the probability of choosing Edmonton and track?",
        howTo: "Build the ordered pairs carefully. Because the choices are independent, every pair is equally likely.",
        solution: "There are 2 home towns and 3 sports, so total outcomes = 6. Only Edmonton + track matches, so the probability is 1/6.",
        diagram: sampleSpaceTableDiagram("Town", "Sport", ["Calgary", "Edmonton"], ["Soccer", "Basketball", "Track"], (town, sport) => `${town} + ${sport}`),
        masteryQuestion: "A student chooses one apartment from A or B and one city from Red Deer, Calgary, or Edmonton. What is the probability of choosing B and Calgary?"
      },
      {
        title: "Example 4: Explain independence",
        question: "Why are choosing a shirt colour and flipping a coin independent events?",
        howTo: "Check whether the result of one event changes the outcomes of the other event.",
        solution: "They are independent because choosing the shirt colour does not change the coin outcomes, and the coin outcome does not change the shirt colours. The events do not affect one another.",
        diagram: plainListDiagram("Independent events", ["Event 1 does not change Event 2", "Event 2 does not change Event 1"]),
        masteryQuestion: "Explain whether choosing a lunch combo and spinning a game spinner are independent events, and tell why."
      }
    ]
  };

  return exampleSets[tabId] || [];
}

const englishQuestionPools = {
  lower: [
    { prompt: "Which word is a noun in the sentence: 'The puppy barked loudly'?", correct: "puppy", distractors: ["barked", "loudly", "the"], hint: "A noun names a person, place, animal, or thing.", explanation: "'puppy' is the naming word, so it is the noun." },
    { prompt: "Which word is a verb in the sentence: 'Birds fly high'?", correct: "fly", distractors: ["Birds", "high", "the"], hint: "A verb tells what someone or something does.", explanation: "'fly' tells the action, so it is the verb." },
    { prompt: "Choose the sentence with the correct capital letter.", correct: "My friend lives in Kenya.", distractors: ["my friend lives in Kenya.", "My friend lives in kenya.", "my friend lives in kenya."], hint: "The first word in a sentence and names of places need capital letters.", explanation: "A sentence should begin with a capital letter, and 'Kenya' is a proper noun." },
    { prompt: "Choose the sentence with the correct ending punctuation.", correct: "Where is your bag?", distractors: ["Where is your bag.", "Where is your bag!", "Where is your bag,"], hint: "A question should end with a question mark.", explanation: "The sentence asks something, so it needs a question mark." },
    { prompt: "Which word means almost the same as 'happy'?", correct: "glad", distractors: ["sad", "tiny", "slow"], hint: "Look for a word with a similar feeling.", explanation: "'Glad' is a synonym for 'happy'." },
    { prompt: "Which word means the opposite of 'cold'?", correct: "hot", distractors: ["cool", "winter", "ice"], hint: "An antonym means the opposite.", explanation: "'Hot' is the opposite of 'cold'." },
    { prompt: "Choose the correct pronoun: 'Lebo has a book. ___ is reading.'", correct: "She", distractors: ["Her", "They", "It"], hint: "Use a subject pronoun for the person doing the action.", explanation: "'She' is the correct subject pronoun for the sentence." },
    { prompt: "Which word is an adjective in the sentence: 'We saw a bright star'?", correct: "bright", distractors: ["saw", "star", "we"], hint: "An adjective describes a noun.", explanation: "'Bright' describes the star, so it is an adjective." },
    { prompt: "Choose the correct plural form of 'box'.", correct: "boxes", distractors: ["boxs", "boxies", "box"], hint: "Words ending in x usually add 'es'.", explanation: "The plural of 'box' is 'boxes'." },
    { prompt: "Which sentence is complete?", correct: "The children played outside.", distractors: ["Played outside.", "The children outside.", "When the children"], hint: "A complete sentence needs a subject and a verb and should make full sense.", explanation: "'The children played outside.' has a subject, a verb, and a complete idea." },
    { prompt: "Which sentence is the best opening for a short story about a rainy day?", correct: "Rain tapped on the roof as Maya looked out the window.", distractors: ["Rain.", "Maya window looked.", "It was and the."], hint: "A good opening sentence should be complete and paint a clear picture.", explanation: "The best opening sentence is complete and gives a vivid idea of the scene." },
    { prompt: "What does the word 'gigantic' mean?", correct: "very big", distractors: ["very small", "very fast", "very quiet"], hint: "Think about size words.", explanation: "'Gigantic' means extremely large or very big." },
    { prompt: "Choose the correct word: 'I ___ to school every day.'", correct: "walk", distractors: ["walks", "walking", "walked"], hint: "The subject is 'I', so use the simple present base form.", explanation: "'I walk' is the correct present-tense form." }
  ],
  upper: [
    { prompt: "Which sentence uses the correct subject-verb agreement?", correct: "The dogs run in the yard.", distractors: ["The dogs runs in the yard.", "The dog run in the yard.", "The dogs is running in the yard."], hint: "A plural subject usually takes a plural verb form.", explanation: "'Dogs' is plural, so 'run' is the correct verb form." },
    { prompt: "Which word is an adverb in the sentence: 'The player moved quickly'?", correct: "quickly", distractors: ["player", "moved", "the"], hint: "An adverb often tells how an action happens.", explanation: "'Quickly' tells how the player moved, so it is an adverb." },
    { prompt: "Choose the conjunction that completes the sentence: 'I wanted to go, ___ it started raining.'", correct: "but", distractors: ["and", "so", "because"], hint: "Use a conjunction that shows contrast.", explanation: "'But' shows the contrast between wanting to go and the rain starting." },
    { prompt: "Which sentence uses a comma correctly?", correct: "After lunch, we returned to class.", distractors: ["After lunch we, returned to class.", "After, lunch we returned to class.", "After lunch we returned, to class."], hint: "A short opening phrase is often followed by a comma.", explanation: "The introductory phrase 'After lunch' should be followed by a comma." },
    { prompt: "Which word has a prefix that means 'not'?", correct: "unhappy", distractors: ["teacher", "careful", "friendship"], hint: "Look for a beginning part that changes the word to its opposite.", explanation: "The prefix 'un-' means 'not', so 'unhappy' means 'not happy'." },
    { prompt: "What does the word 'predict' mean?", correct: "to say what may happen next", distractors: ["to erase a mistake", "to read very slowly", "to ask a question politely"], hint: "Think about making a smart guess before something happens.", explanation: "'Predict' means to say or guess what is likely to happen." },
    { prompt: "Choose the correct pronoun: 'The science books are on the desk. Put ___ away.'", correct: "them", distractors: ["it", "they", "she"], hint: "The noun is plural, so the pronoun must also be plural.", explanation: "'Books' is plural, so 'them' is the correct pronoun." },
    { prompt: "Which sentence is written in the past tense?", correct: "We watched the show last night.", distractors: ["We watch the show last night.", "We are watch the show last night.", "We watches the show last night."], hint: "Past-tense verbs often describe something that already happened.", explanation: "'Watched' is the correct past-tense verb." },
    { prompt: "Which word is the best synonym for 'ancient'?", correct: "old", distractors: ["new", "loud", "smooth"], hint: "Look for a word with nearly the same meaning.", explanation: "'Ancient' means very old." },
    { prompt: "Which word completes the sentence correctly? 'Their team won ___ first game.'", correct: "its", distractors: ["it's", "it is", "it"], hint: "'Its' shows ownership, while 'it's' means 'it is'.", explanation: "'Its' is the possessive form that shows the team owns the game result." },
    { prompt: "Choose the sentence with the correct comparative adjective.", correct: "This puzzle is easier than the last one.", distractors: ["This puzzle is more easy than the last one.", "This puzzle is easiest than the last one.", "This puzzle is easyer than the last one."], hint: "For many short adjectives, add '-er' for comparison.", explanation: "'Easier' is the correct comparative form of 'easy'." },
    { prompt: "Which word is a preposition in the sentence: 'The keys are under the chair'?", correct: "under", distractors: ["keys", "chair", "are"], hint: "A preposition shows position or relationship.", explanation: "'Under' shows the position of the keys in relation to the chair." },
    { prompt: "Which sentence would work best as a topic sentence for a paragraph about school gardens?", correct: "School gardens help students learn in many useful ways.", distractors: ["Gardens.", "We watered plants yesterday after lunch.", "Some plants are green and tall and small."], hint: "A topic sentence should introduce the main idea of the whole paragraph.", explanation: "The best topic sentence clearly states the main idea the paragraph will explain." }
  ],
  middle: [
    { prompt: "Which sentence uses the correct pronoun-antecedent agreement?", correct: "Each student brought his or her notebook.", distractors: ["Each student brought their notebook.", "Each student brought our notebook.", "Each student brought your notebook."], hint: "Match the pronoun carefully with the singular word 'each'.", explanation: "'Each student' is singular, so a singular pronoun form is expected in formal grammar." },
    { prompt: "Which sentence contains an independent clause?", correct: "The storm ended before sunset.", distractors: ["because the storm ended", "before sunset", "while the wind blew"], hint: "An independent clause can stand alone as a full sentence.", explanation: "'The storm ended before sunset.' is a complete thought with a subject and verb." },
    { prompt: "Choose the word that best completes the sentence: 'Her argument was ___ because it used strong evidence.'", correct: "convincing", distractors: ["confused", "empty", "careless"], hint: "Look for a word that matches the idea of strong evidence.", explanation: "'Convincing' fits because strong evidence makes an argument persuasive." },
    { prompt: "Which sentence uses the semicolon correctly?", correct: "The project was difficult; however, we finished on time.", distractors: ["The project was difficult, however; we finished on time.", "The project was difficult however; we finished on time.", "The project was difficult; however we finished, on time."], hint: "A semicolon can join closely related independent clauses, especially before a transition.", explanation: "The semicolon is correctly placed before the transition 'however' joining two complete thoughts." },
    { prompt: "What is the best meaning of 'reluctant'?", correct: "unwilling or hesitant", distractors: ["ready to celebrate", "easy to understand", "full of energy"], hint: "Think about someone holding back instead of jumping in.", explanation: "'Reluctant' means unwilling or hesitant." },
    { prompt: "Which sentence has the correct verb tense?", correct: "By the time we arrived, the movie had started.", distractors: ["By the time we arrived, the movie has started.", "By the time we arrived, the movie start.", "By the time we arrived, the movie starting."], hint: "Use past perfect for something that happened before another past action.", explanation: "'Had started' correctly shows that the movie started before we arrived." },
    { prompt: "Which revision removes the double negative?", correct: "I could hardly hear anything.", distractors: ["I couldn't hardly hear nothing.", "I hardly couldn't hear nothing.", "I can't hardly hear anything never."], hint: "Standard English avoids using two negatives to express one negative idea.", explanation: "'I could hardly hear anything.' expresses the negative idea clearly without a double negative." },
    { prompt: "Which sentence uses an adjective clause?", correct: "The singer who won the award thanked her fans.", distractors: ["Running quickly, the singer waved.", "The singer sang beautifully.", "To win the award was exciting."], hint: "An adjective clause describes a noun and often begins with who, which, or that.", explanation: "'Who won the award' describes the singer, so it is an adjective clause." },
    { prompt: "Choose the best synonym for 'analyze'.", correct: "examine carefully", distractors: ["forget quickly", "speak loudly", "move away"], hint: "Think about studying something in detail.", explanation: "'Analyze' means to examine something carefully." },
    { prompt: "Which sentence is written in active voice?", correct: "The committee approved the proposal.", distractors: ["The proposal was approved by the committee.", "The proposal had been approved.", "The proposal is being approved by them."], hint: "In active voice, the subject performs the action.", explanation: "In 'The committee approved the proposal,' the subject does the action directly." },
    { prompt: "Which word best completes the sentence: 'The scientist reached a ___ after reviewing the results.'", correct: "conclusion", distractors: ["confusion", "direction", "celebration"], hint: "Think about the word for a final judgment or decision.", explanation: "'Conclusion' means a final decision or judgment after thinking about evidence." },
    { prompt: "Which sentence uses parallel structure correctly?", correct: "She likes reading, writing, and painting.", distractors: ["She likes reading, to write, and painting.", "She likes to read, writing, and painting.", "She likes reading, writing, and to paint."], hint: "Items in a series should follow the same pattern.", explanation: "All three activities use the same '-ing' form, so the sentence is parallel." },
    { prompt: "Which revision makes the paragraph ending stronger?", correct: "For these reasons, recycling at school should be everyone's responsibility.", distractors: ["That is the paragraph.", "Recycling and stuff are there.", "School has bins and papers and things."], hint: "A strong closing sentence should wrap up the main idea clearly.", explanation: "The best revision clearly concludes the paragraph and restates its point." }
  ],
  senior: [
    { prompt: "Which sentence uses the subjunctive mood correctly?", correct: "If I were the principal, I would change the schedule.", distractors: ["If I was the principal, I would change the schedule.", "If I am the principal, I would change the schedule.", "If I be the principal, I would change the schedule."], hint: "In formal hypothetical statements, 'were' is often used with all subjects.", explanation: "'If I were' is the standard subjunctive form for a hypothetical condition." },
    { prompt: "Which revision fixes the dangling modifier?", correct: "Walking into the room, Maya noticed the broken window.", distractors: ["Walking into the room, the broken window surprised Maya.", "Walking into the room, the window was broken by Maya.", "Walking into the room, there was a broken window."], hint: "The word after the modifier should be the person or thing doing the action.", explanation: "Maya is the one walking into the room, so the modifier is attached correctly." },
    { prompt: "What is the best meaning of 'mitigate'?", correct: "to make less severe", distractors: ["to make official", "to repeat exactly", "to divide equally"], hint: "Think about reducing harm or impact.", explanation: "'Mitigate' means to reduce or make something less severe." },
    { prompt: "Which sentence shows correct parallel structure in an academic list?", correct: "The course requires critical reading, careful note-taking, and clear writing.", distractors: ["The course requires critical reading, to take notes carefully, and clear writing.", "The course requires reading critically, careful note-taking, and to write clearly.", "The course requires critical reading, careful note-taking, and writes clearly."], hint: "Items in a list should match in grammatical form.", explanation: "All three items are balanced noun phrases, so the structure is parallel." },
    { prompt: "Which sentence uses a colon correctly?", correct: "She brought three things to the interview: a resume, a notebook, and confidence.", distractors: ["She brought: three things to the interview, a resume, a notebook, and confidence.", "She brought three things: to the interview a resume, a notebook, and confidence.", "She brought three things to the interview, a resume: a notebook, and confidence."], hint: "A colon can introduce a list after a complete clause.", explanation: "The clause before the colon is complete, and the colon introduces the list correctly." },
    { prompt: "Which sentence demonstrates precise diction?", correct: "The report revealed a gradual decline in attendance.", distractors: ["The report said stuff about fewer people coming.", "The report had some things about attendance stuff.", "The report was kind of about attendance maybe."], hint: "Precise diction uses exact, formal wording.", explanation: "The sentence uses clear and specific wording instead of vague language." },
    { prompt: "Which sentence uses the apostrophe correctly?", correct: "The authors' notes were attached to the draft.", distractors: ["The author's notes were attached to the draft.", "The authors notes were attached to the draft.", "The authors's notes were attached to the draft."], hint: "If more than one author owns something, the apostrophe usually comes after the plural s.", explanation: "'Authors'' shows plural possession, meaning the notes belong to multiple authors." },
    { prompt: "What is the best synonym for 'coherent'?", correct: "logical and well organized", distractors: ["full of suspense", "very emotional", "completely accidental"], hint: "Think about writing that makes sense from beginning to end.", explanation: "'Coherent' means logical, connected, and well organized." },
    { prompt: "Which sentence avoids a comma splice?", correct: "The evidence was limited, so the researchers remained cautious.", distractors: ["The evidence was limited, the researchers remained cautious.", "The evidence was limited, however the researchers remained cautious.", "The evidence was limited, the researchers, remained cautious."], hint: "Two full ideas need a conjunction, a semicolon, or separate sentences.", explanation: "The conjunction 'so' correctly joins the two independent clauses." },
    { prompt: "Which sentence uses active voice more effectively?", correct: "The editor revised the final paragraph.", distractors: ["The final paragraph was revised by the editor.", "The final paragraph had been revised.", "The final paragraph is revised by the editor."], hint: "Active voice usually names who performs the action first.", explanation: "The active sentence is more direct because the subject performs the action." },
    { prompt: "What does the word 'ambiguous' mean?", correct: "having more than one possible meaning", distractors: ["strongly supported by evidence", "written in a cheerful tone", "impossible to question"], hint: "Think about wording that could be understood in different ways.", explanation: "'Ambiguous' means unclear because it has more than one possible meaning." },
    { prompt: "Which sentence uses standard formal grammar?", correct: "Neither of the proposals was accepted.", distractors: ["Neither of the proposals were accepted.", "Neither of the proposals are accepted.", "Neither of the proposals have accepted."], hint: "'Neither' is treated as singular in formal subject-verb agreement.", explanation: "'Neither' is singular, so 'was accepted' is the correct verb form." },
    { prompt: "Which thesis statement is strongest for an essay about online learning?", correct: "Online learning can be effective when students have support, structure, and reliable technology.", distractors: ["Online learning is a thing people use.", "This essay is about online learning.", "Many students use computers for school sometimes."], hint: "A strong thesis makes a clear, arguable point that can guide the essay.", explanation: "The best thesis clearly states the main claim and the key supporting ideas." }
  ]
};

const englishSkillPools = {
  grammar: {
    lower: [
      ...englishQuestionPools.lower.filter((item) => [
        "Which word is a noun in the sentence: 'The puppy barked loudly'?",
        "Which word is a verb in the sentence: 'Birds fly high'?",
        "Choose the sentence with the correct capital letter.",
        "Choose the sentence with the correct ending punctuation.",
        "Choose the correct pronoun: 'Lebo has a book. ___ is reading.'",
        "Which word is an adjective in the sentence: 'We saw a bright star'?",
        "Choose the correct plural form of 'box'.",
        "Which sentence is complete?",
        "Choose the correct word: 'I ___ to school every day.'"
      ].includes(item.prompt)),
      { prompt: "Which word is a noun in the sentence: 'The teacher wrote on the board'?", correct: "teacher", distractors: ["wrote", "on", "the"], hint: "A noun names a person, place, or thing.", explanation: "'Teacher' names a person, so it is the noun." },
      { prompt: "Choose the correct plural form of 'city'.", correct: "cities", distractors: ["citys", "citties", "city's"], hint: "Words ending in a consonant plus y change y to i and add es.", explanation: "'City' becomes 'cities' in the plural." },
      { prompt: "Which sentence uses the correct verb: 'She ___ her homework every night.'", correct: "does", distractors: ["do", "doing", "did do"], hint: "Match the verb to the singular subject 'she'.", explanation: "'She does' is the correct singular present-tense form." },
      { prompt: "Choose the sentence with the correct capital letter for a name.", correct: "We met Mr. Osei at the store.", distractors: ["We met mr. Osei at the store.", "we met Mr. Osei at the store.", "We met Mr. osei at the store."], hint: "Titles and names always start with a capital letter.", explanation: "'Mr. Osei' is a proper name and must be capitalized correctly." },
      { prompt: "Which word is a pronoun in the sentence: 'They walked to the park'?", correct: "They", distractors: ["walked", "to", "park"], hint: "A pronoun takes the place of a noun.", explanation: "'They' replaces the names of the people, so it is a pronoun." },
      { prompt: "Choose the sentence that uses 'a' or 'an' correctly.", correct: "She ate an apple.", distractors: ["She ate a apple.", "She ate an apples.", "She ate apple."], hint: "Use 'an' before a word that starts with a vowel sound.", explanation: "'Apple' starts with a vowel sound, so 'an' is correct." }
    ],
    upper: [
      ...englishQuestionPools.upper.filter((item) => [
        "Which sentence uses the correct subject-verb agreement?",
        "Which word is an adverb in the sentence: 'The player moved quickly'?",
        "Choose the conjunction that completes the sentence: 'I wanted to go, ___ it started raining.'",
        "Which sentence uses a comma correctly?",
        "Choose the correct pronoun: 'The science books are on the desk. Put ___ away.'",
        "Which sentence is written in the past tense?",
        "Choose the sentence with the correct comparative adjective.",
        "Which word is a preposition in the sentence: 'The keys are under the chair'?"
      ].includes(item.prompt)),
      { prompt: "Which sentence uses the correct superlative adjective?", correct: "This is the tallest building in the city.", distractors: ["This is the more tallest building in the city.", "This is the tallest-est building in the city.", "This is the most tallest building in the city."], hint: "For short adjectives, add '-est' for the superlative.", explanation: "'Tallest' is the correct superlative form of 'tall'." },
      { prompt: "Choose the sentence written in future tense.", correct: "We will visit the museum tomorrow.", distractors: ["We visit the museum tomorrow.", "We visited the museum tomorrow.", "We are visiting the museum yesterday."], hint: "Future tense often uses 'will' plus the base verb.", explanation: "'Will visit' correctly shows an action that has not happened yet." },
      { prompt: "Which word is a conjunction in the sentence: 'I like tea and coffee'?", correct: "and", distractors: ["I", "like", "tea"], hint: "A conjunction joins words or ideas together.", explanation: "'And' joins 'tea' and 'coffee', so it is the conjunction." },
      { prompt: "Choose the sentence with correct subject-verb agreement.", correct: "Each of the students has a locker.", distractors: ["Each of the students have a locker.", "Each of the students are having a locker.", "Each of the students having a locker."], hint: "'Each' is treated as singular.", explanation: "'Each' takes the singular verb 'has'." },
      { prompt: "Which sentence uses quotation marks correctly?", correct: "She said, \"I will be there soon.\"", distractors: ["She said, I will be there soon.", "She said \"I will be there soon\".", "She said, \"I will be there soon\""], hint: "Quoted speech needs quotation marks and correct punctuation placement.", explanation: "The quotation is correctly marked and punctuated." },
      { prompt: "Which word is an interjection in the sentence: 'Wow, that was an amazing goal!'?", correct: "Wow", distractors: ["that", "amazing", "goal"], hint: "An interjection shows strong feeling and is often followed by a comma or exclamation mark.", explanation: "'Wow' expresses sudden feeling, so it is the interjection." },
      { prompt: "Choose the sentence that correctly uses an apostrophe to show possession.", correct: "The dog's leash was on the floor.", distractors: ["The dogs leash was on the floor.", "The dog's' leash was on the floor.", "The dogs' leash was on the floor."], hint: "A singular owner takes an apostrophe plus s.", explanation: "'Dog's' correctly shows that one dog owns the leash." }
    ],
    middle: [
      ...englishQuestionPools.middle.filter((item) => [
        "Which sentence uses the correct pronoun-antecedent agreement?",
        "Which sentence contains an independent clause?",
        "Which sentence uses the semicolon correctly?",
        "Which sentence has the correct verb tense?",
        "Which revision removes the double negative?",
        "Which sentence uses an adjective clause?",
        "Which sentence is written in active voice?",
        "Which sentence uses parallel structure correctly?"
      ].includes(item.prompt)),
      { prompt: "Which sentence correctly uses a subordinating conjunction?", correct: "Although it rained, the game continued.", distractors: ["It rained, the game continued.", "It rained although the game, continued.", "The game continued, it rained."], hint: "A subordinating conjunction introduces a dependent clause.", explanation: "'Although' correctly introduces the dependent clause 'it rained'." },
      { prompt: "Which sentence avoids a sentence fragment?", correct: "Because she was late, she missed the bus.", distractors: ["Because she was late.", "She missed the bus. Because she was late.", "Missed the bus because late."], hint: "A complete sentence needs an independent clause.", explanation: "This version joins the dependent and independent clauses into a complete sentence." },
      { prompt: "Which sentence uses the correct form of a modal verb?", correct: "You should finish your project by Friday.", distractors: ["You should to finish your project by Friday.", "You should finishing your project by Friday.", "You should finished your project by Friday."], hint: "Modal verbs like 'should' are followed by the base form of the verb.", explanation: "'Should finish' correctly follows the modal verb with the base verb form." },
      { prompt: "Which sentence correctly uses an appositive?", correct: "My teacher, a former athlete, coaches the track team.", distractors: ["My teacher a former athlete, coaches the track team.", "My teacher, a former athlete coaches the track team.", "My teacher a former, athlete coaches the track team."], hint: "An appositive renames a noun and is set off by commas.", explanation: "The appositive 'a former athlete' is correctly set off with commas." },
      { prompt: "Which sentence correctly uses the past perfect tense?", correct: "She had finished her homework before dinner.", distractors: ["She has finished her homework before dinner.", "She finished her homework before dinner had.", "She was finished her homework before dinner."], hint: "Past perfect shows an action completed before another past action.", explanation: "'Had finished' correctly shows the action was completed before dinner." },
      { prompt: "Which sentence uses a gerund phrase as the subject?", correct: "Swimming every morning improved her stamina.", distractors: ["She swims every morning.", "To swim is healthy.", "Swim every morning."], hint: "A gerund is an '-ing' verb form acting as a noun.", explanation: "'Swimming every morning' is a gerund phrase functioning as the subject." },
      { prompt: "Which sentence correctly uses a relative clause with 'whom'?", correct: "The coach whom we admired retired this year.", distractors: ["The coach who we admired retired this year, whom.", "The coach whom admired us retired this year.", "The coach, whom, we admired retired this year."], hint: "'Whom' is used as the object of a clause.", explanation: "'Whom' correctly serves as the object of 'admired' in the relative clause." }
    ],
    senior: [
      ...englishQuestionPools.senior.filter((item) => [
        "Which sentence uses the subjunctive mood correctly?",
        "Which revision fixes the dangling modifier?",
        "Which sentence uses parallel structure correctly?",
        "Which sentence uses a colon correctly?",
        "Which sentence uses the apostrophe correctly?",
        "Which sentence avoids a comma splice?",
        "Which sentence uses active voice more effectively?",
        "Which sentence uses standard formal grammar?"
      ].includes(item.prompt)),
      { prompt: "Which sentence correctly uses an em dash?", correct: "The results were clearâ€”the experiment had succeeded.", distractors: ["The results were clear-the experiment had succeeded.", "The results were clear, the experiment had succeeded.", "The results were clear; the experimentâ€”had succeeded."], hint: "An em dash can set off a dramatic clarification.", explanation: "The em dash correctly sets off the clarifying clause." },
      { prompt: "Which sentence avoids faulty parallelism in a formal list?", correct: "The report was clear, concise, and persuasive.", distractors: ["The report was clear, concise, and persuading.", "The report was being clear, concise, and persuasive.", "The report was clear, being concise, and persuasive."], hint: "Each item in the list should share the same grammatical form.", explanation: "All three adjectives share the same form, keeping the list parallel." },
      { prompt: "Which sentence correctly uses a restrictive clause without commas?", correct: "Students who arrive late must sign in at the office.", distractors: ["Students, who arrive late, must sign in at the office.", "Students who arrive late, must sign in at the office.", "Students, who arrive late must sign in at the office."], hint: "A restrictive clause is essential to the meaning and is not set off by commas.", explanation: "Because 'who arrive late' is essential to identifying which students, no commas are needed." },
      { prompt: "Which sentence correctly uses the passive voice for emphasis?", correct: "The award was presented to an outstanding researcher.", distractors: ["An outstanding researcher was presenting the award.", "The award presented an outstanding researcher.", "An outstanding researcher present the award."], hint: "Passive voice puts the receiver of the action first.", explanation: "The passive construction correctly emphasizes the award being given." },
      { prompt: "Which sentence uses correct formal register?", correct: "The committee will review the proposal at its earliest convenience.", distractors: ["The committee's gonna look at the proposal whenever.", "The committee will check out the proposal soon-ish.", "The committee is like reviewing the proposal."], hint: "Formal register avoids slang and casual phrasing.", explanation: "This sentence uses precise, professional wording appropriate for formal writing." },
      { prompt: "Which sentence correctly uses a nominalization for a more formal tone?", correct: "The committee's decision surprised the staff.", distractors: ["The committee decided and it surprised the staff.", "The committee, deciding, surprised staff.", "Deciding by the committee surprised staff."], hint: "Nominalization turns a verb into a noun for formal writing.", explanation: "'Decision' is the nominalized form, giving the sentence a more formal tone." },
      { prompt: "Which sentence best avoids an unclear pronoun reference?", correct: "When Sara met Priya, Sara shared her research first.", distractors: ["When Sara met Priya, she shared her research first.", "When she met her, she shared her research first.", "Sara met Priya and she shared research."], hint: "A pronoun should clearly refer to one specific noun.", explanation: "Naming 'Sara' directly removes the ambiguity of who 'she' refers to." }
    ]
  },
  reading: {
    lower: [
      { prompt: "What is the main idea of this sentence: 'Sam planted a seed and watered it every day so it could grow'?", correct: "Sam is helping a plant grow.", distractors: ["Sam is building a toy.", "Sam is cleaning his room.", "Sam is buying groceries."], hint: "The main idea is what the sentence is mostly about.", explanation: "The sentence is mostly about Sam caring for a seed so it can grow." },
      { prompt: "Which detail tells where the story happens: 'At the park, Musa flew his kite beside the pond'?", correct: "At the park", distractors: ["flew", "his kite", "beside"], hint: "A setting detail tells where or when something happens.", explanation: "'At the park' tells where the action happens." },
      { prompt: "What happened first in this sequence: 'Lina opened her book, read the story, and told her brother about it'?", correct: "Lina opened her book.", distractors: ["Lina read the story.", "Lina told her brother about it.", "Lina closed her book."], hint: "Look for the first action in the sentence.", explanation: "The first thing Lina did was open her book." },
      { prompt: "How does the character probably feel: 'Tariq smiled and jumped when he saw the surprise cake'?", correct: "happy", distractors: ["angry", "sleepy", "confused"], hint: "Use the clues from the character's actions.", explanation: "Smiling and jumping show that Tariq is happy." },
      { prompt: "Which sentence best tells the lesson of this short idea: 'Amina practiced reading every night and soon read with confidence'?", correct: "Practice helps you improve.", distractors: ["Reading should only happen at night.", "Confidence means reading very fast.", "Amina did not like books."], hint: "A lesson is a message you can learn from what happened.", explanation: "The sentence shows that regular practice helped Amina improve." },
      { prompt: "Which word helps you know this is a question: 'Why did the bird leave the nest'?", correct: "Why", distractors: ["bird", "leave", "nest"], hint: "Question words help show what a sentence is asking.", explanation: "'Why' signals that the sentence is asking a question." },
      { prompt: "What is the setting in this sentence: 'On Saturday morning, we visited Grandma at her farm'?", correct: "Saturday morning at Grandma's farm", distractors: ["we visited", "Grandma", "farm animals"], hint: "The setting includes when and where.", explanation: "The setting is given by both the time and the place." },
      { prompt: "Which detail is most important: 'Kofi packed his boots, gloves, and helmet before the hockey game'?", correct: "Kofi packed what he needed for the hockey game.", distractors: ["Kofi likes to count his things.", "The boots were blue.", "Gloves are soft."], hint: "Choose the detail that best supports the main event.", explanation: "The important detail is that Kofi packed the gear he needed for the game." },
      { prompt: "What happens last in this sequence: 'Zara mixed the batter, poured it into the pan, and baked the cake'?", correct: "Zara baked the cake.", distractors: ["Zara mixed the batter.", "Zara poured the batter.", "Zara bought the pan."], hint: "Look for the final action in the sentence.", explanation: "The last action described is baking the cake." },
      { prompt: "How does the character probably feel: 'Dan dropped his ice cream and started to cry'?", correct: "sad", distractors: ["proud", "excited", "curious"], hint: "Use the clue about crying.", explanation: "Crying after dropping the ice cream shows Dan feels sad." },
      { prompt: "Which word tells you when the story happens: 'Every winter, the pond freezes over'?", correct: "winter", distractors: ["pond", "freezes", "over"], hint: "A time word tells when something happens.", explanation: "'Winter' tells the reader when the pond freezes." },
      { prompt: "What is the main idea of this sentence: 'Ben fed the chickens, collected the eggs, and cleaned the coop before breakfast'?", correct: "Ben did his farm chores before breakfast.", distractors: ["Ben likes eggs for breakfast.", "Ben built a new chicken coop.", "Ben went to the market."], hint: "Look at what all three actions have in common.", explanation: "All three actions are chores Ben completed before breakfast." },
      { prompt: "Which detail tells who the story is about: 'Every Friday, Grandpa Joe tells us a new story by the fire'?", correct: "Grandpa Joe", distractors: ["Friday", "story", "fire"], hint: "Look for the name of the person.", explanation: "'Grandpa Joe' is the person the sentence is about." },
      { prompt: "What happens in the middle of this sequence: 'Leo washed the dishes, dried them, and put them away'?", correct: "Leo dried the dishes.", distractors: ["Leo washed the dishes.", "Leo put them away.", "Leo broke a dish."], hint: "The middle event comes after the first and before the last.", explanation: "Drying the dishes happens after washing and before putting them away." },
      { prompt: "How does the character probably feel: 'Mia clapped and laughed when her team scored the winning goal'?", correct: "excited", distractors: ["bored", "worried", "sleepy"], hint: "Use the clues from the character's actions.", explanation: "Clapping and laughing after a winning goal shows excitement." }
    ],
    upper: [
      { prompt: "What is the main idea of this passage sentence: 'School gardens teach students about science, teamwork, and responsibility'?", correct: "School gardens help students learn in several ways.", distractors: ["School gardens are only for science class.", "Students dislike working together in gardens.", "Responsibility means watering once."], hint: "The main idea combines the important details into one clear message.", explanation: "The sentence explains that school gardens support several kinds of learning." },
      { prompt: "Which clue best helps you infer that the weather was bad: 'The players hurried indoors as thunder shook the sky'?", correct: "thunder shook the sky", distractors: ["players hurried", "indoors", "the sky"], hint: "An inference comes from the strongest context clue.", explanation: "Thunder is the clearest clue that the weather was stormy." },
      { prompt: "What does the word 'fragile' most likely mean in this sentence: 'Please carry the fragile bowl carefully'?", correct: "easy to break", distractors: ["very heavy", "full of water", "hard to find"], hint: "Use the word 'carefully' to help you understand the meaning.", explanation: "If something must be carried carefully, it is likely easy to break." },
      { prompt: "Which text feature would best help a reader find the meaning of a bold word in a nonfiction book?", correct: "glossary", distractors: ["title", "caption", "page number"], hint: "Think about the feature that explains word meanings.", explanation: "A glossary gives definitions for important words." },
      { prompt: "Why did the character probably apologize: 'After knocking over the paint jar, Nia quickly said sorry to her partner'?", correct: "She made a mistake that affected someone else.", distractors: ["She wanted more paint.", "She finished the project early.", "She was leaving the classroom."], hint: "Look at what happened just before the apology.", explanation: "Nia apologized because she caused a problem by knocking over the paint jar." },
      { prompt: "Which statement is an inference instead of a stated fact?", correct: "The hiker was tired after climbing for hours.", distractors: ["The hiker climbed for hours.", "The trail was on a mountain.", "The backpack was red."], hint: "An inference is a smart idea based on clues, not directly stated words.", explanation: "If someone has been climbing for hours, it is reasonable to infer that the person is tired." },
      { prompt: "Which sentence best summarizes this idea: 'The article explains how bees pollinate flowers and why that matters for food production'?", correct: "Bees help plants grow food by pollinating flowers.", distractors: ["Bees are yellow and black insects.", "Flowers look pretty in gardens.", "Food comes from many stores."], hint: "A summary keeps the most important ideas only.", explanation: "The best summary includes both pollination and why it matters." },
      { prompt: "What is the author's purpose in a safety poster that explains helmet rules?", correct: "to inform and encourage safe behaviour", distractors: ["to entertain with a funny story", "to confuse the reader", "to sell a helmet collection"], hint: "Author's purpose asks why the text was created.", explanation: "A safety poster aims to give information and guide safe choices." },
      { prompt: "Which detail best supports the idea that a character is organized: 'Before the trip, Priya labeled every bag and checked her list twice'?", correct: "Priya labeled every bag and checked her list twice.", distractors: ["Priya likes to travel.", "The bags were heavy.", "The trip was long."], hint: "Choose the detail that directly shows the trait.", explanation: "Labeling bags and double-checking a list are clear signs of being organized." },
      { prompt: "What can you infer about the setting: 'Snow crunched under their boots as they walked to the cabin'?", correct: "It is cold and snowy outside.", distractors: ["It is a hot summer day.", "They are indoors.", "It is raining heavily."], hint: "Use the details about snow and boots.", explanation: "Snow and boots suggest a cold, snowy setting." },
      { prompt: "Which sentence states a fact rather than an opinion?", correct: "The library opens at nine in the morning.", distractors: ["The library is the best place to study.", "The library should have longer hours.", "The library is more interesting than the park."], hint: "A fact can be proven true; an opinion is a belief.", explanation: "The opening time can be checked and proven, making it a fact." },
      { prompt: "Which text feature would help a reader quickly find a chapter in a nonfiction book?", correct: "table of contents", distractors: ["glossary", "footnote", "index card"], hint: "Think about the feature that lists chapters in order near the front of a book.", explanation: "A table of contents lists chapters and their page numbers." },
      { prompt: "What is the main idea of a paragraph explaining how recycling reduces landfill waste and saves resources?", correct: "Recycling benefits the environment in more than one way.", distractors: ["Recycling is only about landfills.", "Landfills are always full.", "Resources are unlimited."], hint: "Combine the two benefits mentioned into one main idea.", explanation: "The paragraph's main idea covers both benefits of recycling together." },
      { prompt: "Which detail best shows that a character is generous: 'Omar gave his extra sandwich to a classmate who forgot lunch'?", correct: "Omar gave his extra sandwich to a classmate.", distractors: ["Omar was hungry.", "The classmate liked sandwiches.", "It was lunchtime."], hint: "Choose the detail that directly shows a generous action.", explanation: "Sharing food with someone in need is a clear act of generosity." },
      { prompt: "Which sentence best distinguishes cause from effect: 'Because the bridge was closed, traffic backed up for miles'?", correct: "The bridge closing caused the traffic to back up.", distractors: ["The traffic caused the bridge to close.", "Both events happened for no reason.", "Neither event is related to the other."], hint: "The cause happens first and makes the effect happen.", explanation: "The bridge closing is the cause; the traffic backup is the effect." }
    ],
    middle: [
      { prompt: "Which detail would be the strongest evidence that a character is determined?", correct: "She kept practicing her speech even after making several mistakes.", distractors: ["She owns a speech notebook.", "She arrived at school on time.", "She sat near the window."], hint: "Strong evidence directly proves the trait.", explanation: "Continuing to practice after mistakes is strong evidence of determination." },
      { prompt: "What is the author's purpose in an editorial arguing for longer library hours?", correct: "to persuade", distractors: ["to entertain", "to describe a festival", "to present a recipe"], hint: "Editorials often try to convince readers.", explanation: "An editorial that argues for change is persuasive writing." },
      { prompt: "Which statement is the best inference: 'Jamal checked the clock three times before the interview began'?", correct: "Jamal was nervous or eager about the interview.", distractors: ["Jamal forgot how to read clocks.", "The interview was cancelled.", "Jamal never arrives on time."], hint: "Use behaviour clues to infer feelings.", explanation: "Repeatedly checking the clock suggests nervousness or anticipation." },
      { prompt: "Which sentence best summarizes a nonfiction paragraph?", correct: "A summary includes only the key ideas and leaves out small details.", distractors: ["A summary copies every sentence exactly.", "A summary should always be one word.", "A summary adds new information from the reader."], hint: "A good summary is short but still accurate.", explanation: "The best summary keeps the main points without extra detail." },
      { prompt: "What does the phrase 'a wave of relief' suggest about the speaker?", correct: "The speaker felt stress disappear.", distractors: ["The speaker went swimming.", "The speaker was angry at the weather.", "The speaker forgot the event."], hint: "Think figuratively, not literally.", explanation: "The phrase suggests a strong feeling of relief after stress." },
      { prompt: "Which evidence best supports the claim that the article is informative?", correct: "It includes facts, explanations, and clear examples.", distractors: ["It has a surprising ending.", "It rhymes in every line.", "It speaks in first person only."], hint: "Informative texts teach readers something.", explanation: "Facts and explanations are strong signs of an informative text." },
      { prompt: "Which statement best explains tone in a text?", correct: "Tone is the writer's attitude toward the subject or audience.", distractors: ["Tone is the number of paragraphs.", "Tone is the font size in the title.", "Tone is only the setting of a story."], hint: "Tone is about attitude and feeling in the writing.", explanation: "Tone shows how the writer feels or sounds while presenting the ideas." },
      { prompt: "Which question best helps identify theme?", correct: "What message about life or people does the text reveal?", distractors: ["How many pages are in the book?", "What colour is the cover?", "Who published the text first?"], hint: "Theme is the deeper message, not a small fact.", explanation: "Theme asks what bigger idea or message the text communicates." },
      { prompt: "Which detail would best support a claim that a character grew braver over the story?", correct: "By the end, she spoke up in front of the whole class without hesitating.", distractors: ["She has brown hair.", "She lives near the school.", "She likes the color blue."], hint: "Choose evidence that shows a change in behaviour.", explanation: "Speaking up confidently by the end shows clear growth in bravery." },
      { prompt: "What is the most likely purpose of a persuasive speech about recycling?", correct: "to convince the audience to recycle more", distractors: ["to describe how recycling bins are made", "to entertain with a funny story", "to give a weather report"], hint: "A persuasive text tries to change the audience's mind or actions.", explanation: "A persuasive speech aims to convince listeners to take action." },
      { prompt: "Which statement best distinguishes a fact from an opinion in nonfiction text?", correct: "A fact can be verified with evidence; an opinion expresses a belief.", distractors: ["A fact is always longer than an opinion.", "An opinion is always found in the introduction.", "There is no real difference between them."], hint: "Think about what can be proven versus what is a personal view.", explanation: "Facts can be checked and proven, while opinions reflect personal judgment." },
      { prompt: "Which sentence best identifies foreshadowing in a story?", correct: "A dark cloud on the horizon hinted at trouble to come.", distractors: ["The sun was shining brightly all day.", "She ate breakfast at seven.", "The house had three bedrooms."], hint: "Foreshadowing gives a hint about something that will happen later.", explanation: "The dark cloud is a hint that trouble is coming later in the story." },
      { prompt: "What is the best way to identify the central conflict in a short story?", correct: "Find the main problem the character must overcome.", distractors: ["Count the number of characters.", "Look only at the setting.", "Find the longest paragraph."], hint: "Conflict is the core struggle driving the plot.", explanation: "The central conflict is the key problem the main character faces and must resolve." },
      { prompt: "Which statement best explains what an unreliable narrator is?", correct: "A narrator whose account of events may not be fully trustworthy.", distractors: ["A narrator who speaks in the third person.", "A narrator who never appears in the story.", "A narrator who only describes settings."], hint: "Think about whether the reader can fully trust what the narrator says.", explanation: "An unreliable narrator's version of events may be biased, mistaken, or incomplete." },
      { prompt: "Which evidence best supports a claim that a persuasive essay is well reasoned?", correct: "The essay addresses counterarguments and responds to them logically.", distractors: ["The essay repeats the same claim many times.", "The essay uses only emotional language.", "The essay ignores opposing views entirely."], hint: "Well-reasoned arguments engage with opposing views.", explanation: "Addressing and logically responding to counterarguments shows strong reasoning." }
    ],
    senior: [
      { prompt: "Which statement best describes the author's argument?", correct: "A clear claim supported by reasons and evidence.", distractors: ["A random collection of details.", "A summary of the title only.", "A list of unrelated quotations."], hint: "An argument combines a position with support.", explanation: "An author's argument is the main claim backed by evidence and reasoning." },
      { prompt: "Which evidence would best support a claim in an academic article?", correct: "data from a credible study", distractors: ["an unsupported rumour", "a random online comment", "an unrelated personal memory"], hint: "Strong evidence is credible and relevant.", explanation: "Credible research data is stronger support than opinion or rumour." },
      { prompt: "What does bias mean in a text?", correct: "a preference that may shape how information is presented", distractors: ["a list of sources", "a correct grammar choice", "a neutral explanation"], hint: "Bias affects fairness and balance.", explanation: "Bias means the text may lean toward one view or perspective." },
      { prompt: "Which tone is most likely in a formal critique?", correct: "analytical", distractors: ["careless", "playful nonsense", "confused"], hint: "Formal critique language is usually thoughtful and evidence-based.", explanation: "An analytical tone fits formal evaluation and close discussion." },
      { prompt: "Which statement best distinguishes theme from topic?", correct: "A topic names the subject, while a theme expresses the deeper message.", distractors: ["A theme is always one word, but a topic is a sentence.", "A topic is hidden, but a theme is printed in bold.", "They mean exactly the same thing."], hint: "One names what the text is about; the other explains what it says about that subject.", explanation: "Topic is the subject area, while theme is the insight or message." },
      { prompt: "Which reading strategy best helps evaluate an argument?", correct: "checking whether the evidence is relevant, sufficient, and credible", distractors: ["counting the commas only", "skipping the reasons and reading the title", "looking only for interesting adjectives"], hint: "Evaluating argument means testing the quality of support.", explanation: "Strong evaluation focuses on how well the evidence supports the claim." },
      { prompt: "What is the strongest inference about a narrator who avoids direct answers and changes the subject often?", correct: "The narrator may be hiding something or may be unreliable.", distractors: ["The narrator is always fully objective.", "The narrator has finished the story.", "The narrator is writing a dictionary."], hint: "Think about what evasive behaviour suggests.", explanation: "Avoiding direct answers can suggest unreliability or hidden motives." },
      { prompt: "Which statement best explains how structure affects meaning?", correct: "The organization of ideas shapes how the reader understands emphasis and connection.", distractors: ["Structure has no effect if the vocabulary is formal.", "Structure only matters in poetry.", "Structure changes spelling but not meaning."], hint: "Order matters in how readers process ideas.", explanation: "Structure influences how ideas build, connect, and stand out in a text." },
      { prompt: "Which technique would most likely signal irony in a text?", correct: "The outcome is the opposite of what the character expected.", distractors: ["The text uses many long sentences.", "The text is written in first person.", "The text includes a lot of dialogue."], hint: "Irony involves a contrast between expectation and reality.", explanation: "Irony occurs when the actual outcome contrasts with what was expected." },
      { prompt: "What is the best way to evaluate the credibility of a source?", correct: "Check the author's expertise and the evidence provided.", distractors: ["Check how long the article is.", "Check how many images it has.", "Check whether it uses big words."], hint: "Credibility depends on expertise and support, not length or style.", explanation: "A credible source is supported by expert authorship and solid evidence." },
      { prompt: "Which statement best describes rhetorical appeal to ethos?", correct: "It builds trust by showing the speaker's credibility or character.", distractors: ["It uses statistics to prove a point.", "It appeals to the audience's emotions.", "It uses humor to entertain."], hint: "Ethos relates to credibility and character.", explanation: "Ethos is the appeal based on the speaker's trustworthiness and credibility." },
      { prompt: "Which statement best describes rhetorical appeal to pathos?", correct: "It persuades by appealing to the audience's emotions.", distractors: ["It persuades using only statistics.", "It persuades by citing credentials.", "It persuades through strict logic alone."], hint: "Pathos relates to feeling and emotion.", explanation: "Pathos is the appeal that works by stirring the audience's emotions." },
      { prompt: "Which statement best distinguishes a summary from an analysis?", correct: "A summary restates the main points, while an analysis explains their significance.", distractors: ["A summary and an analysis are identical.", "An analysis is always shorter than a summary.", "A summary interprets meaning, while an analysis restates events."], hint: "One reports what happened; the other explains why it matters.", explanation: "Summary restates content; analysis interprets and explains its significance." },
      { prompt: "What is the best way to identify an author's underlying assumption in an argument?", correct: "Find the unstated idea the argument depends on to be true.", distractors: ["Count how many paragraphs the argument has.", "Look only at the concluding sentence.", "Find the longest word in the passage."], hint: "An assumption is something the author takes for granted but doesn't state directly.", explanation: "An assumption is the unstated belief that the argument relies on." },
      { prompt: "Which strategy best helps a reader evaluate whether a text's structure supports its purpose?", correct: "Consider whether the order and organization of ideas make the main point clearer.", distractors: ["Count how many headings the text has.", "Check only the font used in the text.", "Focus only on the number of paragraphs."], hint: "Structure should serve the text's overall purpose.", explanation: "Effective structure supports clarity and reinforces the author's main purpose." }
    ]
  },
  vocabulary: {
    lower: [
      ...englishQuestionPools.lower.filter((item) => [
        "Which word means almost the same as 'happy'?",
        "Which word means the opposite of 'cold'?",
        "What does the word 'gigantic' mean?"
      ].includes(item.prompt)),
      { prompt: "Which word means almost the same as 'small'?", correct: "tiny", distractors: ["huge", "loud", "fast"], hint: "Look for a size word.", explanation: "'Tiny' is a synonym for 'small'." },
      { prompt: "Which word means the opposite of 'fast'?", correct: "slow", distractors: ["quick", "loud", "bright"], hint: "An antonym means the opposite.", explanation: "'Slow' is the opposite of 'fast'." },
      { prompt: "What does the word 'enormous' mean?", correct: "very large", distractors: ["very quiet", "very cheap", "very old"], hint: "Think about size.", explanation: "'Enormous' means extremely large." },
      { prompt: "Which word means almost the same as 'scared'?", correct: "afraid", distractors: ["excited", "sleepy", "hungry"], hint: "Look for a word about feelings.", explanation: "'Afraid' is a synonym for 'scared'." },
      { prompt: "Which word means the opposite of 'begin'?", correct: "end", distractors: ["start", "open", "grow"], hint: "Think about the opposite of starting something.", explanation: "'End' is the opposite of 'begin'." },
      { prompt: "What does the word 'chilly' mean?", correct: "a little cold", distractors: ["very hot", "very wet", "very bright"], hint: "Think about weather words.", explanation: "'Chilly' means a little bit cold." },
      { prompt: "Which word means almost the same as 'shout'?", correct: "yell", distractors: ["whisper", "sing", "read"], hint: "Look for a loud-speaking word.", explanation: "'Yell' means to shout loudly." },
      { prompt: "Which word means the opposite of 'wet'?", correct: "dry", distractors: ["damp", "cool", "soft"], hint: "Think about water.", explanation: "'Dry' is the opposite of 'wet'." },
      { prompt: "What does the word 'ancient' mean in a simple sentence like 'The ancient tree was very tall'?", correct: "very old", distractors: ["very new", "very small", "very colorful"], hint: "Think about age.", explanation: "'Ancient' means extremely old." },
      { prompt: "Which word means almost the same as 'brave'?", correct: "courageous", distractors: ["nervous", "tired", "quiet"], hint: "Think about someone who isn't afraid.", explanation: "'Courageous' is a synonym for 'brave'." },
      { prompt: "Which word means the opposite of 'clean'?", correct: "dirty", distractors: ["neat", "shiny", "tidy"], hint: "Think about the opposite of tidy.", explanation: "'Dirty' is the opposite of 'clean'." },
      { prompt: "What does the word 'delighted' mean?", correct: "very pleased", distractors: ["very tired", "very confused", "very cold"], hint: "Think about a strong happy feeling.", explanation: "'Delighted' means feeling very happy or pleased." },
      { prompt: "Which word means the opposite of 'loud'?", correct: "quiet", distractors: ["bright", "heavy", "fast"], hint: "Think about the opposite of noisy.", explanation: "'Quiet' is the opposite of 'loud'." },
      { prompt: "Which word means almost the same as 'quick'?", correct: "fast", distractors: ["slow", "heavy", "quiet"], hint: "Think about moving with speed.", explanation: "'Fast' is a synonym for 'quick'." },
      { prompt: "What does the word 'tidy' mean?", correct: "neat and organized", distractors: ["messy and dirty", "very loud", "very old"], hint: "Think about a clean, organized room.", explanation: "'Tidy' means neat and well organized." }
    ],
    upper: [
      ...englishQuestionPools.upper.filter((item) => [
        "Which word has a prefix that means 'not'?",
        "What does the word 'predict' mean?",
        "Which word is the best synonym for 'ancient'?",
        "Which word completes the sentence correctly? 'Their team won ___ first game.'"
      ].includes(item.prompt)),
      { prompt: "Which word is the best synonym for 'enormous'?", correct: "massive", distractors: ["tiny", "narrow", "quiet"], hint: "Think about size words.", explanation: "'Massive' means very large, like 'enormous'." },
      { prompt: "What does the word 'reluctant' mean?", correct: "unwilling", distractors: ["excited", "confident", "curious"], hint: "Think about someone who hesitates.", explanation: "'Reluctant' means unwilling or hesitant to do something." },
      { prompt: "Which word is the best antonym for 'generous'?", correct: "selfish", distractors: ["kind", "helpful", "friendly"], hint: "Think of the opposite of sharing freely.", explanation: "'Selfish' is the opposite of 'generous'." },
      { prompt: "What does the word 'furious' mean?", correct: "extremely angry", distractors: ["extremely tired", "extremely happy", "extremely shy"], hint: "Think about a strong feeling of anger.", explanation: "'Furious' means extremely angry." },
      { prompt: "Which word has a suffix that means 'full of'?", correct: "joyful", distractors: ["joyless", "enjoy", "joyfully"], hint: "Look for the ending '-ful'.", explanation: "The suffix '-ful' means 'full of', as in 'joyful' meaning full of joy." },
      { prompt: "What does the word 'hesitate' mean?", correct: "to pause before doing something", distractors: ["to run quickly", "to speak loudly", "to finish early"], hint: "Think about someone unsure about acting.", explanation: "'Hesitate' means to pause or wait because of uncertainty." },
      { prompt: "Which word is the best synonym for 'clever'?", correct: "intelligent", distractors: ["careless", "lazy", "shy"], hint: "Think about someone who is smart.", explanation: "'Intelligent' is a synonym for 'clever'." },
      { prompt: "What does the word 'exhausted' mean?", correct: "extremely tired", distractors: ["extremely excited", "extremely confused", "extremely bored"], hint: "Think about how someone feels after a lot of effort.", explanation: "'Exhausted' means extremely tired." },
      { prompt: "Which word means the opposite of 'permit'?", correct: "forbid", distractors: ["allow", "encourage", "invite"], hint: "Think about the opposite of allowing something.", explanation: "'Forbid' is the opposite of 'permit'." },
      { prompt: "What does the word 'cautious' mean?", correct: "careful", distractors: ["careless", "curious", "confident"], hint: "Think about someone who avoids risks.", explanation: "'Cautious' means careful and avoiding danger." },
      { prompt: "Which word is the best synonym for 'gloomy'?", correct: "dreary", distractors: ["cheerful", "bright", "excited"], hint: "Think about a dark, sad mood.", explanation: "'Dreary' means gloomy or dull, similar in meaning." },
      { prompt: "What does the word 'reluctantly' mean in the sentence 'He reluctantly agreed to help'?", correct: "in an unwilling way", distractors: ["in a happy way", "in a fast way", "in a loud way"], hint: "Think about someone who doesn't really want to do something.", explanation: "'Reluctantly' means doing something in an unwilling or hesitant manner." },
      { prompt: "Which word means the opposite of 'ancient'?", correct: "modern", distractors: ["old", "historic", "faded"], hint: "Think about the opposite of very old.", explanation: "'Modern' is the opposite of 'ancient'." },
      { prompt: "What does the word 'vast' mean?", correct: "extremely large in area", distractors: ["extremely small", "extremely loud", "extremely fast"], hint: "Think about a huge open space.", explanation: "'Vast' describes something extremely large, especially in area." },
      { prompt: "Which word is the best synonym for 'obstacle'?", correct: "barrier", distractors: ["solution", "path", "reward"], hint: "Think about something blocking your way.", explanation: "'Barrier' means something that blocks progress, like an obstacle." }
    ],
    middle: [
      ...englishQuestionPools.middle.filter((item) => [
        "Choose the word that best completes the sentence: 'Her argument was ___ because it used strong evidence.'",
        "What is the best meaning of 'reluctant'?",
        "Choose the best synonym for 'analyze'.",
        "Which word best completes the sentence: 'The scientist reached a ___ after reviewing the results.'"
      ].includes(item.prompt)),
      { prompt: "What is the best meaning of 'skeptical'?", correct: "doubtful", distractors: ["excited", "confident", "generous"], hint: "Think about someone who questions claims.", explanation: "'Skeptical' means having doubts about something." },
      { prompt: "Choose the best synonym for 'diligent'.", correct: "hardworking", distractors: ["lazy", "forgetful", "careless"], hint: "Think about effort and dedication.", explanation: "'Diligent' means careful and persistent in work, like 'hardworking'." },
      { prompt: "What is the best meaning of 'inevitable'?", correct: "certain to happen", distractors: ["impossible to happen", "unlikely to happen", "already happened"], hint: "Think about something that cannot be avoided.", explanation: "'Inevitable' means certain to happen and cannot be avoided." },
      { prompt: "Which word best completes the sentence: 'The old bridge looked ___ and unsafe to cross.'", correct: "unstable", distractors: ["reliable", "sturdy", "modern"], hint: "Think about something that isn't safe or steady.", explanation: "'Unstable' fits because it means not steady or safe." },
      { prompt: "What is the best meaning of 'candid'?", correct: "honest and direct", distractors: ["shy and quiet", "loud and rude", "confused and unclear"], hint: "Think about someone who speaks truthfully.", explanation: "'Candid' means honest and straightforward." },
      { prompt: "Choose the best antonym for 'concise'.", correct: "wordy", distractors: ["brief", "clear", "short"], hint: "Think about the opposite of being short and to the point.", explanation: "'Wordy' is the opposite of 'concise', which means brief and clear." },
      { prompt: "What is the best meaning of 'ambitious'?", correct: "having strong determination to succeed", distractors: ["having no goals", "feeling nervous often", "being easily satisfied"], hint: "Think about someone who wants to achieve big things.", explanation: "'Ambitious' means having a strong desire to achieve success." },
      { prompt: "Which word best completes the sentence: 'The committee reached a ___ decision after much debate.'", correct: "unanimous", distractors: ["divided", "confused", "hesitant"], hint: "Think about everyone agreeing together.", explanation: "'Unanimous' means everyone agreed, fitting the idea of a group decision." },
      { prompt: "What is the best meaning of 'meticulous'?", correct: "very careful and precise", distractors: ["very careless", "very fast", "very loud"], hint: "Think about someone who pays close attention to detail.", explanation: "'Meticulous' means showing great attention to detail." },
      { prompt: "Choose the best synonym for 'resilient'.", correct: "able to recover quickly", distractors: ["easily broken", "always tired", "quick to give up"], hint: "Think about bouncing back from difficulty.", explanation: "'Resilient' means able to recover quickly from difficulties." },
      { prompt: "What is the best meaning of 'plausible'?", correct: "reasonable or believable", distractors: ["impossible to believe", "very entertaining", "completely proven"], hint: "Think about an explanation that seems likely to be true.", explanation: "'Plausible' means seeming reasonable or likely to be true." },
      { prompt: "Choose the best antonym for 'optimistic'.", correct: "pessimistic", distractors: ["hopeful", "cheerful", "confident"], hint: "Think about the opposite of expecting good outcomes.", explanation: "'Pessimistic' is the opposite of 'optimistic'." },
      { prompt: "What is the best meaning of 'articulate'?", correct: "able to express ideas clearly", distractors: ["unable to speak", "very shy", "easily confused"], hint: "Think about someone who explains things very clearly.", explanation: "'Articulate' means expressing thoughts clearly and effectively." },
      { prompt: "Which word best completes the sentence: 'The negotiations reached a ___ that satisfied both sides.'", correct: "compromise", distractors: ["conflict", "refusal", "delay"], hint: "Think about a solution where both sides give a little.", explanation: "'Compromise' fits because it describes a solution both sides accept." },
      { prompt: "What is the best meaning of 'innovative'?", correct: "introducing new ideas or methods", distractors: ["repeating old methods", "avoiding all change", "copying others exactly"], hint: "Think about something new and creative.", explanation: "'Innovative' describes something that introduces new ideas or methods." }
    ],
    senior: [
      ...englishQuestionPools.senior.filter((item) => [
        "What is the best meaning of 'mitigate'?",
        "Which sentence demonstrates precise diction?",
        "What is the best synonym for 'coherent'?",
        "What does the word 'ambiguous' mean?"
      ].includes(item.prompt)),
      { prompt: "What is the best meaning of 'pragmatic'?", correct: "practical and realistic", distractors: ["idealistic and dreamy", "emotional and dramatic", "confused and uncertain"], hint: "Think about someone who deals with things sensibly.", explanation: "'Pragmatic' means dealing with things in a practical, realistic way." },
      { prompt: "Which word is the best synonym for 'ephemeral'?", correct: "short-lived", distractors: ["permanent", "eternal", "unchanging"], hint: "Think about something that doesn't last long.", explanation: "'Ephemeral' means lasting for a very short time." },
      { prompt: "What is the best meaning of 'ubiquitous'?", correct: "found everywhere", distractors: ["found nowhere", "rare and hidden", "recently invented"], hint: "Think about something extremely common.", explanation: "'Ubiquitous' means present or found everywhere." },
      { prompt: "Which word is the best antonym for 'succinct'?", correct: "verbose", distractors: ["brief", "clear", "direct"], hint: "Think about the opposite of being brief.", explanation: "'Verbose' means using more words than necessary, the opposite of 'succinct'." },
      { prompt: "What is the best meaning of 'ambivalent'?", correct: "having mixed feelings", distractors: ["completely certain", "extremely angry", "totally indifferent"], hint: "Think about feeling two ways at once.", explanation: "'Ambivalent' means having mixed or contradictory feelings about something." },
      { prompt: "Which word best completes the sentence: 'The professor's ___ explanation left no room for misunderstanding.'", correct: "lucid", distractors: ["ambiguous", "vague", "confusing"], hint: "Think about a very clear explanation.", explanation: "'Lucid' means clear and easy to understand." },
      { prompt: "What is the best meaning of 'tenacious'?", correct: "persistent and determined", distractors: ["easily discouraged", "indifferent", "careless"], hint: "Think about someone who doesn't give up.", explanation: "'Tenacious' means holding firmly to a purpose; persistent." },
      { prompt: "Which word is the best synonym for 'candor'?", correct: "frankness", distractors: ["secrecy", "confusion", "hesitation"], hint: "Think about honest, open communication.", explanation: "'Candor' means openness and honesty, similar to 'frankness'." },
      { prompt: "What is the best meaning of 'esoteric'?", correct: "understood by only a few specialists", distractors: ["understood by everyone", "completely meaningless", "very entertaining"], hint: "Think about specialized knowledge.", explanation: "'Esoteric' describes knowledge that is understood by only a small group." },
      { prompt: "Which word is the best antonym for 'benevolent'?", correct: "malicious", distractors: ["generous", "kind", "caring"], hint: "Think about the opposite of kindness.", explanation: "'Malicious' means intending to do harm, the opposite of 'benevolent'." }
    ]
  },
  writing: {
    lower: englishQuestionPools.lower.filter((item) => [
      "Which sentence is the best opening for a short story about a rainy day?"
    ].includes(item.prompt)),
    upper: englishQuestionPools.upper.filter((item) => [
      "Which sentence would work best as a topic sentence for a paragraph about school gardens?"
    ].includes(item.prompt)),
    middle: englishQuestionPools.middle.filter((item) => [
      "Which revision makes the paragraph ending stronger?"
    ].includes(item.prompt)),
    senior: englishQuestionPools.senior.filter((item) => [
      "Which thesis statement is strongest for an essay about online learning?"
    ].includes(item.prompt))
  }
};

const englishWritingPools = {
  lower: [
    { prompt: "Fill in the gap: ___ am going to school now.", correct: "I", distractors: ["i", "me", "my"], hint: "The word at the start of a sentence should be a capital letter.", explanation: "'I' is the correct subject pronoun and must be capitalized." },
    { prompt: "Choose the best ending punctuation: What is your name___", correct: "?", distractors: [".", "!", ","], hint: "A direct question needs question punctuation.", explanation: "A question should end with a question mark." },
    { prompt: "Fill in the gap with the best verb: The bird ___ in the sky.", correct: "flies", distractors: ["fly", "flying", "flied"], hint: "Use a present-tense verb that matches the singular subject.", explanation: "'Bird' is singular, so 'flies' is the correct verb form." },
    { prompt: "Choose the sentence written correctly.", correct: "Sam plays after school.", distractors: ["sam plays after school.", "Sam play after school.", "Sam plays after school"], hint: "Check the capital letter, verb, and full stop.", explanation: "The correct sentence has a capital letter, the right verb, and ending punctuation." },
    { prompt: "Fill in the gap: We went to nairobi on Monday. Which word should start with a capital letter?", correct: "Nairobi", distractors: ["went", "monday", "to"], hint: "Names of places need capital letters.", explanation: "'Nairobi' is a place name, so it needs a capital letter." },
    { prompt: "Choose the best word to finish the sentence: The children ___ happy.", correct: "are", distractors: ["is", "was", "be"], hint: "A plural subject takes a plural helping verb.", explanation: "'Children' is plural, so 'are' is correct." },
    { prompt: "Fill in the gap with the best word: My dog ___ a bone yesterday.", correct: "buried", distractors: ["bury", "burying", "buries"], hint: "This happened in the past, so use a past-tense verb.", explanation: "'Buried' is the correct past-tense form for something that already happened." },
    { prompt: "Choose the sentence with the correct ending punctuation for an exciting sentence.", correct: "We won the game!", distractors: ["We won the game.", "We won the game?", "We won the game,"], hint: "Strong excitement uses an exclamation mark.", explanation: "An exclamation mark best matches the excitement of winning." },
    { prompt: "Fill in the gap: The cat sat ___ the mat.", correct: "on", distractors: ["in", "under", "of"], hint: "Think about where the cat is sitting.", explanation: "'On' correctly shows the cat's position on top of the mat." },
    { prompt: "Choose the sentence that uses capital letters correctly.", correct: "Maya and Tom went to Toronto.", distractors: ["maya and tom went to toronto.", "Maya and tom went to Toronto.", "Maya and Tom went to toronto."], hint: "Names of people and places need capital letters.", explanation: "'Maya', 'Tom', and 'Toronto' are all proper nouns and need capitals." },
    { prompt: "Fill in the gap with the best word: There ___ three apples on the table.", correct: "are", distractors: ["is", "was", "be"], hint: "'Three apples' is plural, so use a plural verb.", explanation: "'Are' matches the plural subject 'three apples'." },
    { prompt: "Choose the best closing sentence for a short story about finding a lost puppy.", correct: "At last, the puppy was safe back home with its family.", distractors: ["The puppy.", "It was found.", "End of story now."], hint: "A good ending sentence should feel complete and satisfying.", explanation: "This ending gives a clear, satisfying conclusion to the story." },
    { prompt: "Fill in the gap: She ___ her shoes before going inside.", correct: "removed", distractors: ["remove", "removing", "removes"], hint: "This happened before, so use a past-tense verb.", explanation: "'Removed' is the correct past-tense form." },
    { prompt: "Choose the sentence that best begins a story about a birthday surprise.", correct: "Ana opened the door and gasped at the balloons filling the room.", distractors: ["It was a birthday.", "Balloons were there and Ana too.", "There was a party maybe."], hint: "A strong opening puts the reader right into the moment.", explanation: "This opening creates a clear, vivid scene right away." },
    { prompt: "Fill in the gap with the best word: The puppy ___ around the yard all afternoon.", correct: "played", distractors: ["play", "playing", "plays"], hint: "This happened in the past, so use the past-tense verb.", explanation: "'Played' correctly shows a completed past action." }
  ],
  upper: [
    { prompt: "Fill in the gap: After lunch___ we returned to class.", correct: ",", distractors: [".", "!", "?"], hint: "An opening phrase is often followed by a comma.", explanation: "A comma is needed after the introductory phrase 'After lunch'." },
    { prompt: "Choose the best verb: Each player ___ a water bottle.", correct: "has", distractors: ["have", "having", "had"], hint: "'Each' is treated as singular.", explanation: "'Each player' is singular, so the correct verb is 'has'." },
    { prompt: "Choose the sentence with correct capitalization and punctuation.", correct: "Did you visit Cape Town?", distractors: ["did you visit Cape Town?", "Did you visit cape town?", "Did you visit Cape Town."], hint: "Check the first word, place name, and punctuation.", explanation: "The correct sentence starts with a capital, capitalizes the place name, and ends with a question mark." },
    { prompt: "Fill in the gap: My brother and I ___ walking home.", correct: "are", distractors: ["is", "am", "was"], hint: "A compound subject usually takes a plural verb.", explanation: "'My brother and I' is plural, so 'are' is the correct helping verb." },
    { prompt: "Choose the best topic sentence.", correct: "Keeping our classroom clean helps everyone learn better.", distractors: ["Our classroom.", "I swept yesterday.", "The bin is blue and the floor and desks."], hint: "A topic sentence should tell the main idea clearly.", explanation: "The best topic sentence introduces the main point of the paragraph." },
    { prompt: "Fill in the gap with the best punctuation: Wow___ that was a close game", correct: "!", distractors: [".", ",", "?"], hint: "Strong feeling often uses an exclamation mark.", explanation: "An exclamation mark fits the excitement in the sentence." },
    { prompt: "Choose the sentence with the correct comparative form.", correct: "This book is more interesting than the last one.", distractors: ["This book is interestinger than the last one.", "This book is most interesting than the last one.", "This book is more interesting as the last one."], hint: "Longer adjectives use 'more' instead of '-er'.", explanation: "'More interesting' is the correct comparative form for a longer adjective." },
    { prompt: "Fill in the gap: The team practiced hard___ they still lost the match.", correct: "but", distractors: ["and", "so", "or"], hint: "Choose a word that shows contrast.", explanation: "'But' correctly shows the contrast between practicing hard and losing." },
    { prompt: "Fill in the gap with the best word: The mountain trail was ___ but the view was worth it.", correct: "steep", distractors: ["steeply", "steepness", "steeper than"], hint: "You need an adjective describing the trail.", explanation: "'Steep' is the adjective that correctly describes the trail." },
    { prompt: "Choose the sentence that best supports a claim with a specific detail.", correct: "The garden produced over sixty tomatoes by the end of summer.", distractors: ["The garden did well this year.", "Tomatoes grew and it was nice.", "Gardens can grow different things."], hint: "Strong support uses a specific, concrete detail.", explanation: "This sentence gives a specific, measurable detail that supports the claim." },
    { prompt: "Choose the strongest opening sentence for a report about recycling.", correct: "Recycling helps our community reduce waste and protect the environment.", distractors: ["Recycling.", "This report is about recycling and stuff.", "I will now talk about recycling maybe."], hint: "A strong opening should be clear and introduce the main idea.", explanation: "This opening clearly introduces the topic and its importance." },
    { prompt: "Fill in the gap with the best word: The instructions were ___ so everyone understood them easily.", correct: "clear", distractors: ["clearly", "clearness", "clearing"], hint: "You need an adjective to describe 'instructions'.", explanation: "'Clear' is the adjective that correctly describes the instructions." },
    { prompt: "Choose the sentence that best combines these ideas: 'The rain started. We went inside.'", correct: "When the rain started, we went inside.", distractors: ["The rain started we went inside.", "The rain started, we went inside.", "We went inside the rain started."], hint: "Use a subordinating conjunction to combine the two ideas smoothly.", explanation: "'When' correctly joins the two ideas into one clear sentence." },
    { prompt: "Fill in the gap with the best word: The hikers followed the ___ trail up the mountain.", correct: "winding", distractors: ["winded", "winds", "wind"], hint: "You need an adjective describing the shape of the trail.", explanation: "'Winding' correctly describes a trail that curves and turns." },
    { prompt: "Choose the strongest closing sentence for a report about the school fundraiser.", correct: "Thanks to everyone's effort, the fundraiser raised more money than ever before.", distractors: ["That is the end of the report.", "Fundraisers happen sometimes at school.", "Money was raised, I think."], hint: "A strong ending should sum up the result clearly.", explanation: "This ending clearly states the outcome and credits the effort involved." },
    { prompt: "Fill in the gap: The museum's new exhibit ___ visitors from around the world.", correct: "attracts", distractors: ["attract", "attracting", "attracted to"], hint: "Match the verb to the singular subject 'exhibit'.", explanation: "'Attracts' is the correct present-tense verb for the singular subject." }
  ],
  middle: [
    { prompt: "Choose the sentence with the best verb agreement.", correct: "Neither of the boys was late.", distractors: ["Neither of the boys were late.", "Neither of the boys are late.", "Neither of the boys be late."], hint: "'Neither' is usually treated as singular in formal writing.", explanation: "'Neither' takes the singular verb 'was'." },
    { prompt: "Fill in the gap with the best transition: The experiment failed___ we learned a great deal from it.", correct: "but", distractors: ["and", "because", "so"], hint: "Choose a word that shows contrast.", explanation: "'But' correctly shows contrast between failure and learning." },
    { prompt: "Choose the strongest concluding sentence.", correct: "For these reasons, community reading programs deserve more support.", distractors: ["That is all about reading.", "Reading is there in many places.", "People read books and programs and things."], hint: "A strong conclusion wraps up the main idea clearly.", explanation: "The best conclusion restates the point in a clear, formal way." },
    { prompt: "Fill in the gap: When the bell rang___ the students packed their bags.", correct: ",", distractors: [".", "!", ":"], hint: "A dependent clause at the start is usually followed by a comma.", explanation: "The opening clause should be followed by a comma." },
    { prompt: "Choose the sentence with correct capitalization, punctuation, and verb use.", correct: "Although it was late, Maria finished her homework.", distractors: ["although it was late Maria finished her homework.", "Although it was late Maria finished her homework", "Although it were late, Maria finished her homework."], hint: "Check the opener, comma, and correct verb.", explanation: "The correct sentence uses proper capitalization, comma placement, and verb form." },
    { prompt: "Fill in the gap with the best word: The writer chose a more ___ tone for the formal letter.", correct: "respectful", distractors: ["respect", "respectfully", "respected"], hint: "You need an adjective to describe the noun 'tone'.", explanation: "'Respectful' is the adjective that correctly describes the tone." },
    { prompt: "Choose the sentence that best avoids wordiness.", correct: "The team finished the project early.", distractors: ["The team, in a manner of speaking, finished the project at an early point in time.", "The team finished, at an early time, the project.", "It was the team that finished the project in an early way."], hint: "A concise sentence says the same thing with fewer words.", explanation: "This sentence is direct and avoids unnecessary wordiness." },
    { prompt: "Fill in the gap with the best transition: The study had a small sample size; ___, the results may not apply broadly.", correct: "therefore", distractors: ["however", "meanwhile", "similarly"], hint: "Choose a transition that shows a logical result.", explanation: "'Therefore' correctly shows the result of the small sample size." },
    { prompt: "Choose the sentence that best avoids an unsupported generalization.", correct: "Three of the five trials showed a measurable improvement.", distractors: ["Everyone always improves with this method.", "This method never fails.", "Improvement always happens no matter what."], hint: "A supported claim should be specific rather than absolute.", explanation: "This sentence gives a specific, accurate result instead of an unsupported generalization." },
    { prompt: "Fill in the gap with the best word: The debate team's ___ argument won over the judges.", correct: "compelling", distractors: ["compel", "compelled", "compellingly"], hint: "You need an adjective describing the argument.", explanation: "'Compelling' is the adjective that correctly describes a persuasive argument." },
    { prompt: "Choose the sentence that best supports a claim with evidence.", correct: "According to the survey, 78 percent of students preferred the new schedule.", distractors: ["Most students probably like the new schedule.", "Some people think schedules matter.", "The new schedule is good, I guess."], hint: "Strong evidence includes specific, verifiable data.", explanation: "This sentence uses specific survey data to support the claim." },
    { prompt: "Fill in the gap with the best word: The essay's ___ structure made it easy to follow the argument.", correct: "logical", distractors: ["logic", "logically", "logician"], hint: "You need an adjective to describe 'structure'.", explanation: "'Logical' is the adjective that correctly describes the structure." },
    { prompt: "Choose the sentence that best revises this vague statement: 'The report was kind of long and had a lot of stuff in it.'", correct: "The report was thorough, covering the topic in twelve detailed sections.", distractors: ["The report was long and stuff.", "The report had things in it.", "The report was kind of big."], hint: "A strong revision replaces vague words with specific details.", explanation: "This revision replaces vague language with precise, specific description." },
    { prompt: "Fill in the gap with the best transition: The results were promising; ___, further testing is needed.", correct: "however", distractors: ["therefore", "similarly", "for example"], hint: "Choose a transition that shows contrast.", explanation: "'However' correctly signals the contrast between promising results and the need for more testing." },
    { prompt: "Choose the sentence that best opens a persuasive paragraph about school uniforms.", correct: "School uniforms can reduce distractions and help students focus on learning.", distractors: ["Uniforms are clothes people wear.", "This paragraph is about uniforms.", "Some schools have uniforms and some do not."], hint: "A strong opening should state a clear, arguable point.", explanation: "This opening makes a clear claim that the rest of the paragraph can support." }
  ],
  senior: [
    { prompt: "Choose the sentence with the most effective formal style.", correct: "The proposal should be revised before it is submitted to the board.", distractors: ["The proposal needs some fixing before they send it.", "The proposal is kind of not ready yet.", "They should maybe do the proposal better somehow."], hint: "Formal writing uses precise, professional language.", explanation: "The correct sentence is clear, formal, and precise." },
    { prompt: "Fill in the gap with the best punctuation: The committee reached one conclusion___ the policy must change.", correct: ":", distractors: [",", ".", ";"], hint: "A colon can introduce an explanation after a complete statement.", explanation: "The colon correctly introduces the conclusion that follows." },
    { prompt: "Choose the sentence with the strongest thesis statement.", correct: "Public transport should be expanded because it reduces traffic, lowers pollution, and improves access to jobs.", distractors: ["This essay is about public transport.", "Public transport is something many people use.", "There are buses and trains in many places."], hint: "A thesis should make a clear claim and preview the reasons.", explanation: "The best thesis states a position and gives clear supporting reasons." },
    { prompt: "Fill in the gap with the correct verb: Each of the reports ___ reviewed before publication.", correct: "was", distractors: ["were", "are", "be"], hint: "'Each' is singular in formal grammar.", explanation: "'Each of the reports' takes the singular verb 'was'." },
    { prompt: "Choose the sentence with correct punctuation and clause control.", correct: "Because the evidence was incomplete, the team delayed its decision.", distractors: ["Because the evidence was incomplete the team delayed its decision.", "Because the evidence was incomplete; the team delayed its decision.", "Because the evidence was incomplete: the team delayed its decision."], hint: "An opening dependent clause is usually followed by a comma.", explanation: "The comma correctly separates the opening clause from the main clause." },
    { prompt: "Fill in the gap with the most precise word: The author's claim was supported by ___ data from three independent studies.", correct: "reliable", distractors: ["nicely", "rely", "trust"], hint: "Choose the adjective that best describes data you can depend on.", explanation: "'Reliable' is the precise adjective that fits the sentence." },
    { prompt: "Choose the sentence with the most effective use of an em dash for emphasis.", correct: "The results confirmed one thingâ€”the hypothesis was correct.", distractors: ["The results confirmed one thing, the hypothesis was correct.", "The results confirmed one thing; the hypothesis, was correct.", "The results confirmedâ€”one thing the hypothesis was correct."], hint: "An em dash can dramatically emphasize the final idea.", explanation: "The em dash correctly emphasizes the concluding clause." },
    { prompt: "Fill in the gap with the best transition for contrasting ideas: The policy was popular; ___, critics raised concerns about its cost.", correct: "however", distractors: ["therefore", "similarly", "consequently"], hint: "Choose a transition that signals contrast.", explanation: "'However' correctly signals the contrast between popularity and criticism." },
    { prompt: "Choose the sentence that best integrates a quotation smoothly into the writer's own sentence.", correct: "As the researcher explains, \"early intervention produces the strongest outcomes.\"", distractors: ["The researcher said. \"Early intervention produces the strongest outcomes.\"", "\"Early intervention produces the strongest outcomes\" the researcher.", "Early intervention, \"produces the strongest,\" outcomes researcher said."], hint: "A smoothly integrated quotation fits grammatically into the sentence around it.", explanation: "This version smoothly introduces and grammatically integrates the quotation." },
    { prompt: "Fill in the gap with the most precise word: The editorial's ___ tone alienated readers who disagreed.", correct: "combative", distractors: ["combat", "combatively", "combats"], hint: "You need an adjective describing a confrontational tone.", explanation: "'Combative' is the adjective that precisely describes an aggressive, confrontational tone." },
    { prompt: "Choose the sentence that best demonstrates a nuanced counterargument.", correct: "While the policy has clear benefits, its long-term costs deserve closer scrutiny.", distractors: ["The policy is good and bad I guess.", "Some people like the policy and some do not.", "The policy has some pros and some cons probably."], hint: "A nuanced counterargument acknowledges strengths while raising a specific concern.", explanation: "This sentence acknowledges the benefits while raising a specific, reasoned concern." },
    { prompt: "Fill in the gap with the most precise word: The committee's ___ approach ensured every detail was reviewed.", correct: "meticulous", distractors: ["casual", "hasty", "vague"], hint: "Choose the adjective describing careful attention to detail.", explanation: "'Meticulous' precisely describes a careful, detail-oriented approach." },
    { prompt: "Choose the sentence that best synthesizes two sources in an argument.", correct: "While Source A emphasizes economic growth, Source B highlights environmental costs, suggesting the issue requires balancing both concerns.", distractors: ["Source A and Source B talk about the same thing basically.", "Source A is right and Source B is wrong.", "Both sources are about the topic in general."], hint: "Synthesis combines ideas from multiple sources into one coherent point.", explanation: "This sentence integrates both sources' perspectives into a coherent, balanced point." },
    { prompt: "Fill in the gap with the most precise word: The board's ___ decision ended months of uncertainty.", correct: "decisive", distractors: ["decisive-ish", "undecided", "hesitant"], hint: "Choose the adjective that means firm and clear.", explanation: "'Decisive' precisely describes a firm, clear decision." },
    { prompt: "Choose the sentence that best qualifies a claim with appropriate hedging language.", correct: "The data suggests, though does not conclusively prove, a link between the two factors.", distractors: ["The data proves the two factors are linked, no question.", "The data has nothing to do with the two factors.", "The data is basically about the two factors probably."], hint: "Academic writing often hedges claims that aren't fully proven.", explanation: "This sentence appropriately qualifies the strength of the claim based on the evidence." }
  ]
};

const englishPatPartAPool = [
  {
    prompt: "Which opening gives the clearest beginning for a Grade 9 narrative or essay response?",
    correct: "An opening that introduces the situation clearly and makes the reader want to continue",
    distractors: [
      "An opening that repeats the topic many times without adding direction",
      "An opening that uses random exciting words but no clear focus",
      "An opening that jumps straight to the ending"
    ],
    hint: "A strong opening should guide the reader into the response and create interest.",
    explanation: "The best opening is clear, purposeful, and engaging without becoming confusing."
  },
  {
    prompt: "Which thesis or controlling idea is strongest for an essay?",
    correct: "A clear main position that tells what the writer will explain or prove",
    distractors: [
      "A broad statement that could mean almost anything",
      "A question with no clear viewpoint",
      "A list of unrelated ideas"
    ],
    hint: "A controlling idea should guide the whole response.",
    explanation: "A strong thesis gives the essay direction and helps the reader follow the writer's main point."
  },
  {
    prompt: "Which detail best strengthens a paragraph?",
    correct: "A specific example that clearly supports the main idea",
    distractors: [
      "A sentence that repeats the topic in different words",
      "A random fact with no connection to the paragraph",
      "A vague opinion with no explanation"
    ],
    hint: "Good support connects directly to the paragraph's purpose.",
    explanation: "Specific and relevant detail develops ideas much more effectively than vague repetition."
  },
  {
    prompt: "Which conclusion is most effective?",
    correct: "A closing that reinforces the main idea and leaves the reader with a final impression",
    distractors: [
      "A closing that introduces a brand-new topic",
      "A closing that stops suddenly with no sense of completion",
      "A closing that copies the introduction word for word"
    ],
    hint: "A strong ending should feel complete and purposeful.",
    explanation: "An effective conclusion gives closure while connecting back to the response's overall idea."
  },
  {
    prompt: "What does strong organization do in a written response?",
    correct: "It helps ideas unfold in an order that the reader can follow easily",
    distractors: [
      "It hides weak ideas by using longer paragraphs",
      'It makes every paragraph the same length',
      "It removes the need for transitions"
    ],
    hint: "Think about how organization helps the reader move from one idea to the next.",
    explanation: "Strong organization creates a logical flow so the reader can understand how the ideas connect."
  },
  {
    prompt: "Which revision best improves sentence structure in this narrative sentence?",
    correct: "Varying sentence length and fixing awkward or incomplete wording",
    distractors: [
      "Making every sentence start in the same way",
      "Using only very short sentences throughout",
      "Adding extra words even when they are unnecessary"
    ],
    hint: "Sentence structure improves when writing becomes clearer and more controlled.",
    explanation: "Effective sentence structure uses variety and clarity rather than repetition or wordiness."
  },
  {
    prompt: "Which word choice is strongest in formal school writing?",
    correct: "Precise language that matches the tone and purpose",
    distractors: [
      "Slang that sounds casual and playful",
      "Any long word, even if it does not fit",
      "Repeated use of the same simple word in every sentence"
    ],
    hint: "The best vocabulary is accurate, not just fancy.",
    explanation: "Precise vocabulary makes ideas clearer and creates a more effective tone."
  },
  {
    prompt: "Why should a student avoid memorizing sample responses from exemplars?",
    correct: "Because successful writing should respond naturally to the prompt and show the student's own control",
    distractors: [
      "Because memorized writing always earns the highest mark",
      "Because examples are only useful for spelling practice",
      "Because all strong responses must use the same structure"
    ],
    hint: "Examples help you learn qualities of good writing, not copy them.",
    explanation: "Strong PAT writing comes from applying good writing skills, not repeating a memorized piece."
  },
  {
    prompt: "What does voice add to a response?",
    correct: "A sense that the writing sounds purposeful, confident, and alive",
    distractors: [
      "A reason to ignore grammar and punctuation",
      "A way to avoid staying on topic",
      "A rule that every sentence must sound dramatic"
    ],
    hint: "Voice is about the writer's presence and control.",
    explanation: "Voice helps the response feel authentic and intentional while still fitting the task."
  },
  {
    prompt: "Which transition best shows contrast?",
    correct: "however",
    distractors: ["for example", "therefore", "meanwhile"],
    hint: "Look for the transition that signals a change or difference.",
    explanation: "'However' signals contrast between one idea and another."
  },
  {
    prompt: "Which transition best introduces an example?",
    correct: "for example",
    distractors: ["instead", "however", "otherwise"],
    hint: "Some transitions introduce proof or illustration.",
    explanation: "'For example' tells the reader that a supporting example is coming next."
  },
  {
    prompt: "Which sentence shows the strongest conventions?",
    correct: "After the storm ended, the streets slowly filled with people again.",
    distractors: [
      "after the storm ended the streets slowly filled with people again",
      "After the storm ended the streets slowly filled with people again.",
      "After the storm ended, the streets slowly filled with people again"
    ],
    hint: "Check capitalization, punctuation, and a complete ending.",
    explanation: "The correct sentence uses a capital letter, a needed comma, and ending punctuation."
  },
  {
    prompt: "Which sentence is the strongest topic sentence for a paragraph about perseverance?",
    correct: "Perseverance matters because it helps people keep growing even when success is not immediate.",
    distractors: [
      "Perseverance is something many people talk about.",
      "My cousin once practiced a lot.",
      "There are hard things in life and school and sports."
    ],
    hint: "A topic sentence should clearly introduce the paragraph's main point.",
    explanation: "The strongest topic sentence makes a clear claim the paragraph can develop."
  },
  {
    prompt: "Which revision improves clarity most?",
    correct: "Replacing vague words with a specific and direct statement",
    distractors: [
      "Adding more words without adding meaning",
      "Keeping a confusing sentence because it sounds formal",
      "Changing the idea completely"
    ],
    hint: "Clarity improves when the reader can understand the meaning quickly.",
    explanation: "Specific and direct wording helps the reader understand the idea more clearly."
  },
  {
    prompt: "In a narrative response, what usually makes a moment more vivid?",
    correct: "Relevant sensory or concrete detail that helps the reader picture the scene",
    distractors: [
      "Repeating the same adjective many times",
      "Stopping the story to define simple words",
      "Listing random details that do not matter"
    ],
    hint: "Vivid detail should help the reader experience the scene.",
    explanation: "Concrete and relevant detail strengthens the writing far more than random description."
  },
  {
    prompt: "Which revision best strengthens formal tone?",
    correct: "Replacing casual wording with clear and appropriate language",
    distractors: [
      "Adding slang so the response feels more relaxed",
      "Using sentence fragments to sound dramatic",
      "Switching between formal and texting language"
    ],
    hint: "Formal tone should sound controlled and appropriate for school writing.",
    explanation: "Formal tone improves when casual or slang expressions are replaced with more suitable language."
  },
  {
    prompt: "What is the main purpose of support in an essay paragraph?",
    correct: "To explain and prove the main point with relevant detail",
    distractors: [
      "To make the paragraph longer only",
      "To repeat the thesis without adding anything new",
      "To change the topic halfway through the paragraph"
    ],
    hint: "Support helps the writer's main idea become convincing.",
    explanation: "Strong support develops the paragraph's point and helps the reader believe it."
  },
  {
    prompt: "Which sentence best shows sentence variety?",
    correct: "The team practiced after school. Later, they stayed even longer to improve one final play.",
    distractors: [
      "The team practiced after school and the team stayed later and the team improved and the team left.",
      "The team practiced. The team stayed. The team improved. The team left.",
      "Practicing after school the team later staying longer improving one final play."
    ],
    hint: "Sentence variety mixes structure and length while staying clear.",
    explanation: "The best choice uses more than one sentence pattern while keeping the meaning smooth and clear."
  },
  {
    prompt: "Which response choice best matches the idea of careful proofreading?",
    correct: "Checking for errors in punctuation, spelling, and grammar before finishing",
    distractors: [
      "Adding new ideas at random in the final minute",
      "Ignoring small errors because the reader will guess the meaning",
      "Changing every sentence whether it needs revision or not"
    ],
    hint: "Proofreading focuses on correctness and polish.",
    explanation: "Careful proofreading helps the final draft communicate clearly and correctly."
  },
  {
    prompt: "Why is first-draft control important in PAT writing?",
    correct: "Because clear sentence structure, vocabulary, and conventions still matter even before major revision",
    distractors: [
      "Because first drafts should never be improved",
      "Because ideas matter but wording never matters",
      "Because only length matters on a first draft"
    ],
    hint: "Think about what a marker can still see in a student's first full response.",
    explanation: "Even a first draft should show control over key writing qualities like clarity and conventions."
  },
  {
    prompt: "Which sentence best uses precise vocabulary?",
    correct: "The speaker's remarks were thoughtful and persuasive.",
    distractors: [
      "The speaker's remarks were nice and stuff.",
      "The speaker's remarks were things that happened.",
      "The speaker's remarks were very, very, very good."
    ],
    hint: "Precise vocabulary says exactly what the writer means.",
    explanation: "'Thoughtful' and 'persuasive' are more exact and effective than vague filler words."
  },
  {
    prompt: "What does a writer do when selecting an organizational approach?",
    correct: "Choose a structure that best fits the purpose and ideas of the response",
    distractors: [
      "Use exactly the same structure for every topic",
      "Start writing without planning any order",
      "Copy the structure of another student's response"
    ],
    hint: "There is no single perfect structure for every strong response.",
    explanation: "The strongest organization depends on the purpose, prompt, and development of ideas."
  },
  {
    prompt: "Which sentence best fixes a run-on?",
    correct: "I wanted to leave early, but the meeting lasted another hour.",
    distractors: [
      "I wanted to leave early the meeting lasted another hour.",
      "I wanted to leave early, the meeting lasted another hour.",
      "I wanted to leave early but and the meeting lasted another hour."
    ],
    hint: "A run-on needs proper punctuation or a conjunction.",
    explanation: "The coordinating conjunction and comma create a correct and clear sentence."
  },
  {
    prompt: "Which revision best improves a weak conclusion?",
    correct: "Connect the ending to the main idea and leave the reader with a final insight",
    distractors: [
      "Add a completely new argument in the last line",
      "End with 'The End' so the response feels finished",
      "Repeat the thesis exactly without adding anything"
    ],
    hint: "A good conclusion should feel complete, not sudden or repetitive.",
    explanation: "The best conclusion returns to the main idea while giving the reader a stronger sense of closure."
  },
  {
    prompt: "Which choice best explains why paragraph unity matters?",
    correct: "A unified paragraph keeps every sentence connected to one clear main idea",
    distractors: [
      "A unified paragraph contains as many ideas as possible",
      "A unified paragraph never needs examples",
      "A unified paragraph avoids transitions completely"
    ],
    hint: "Unity is about focus.",
    explanation: "Paragraph unity keeps the writing focused so the reader can follow the paragraph's purpose."
  },
  {
    prompt: "Which detail would be most relevant in a narrative about overcoming fear on stage?",
    correct: "The speaker's shaking hands, deep breath, and first steady line into the microphone",
    distractors: [
      "A long list of every student's shoe color in the audience",
      "A paragraph explaining the history of microphones",
      "A random joke with no connection to the event"
    ],
    hint: "Relevant details should develop the moment and emotion in the story.",
    explanation: "The best detail directly supports the narrative moment of fear and confidence."
  },
  {
    prompt: "Which sentence best demonstrates correct apostrophe use?",
    correct: "The teacher praised the students' effort after the presentation.",
    distractors: [
      "The teacher praised the students effort after the presentation.",
      "The teacher praised the student's effort after the presentation.",
      "The teacher praised the students's effort after the presentation."
    ],
    hint: "The effort belongs to more than one student.",
    explanation: "Because the effort belongs to multiple students, the plural possessive form is 'students'."
  },
  {
    prompt: "Why do effective writers revise for more than spelling?",
    correct: "Because strong writing also depends on ideas, structure, tone, and clarity",
    distractors: [
      "Because spelling is the only part that never matters",
      "Because revision should focus only on making the piece longer",
      "Because organization and wording cannot be improved"
    ],
    hint: "Revision includes content and style as well as correctness.",
    explanation: "Good revision strengthens the whole response, not just surface errors."
  },
  {
    prompt: "Which paragraph plan is strongest for an essay response?",
    correct: "Begin with a clear position, develop reasons with support, and finish with a purposeful conclusion",
    distractors: [
      "List unrelated thoughts in any order",
      "Write one long paragraph with no clear sections",
      "Start with the conclusion and never explain the reasons"
    ],
    hint: "A good plan should help the reader follow the argument from start to finish.",
    explanation: "The strongest structure presents a position, develops it, and closes effectively."
  },
  {
    prompt: "Which sentence most improves word choice in this idea: 'The movie was good and had good acting'?",
    correct: "The film was compelling and featured convincing performances.",
    distractors: [
      "The movie was good and had good acting.",
      "The movie was nice and stuff.",
      "The movie had acting in it."
    ],
    hint: "Look for more precise and mature wording.",
    explanation: "The revised sentence replaces vague repetition with more specific vocabulary."
  }
];

const englishPatPartABusinessWritingPool = [
  {
    prompt: "Which opening is most appropriate for a business letter requesting information?",
    correct: "I am writing to request information about your summer volunteer program.",
    distractors: [
      "Hey, I really want to know some stuff about your program.",
      "This letter is kind of about a thing I was wondering.",
      "Guess what? I have questions for you."
    ],
    hint: "Business writing should be clear, polite, and direct.",
    explanation: "The strongest opening states the purpose right away in an appropriate formal tone."
  },
  {
    prompt: "Which tone is most suitable for business writing?",
    correct: "polite and professional",
    distractors: ["sarcastic and dramatic", "slang-filled and casual", "uncertain and unfocused"],
    hint: "Think about how you would write to a principal or business manager.",
    explanation: "Business writing works best when the tone is respectful, clear, and professional."
  },
  {
    prompt: "Which sentence best states the purpose of a complaint letter?",
    correct: "I am writing to explain the problem with my order and request a solution.",
    distractors: [
      "I am super upset and wanted to say that first.",
      "There were many things in life that happened before this.",
      "This whole story started a long time ago for many reasons."
    ],
    hint: "Purpose should be stated early and clearly.",
    explanation: "A business letter should explain why it is being written and what response is wanted."
  },
  {
    prompt: "Which detail is most useful in a formal request letter?",
    correct: "specific information such as dates, item names, or exact concerns",
    distractors: [
      "random opinions not connected to the purpose",
      "jokes to make the reader laugh",
      "vague complaints without facts"
    ],
    hint: "Business writing needs details that help the reader act.",
    explanation: "Specific details make the request easier to understand and respond to."
  },
  {
    prompt: "Which closing is strongest for business writing?",
    correct: "Thank you for your time and consideration. I look forward to your response.",
    distractors: [
      "Anyway, that is all I have to say for now.",
      "Write back soon because this is really annoying.",
      "Bye and thanks a lot for everything maybe."
    ],
    hint: "A formal closing should remain respectful and purposeful.",
    explanation: "The best closing is courteous and clearly invites a response."
  },
  {
    prompt: "Which revision best improves formality?",
    correct: "The delay created a serious inconvenience for my family.",
    distractors: [
      "The delay was really bad and super annoying for us.",
      "The delay was a total mess and stuff.",
      "The delay was bad, like, for everybody maybe."
    ],
    hint: "Choose the sentence that sounds professional without being dramatic.",
    explanation: "Formal diction makes the concern clear while keeping the tone appropriate."
  },
  {
    prompt: "Which sentence best addresses audience in business writing?",
    correct: "I have included my contact information in case you need any further details.",
    distractors: [
      "You probably already know what I mean anyway.",
      "I do not think I need to explain this to you.",
      "Just figure it out from the rest of the letter."
    ],
    hint: "Think about helping the reader respond efficiently.",
    explanation: "Strong business writing anticipates the reader's needs and supports clear communication."
  },
  {
    prompt: "Which choice best improves clarity in a formal message?",
    correct: "Please let me know by May 12 whether the meeting time can be changed.",
    distractors: [
      "Let me know soon about that thing from before.",
      "Please respond whenever possible about maybe changing it.",
      "I am writing because some changes could happen perhaps."
    ],
    hint: "Clear writing often includes exact dates and direct requests.",
    explanation: "Specific wording helps the reader know exactly what is being asked."
  },
  {
    prompt: "Why should business writing avoid slang?",
    correct: "Because slang weakens professionalism and may reduce clarity",
    distractors: [
      "Because slang is always more respectful",
      "Because every formal message must be very long",
      "Because slang makes punctuation unnecessary"
    ],
    hint: "Business writing should sound suitable for a formal audience.",
    explanation: "Slang can make a message seem careless or less professional."
  },
  {
    prompt: "Which sentence best uses conventions for business writing?",
    correct: "I appreciate your assistance with this matter.",
    distractors: [
      "i appreciate your assistance with this matter",
      "I appreciate your assistance with this matter",
      "I appreciate you're assistance with this matter."
    ],
    hint: "Check capitalization, punctuation, and correct word choice.",
    explanation: "The strongest sentence uses correct conventions and professional wording."
  }
];

const patPartAIntroductionChoices = [
  {
    prompt: "Which introduction best begins a response about why taking risks can help a person grow?",
    correct: "When people choose a challenge instead of comfort, they often discover strengths they did not know they had.",
    distractors: [
      "This essay is about risks and things about growth.",
      "Risks are risks because people take risks all the time.",
      "There are many topics in life, and this is one of them."
    ],
    hint: "A strong opening should sound focused, purposeful, and interesting right away.",
    explanation: "The best introduction immediately connects risk to growth and sets up an idea the writer can develop."
  },
  {
    prompt: "Which opening is strongest for a narrative about overcoming fear?",
    correct: "My hands shook at the edge of the diving board, but for the first time I stayed there long enough to choose courage.",
    distractors: [
      "I was scared. It was about fear. Then things happened.",
      "Fear is something people have, and I had it too, I guess.",
      "This story is about me and a thing that happened one day."
    ],
    hint: "A narrative opening should place the reader inside a moment.",
    explanation: "The strongest opening creates a scene, shows emotion, and gives the narrative an immediate focus."
  },
  {
    prompt: "Which introduction is most effective for an essay about learning through adventure?",
    correct: "Adventure matters because it pushes people beyond routine and teaches lessons that comfort alone rarely can.",
    distractors: [
      "Adventure is important and this essay will talk about adventure.",
      "People go places sometimes, and there are many adventures in life.",
      "There are a lot of reasons for many different things in this world."
    ],
    hint: "An essay opening should introduce a meaningful claim, not just repeat the topic.",
    explanation: "The best choice presents a clear central idea and suggests direction for the essay."
  },
  {
    prompt: "Which introduction best begins a response about the value of teamwork?",
    correct: "When people combine different strengths toward one goal, they often accomplish more than any of them could alone.",
    distractors: [
      "Teamwork is something groups do together sometimes.",
      "This essay is about teamwork, which happens in many places.",
      "There are lots of teams in the world doing different things."
    ],
    hint: "A strong opening should sound focused and purposeful right away.",
    explanation: "The best introduction connects teamwork to a clear benefit and sets up a direction for the essay."
  },
  {
    prompt: "Which opening is strongest for an essay about the importance of perseverance?",
    correct: "Every setback tests whether a person will quit or keep pushing forward, and that choice often defines who they become.",
    distractors: [
      "Perseverance is a word that means trying hard.",
      "This essay will be about not giving up on things.",
      "Some people give up and some people do not give up."
    ],
    hint: "An essay opening should introduce a meaningful claim, not just restate the topic.",
    explanation: "The strongest opening frames perseverance as a meaningful choice, giving the essay direction."
  }
];

const patPartAThesisChoices = [
  {
    prompt: "Which thesis gives the clearest controlling idea for an essay on seeking adventure?",
    correct: "Seeking adventure is valuable because it builds confidence, teaches resilience, and helps people understand themselves better.",
    distractors: [
      "Adventure is a thing that many people have in life.",
      "This essay is about the topic of seeking adventure.",
      "There are good and bad things in the world, including adventure."
    ],
    hint: "A strong thesis should make a clear claim and preview the key ideas.",
    explanation: "The strongest thesis gives the essay a focused direction by stating both the position and the reasons."
  },
  {
    prompt: "Which thesis is strongest for a response about why challenges matter?",
    correct: "Challenges matter because they force people to adapt, persevere, and grow beyond what feels easy.",
    distractors: [
      "Challenges are challenging for many people in many ways.",
      "Some people like challenges, and some do not.",
      "There are different opinions about different things."
    ],
    hint: "The best thesis should do more than mention the topic.",
    explanation: "This thesis is clear, arguable, and ready to guide the essay's body paragraphs."
  },
  {
    prompt: "Which thesis would best guide an essay about trying new experiences?",
    correct: "Trying new experiences can change a person's life by expanding skills, perspective, and courage.",
    distractors: [
      "Trying new experiences is something people do.",
      "This paper will discuss new experiences in life.",
      "Life is full of many different experiences for different people."
    ],
    hint: "A controlling idea should be specific enough to organize the rest of the response.",
    explanation: "The strongest thesis names the topic and gives three meaningful directions for development."
  },
  {
    prompt: "Which thesis best guides an essay about the value of teamwork?",
    correct: "Teamwork matters because it combines different strengths, builds trust, and produces results no individual could achieve alone.",
    distractors: [
      "Teamwork is good and this essay is about teamwork.",
      "Groups of people sometimes work together on things.",
      "There are many kinds of teams in different places."
    ],
    hint: "The best thesis should state a clear claim and preview the reasons behind it.",
    explanation: "This thesis names the topic and gives three specific reasons the essay can develop."
  },
  {
    prompt: "Which thesis is strongest for a response about the importance of perseverance?",
    correct: "Perseverance matters because it turns setbacks into lessons, builds discipline, and ultimately leads to lasting success.",
    distractors: [
      "Perseverance is something people need sometimes.",
      "This essay will talk about not giving up.",
      "Some things are hard and some things are easy."
    ],
    hint: "The best thesis should do more than mention the topic.",
    explanation: "This thesis is specific, arguable, and gives the essay a clear direction to develop."
  }
];

const patPartASupportChoices = [
  {
    prompt: "Which detail would best support the idea that adventure builds confidence?",
    correct: "After failing twice on the climbing wall, she reached the top on her third attempt and realized she could trust her own effort.",
    distractors: [
      "Climbing walls are found in many recreation centres.",
      "Some people wear shoes while climbing, and some do not.",
      "The wall was tall and made of different colours."
    ],
    hint: "Strong support should directly prove the paragraph's idea.",
    explanation: "The best detail shows struggle, success, and the growth in confidence that followed."
  },
  {
    prompt: "Which sentence gives the most specific support for the idea that taking risks leads to growth?",
    correct: "By joining the debate team despite his fear of public speaking, Aaron learned to organize his ideas and speak with more confidence.",
    distractors: [
      "Risks can help you become a better person.",
      "There are lots of risks in school and in life.",
      "Public speaking is something many people know about."
    ],
    hint: "Look for a detail that includes a real action and a clear result.",
    explanation: "Specific support becomes stronger when it shows what happened and how the person changed."
  },
  {
    prompt: "Which example best develops a paragraph about learning from failure?",
    correct: "Although she lost the race, she trained again, improved her breathing, and came back the next season stronger than before.",
    distractors: [
      "Failure happens in many places around the world.",
      "People do not always win everything they try.",
      "Races are usually run on tracks or roads."
    ],
    hint: "The best support should show how the idea works in action.",
    explanation: "This example directly illustrates failure, learning, persistence, and improvement."
  },
  {
    prompt: "Which detail would best support the idea that teamwork produces better results?",
    correct: "When the group split the research and shared their findings, they finished the project two days early with fewer mistakes.",
    distractors: [
      "Groups usually have more than one person in them.",
      "Some projects are done by teams and some are not.",
      "Meetings can happen in classrooms or online."
    ],
    hint: "Strong support should directly prove the paragraph's idea with a concrete example.",
    explanation: "The best detail shows a specific action and the result it produced, proving the claim about teamwork."
  },
  {
    prompt: "Which example best develops a paragraph about the value of perseverance?",
    correct: "After failing the driving test twice, he practiced every weekend and passed on his third attempt with full marks.",
    distractors: [
      "Driving tests are required in most places.",
      "Some people pass tests and some people do not.",
      "Practice can happen at different times of day."
    ],
    hint: "The best support should show how the idea works in a real situation.",
    explanation: "This example directly illustrates a setback, continued effort, and eventual success."
  }
];

const patPartAOrganizationChoices = [
  {
    prompt: "Which paragraph plan would organize an essay most effectively?",
    correct: "Introduction with clear thesis, one paragraph on confidence, one on resilience, one on self-discovery, then a conclusion",
    distractors: [
      "Introduction, random example, conclusion, then thesis at the end",
      "One long paragraph with every idea mixed together",
      "Three body paragraphs that all repeat the same point in different words"
    ],
    hint: "Good organization should help the reader follow one clear line of development.",
    explanation: "The strongest plan gives each main reason its own space and creates a clear progression of ideas."
  },
  {
    prompt: "Which organizational choice would strengthen a narrative most?",
    correct: "Begin with the moment of tension, develop events in order, and end with what the experience changed in the character",
    distractors: [
      "Start with the ending, then list random memories with no sequence",
      "Use one paragraph for every thought, even if the ideas do not connect",
      "Repeat the same event three times so the story seems longer"
    ],
    hint: "Narrative organization should help the reader follow events and meaning.",
    explanation: "A clear sequence with a meaningful ending makes the narrative easier to follow and more effective."
  },
  {
    prompt: "Why is there no single required structure for every strong PAT Part A response?",
    correct: "Because the best structure depends on the writer's purpose, ideas, and chosen approach",
    distractors: [
      "Because organization never matters in writing",
      "Because every good response must copy the same exemplar pattern",
      "Because students should avoid planning before they write"
    ],
    hint: "The booklet warns against treating one structure as the only correct one.",
    explanation: "Strong writing is judged by effectiveness, not by copying one fixed formula."
  }
];

const patPartARevisionChoices = [
  {
    prompt: "Which revision best improves sentence structure?",
    correct: "The path was steep, but by the end of the climb, Maya felt stronger than she had that morning.",
    distractors: [
      "The path was steep and Maya climbed and Maya was tired and Maya felt stronger.",
      "The path steep by the end of climb Maya stronger morning.",
      "Maya felt stronger. Maya climbed. The path was steep. It happened."
    ],
    hint: "Look for a sentence that is complete, controlled, and varied.",
    explanation: "The best revision combines ideas smoothly and clearly without becoming repetitive or awkward."
  },
  {
    prompt: "Which revision most improves clarity?",
    correct: "At first, he hesitated at the edge of the lake, but after one deep breath, he jumped in.",
    distractors: [
      "He was there and things were happening and then he did it.",
      "At first by the lake, after the edge, breath and jump.",
      "He jumped. He breathed. He hesitated. It was like that."
    ],
    hint: "Clear writing should help the reader picture the action easily.",
    explanation: "The strongest sentence presents the event in a clear and logical way."
  },
  {
    prompt: "Which sentence shows better sentence variety?",
    correct: "The rain intensified. Still, no one moved back toward the cabin.",
    distractors: [
      "The rain intensified and no one moved back toward the cabin and everyone waited.",
      "The rain intensified. The rain intensified. No one moved. No one moved.",
      "Intensified the rain while cabin no one moved back."
    ],
    hint: "Effective variety often comes from mixing sentence length and structure.",
    explanation: "The correct choice creates a smoother rhythm and stronger control of emphasis."
  }
];

const patPartAVocabularyChoices = [
  {
    prompt: "Which revision shows the most precise vocabulary?",
    correct: "The experience was unsettling at first, but it eventually became empowering.",
    distractors: [
      "The experience was weird at first, but then it got good.",
      "The experience was a thing that changed later on.",
      "The experience was very, very different and stuff."
    ],
    hint: "Precise vocabulary should say exactly what the writer means.",
    explanation: "Words like 'unsettling' and 'empowering' communicate the change in feeling more exactly."
  },
  {
    prompt: "Which word best improves this sentence: 'Her decision was ___ because she had thought carefully about the risks'?",
    correct: "deliberate",
    distractors: ["nice", "big", "loud"],
    hint: "Choose the word that best matches careful, intentional action.",
    explanation: "'Deliberate' is the most precise choice because it suggests thoughtful and purposeful decision-making."
  },
  {
    prompt: "Which sentence uses vocabulary most effectively in formal school writing?",
    correct: "His hesitation gradually gave way to determination.",
    distractors: [
      "He was kind of unsure, but then he was all in.",
      "He had some feelings and then some other ones later.",
      "He was nervous and stuff, but then not really."
    ],
    hint: "Formal tone usually avoids vague filler words.",
    explanation: "The strongest sentence uses clear and mature vocabulary without sounding forced."
  }
];

const patPartAConclusionChoices = [
  {
    prompt: "Which conclusion is most effective for an essay about personal growth through challenge?",
    correct: "In the end, challenge matters not because it is comfortable, but because it reveals what a person is capable of becoming.",
    distractors: [
      "That is why challenge is challenge and growth is growth.",
      "So that is my essay about this topic.",
      "Another topic I could talk about is sports."
    ],
    hint: "A strong ending should connect back to the main idea and leave the reader with something to think about.",
    explanation: "The best conclusion reinforces the central idea in a thoughtful and purposeful way."
  },
  {
    prompt: "Which ending best strengthens a narrative about taking a first big risk?",
    correct: "As she walked home, the fear had not disappeared entirely, but it no longer controlled what she believed she could do.",
    distractors: [
      "That was the end of my story and it was interesting.",
      "Then she went home and ate supper and nothing else mattered.",
      "The risk happened, and now here is a new idea about another day."
    ],
    hint: "A narrative ending should show what changed because of the experience.",
    explanation: "The strongest ending reveals the character's growth and gives the story a meaningful final note."
  },
  {
    prompt: "Why is repeating the introduction word for word a weak conclusion strategy?",
    correct: "Because it closes the response without adding insight or a sense of development",
    distractors: [
      "Because conclusions should never connect back to the beginning",
      "Because longer conclusions are always weaker",
      "Because readers dislike full sentences at the end"
    ],
    hint: "A good conclusion should do more than copy.",
    explanation: "Strong closure returns to the main idea while deepening it, not merely repeating it."
  }
];

const patPartAConventionsChoices = [
  {
    prompt: "Which sentence shows the strongest control of conventions?",
    correct: "Although he was uncertain, he stepped forward and accepted the challenge.",
    distractors: [
      "although he was uncertain, he stepped forward and accepted the challenge.",
      "Although he was uncertain he stepped forward and accepted the challenge",
      "Although he were uncertain, he stepped forward and accepted the challenge."
    ],
    hint: "Check capitalization, punctuation, and grammar together.",
    explanation: "The strongest sentence controls the introductory clause, capitalization, and verb choice correctly."
  },
  {
    prompt: "Which sentence best corrects the run-on?",
    correct: "She wanted to quit, but she stayed long enough to prove herself wrong.",
    distractors: [
      "She wanted to quit, she stayed long enough to prove herself wrong.",
      "She wanted to quit but and she stayed long enough to prove herself wrong.",
      "She wanted to quit she stayed long enough to prove herself wrong."
    ],
    hint: "Run-ons need proper punctuation or a conjunction.",
    explanation: "The coordinating conjunction and comma join the two complete ideas correctly."
  },
  {
    prompt: "Which sentence uses punctuation most effectively?",
    correct: "After the final whistle, the players looked at one another in stunned silence.",
    distractors: [
      "After the final whistle the players looked at one another in stunned silence.",
      "After the final whistle; the players looked at one another in stunned silence.",
      "after the final whistle, the players looked at one another in stunned silence."
    ],
    hint: "Look carefully at the opening phrase and the capitalization.",
    explanation: "The comma after the introductory phrase and the capital letter at the beginning make the sentence clear and correct."
  }
];

const patPartAVoiceChoices = [
  {
    prompt: "Which sentence shows the strongest voice without losing formal control?",
    correct: "For a moment, the stage lights felt merciless, but I refused to let them turn me back.",
    distractors: [
      "I was on stage and it was bright and stuff.",
      "The stage lights existed, and then I did something.",
      "It was like, super scary, but whatever, I did it."
    ],
    hint: "Voice should sound confident and individual without becoming careless.",
    explanation: "The strongest sentence sounds alive and personal while still remaining controlled and purposeful."
  },
  {
    prompt: "What does a distinct voice usually add to a strong Part A response?",
    correct: "It helps the writing sound purposeful, engaged, and memorable to the reader",
    distractors: [
      "It removes the need for support and organization",
      "It means the writer should ignore formal conventions",
      "It works only in stories, never in essays"
    ],
    hint: "Voice is not the same as being random or dramatic.",
    explanation: "A distinct voice strengthens a response when it supports the writer's purpose and engages the reader."
  },
  {
    prompt: "Which sentence creates a more convincing tone?",
    correct: "Only after failing did he understand how badly he wanted to succeed.",
    distractors: [
      "He failed and stuff, and then he kind of knew things.",
      "There were events, and one of them involved failure maybe.",
      "The situation happened in a way that was sort of important."
    ],
    hint: "Convincing tone comes from control, not vague wording.",
    explanation: "The best sentence sounds confident and clear, which makes the tone more convincing."
  }
];

const patPartAEssayIntroductionChoices = patPartAIntroductionChoices.filter((item) => !/narrative/i.test(item.prompt));
const patPartANarrativeIntroductionChoices = patPartAIntroductionChoices.filter((item) => /narrative/i.test(item.prompt) || /overcoming fear/i.test(item.prompt));
const patPartAEssaySupportChoices = patPartASupportChoices.filter((item) => !/stage|narrative/i.test(item.prompt) && !/stage/i.test(item.correct));
const patPartANarrativeSupportChoices = patPartASupportChoices.filter((item) => /stage|narrative/i.test(item.prompt) || /stage/i.test(item.correct));
const patPartAEssayConclusionChoices = patPartAConclusionChoices.filter((item) => !/narrative/i.test(item.prompt));
const patPartANarrativeConclusionChoices = patPartAConclusionChoices.filter((item) => /narrative/i.test(item.prompt));

const englishPatPartAEssayGeneralPool = englishPatPartAPool.filter((item) => !/narrative/i.test(item.prompt) && !/fear on stage/i.test(item.prompt));
const englishPatPartANarrativeGeneralPool = englishPatPartAPool.filter((item) => /narrative/i.test(item.prompt) || /fear on stage/i.test(item.prompt) || /voice add/i.test(item.prompt));

const englishPatPartBPool = [
  {
    prompt: "In a reading passage, what does it mean to identify an explicit detail?",
    correct: "Find information that is clearly stated in the text",
    distractors: [
      "Guess a meaning that is never suggested",
      "Ignore the text and use only personal opinion",
      "Rewrite the whole passage from memory"
    ],
    hint: "Explicit details are directly there for the reader to find.",
    explanation: "An explicit detail is stated clearly in the text rather than hidden as an inference."
  },
  {
    prompt: "What does it mean to make an inference while reading?",
    correct: "Use clues from the text and your thinking to understand something not stated directly",
    distractors: [
      "Copy a sentence word for word",
      "Choose any answer that sounds interesting",
      "Focus only on punctuation marks"
    ],
    hint: "An inference combines text clues with reasoning.",
    explanation: "Readers infer by using evidence from the text to understand ideas the author implies."
  },
  {
    prompt: "Which question best checks a reader's understanding of setting?",
    correct: "Where and when does this text appear to take place?",
    distractors: [
      "How many commas are in the text?",
      "Which answer choice is the longest?",
      "What does the reader eat after the story?"
    ],
    hint: "Setting is about place and time.",
    explanation: "Setting helps the reader understand when and where the events happen."
  },
  {
    prompt: "When a speaker begins with a casual line like a real conversation, what is that most likely helping to create?",
    correct: "A clear voice and an immediate sense of situation",
    distractors: [
      "A scientific explanation",
      "A formal legal argument",
      "A list of instructions"
    ],
    hint: "Think about how opening language shapes mood and perspective.",
    explanation: "Conversational language can quickly build voice and help establish the situation."
  },
  {
    prompt: "If a character starts a conversation by asking a question, the writer is often showing that the character is",
    correct: "trying to get someone's attention or begin interaction",
    distractors: [
      "refusing to speak at all",
      "writing a formal report",
      "ending the conflict immediately"
    ],
    hint: "Questions often start interaction.",
    explanation: "A character who asks a question is usually trying to begin contact or keep a conversation moving."
  },
  {
    prompt: "What is slang in a text?",
    correct: "Informal language used in everyday speech",
    distractors: [
      "A heading printed in large font",
      "A verb written in past tense",
      "A sentence that always rhymes"
    ],
    hint: "Slang sounds casual and conversational.",
    explanation: "Slang is informal wording often used to create a natural speaking voice."
  },
  {
    prompt: "Why might an author use a dash in a sentence or poem?",
    correct: "To create a pause, shift, or added emphasis",
    distractors: [
      "To show that the text has no meaning",
      "To replace every comma in formal writing",
      "To mark the end of every paragraph"
    ],
    hint: "A dash can signal a break in thought.",
    explanation: "Writers use dashes to create interruption, emphasis, or a strong pause."
  },
  {
    prompt: "If a final line makes the reader smile at a character's reaction, the effect is most likely",
    correct: "humour",
    distractors: ["symbolism", "technical language", "instruction"],
    hint: "Think about the emotional effect on the reader.",
    explanation: "A surprising or playful ending is often used to create humour."
  },
  {
    prompt: "If a poem mainly entertains the reader with a relatable situation, its primary purpose is most likely to",
    correct: "amuse the reader",
    distractors: [
      "present a lab procedure",
      "argue a law case",
      "give directions to a building"
    ],
    hint: "Purpose asks why the text was written.",
    explanation: "When the main effect is enjoyment or laughter, the purpose is to amuse."
  },
  {
    prompt: "When a word is printed in bold in a cartoon panel, it often signals",
    correct: "emphasis on that word or feeling",
    distractors: [
      "that the word should be ignored",
      "that the sentence is from a dictionary",
      "that the cartoon has ended"
    ],
    hint: "Visual emphasis changes how a line sounds.",
    explanation: "Bold print can show stronger feeling, stress, or importance."
  },
  {
    prompt: "Which device is shown when a character says something wildly overstated, like defeating many opponents at once?",
    correct: "Exaggeration",
    distractors: ["Prediction", "Definition", "Proofreading"],
    hint: "This device makes something sound larger than life.",
    explanation: "Exaggeration deliberately overstates something for effect."
  },
  {
    prompt: "If a character talks bravely about one challenge but complains about a much smaller one, the author may be creating",
    correct: "humour through contrast",
    distractors: [
      "a scientific comparison",
      "a formal summary",
      "a step-by-step procedure"
    ],
    hint: "Contrast can make a character's reaction seem funny.",
    explanation: "Humour often comes from placing a dramatic attitude beside a minor problem."
  },
  {
    prompt: "When a text begins with announcements, rushing, or time pressure, what feeling is often created?",
    correct: "Urgency",
    distractors: ["Peacefulness", "Jealousy", "Boredom only"],
    hint: "Fast movement and time pressure affect mood.",
    explanation: "Details about hurrying and being late often create urgency."
  },
  {
    prompt: "If a character is imagining something frightening and then suddenly reacts, that reaction often shows the character was",
    correct: "startled out of a thought or daydream",
    distractors: [
      "pretending not to listen",
      "solving a math problem",
      "writing a letter home"
    ],
    hint: "The character's mind was somewhere else first.",
    explanation: "A sudden jump or reaction can show the character was pulled back from private thoughts."
  },
  {
    prompt: "When a writer uses context to help the reader understand an unfamiliar word, the reader should",
    correct: "look at nearby details to figure out the meaning",
    distractors: [
      "skip the word entirely",
      "replace it with any word that sounds good",
      "assume it means the opposite"
    ],
    hint: "Context clues come from the sentence and surrounding lines.",
    explanation: "Readers use surrounding details and wording to infer meaning from context."
  },
  {
    prompt: "If a character says a machine 'eats money,' the reader should understand that the machine is",
    correct: "very expensive to operate",
    distractors: [
      "able to swallow coins physically",
      "broken beyond repair",
      "small and easy to manage"
    ],
    hint: "This phrase is figurative, not literal.",
    explanation: "The expression suggests that the machine uses money quickly and in large amounts."
  },
  {
    prompt: "What does a long hallway described as 'endless' most likely show?",
    correct: "The characters feel the trip is tiring or stressful",
    distractors: [
      "The hallway truly has no ending",
      "The building is magical",
      "The writer forgot the real distance"
    ],
    hint: "Think about how description reflects feeling.",
    explanation: "The word 'endless' is often used to show a character's stressed or anxious viewpoint."
  },
  {
    prompt: "In an informational job posting, where would a reader usually look to find education requirements?",
    correct: "The section describing qualifications or training needed",
    distractors: [
      "Only the company name",
      "The date at the bottom",
      "The decorative heading style"
    ],
    hint: "Job postings organize practical details by category.",
    explanation: "Education or training requirements are usually listed in the qualifications section."
  },
  {
    prompt: "Why is blueprint reading important in a trades-related informational text?",
    correct: "Because it helps the worker understand plans and carry out the job correctly",
    distractors: [
      "Because it replaces all practical skill",
      "Because it is only useful for office work",
      "Because it is less important than the job title"
    ],
    hint: "Think about what blueprints tell a worker.",
    explanation: "Blueprints communicate plans, measurements, and structure, making them essential to the work."
  },
  {
    prompt: "Which reading skill is being used when a student combines several details to decide the author's main message?",
    correct: "Synthesizing meaning",
    distractors: [
      "Alphabetizing evidence",
      "Counting line numbers only",
      "Guessing without reading"
    ],
    hint: "This skill brings ideas together into a larger understanding.",
    explanation: "Synthesizing meaning means combining details to understand a bigger message or purpose."
  },
  {
    prompt: "Which reading skill is being used when a student notices how bold print, a dash, or a cartoon frame affects meaning?",
    correct: "Interpreting text organization and features",
    distractors: [
      "Ignoring the author's choices",
      "Solving a numerical pattern",
      "Memorizing every line exactly"
    ],
    hint: "This skill looks at how the text is built.",
    explanation: "Text organization includes the author's use of form, features, structure, and presentation."
  },
  {
    prompt: "Which reading skill is being used when a student figures out a word from surrounding clues?",
    correct: "Associating meaning from context",
    distractors: [
      "Predicting the ending from the title alone",
      "Judging handwriting quality",
      "Comparing font size only"
    ],
    hint: "This skill focuses on meaning of words and phrases.",
    explanation: "Associating meaning often involves determining the meaning of words, phrases, or figurative language from context."
  },
  {
    prompt: "Which reading skill is being used when a student identifies a detail that is clearly stated in a text?",
    correct: "Identifying ideas and details",
    distractors: [
      "Skipping to the last paragraph",
      "Changing the author's tone",
      "Writing a new title for the text"
    ],
    hint: "This skill focuses on information the text directly gives.",
    explanation: "Identifying ideas and details means recognizing important stated or implied information."
  },
  {
    prompt: "If a reader is asked why an author chose a particular form, such as poem, cartoon, or job posting, the reader should think most about",
    correct: "how the form shapes meaning and purpose",
    distractors: [
      "which font is easiest to copy",
      "how many letters are in the title",
      "whether the text has enough commas"
    ],
    hint: "Form affects how the message is delivered.",
    explanation: "Different forms create different effects and help communicate ideas in specific ways."
  },
  {
    prompt: "When a question asks for the best conclusion about a character's point of view, the student should",
    correct: "use the character's words and actions as evidence",
    distractors: [
      "choose the funniest answer automatically",
      "ignore the text and use personal preference",
      "select the answer with the most difficult vocabulary"
    ],
    hint: "Conclusions should come from textual evidence.",
    explanation: "A character's point of view should be inferred from what the text actually shows."
  },
  {
    prompt: "Which choice best shows the reader is synthesizing a main purpose?",
    correct: "Looking across several details to decide why the text was written",
    distractors: [
      "Finding one punctuation mark only",
      "Listing every noun in order",
      "Copying the first sentence and stopping"
    ],
    hint: "Purpose usually comes from more than one detail.",
    explanation: "Main purpose is found by bringing together details from across the whole selection."
  },
  {
    prompt: "If a text includes both explicit facts and clues that suggest feelings, a strong reader should",
    correct: "notice both the stated information and the implied meaning",
    distractors: [
      "focus only on the title",
      "ignore feelings completely",
      "treat every clue as unrelated"
    ],
    hint: "Good reading uses both direct and indirect evidence.",
    explanation: "Strong comprehension includes recognizing what is said directly and what is suggested."
  },
  {
    prompt: "Why do released-item style PAT Part B questions often ask about purpose, point of view, and effect?",
    correct: "Because good reading goes beyond facts to understanding how meaning is created",
    distractors: [
      "Because details never matter",
      "Because all texts mean exactly the same thing",
      "Because visual features should always be ignored"
    ],
    hint: "Reading assessment checks interpretation as well as recall.",
    explanation: "Readers need to interpret how details, structure, and language choices work together."
  },
  {
    prompt: "Which strategy is best when two answer choices seem possible on a reading question?",
    correct: "Return to the text and choose the answer best supported by evidence",
    distractors: [
      "Pick the shortest answer every time",
      "Guess based only on background knowledge",
      "Choose whichever answer sounds more dramatic"
    ],
    hint: "The text should decide between close options.",
    explanation: "The strongest answer is the one most clearly supported by the selection."
  },
  {
    prompt: "What is the best description of Part B PAT prep?",
    correct: "Practice in reading closely, using evidence, and explaining meaning from different kinds of texts",
    distractors: [
      "Memorizing one fixed answer pattern for every question",
      "Ignoring text features and reading only the title",
      "Choosing answers based only on opinion"
    ],
    hint: "Part B focuses on skillful reading across forms.",
    explanation: "Strong Part B prep builds flexible reading skills for literary, visual, and informational texts."
  }
];

const englishPatPartBLiteraryPool = englishPatPartBPool.filter((item) => [
  "In a reading passage, what does it mean to identify an explicit detail?",
  "What does it mean to make an inference while reading?",
  "Which question best checks a reader's understanding of setting?",
  "When a speaker begins with a casual line like a real conversation, what is that most likely helping to create?",
  "If a character starts a conversation by asking a question, the writer is often showing that the character is",
  "What is slang in a text?",
  "Why might an author use a dash in a sentence or poem?",
  "If a final line makes the reader smile at a character's reaction, the effect is most likely",
  "If a poem mainly entertains the reader with a relatable situation, its primary purpose is most likely to",
  "When a text begins with announcements, rushing, or time pressure, what feeling is often created?",
  "If a character is imagining something frightening and then suddenly reacts, that reaction often shows the character was",
  "When a writer uses context to help the reader understand an unfamiliar word, the reader should",
  "If a character says a machine 'eats money,' the reader should understand that the machine is",
  "What does a long hallway described as 'endless' most likely show?",
  "When a question asks for the best conclusion about a character's point of view, the student should"
].includes(item.prompt));

const englishPatPartBVisualPool = [
  ...englishPatPartBPool.filter((item) => [
    "When a word is printed in bold in a cartoon panel, it often signals",
    "Which device is shown when a character says something wildly overstated, like defeating many opponents at once?",
    "If a character talks bravely about one challenge but complains about a much smaller one, the author may be creating",
    "Which reading skill is being used when a student notices how bold print, a dash, or a cartoon frame affects meaning?",
    "If a reader is asked why an author chose a particular form, such as poem, cartoon, or job posting, the reader should think most about"
  ].includes(item.prompt)),
  {
    prompt: "In a comic strip, why might an artist draw motion lines behind a running character?",
    correct: "To show speed and movement",
    distractors: ["To show the character is invisible", "To show the character is asleep", "To label the setting"],
    hint: "Motion lines help a still image suggest action.",
    explanation: "Motion lines are a visual device cartoonists use to suggest speed or movement."
  },
  {
    prompt: "Why might a cartoonist draw a character with an oversized speech bubble and tiny text?",
    correct: "To suggest the character is speaking quietly or hesitantly despite having a lot to say",
    distractors: ["To show the character is shouting", "To show the panel is empty", "To replace the caption"],
    hint: "Bubble size and text size can both carry meaning.",
    explanation: "Cartoonists use bubble and text size together to hint at tone, volume, or hesitation."
  },
  {
    prompt: "What is the purpose of a caption placed beneath an image in an informational text?",
    correct: "To explain what the image shows and connect it to the main text",
    distractors: ["To decorate the page only", "To replace the need for a title", "To hide the image's meaning"],
    hint: "Captions usually clarify what a reader is looking at.",
    explanation: "A caption gives context or explanation for an image so the reader understands its relevance."
  },
  {
    prompt: "In a chart or diagram, what should a reader check first to understand what is being measured?",
    correct: "The title and labels",
    distractors: ["The background color", "The font style", "The page number"],
    hint: "Titles and labels tell you what the visual is about.",
    explanation: "Titles and axis or section labels tell the reader exactly what data or ideas the visual represents."
  },
  {
    prompt: "Why might a graphic novel panel show a close-up of a character's face instead of the whole scene?",
    correct: "To emphasize the character's emotion or reaction",
    distractors: ["To hide the setting forever", "To end the story", "To show a different character"],
    hint: "Close-ups draw attention to feeling.",
    explanation: "A close-up panel focuses the reader's attention on a character's expression or emotional reaction."
  }
];

const englishPatPartBInformationalPool = englishPatPartBPool.filter((item) => [
  "In an informational job posting, where would a reader usually look to find education requirements?",
  "Why is blueprint reading important in a trades-related informational text?",
  "Which reading skill is being used when a student combines several details to decide the author's main message?",
  "Which reading skill is being used when a student figures out a word from surrounding clues?",
  "Which reading skill is being used when a student identifies a detail that is clearly stated in a text?",
  "Which choice best shows the reader is synthesizing a main purpose?",
  "If a text includes both explicit facts and clues that suggest feelings, a strong reader should",
  "Why do released-item style PAT Part B questions often ask about purpose, point of view, and effect?",
  "Which strategy is best when two answer choices seem possible on a reading question?",
  "What is the best description of Part B PAT prep?"
].includes(item.prompt));

const englishPatGrade6PartBPool = [
  {
    prompt: "When a question asks for a stated detail in a reading passage, what should you look for first?",
    correct: "Information that is directly written in the text",
    distractors: [
      "A guess that is never suggested by the passage",
      "Your favorite memory about the topic",
      "Only the title, without the passage"
    ],
    hint: "A stated detail is clearly given by the author.",
    explanation: "A stated detail comes straight from the passage and does not need to be invented by the reader."
  },
  {
    prompt: "If characters keep looking over their shoulders and rushing, the author is most likely creating a feeling of",
    correct: "urgency",
    distractors: ["boredom", "celebration", "comfort"],
    hint: "Think about how rushed and watchful actions affect the mood.",
    explanation: "Rushing and watching for danger create a strong sense of urgency."
  },
  {
    prompt: "When a word like 'camprobbers' appears in a story, the best strategy is to",
    correct: "use context clues around the word to figure out its meaning",
    distractors: [
      "skip the word and stop thinking about it",
      "assume it means the opposite of the sentence",
      "replace it with any word you like"
    ],
    hint: "Nearby lines often tell what an unfamiliar word probably means.",
    explanation: "Context clues help readers infer the meaning of unfamiliar words."
  },
  {
    prompt: "If the main problem in a story is that the characters must protect food and stay safe from danger, the conflict is most likely about",
    correct: "survival",
    distractors: ["winning a game", "telling a joke", "planning a party"],
    hint: "Look at what is threatening the characters' safety.",
    explanation: "When characters face danger, food problems, and risk in the wild, survival is the central conflict."
  },
  {
    prompt: "Why might a writer use a colon in a sentence?",
    correct: "To introduce an explanation or list that follows",
    distractors: [
      "To replace every comma in a paragraph",
      "To show that a sentence has ended completely",
      "To make a word sound louder"
    ],
    hint: "A colon often points forward to something important that comes next.",
    explanation: "A colon is often used before an explanation, list, or example."
  },
  {
    prompt: "What is a cliche?",
    correct: "An overused expression that people say without much fresh thought",
    distractors: [
      "A brand-new word invented by a poet",
      "A heading in a newspaper article",
      "A rhyme that has no meaning"
    ],
    hint: "A cliche is a familiar saying people hear often.",
    explanation: "A cliche is an overused expression that may feel less accurate or original."
  },
  {
    prompt: "Why might a poet print some lines in italics?",
    correct: "To make those words stand out from the rest of the poem",
    distractors: [
      "To show that the poem is unfinished",
      "To hide the meaning from the reader",
      "To prove the poem is a story instead"
    ],
    hint: "Different print style can create emphasis.",
    explanation: "Italics often help separate or emphasize important words or phrases."
  },
  {
    prompt: "The phrase 'soft as lamb's wool' is an example of",
    correct: "a simile",
    distractors: ["a command", "a heading", "a fact chart"],
    hint: "A simile compares using 'as' or 'like'.",
    explanation: "Because it compares two things using 'as,' it is a simile."
  },
  {
    prompt: "According to a poem about cliches, why do people often use cliches?",
    correct: "Because they do not take time to search for fresher, more exact words",
    distractors: [
      "Because cliches are always the most accurate expressions",
      "Because every good poem must include them",
      "Because they are scientific terms"
    ],
    hint: "Think about the poem's message about lazy word choice.",
    explanation: "The poem suggests that cliches are often used when people do not make the effort to choose better wording."
  },
  {
    prompt: "If a passage explains how chocolate is made and then gives steps to make it yourself, the article is written most like",
    correct: "a report and a recipe",
    distractors: [
      "a play and a speech",
      "an advertisement and a poem",
      "a joke and a diary"
    ],
    hint: "One part gives information, and another part gives instructions.",
    explanation: "The passage combines informative reporting with recipe-style directions."
  },
  {
    prompt: "When a text asks, 'Which do you prefer?' after two versions of a recipe, it is encouraging the reader to",
    correct: "compare results and form an opinion",
    distractors: [
      "throw the recipe away",
      "ignore the experiment",
      "memorize only one ingredient"
    ],
    hint: "The question asks the reader to judge the two versions.",
    explanation: "The reader is being asked to compare outcomes and decide which version is preferred."
  },
  {
    prompt: "In a recipe or science activity, the word 'proportions' usually refers to",
    correct: "the amounts of ingredients used",
    distractors: [
      "the names of ingredients",
      "the color of the bowl",
      "the brand of the stove"
    ],
    hint: "Think about how much of each ingredient is included.",
    explanation: "Proportions are the relative amounts of ingredients or parts."
  },
  {
    prompt: "If a passage mainly explains facts and steps, its main purpose is usually to",
    correct: "present information",
    distractors: ["frighten the reader", "tell a joke only", "hide the topic"],
    hint: "Purpose asks why the passage was written.",
    explanation: "When a text mainly explains a topic or process, its purpose is to inform."
  },
  {
    prompt: "When bold print is used inside a cartoon speech bubble, it usually shows",
    correct: "emphasis on part of what is being said",
    distractors: [
      "that the words are silent",
      "that the speaker is invisible",
      "that the sentence should be skipped"
    ],
    hint: "Bold text changes how the reader hears the line.",
    explanation: "Bold print helps the reader hear stress or stronger feeling on a word."
  },
  {
    prompt: "If a character says something much bigger than reality for comic effect, that is",
    correct: "exaggeration",
    distractors: ["a map legend", "a caption", "a table of contents"],
    hint: "This is when something is overstated on purpose.",
    explanation: "Exaggeration makes something seem larger or stronger than it really is."
  },
  {
    prompt: "Why might two characters exchange a knowing look in a cartoon?",
    correct: "Because they both understand something without saying it aloud",
    distractors: [
      "Because they forgot where they are",
      "Because the cartoon has ended",
      "Because they are reading a sign together"
    ],
    hint: "A shared look often shows silent agreement or understanding.",
    explanation: "Characters often exchange a look when they silently share the same thought."
  },
  {
    prompt: "If a character asks a clever question that exposes a problem in someone else's idea, that character may be described as",
    correct: "clever",
    distractors: ["asleep", "invisible", "helpless"],
    hint: "Think about how the question shows quick thinking.",
    explanation: "A sharp or revealing question can show that a character is clever."
  },
  {
    prompt: "The phrase 'hangdogging' in a climbing story most likely suggests someone is",
    correct: "hanging and struggling without making much progress",
    distractors: [
      "laughing loudly at the top",
      "walking quickly across flat ground",
      "teaching someone else from below"
    ],
    hint: "Use the climbing situation to infer the meaning.",
    explanation: "In the context of climbing, it suggests dangling and struggling rather than moving upward well."
  },
  {
    prompt: "If a paragraph explains that climbing needs both technique and confidence, the main idea is that climbing is",
    correct: "both a physical and mental challenge",
    distractors: [
      "only about having strong arms",
      "easy once equipment is bought",
      "meant only for adults"
    ],
    hint: "Look at the different kinds of challenge the paragraph mentions.",
    explanation: "The paragraph shows that climbing requires body control, technique, and mental strength."
  },
  {
    prompt: "Calling a cliff 'a vertical puzzle' is an example of",
    correct: "metaphor",
    distractors: ["recipe", "command", "title page"],
    hint: "A metaphor says one thing is another to show a comparison.",
    explanation: "The cliff is compared to a puzzle without using 'like' or 'as,' making it a metaphor."
  },
  {
    prompt: "If a climber goes from discouragement to success by the end of a passage, the best description of the attitude change is",
    correct: "frustrated to victorious",
    distractors: [
      "curious to sleepy",
      "angry to invisible",
      "proud to confused"
    ],
    hint: "Look at how the character feels at the beginning and at the end.",
    explanation: "The climber begins discouraged and ends in triumph, so the attitude shifts from frustration to victory."
  },
  {
    prompt: "If one sister keeps criticizing another sister's habits, the poem is most likely showing",
    correct: "a difference of opinion between the sisters",
    distractors: [
      "a science experiment going wrong",
      "a shopping trip with no conflict",
      "a mystery about a missing pet"
    ],
    hint: "The sisters do not see things the same way.",
    explanation: "Their disagreement shows a difference in attitudes and opinions."
  },
  {
    prompt: "When a mother looks someone in the eye, she usually wants that person to",
    correct: "think seriously and listen carefully",
    distractors: [
      "run away quickly",
      "draw a picture",
      "change the subject"
    ],
    hint: "This gesture often shows seriousness.",
    explanation: "Looking someone in the eye often signals that the speaker wants honest attention and reflection."
  },
  {
    prompt: "If insects in a poem are used to compare family members, the insects are representing the characters'",
    correct: "attitudes",
    distractors: ["shoe sizes", "ages only", "exact jobs"],
    hint: "Think about what the comparisons reveal about personality.",
    explanation: "The insect comparisons reflect how the characters behave and seem to one another."
  },
  {
    prompt: "If a mammoth is called the first 'complete' one found, that means it was",
    correct: "more fully preserved than earlier discoveries",
    distractors: [
      "smaller than all others",
      "made of stone",
      "found by only one scientist"
    ],
    hint: "Complete refers to how much of it remained intact.",
    explanation: "It was considered special because more of its body was still preserved."
  },
  {
    prompt: "Why did explorers first become interested in the mammoth site?",
    correct: "They learned the rest of the mammoth was still buried in the ice",
    distractors: [
      "They found a finished museum nearby",
      "They wanted to build a ski hill",
      "They were searching for dinosaur eggs"
    ],
    hint: "Think about what new information made recovery important.",
    explanation: "The discovery that much more of the mammoth remained in the ice led to the recovery effort."
  },
  {
    prompt: "The comparison 'as hard as cement' is an example of",
    correct: "simile",
    distractors: ["hyperlink", "headline", "diagram"],
    hint: "A simile often uses 'as' or 'like'.",
    explanation: "The phrase compares the ground to cement using 'as,' so it is a simile."
  },
  {
    prompt: "If bugs and plants are found in a mammoth's hair, scientists can use that evidence to learn more about",
    correct: "how woolly mammoths lived",
    distractors: [
      "the mammoth's favorite song",
      "what language the herders spoke",
      "the color of the helicopter seats"
    ],
    hint: "Small clues can reveal the mammoth's environment and life.",
    explanation: "Those clues can help scientists understand the mammoth's surroundings and way of life."
  },
  {
    prompt: "Which strategy is best when two multiple-choice reading answers both sound possible?",
    correct: "Go back to the text and choose the answer best supported by evidence",
    distractors: [
      "Always choose the longest answer",
      "Pick the first answer that sounds nice",
      "Choose the answer with the hardest word"
    ],
    hint: "Evidence from the text should guide the final choice.",
    explanation: "The strongest reading answer is the one clearly supported by the selection."
  },
  {
    prompt: "What best describes Grade 6 PAT Part B prep?",
    correct: "Reading closely, finding evidence, understanding word choice, and explaining meaning across different text types",
    distractors: [
      "Memorizing one answer pattern for every story",
      "Ignoring cartoons and poems because only articles matter",
      "Guessing quickly without returning to the text"
    ],
    hint: "Part B uses different forms like stories, poems, cartoons, and articles.",
    explanation: "Good PAT prep builds flexible reading skills across many kinds of texts."
  }
];

const englishPatGrade6PartBStoryPool = [
  ...englishPatGrade6PartBPool.filter((item) => [
    "When a question asks for a stated detail in a reading passage, what should you look for first?",
    "If characters keep looking over their shoulders and rushing, the author is most likely creating a feeling of",
    "When a word like 'camprobbers' appears in a story, the best strategy is to",
    "If the main problem in a story is that the characters must protect food and stay safe from danger, the conflict is most likely about",
    "The phrase 'hangdogging' in a climbing story most likely suggests someone is",
    "If a paragraph explains that climbing needs both technique and confidence, the main idea is that climbing is",
    "Calling a cliff 'a vertical puzzle' is an example of",
    "If a climber goes from discouragement to success by the end of a passage, the best description of the attitude change is"
  ].includes(item.prompt)),
  {
    prompt: "If a character double-checks a locked door three times before leaving, the author is most likely showing that the character feels",
    correct: "anxious or worried about safety",
    distractors: ["bored", "proud", "sleepy"],
    hint: "Repeated careful actions often reveal a character's inner feelings.",
    explanation: "Repeating a cautious action like checking a lock signals worry or anxiety to the reader."
  },
  {
    prompt: "If a story's dialogue is mostly short, clipped sentences during an argument, this style most likely helps show",
    correct: "tension between the characters",
    distractors: ["a calm and relaxed mood", "a funny misunderstanding", "a long friendship history"],
    hint: "Sentence length and pacing can reflect emotional tone.",
    explanation: "Short, clipped dialogue often reflects tension, urgency, or conflict between characters."
  },
  {
    prompt: "If a character shares her last snack with a hungry friend during a long hike, this action mostly shows that she is",
    correct: "kind and generous",
    distractors: ["careless", "impatient", "confused"],
    hint: "Think about what sharing food when supplies are low reveals about a character.",
    explanation: "Sharing scarce food with a friend is a clear sign of kindness and generosity."
  },
  {
    prompt: "If the weather in a story suddenly turns dark and windy right before the characters get lost, this detail most likely helps build",
    correct: "a sense of tension or danger",
    distractors: ["a cheerful mood", "a funny moment", "a peaceful ending"],
    hint: "Weather is often used to reflect or build the mood of a scene.",
    explanation: "A sudden change to dark, windy weather typically signals rising tension or danger in a story."
  },
  {
    prompt: "When a character repeats the same worry to themselves several times in a story, the author is most likely showing",
    correct: "that the character cannot stop thinking about that worry",
    distractors: ["that the character has forgotten the problem", "that the story has ended", "that the character is very relaxed"],
    hint: "Repeated thoughts often reveal what is bothering a character most.",
    explanation: "Repeating a worry shows it is weighing heavily on the character's mind."
  },
  {
    prompt: "If a character finally admits a mistake after blaming others for most of the story, this change best shows",
    correct: "personal growth or honesty",
    distractors: ["that the story is unfinished", "that the character forgot what happened", "that another character caused the change"],
    hint: "Admitting a mistake after avoiding it is often a sign of character growth.",
    explanation: "Owning up to a mistake after avoiding responsibility shows the character has grown more honest."
  },
  {
    prompt: "If a story ends with the main character helping someone who once helped them, this ending most likely emphasizes",
    correct: "the theme of returning kindness",
    distractors: ["a random unrelated event", "a confusing plot twist", "the end of the character's memory"],
    hint: "Think about the message an ending built around helping others sends.",
    explanation: "An ending where kindness is returned usually reinforces a theme about generosity coming full circle."
  }
];

const englishPatGrade6PartBPoetryPool = [
  ...englishPatGrade6PartBPool.filter((item) => [
    "What is a cliche?",
    "Why might a poet print some lines in italics?",
    "The phrase 'soft as lamb's wool' is an example of",
    "According to a poem about cliches, why do people often use cliches?",
    "If one sister keeps criticizing another sister's habits, the poem is most likely showing",
    "When a mother looks someone in the eye, she usually wants that person to",
    "If insects in a poem are used to compare family members, the insects are representing the characters'"
  ].includes(item.prompt)),
  {
    prompt: "Why might a poet repeat the same line at the start of every stanza?",
    correct: "To build rhythm and emphasize an important idea",
    distractors: ["To fill space on the page", "To confuse the reader", "To show the poem is unfinished"],
    hint: "Repetition often draws attention to something important.",
    explanation: "Repeated lines create rhythm and stress the poem's central idea or feeling."
  },
  {
    prompt: "If a poem compares waiting for spring to waiting for a letter, this comparison is mainly used to show",
    correct: "how long and hopeful the wait feels",
    distractors: ["how cold the weather is", "how many letters were sent", "how fast spring arrives"],
    hint: "Think about what both kinds of waiting have in common.",
    explanation: "Comparing two kinds of waiting emphasizes the feeling of anticipation and hope."
  },
  {
    prompt: "Why might a poet leave blank space between short lines instead of writing in full sentences?",
    correct: "To slow the reader down and give each idea more weight",
    distractors: ["To save paper only", "To confuse the reader on purpose", "To show the poem is unfinished"],
    hint: "Line breaks and spacing can control the pace of reading.",
    explanation: "Short lines with space slow the reader and make each phrase feel more important."
  },
  {
    prompt: "If a poem uses the same rhyme sound at the end of every other line, this pattern is called",
    correct: "a rhyme scheme",
    distractors: ["a metaphor", "a caption", "a cliche"],
    hint: "This is the pattern of matching end sounds in a poem.",
    explanation: "A regular pattern of end rhymes is called a rhyme scheme."
  },
  {
    prompt: "If a poem describes autumn leaves as 'dancing' in the wind, this is an example of",
    correct: "personification",
    distractors: ["a caption", "a heading", "a fact chart"],
    hint: "Giving human actions to non-human things is a specific poetic device.",
    explanation: "Describing leaves as 'dancing' gives them a human action, which is personification."
  }
];

const englishPatGrade6PartBVisualPool = [
  ...englishPatGrade6PartBPool.filter((item) => [
    "When bold print is used inside a cartoon speech bubble, it usually shows",
    "If a character says something much bigger than reality for comic effect, that is",
    "Why might two characters exchange a knowing look in a cartoon?",
    "If a character asks a clever question that exposes a problem in someone else's idea, that character may be described as"
  ].includes(item.prompt)),
  {
    prompt: "In a comic panel, why might an artist draw jagged lines around a loud sound?",
    correct: "To show that the sound is sudden and startling",
    distractors: ["To show the sound is quiet", "To show the panel is empty", "To label the setting"],
    hint: "Jagged shapes often suggest sharp or sudden noise.",
    explanation: "Jagged lines around a sound effect are a visual way to show something loud or sudden."
  },
  {
    prompt: "Why might a cartoonist draw a character sweating with wide eyes?",
    correct: "To show the character feels nervous or worried",
    distractors: ["To show the character is relaxed", "To show the character is asleep", "To show the story has ended"],
    hint: "Facial details and small drawn effects often show feelings.",
    explanation: "Sweat drops and wide eyes are common cartoon symbols for nervousness or worry."
  },
  {
    prompt: "What is the purpose of a caption under a photo in an informational text?",
    correct: "To explain what the photo shows and connect it to the main text",
    distractors: ["To decorate the page only", "To replace the title", "To hide the photo's meaning"],
    hint: "Captions usually clarify what a reader is looking at.",
    explanation: "A caption gives context or explanation for an image so the reader understands its relevance."
  },
  {
    prompt: "In a diagram, what should a reader check first to understand what is being shown?",
    correct: "The title and labels",
    distractors: ["The background color", "The font style", "The page number"],
    hint: "Titles and labels tell you what the visual is about.",
    explanation: "Titles and labels tell the reader exactly what the diagram represents."
  },
  {
    prompt: "Why might a graphic story panel zoom in close on a character's face?",
    correct: "To emphasize the character's emotion or reaction",
    distractors: ["To hide the setting forever", "To end the story", "To show a different character"],
    hint: "Close-ups draw attention to feeling.",
    explanation: "A close-up panel focuses the reader's attention on a character's expression or emotional reaction."
  },
  {
    prompt: "Why might an illustrator use darker colors in the background of one panel and bright colors in the next?",
    correct: "To show a change in mood or tone between the two moments",
    distractors: ["To use up spare paint", "To confuse the reader on purpose", "To show the story restarting"],
    hint: "Color choices can reflect the feeling of a scene.",
    explanation: "A shift from dark to bright colors often signals a change in mood between panels."
  },
  {
    prompt: "In an instructional diagram with numbered steps, what should a reader do first?",
    correct: "Follow the steps in the order they are numbered",
    distractors: ["Start with the last numbered step", "Ignore the numbers", "Read only the picture"],
    hint: "Numbered steps are meant to be followed in sequence.",
    explanation: "Numbered steps guide the reader through a process in the correct order."
  },
  {
    prompt: "Why might an infographic use icons instead of full sentences to share information?",
    correct: "To let readers grasp key ideas quickly at a glance",
    distractors: ["To make the information harder to find", "To replace the need for any data", "To hide the main topic"],
    hint: "Icons are a quick visual shorthand for ideas.",
    explanation: "Icons let readers understand key points quickly without reading long sentences."
  }
];

const englishPatGrade6PartBInformationalPool = englishPatGrade6PartBPool.filter((item) => [
  "If a passage explains how chocolate is made and then gives steps to make it yourself, the article is written most like",
  "When a text asks, 'Which do you prefer?' after two versions of a recipe, it is encouraging the reader to",
  "In a recipe or science activity, the word 'proportions' usually refers to",
  "If a passage mainly explains facts and steps, its main purpose is usually to",
  "If a mammoth is called the first 'complete' one found, that means it was",
  "Why did explorers first become interested in the mammoth site?",
  "The comparison 'as hard as cement' is an example of",
  "If bugs and plants are found in a mammoth's hair, scientists can use that evidence to learn more about",
  "Which strategy is best when two multiple-choice reading answers both sound possible?",
  "What best describes Grade 6 PAT Part B prep?"
].includes(item.prompt));

const probabilityMasteryGenerators = {
  basics: [
    (rng, difficulty, index) => {
      const favorable = number(1, difficulty <= 4 ? 4 : 9, rng);
      const total = favorable + number(1, difficulty <= 4 ? 5 : 12, rng);
      const correct = fractionString(favorable, total, true);
      return makeProbabilityQuestion({
        prompt: `A bag has ${favorable} winning tickets and ${total - favorable} non-winning tickets. What is the probability of drawing a winning ticket?`,
        correct,
        distractors: [
          fractionString(total - favorable, total, true),
          fractionString(favorable, total - favorable, true),
          fractionString(favorable + 1, total, true)
        ],
        hint: "Probability = favourable outcomes over total possible outcomes.",
        steps: [
          `Count the favourable outcomes. There are ${favorable} winning tickets.`,
          `Count all possible outcomes. There are ${total} tickets altogether.`,
          `Write the probability as ${favorable}/${total}.`,
          `Simplify if possible. The simplified probability is ${correct}.`
        ],
        diagram: plainListDiagram("Tickets in the bag", [`Winning: ${favorable}`, `Not winning: ${total - favorable}`, `Total: ${total}`])
      });
    },
    (rng) => {
      const outcomes = pick([
        { label: "certain", correct: "1 or 100%" },
        { label: "impossible", correct: "0 or 0%" },
        { label: "equally likely as unlikely", correct: "1/2 or 50%" }
      ], rng);
      return makeProbabilityQuestion({
        prompt: `Which statement correctly describes the probability of a ${outcomes.label} event?`,
        correct: outcomes.correct,
        distractors: ["0 or 0%", "1/2 or 50%", "1/4 or 25%", "1 or 100%", "3/4 or 75%"].filter((item) => item !== outcomes.correct).slice(0, 3),
        hint: "A certain event always happens. An impossible event never happens. A 50/50 event is equally likely to happen or not.",
        steps: outcomes.label === "certain"
          ? [
              "A certain event always happens.",
              "That means the number of favourable outcomes equals the total number of outcomes.",
              "So the probability is 1, which is the same as 100%."
            ]
          : outcomes.label === "impossible"
            ? [
                "An impossible event cannot happen.",
                "That means there are 0 favourable outcomes.",
                "So the probability is 0, which is the same as 0%."
              ]
            : [
                "An event that is equally likely as unlikely has an equal chance of happening or not.",
                "That means half of the outcomes are favourable.",
                "So the probability is 1/2, which is the same as 50%."
              ]
      });
    },
    (rng) => {
      const scenario = pick([
        { event: "rolling a number less than 7 on a standard die", correct: "1 or 100%", type: "certain" },
        { event: "rolling a 7 on a standard six-sided die", correct: "0 or 0%", type: "impossible" },
        { event: "picking a red card from a full deck of playing cards", correct: "1/2 or 50%", type: "half" },
        { event: "the sun rising tomorrow", correct: "1 or 100%", type: "certain" },
        { event: "flipping a coin and it landing on neither heads nor tails", correct: "0 or 0%", type: "impossible" }
      ], rng);
      return makeProbabilityQuestion({
        prompt: `What is the probability of ${scenario.event}?`,
        correct: scenario.correct,
        distractors: ["0 or 0%", "1/2 or 50%", "1/4 or 25%", "1 or 100%", "3/4 or 75%"].filter((item) => item !== scenario.correct).slice(0, 3),
        hint: "Think about whether the event always happens, never happens, or happens about half the time.",
        steps: [
          `Consider the event: ${scenario.event}.`,
          scenario.type === "certain" ? "This event always happens." : scenario.type === "impossible" ? "This event can never happen." : "This event happens about half of the time.",
          `So the probability is ${scenario.correct}.`
        ]
      });
    },
    (rng, difficulty) => {
      const sections = difficulty <= 5 ? 6 : 8;
      const targets = ["A", "B", "C", "D"];
      const target = pick(targets, rng);
      const count = number(1, Math.max(1, Math.floor(sections / 2)), rng);
      const labels = Array.from({ length: sections }, (_, idx) => idx < count ? target : pick(targets.filter((item) => item !== target), rng));
      const correct = fractionString(count, sections, true);
      return makeProbabilityQuestion({
        prompt: `A spinner has ${sections} equal sections labelled ${labels.join(", ")}. What is P(${target})?`,
        correct,
        distractors: [
          fractionString(sections - count, sections, true),
          fractionString(count, sections - 1, true),
          fractionString(count + 1, sections, true)
        ],
        hint: "Count how many sections match the target, then divide by the total number of equal sections.",
        steps: [
          `Count the sections labelled ${target}. There are ${count}.`,
          `Count the total equal sections. There are ${sections}.`,
          `Write the probability as ${count}/${sections}.`,
          `Simplify if possible. The answer is ${correct}.`
        ],
        diagram: plainListDiagram("Spinner sections", labels)
      });
    },
    (rng) => {
      const heads = number(6, 18, rng);
      const total = 20;
      const correct = percentString(heads, total);
      return makeProbabilityQuestion({
        prompt: `A coin is flipped 20 times and lands on heads ${heads} times. What is the experimental probability of heads as a percent?`,
        correct,
        distractors: [
          percentString(total - heads, total),
          percentString(heads, 10),
          percentString(heads + 1, total)
        ],
        hint: "Experimental probability uses the results that actually happened.",
        steps: [
          `Use the experimental results: heads happened ${heads} times out of ${total} flips.`,
          `Write the fraction as ${heads}/${total}.`,
          `Convert ${heads}/${total} to a decimal: ${decimalString(heads, total)}.`,
          `Convert the decimal to a percent: ${correct}.`
        ]
      });
    },
    (rng) => {
      const promptType = pick(["quarter", "dimeOrQuarter", "notLoonie"], rng);
      const coins = ["25¢", "5¢", "25¢", "$1", "10¢", "10¢", "25¢", "25¢"];
      const counts = {
        quarter: 4,
        dimeOrQuarter: 6,
        notLoonie: 7
      };
      const labels = {
        quarter: "What is P(quarter)?",
        dimeOrQuarter: "What is P(dime or quarter)?",
        notLoonie: "What is the probability that the loonie is not picked?"
      };
      const favorable = counts[promptType];
      const correct = fractionString(favorable, 8, true);
      return makeProbabilityQuestion({
        prompt: `A student has these coins in a pocket: ${coins.join(", ")}. ${labels[promptType]}`,
        correct,
        distractors: [
          fractionString(8 - favorable, 8, true),
          fractionString(favorable, 7, true),
          fractionString(favorable + 1, 8, true)
        ],
        hint: "Count the matching coins first, then divide by the total number of coins.",
        steps: [
          `Count the total number of coins. There are 8 coins.`,
          `Count the favourable outcomes for this question. There are ${favorable}.`,
          `Write the probability as ${favorable}/8.`,
          `Simplify if possible. The answer is ${correct}.`
        ],
        diagram: plainListDiagram("Coins in the pocket", coins)
      });
    },
    (rng) => {
      const primes = [2, 3, 5, 7, 11];
      const event = pick(["multiple of 3", "prime number"], rng);
      const favorable = event === "multiple of 3" ? 4 : primes.length;
      const correct = fractionString(favorable, 12, true);
      return makeProbabilityQuestion({
        prompt: `A 12-sided die is labelled 1 to 12. In a mastery question like the worksheet example, what is the probability of rolling a ${event}?`,
        correct,
        distractors: [
          fractionString(12 - favorable, 12, true),
          fractionString(favorable, 11, true),
          fractionString(favorable + 1, 12, true)
        ],
        hint: "List the outcomes that match the event, then divide by 12.",
        steps: event === "multiple of 3"
          ? [
              "Multiples of 3 from 1 to 12 are 3, 6, 9, and 12.",
              "That gives 4 favourable outcomes.",
              "There are 12 possible outcomes on a 12-sided die.",
              `So the probability is 4/12, which simplifies to ${correct}.`
            ]
          : [
              `Prime numbers from 1 to 12 are ${primes.join(", ")}.`,
              `That gives ${favorable} favourable outcomes.`,
              "There are 12 possible outcomes on the die.",
              `So the probability is ${favorable}/12, which simplifies to ${correct}.`
            ]
      });
    }
  ],
  organize: [
    (rng) => {
      const moves = ["Sideways", "Backward", "Forward"];
      const dieFaces = [1, 2, 3, 4];
      const correct = moves.length * dieFaces.length;
      return makeProbabilityQuestion({
        prompt: "A game spinner has Sideways, Backward, and Forward, and then a 4-sided die is rolled. How many outcomes are in the sample space?",
        correct: String(correct),
        distractors: [String(moves.length + dieFaces.length), String(dieFaces.length), String(correct - 2)],
        hint: "Multiply the number of outcomes in the first event by the number of outcomes in the second event.",
        steps: [
          `The spinner has ${moves.length} possible outcomes.`,
          `The die has ${dieFaces.length} possible outcomes.`,
          `For every spinner result, there are ${dieFaces.length} die results.`,
          `So the sample space has ${moves.length} × ${dieFaces.length} = ${correct} outcomes.`
        ],
        diagram: sampleSpaceTableDiagram("Move", "Die", moves, dieFaces, (move, face) => `${move}-${face}`)
      });
    },
    (rng) => {
      const supplies = ["p", "e", "c", "r"];
      const coin = ["H", "T"];
      const sampleCount = supplies.length * coin.length;
      return makeProbabilityQuestion({
        prompt: "A coin is flipped and then one school supply is chosen: pencil (p), eraser (e), calculator (c), or ruler (r). How many outcomes are in the sample space?",
        correct: String(sampleCount),
        distractors: [String(supplies.length + coin.length), String(supplies.length), String(sampleCount + 2)],
        hint: "Count the outcomes for the first event and the second event, then multiply.",
        steps: [
          `The coin has ${coin.length} outcomes: H and T.`,
          `The school-supply choice has ${supplies.length} outcomes: p, e, c, and r.`,
          `Each coin result can be paired with each supply.`,
          `So the sample space has ${coin.length} × ${supplies.length} = ${sampleCount} outcomes.`
        ],
        diagram: sampleSpaceTableDiagram("Coin", "Supply", coin, supplies, (coinSide, supply) => `${coinSide}${supply}`)
      });
    },
    (rng) => {
      const colors = ["blue", "yellow", "red"];
      const numbers = [1, 2, 3, 4, 5];
      const event = pick([
        { label: "yellow", favorable: 5 },
        { label: "blue and 4", favorable: 1 },
        { label: "a 4", favorable: 3 },
        { label: "yellow and 3", favorable: 1 }
      ], rng);
      const total = colors.length * numbers.length;
      const correct = fractionString(event.favorable, total, true);
      return makeProbabilityQuestion({
        prompt: `Spinner 1 has blue, yellow, and red. Spinner 2 has 1, 2, 3, 4, and 5. What is the probability of landing on ${event.label}?`,
        correct,
        distractors: [
          fractionString(total - event.favorable, total, true),
          fractionString(event.favorable, numbers.length, true),
          fractionString(event.favorable + 1, total, true)
        ],
        hint: "Count how many ordered pairs match the event, then divide by all possible ordered pairs.",
        steps: [
          `There are ${colors.length} × ${numbers.length} = ${total} possible outcomes.`,
          `Count the favourable outcomes for '${event.label}'. There are ${event.favorable}.`,
          `Write the probability as ${event.favorable}/${total}.`,
          `Simplify if possible. The answer is ${correct}.`
        ],
        diagram: sampleSpaceTableDiagram("Color", "Number", colors, numbers, (color, numberValue) => `${color}-${numberValue}`)
      });
    },
    (rng) => {
      const first = ["1", "2", "3", "4"];
      const second = ["A", "B", "C", "D"];
      const correctCount = first.length * second.length;
      return makeProbabilityQuestion({
        prompt: "One spinner is labelled 1, 2, 3, 4 and another is labelled A, B, C, D. How many possible outcomes are there?",
        correct: String(correctCount),
        distractors: [String(first.length + second.length), String(first.length), String(correctCount - 4)],
        hint: "Every result on the first spinner pairs with every result on the second spinner.",
        steps: [
          `The number spinner has ${first.length} outcomes.`,
          `The letter spinner has ${second.length} outcomes.`,
          `Multiply to count all ordered pairs.`,
          `${first.length} × ${second.length} = ${correctCount}, so there are ${correctCount} outcomes.`
        ],
        diagram: sampleSpaceTableDiagram("Number", "Letter", first, second, (a, b) => `${a}${b}`)
      });
    },
    (rng) => {
      const breads = ["white", "whole wheat"];
      const fillings = ["tuna", "chicken", "ham"];
      const correct = breads.length * fillings.length;
      return makeProbabilityQuestion({
        prompt: "There are two kinds of bread, white and whole wheat, and three fillings: tuna, chicken, and ham. How many different sandwiches can you make?",
        correct: String(correct),
        distractors: [String(breads.length + fillings.length), String(fillings.length), String(correct + 1)],
        hint: "Each bread choice can be matched with each filling choice.",
        steps: [
          `There are ${breads.length} bread choices.`,
          `There are ${fillings.length} filling choices.`,
          `Multiply the choices to count all combinations.`,
          `${breads.length} × ${fillings.length} = ${correct}, so there are ${correct} sandwiches.`
        ],
        diagram: sampleSpaceTableDiagram("Bread", "Filling", breads, fillings, (bread, filling) => `${bread} + ${filling}`)
      });
    },
    (rng) => {
      const outcomes = ["On-On", "On-Off", "Off-On", "Off-Off"];
      return makeProbabilityQuestion({
        prompt: "Two light switches can each be On or Off. Which set is the complete sample space?",
        correct: "{On-On, On-Off, Off-On, Off-Off}",
        distractors: [
          "{On, Off}",
          "{On-On, Off-Off}",
          "{On, On-Off, Off}"
        ],
        hint: "The sample space must show every combined outcome for switch 1 and switch 2.",
        steps: [
          "Switch 1 can be On or Off.",
          "Switch 2 can also be On or Off.",
          "List every ordered pair of these outcomes.",
          `The complete sample space is {${outcomes.join(", ")}}.`
        ]
      });
    }
  ],
  independent: [
    (rng) => {
      const meals = ["pizza", "quesadilla", "salad"];
      const drinks = ["juice", "milk"];
      const total = meals.length * drinks.length;
      const correct = fractionString(1, total, true);
      return makeProbabilityQuestion({
        prompt: "A lunch menu offers pizza, a chicken wrap, or a garden salad, with either juice or milk. What is the probability of choosing a chicken wrap and milk?",
        correct,
        distractors: [fractionString(2, total, true), fractionString(1, meals.length, true), fractionString(1, drinks.length, true)],
        hint: "There is only one favourable meal-and-drink pair. Divide by all possible meal-and-drink pairs.",
        steps: [
          `There are ${meals.length} meal choices and ${drinks.length} drink choices.`,
          `So there are ${meals.length} × ${drinks.length} = ${total} total outcomes.`,
          "Only one outcome is 'chicken wrap and milk'.",
          `So the probability is 1/${total}, which is ${correct}.`
        ],
        diagram: sampleSpaceTableDiagram("Meal", "Drink", meals, drinks, (meal, drink) => `${meal} + ${drink}`)
      });
    },
    (rng) => {
      const homes = ["House", "Apartment", "Condominium"];
      const cities = ["Victoria", "Vancouver", "Brandon", "Winnipeg", "Edmonton", "Calgary", "Saskatoon", "Regina"];
      const total = homes.length * cities.length;
      const correct = fractionString(1, total, true);
      return makeProbabilityQuestion({
        prompt: "One spinner shows House, Apartment, Condominium. The other spinner shows eight cities. What is P(apartment, Victoria)?",
        correct,
        distractors: [fractionString(1, homes.length, true), fractionString(1, cities.length, true), fractionString(2, total, true)],
        hint: "One exact ordered pair is favorable. Divide by all possible ordered pairs.",
        steps: [
          `The first spinner has ${homes.length} outcomes.`,
          `The city spinner has ${cities.length} outcomes.`,
          `So there are ${homes.length} × ${cities.length} = ${total} ordered pairs.`,
          `Only one of those pairs is (apartment, Victoria), so the probability is 1/${total}.`
        ],
        diagram: sampleSpaceTableDiagram("Home", "City", homes, cities, (home, city) => `${home}, ${city}`)
      });
    },
    (rng) => {
      const drinks = ["juice", "water", "milk"];
      const snacks = ["apple", "orange", "carrots", "banana"];
      const total = drinks.length * snacks.length;
      const event = pick([
        { label: "include milk", favorable: snacks.length, text: "include milk" },
        { label: "include juice and an orange", favorable: 1, text: "include juice and an orange" }
      ], rng);
      const correct = fractionString(event.favorable, total, true);
      return makeProbabilityQuestion({
        prompt: `A student chooses one drink from juice, water, or milk and one snack from apple, orange, carrots, or banana. What is the probability that the choice will ${event.text}?`,
        correct,
        distractors: [
          fractionString(total - event.favorable, total, true),
          fractionString(event.favorable, snacks.length, true),
          fractionString(event.favorable + 1, total, true)
        ],
        hint: "Count the outcomes that satisfy the event, then divide by all drink-and-snack pairs.",
        steps: event.favorable === snacks.length
          ? [
              `There are ${drinks.length} × ${snacks.length} = ${total} total choices.`,
              `If the choice must include milk, milk can pair with each of the ${snacks.length} snacks.`,
              `So there are ${event.favorable} favourable outcomes.`,
              `The probability is ${event.favorable}/${total}, which simplifies to ${correct}.`
            ]
          : [
              `There are ${drinks.length} × ${snacks.length} = ${total} total choices.`,
              "Only one pair is 'juice and orange'.",
              `So there is ${event.favorable} favourable outcome.`,
              `The probability is ${event.favorable}/${total}, which simplifies to ${correct}.`
            ],
        diagram: sampleSpaceTableDiagram("Drink", "Snack", drinks, snacks, (drink, snack) => `${drink} + ${snack}`)
      });
    },
    (rng) => {
      const chores1 = ["Bathroom", "Dusting", "Vacuum"];
      const chores2 = ["Dishes", "Windows", "Garbage"];
      const total = chores1.length * chores2.length;
      const correct = fractionString(1, total, true);
      return makeProbabilityQuestion({
        prompt: "One spinner shows Bathroom, Dusting, Vacuum and another shows Dishes, Windows, Garbage. What is the probability of getting Dusting and Dishes?",
        correct,
        distractors: [fractionString(2, total, true), fractionString(1, chores1.length, true), fractionString(1, chores2.length, true)],
        hint: "Only one ordered pair is 'Dusting and Dishes'. Divide by the total number of ordered pairs.",
        steps: [
          `The first spinner has ${chores1.length} outcomes and the second has ${chores2.length}.`,
          `That gives ${chores1.length} × ${chores2.length} = ${total} total outcomes.`,
          "Only one outcome matches Dusting and Dishes.",
          `So the probability is 1/${total}, which is ${correct}.`
        ],
        diagram: sampleSpaceTableDiagram("Spinner 1", "Spinner 2", chores1, chores2, (a, b) => `${a} + ${b}`)
      });
    },
    (rng) => {
      const coin = ["H", "T"];
      const colors = ["purple", "yellow", "red"];
      const total = coin.length * colors.length;
      const event = pick(["Heads and red", "Tail and yellow", "a yellow"], rng);
      const favorable = event === "a yellow" ? coin.length : 1;
      const correct = fractionString(favorable, total, true);
      return makeProbabilityQuestion({
        prompt: `A coin is tossed and then one color is chosen from purple, yellow, and red. What is the probability of getting ${event}?`,
        correct,
        distractors: [
          fractionString(total - favorable, total, true),
          fractionString(favorable, colors.length, true),
          fractionString(favorable + 1, total, true)
        ],
        hint: "Build the sample space of all coin-color pairs first.",
        steps: [
          `The coin has ${coin.length} outcomes and the color choice has ${colors.length}.`,
          `So there are ${coin.length} × ${colors.length} = ${total} total outcomes.`,
          `The event '${event}' has ${favorable} favourable outcome${favorable === 1 ? "" : "s"}.`,
          `The probability is ${favorable}/${total}, which simplifies to ${correct}.`
        ],
        diagram: sampleSpaceTableDiagram("Coin", "Color", coin, colors, (a, b) => `${a}-${b}`)
      });
    },
    (rng) => {
      const statement = pick([
        { prompt: "Rolling a die and flipping a coin", correct: "independent" },
        { prompt: "Choosing one card and then not replacing it before choosing another", correct: "dependent" }
      ], rng);
      return makeProbabilityQuestion({
        prompt: `${statement.prompt} is an example of which kind of events?`,
        correct: statement.correct,
        distractors: statement.correct === "independent" ? ["dependent", "impossible", "certain"] : ["independent", "random", "sample space"],
        hint: "If one event changes the chances of the second event, the events are dependent.",
        steps: statement.correct === "independent"
          ? [
              "The outcome of the die does not change the coin.",
              "The outcome of the coin does not change the die.",
              "Because one event has no effect on the other, the events are independent."
            ]
          : [
              "After one card is taken and not replaced, fewer cards remain.",
              "That changes the probabilities for the second card.",
              "Because the first event changes the second, the events are dependent."
            ]
      });
    }
  ]
};

const questionFactories = {
  numberSense(rng, grade, config, index, difficulty) {
    const min = config.min;
    const max = lerpRange(config.min, config.max, difficulty);

    // Grade 6's number-sense category is specifically about factors, multiples, and rational
    // number foundations (see its category description) â€” the plain magnitude-comparison,
    // place-value, and sequence questions below are both far too simple for that grade and
    // don't match the topic at all, so grade 6+ gets its own set of modes instead.
    if (grade >= 6) {
      return buildFactorsAndMultiplesQuestion(rng, difficulty, index);
    }

    const mode = index % 4;

    if (mode === 0) {
      const a = number(min, max, rng);
      const b = number(min, max, rng);
      const correct = a > b ? ">" : "<";
      const { options, answerIndex } = buildOptions(correct, ["<", ">", "="].filter((item) => item !== correct), rng);
      return {
        prompt: `Which sign makes this true: ${a} __ ${b}?`,
        options,
        answerIndex,
        explanation: `${a} ${correct} ${b} because ${a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`}.`
      };
    }

    if (mode === 1) {
      const base = number(min, max, rng);
      const rounded = roundByGrade(base, grade);
      const { options, answerIndex } = buildOptions(rounded, [rounded + roundUnit(grade), Math.max(0, rounded - roundUnit(grade)), rounded + 2 * roundUnit(grade)], rng);
      return {
        prompt: `Round ${base} to the nearest ${roundLabel(grade)}.`,
        options,
        answerIndex,
        explanation: `${base} rounds to ${rounded} when rounded to the nearest ${roundLabel(grade)}.`
      };
    }

    if (mode === 2) {
      const value = number(min, max, rng);
      const place = placeValueQuestion(value, grade);
      const { options, answerIndex } = buildOptions(place.answer, place.distractors, rng);
      return {
        prompt: place.prompt,
        options,
        answerIndex,
        explanation: place.explanation
      };
    }

    const start = number(min, max - 3, rng);
    const sequence = [start, start + 1, start + 2, start + 3];
    const missingIndex = number(0, 3, rng);
    const correct = sequence[missingIndex];
    const visible = sequence.map((value, idx) => idx === missingIndex ? "__" : value).join(", ");
    const { options, answerIndex } = buildOptions(correct, [correct + 1, Math.max(0, correct - 1), correct + 2], rng);
    return {
      prompt: `Fill in the missing number: ${visible}`,
      options,
      answerIndex,
      explanation: `The numbers count in order, so the missing number is ${correct}.`
    };
  },

  additionSubtraction(rng, grade, config, index, difficulty) {
    const maxA = lerpRange(Math.max(5, Math.floor(config.maxA / 4)), config.maxA, difficulty);
    const maxB = lerpRange(Math.max(5, Math.floor(config.maxB / 4)), config.maxB, difficulty);
    const a = number(1, maxA, rng);
    const b = number(1, maxB, rng);
    const addMode = index % 2 === 0;
    const correct = addMode ? a + b : Math.max(a, b) - Math.min(a, b);
    const { options, answerIndex } = buildOptions(correct, [correct + 1, Math.max(0, correct - 1), correct + 2], rng);
    return {
      prompt: addMode ? `What is ${a} + ${b}?` : `What is ${Math.max(a, b)} - ${Math.min(a, b)}?`,
      options,
      answerIndex,
      explanation: addMode
        ? `${a} + ${b} = ${correct}.`
        : `${Math.max(a, b)} - ${Math.min(a, b)} = ${correct}.`
    };
  },

  multiplicationDivision(rng, grade, config, index, difficulty) {
    const maxFactor = lerpRange(4, config.max, difficulty);
    const a = number(2, maxFactor, rng);
    const b = number(2, maxFactor, rng);
    const multiply = index % 2 === 0;
    const product = a * b;
    const correct = multiply ? product : a;
    const { options, answerIndex } = buildOptions(correct, [correct + 1, Math.max(1, correct - 1), correct + 2], rng);
    return {
      prompt: multiply ? `What is ${a} x ${b}?` : `What is ${product} / ${b}?`,
      options,
      answerIndex,
      explanation: multiply ? `${a} groups of ${b} make ${product}.` : `${product} split into groups of ${b} gives ${a}.`
    };
  },

  fractionsDecimalsPercent(rng, grade, config, index, difficulty) {
    const stage = config.stage;

    if (stage === "grade7Fractions") {
      if (index % 3 === 0) {
        const grade7SubtractPool = [
          { a: [3, 4], b: [1, 8], total: [7, 8] },
          { a: [5, 6], b: [1, 3], total: [1, 2] },
          { a: [2, 5], b: [1, 10], total: [1, 2] },
          { a: [7, 8], b: [1, 4], total: [5, 8] },
          { a: [4, 5], b: [1, 3], total: [7, 15] },
          { a: [5, 6], b: [1, 4], total: [7, 12] },
          { a: [9, 10], b: [1, 5], total: [7, 10] }
        ];
        const pair = grade7SubtractPool[Math.floor(index / 3) % grade7SubtractPool.length];
        const correct = `${pair.total[0]}/${pair.total[1]}`;
        const { options, answerIndex } = buildOptions(correct, [
          `${pair.total[1]}/${pair.total[0]}`,
          `${pair.total[0] + 1}/${pair.total[1]}`,
          `${Math.max(1, pair.total[0] - 1)}/${pair.total[1]}`
        ], rng);
        return {
          prompt: `What is ${pair.a[0]}/${pair.a[1]} - ${pair.b[0]}/${pair.b[1]}?`,
          options,
          answerIndex,
          explanation: `Use a common denominator, subtract, and simplify. The result is ${correct}.`
        };
      }

      if (index % 3 === 1) {
        const grade7ToDecimalPool = [
          { fraction: "3/5", decimal: "0.6" },
          { fraction: "7/10", decimal: "0.7" },
          { fraction: "5/8", decimal: "0.625" },
          { fraction: "9/20", decimal: "0.45" },
          { fraction: "3/8", decimal: "0.375" },
          { fraction: "7/8", decimal: "0.875" },
          { fraction: "11/20", decimal: "0.55" }
        ];
        const selected = grade7ToDecimalPool[Math.floor(index / 3) % grade7ToDecimalPool.length];
        const { options, answerIndex } = buildOptions(selected.decimal, ["0.5", "0.75", "0.8", "0.25", "0.6"].filter((item) => item !== selected.decimal).slice(0, 3), rng);
        return {
          prompt: `Write ${selected.fraction} as a decimal.`,
          options,
          answerIndex,
          explanation: `${selected.fraction} is equal to ${selected.decimal}.`
        };
      }

      const firstPool = [
        [1, 2],
        [2, 3],
        [3, 4],
        [5, 8],
        [3, 5],
        [7, 8]
      ];
      const secondPool = [
        [3, 5],
        [4, 5],
        [7, 10],
        [9, 20],
        [5, 6],
        [1, 3]
      ];
      const occurrence = Math.floor(index / 3);
      const first = firstPool[occurrence % firstPool.length];
      const second = secondPool[(occurrence + 2) % secondPool.length];
      const firstValue = first[0] / first[1];
      const secondValue = second[0] / second[1];
      const correct = firstValue > secondValue ? `${first[0]}/${first[1]}` : `${second[0]}/${second[1]}`;
      const { options, answerIndex } = buildOptions(correct, [
        `${first[0]}/${first[1]}`,
        `${second[0]}/${second[1]}`,
        "They are equal"
      ].filter((item, optionIndex, array) => array.indexOf(item) === optionIndex && item !== correct), rng);
      return {
        prompt: `Which fraction is greater: ${first[0]}/${first[1]} or ${second[0]}/${second[1]}?`,
        options,
        answerIndex,
        explanation: `Compare the values or rename them with common denominators. The greater fraction is ${correct}.`
      };
    }

    if (stage === "grade7Decimals") {
      if (index % 3 === 0) {
        const decimalsSubtractPool = [
          [2.45, 1.8],
          [5.07, 2.39],
          [3.6, 0.78],
          [9.25, 4.17],
          [6.32, 2.85],
          [7.4, 1.66],
          [8.05, 3.29]
        ];
        const values = decimalsSubtractPool[Math.floor(index / 3) % decimalsSubtractPool.length];
        const correct = formatDecimalAnswer(values[0] - values[1], 2, 1);
        const { options, answerIndex } = buildOptions(correct, [
          formatDecimalAnswer(values[0] + values[1], 2, 1),
          formatDecimalAnswer(values[1] - values[0], 2, 1),
          formatDecimalAnswer(Number(correct) + 1, 2, 1)
        ], rng);
        return {
          prompt: `What is ${values[0]} - ${values[1]}?`,
          options,
          answerIndex,
          explanation: `Line up the decimal points and subtract carefully. The answer is ${correct}.`
        };
      }

      if (index % 3 === 1) {
        const decimalToFractionPool = [
          { fraction: "1/4", decimal: "0.25" },
          { fraction: "3/4", decimal: "0.75" },
          { fraction: "1/8", decimal: "0.125" },
          { fraction: "7/10", decimal: "0.7" },
          { fraction: "3/8", decimal: "0.375" },
          { fraction: "9/10", decimal: "0.9" },
          { fraction: "1/5", decimal: "0.2" }
        ];
        const selected = decimalToFractionPool[Math.floor(index / 3) % decimalToFractionPool.length];
        const { options, answerIndex } = buildOptions(selected.fraction, ["1/2", "2/5", "5/8", "3/5", "7/8"].filter((item) => item !== selected.fraction).slice(0, 3), rng);
        return {
          prompt: `Write ${selected.decimal} as a fraction in simplest form.`,
          options,
          answerIndex,
          explanation: `${selected.decimal} is the same as ${selected.fraction}.`
        };
      }

      const values = shuffle([
        number(11, 98, rng) / 10,
        number(11, 98, rng) / 10,
        number(11, 98, rng) / 10,
        number(11, 98, rng) / 10
      ], rng).map((value) => Number(value.toFixed(1)));
      const sorted = [...values].sort((a, b) => a - b);
      const correct = formatDecimalAnswer(sorted[1] + sorted[2], 1, 1);
      const distractors = [
        formatDecimalAnswer(sorted[0] + sorted[3], 1, 1),
        formatDecimalAnswer(sorted[2] - sorted[1], 1, 1),
        formatDecimalAnswer(sorted[3] - sorted[0], 1, 1)
      ];
      const { options, answerIndex } = buildOptions(correct, distractors, rng);
      return {
        prompt: `What is ${formatDecimalAnswer(sorted[1], 1, 1)} + ${formatDecimalAnswer(sorted[2], 1, 1)}?`,
        options,
        answerIndex,
        explanation: `Line up the decimal points and add ${formatDecimalAnswer(sorted[1], 1, 1)} + ${formatDecimalAnswer(sorted[2], 1, 1)} to get ${correct}.`
      };
    }

    if (stage === "grade7Percents") {
      if (index % 3 === 0) {
        const percent = pick([10, 15, 20, 25, 30, 40, 50, 75], rng);
        const whole = pick([40, 60, 80, 100, 120, 200], rng);
        const correct = Math.round((percent / 100) * whole);
        const { options, answerIndex } = buildOptions(correct, [correct + 5, Math.max(1, correct - 5), whole - correct], rng);
        return {
          prompt: `What is ${percent}% of ${whole}?`,
          options,
          answerIndex,
          explanation: `${percent}% means ${percent}/100. Multiply ${whole} by ${percent / 100} to get ${correct}.`
        };
      }

      if (index % 3 === 1) {
        const percent = pick([5, 12, 18, 25, 40, 62, 75], rng);
        const correct = formatDecimalAnswer(percent / 100, 2, 1);
        const { options, answerIndex } = buildOptions(correct, [
          formatDecimalAnswer(percent / 10, 2, 1),
          formatDecimalAnswer(Math.max(0, (percent / 100) - 0.1), 2, 1),
          `${percent}/10`
        ], rng);
        return {
          prompt: `Convert ${percent}% to a decimal.`,
          options,
          answerIndex,
          explanation: `Percent means out of 100, so move the decimal two places left. ${percent}% = ${correct}.`
        };
      }

      const original = pick([20, 40, 60, 80, 120], rng);
      const discount = pick([10, 15, 20, 25, 30], rng);
      const correct = original - ((discount / 100) * original);
      const { options, answerIndex } = buildOptions(correct, [original + correct, original - discount, correct + 10], rng);
      return {
        prompt: `A $${original} item is discounted by ${discount}%. What is the sale price?`,
        options: options.map((value) => `$${Number(value).toFixed(2).replace(/\.00$/, "")}`),
        answerIndex,
        explanation: `Find ${discount}% of $${original}, then subtract it from the original price. The sale price is $${Number(correct).toFixed(2).replace(/\.00$/, "")}.`
      };
    }

    if (stage === "basicFractions") {
      const denominatorSets = [
        [2, 3, 4, 5, 6],
        [2, 3, 4, 5, 6, 8, 9, 10],
        [2, 3, 4, 5, 6, 8, 9, 10, 12, 15]
      ];
      const denominator = pick(denominatorSets[Math.min(2, Math.floor(((difficulty - 1) * 3) / LEVEL_COUNT))], rng);
      const numerator = number(1, denominator - 1, rng);
      const correct = `${numerator}/${denominator}`;
      const { options, answerIndex } = buildOptions(correct, [
        `${numerator + 1}/${denominator}`,
        `${numerator}/${denominator + 1}`,
        `${Math.max(1, numerator - 1)}/${denominator}`
      ], rng);

      if (index % 3 === 1) {
        const unshaded = denominator - numerator;
        const unshadedCorrect = `${unshaded}/${denominator}`;
        const { options: unshadedOptions, answerIndex: unshadedAnswerIndex } = buildOptions(unshadedCorrect, [
          `${Math.max(1, unshaded - 1)}/${denominator}`,
          `${unshaded}/${denominator + 1}`,
          correct
        ], rng);
        return {
          prompt: `A shape is split into ${denominator} equal parts and ${numerator} are shaded. What fraction of the shape is NOT shaded?`,
          options: unshadedOptions,
          answerIndex: unshadedAnswerIndex,
          explanation: `If ${numerator} of ${denominator} parts are shaded, then ${denominator} - ${numerator} = ${unshaded} parts are not shaded, written as ${unshadedCorrect}.`
        };
      }

      if (index % 3 === 2) {
        const compareCorrect = numerator === denominator - numerator ? "They are equal" : numerator > denominator - numerator ? "More parts are shaded" : "Fewer parts are shaded";
        const { options: compareOptions, answerIndex: compareAnswerIndex } = buildOptions(compareCorrect, ["More parts are shaded", "Fewer parts are shaded", "They are equal"].filter((item) => item !== compareCorrect), rng);
        return {
          prompt: `A shape has ${denominator} equal parts with ${numerator} shaded. Compared to the unshaded parts, are more, fewer, or an equal number of parts shaded?`,
          options: compareOptions,
          answerIndex: compareAnswerIndex,
          explanation: `${numerator} parts are shaded out of ${denominator}, and ${denominator - numerator} are not, so: ${compareCorrect}.`
        };
      }

      return {
        prompt: `Which fraction names ${numerator} shaded part(s) out of ${denominator} equal parts?`,
        options,
        answerIndex,
        explanation: `${numerator} of ${denominator} equal parts is written as ${correct}.`
      };
    }

    if (stage === "fractionDecimalBridge") {
      if (index % 2 === 1) {
        const decimalOptions = [
          { decimal: "0.5", fraction: "1/2" },
          { decimal: "0.25", fraction: "1/4" },
          { decimal: "0.75", fraction: "3/4" },
          { decimal: "0.2", fraction: "1/5" },
          { decimal: "0.4", fraction: "2/5" },
          { decimal: "0.8", fraction: "4/5" },
          { decimal: "0.125", fraction: "1/8" },
          { decimal: "0.6", fraction: "3/5" },
          { decimal: "0.1", fraction: "1/10" },
          { decimal: "0.3", fraction: "3/10" },
          { decimal: "0.9", fraction: "9/10" },
          { decimal: "0.375", fraction: "3/8" },
          { decimal: "0.625", fraction: "5/8" },
          { decimal: "0.875", fraction: "7/8" },
          { decimal: "0.35", fraction: "7/20" }
        ];
        const selected = decimalOptions[Math.floor(index / 2) % decimalOptions.length];
        const { options, answerIndex } = buildOptions(selected.fraction, decimalOptions.filter((item) => item.fraction !== selected.fraction).slice(0, 3).map((item) => item.fraction), rng);
        return {
          prompt: `Write ${selected.decimal} as a fraction in simplest form.`,
          options,
          answerIndex,
          explanation: `${selected.decimal} means ${selected.fraction} in simplest form.`
        };
      }

      const conversionPool = difficulty >= 4
        ? [
            { fraction: "3/4", decimal: "0.75" },
            { fraction: "1/8", decimal: "0.125" },
            { fraction: "5/8", decimal: "0.625" },
            { fraction: "7/10", decimal: "0.7" },
            { fraction: "9/20", decimal: "0.45" },
            { fraction: "7/8", decimal: "0.875" },
            { fraction: "3/8", decimal: "0.375" },
            { fraction: "11/20", decimal: "0.55" },
            { fraction: "3/20", decimal: "0.15" },
            { fraction: "9/10", decimal: "0.9" }
          ]
        : [
            { fraction: "1/2", decimal: "0.5" },
            { fraction: "1/4", decimal: "0.25" },
            { fraction: "3/4", decimal: "0.75" },
            { fraction: "1/5", decimal: "0.2" },
            { fraction: "2/5", decimal: "0.4" },
            { fraction: "4/5", decimal: "0.8" },
            { fraction: "1/10", decimal: "0.1" },
            { fraction: "3/10", decimal: "0.3" },
            { fraction: "9/10", decimal: "0.9" },
            { fraction: "3/5", decimal: "0.6" }
          ];
      const selected = conversionPool[Math.floor(index / 2) % conversionPool.length];
      const { options, answerIndex } = buildOptions(selected.decimal, conversionPool.filter((item) => item.decimal !== selected.decimal).slice(0, 3).map((item) => item.decimal), rng);
      return {
        prompt: `What decimal is equal to ${selected.fraction}?`,
        options,
        answerIndex,
        explanation: `${selected.fraction} is equal to ${selected.decimal} as a decimal.`
      };
    }

    if (stage === "upperElementary" || stage === "middleSchoolStart") {
      if (difficulty <= 2) {
        if (index % 2 === 0) {
          const denominator = pick([2, 4, 5, 8, 10], rng);
          const firstNumerator = number(1, denominator - 1, rng);
          const secondNumerator = number(1, denominator - firstNumerator, rng);
          const sum = firstNumerator + secondNumerator;
          const correct = fractionResultString(sum, denominator);
          const distractors = [
            fractionResultString(Math.max(1, sum - 1), denominator),
            `${Math.min(denominator, sum + 1)}/${denominator}`,
            `${denominator + 1}/${Math.max(1, sum)}`
          ];
          const { options, answerIndex } = buildOptions(correct, distractors, rng);
          return {
            prompt: `What is ${firstNumerator}/${denominator} + ${secondNumerator}/${denominator}?`,
            options,
            answerIndex,
            explanation: `Add the numerators because the denominators are the same: ${firstNumerator} + ${secondNumerator} = ${sum}. That gives ${sum}/${denominator}, which simplifies to ${correct}.`
          };
        }

        const basicConversionPool = [
          { fraction: "1/2", decimal: "0.5" },
          { fraction: "1/4", decimal: "0.25" },
          { fraction: "3/4", decimal: "0.75" },
          { fraction: "1/5", decimal: "0.2" },
          { fraction: "2/5", decimal: "0.4" },
          { fraction: "4/5", decimal: "0.8" },
          { fraction: "3/5", decimal: "0.6" },
          { fraction: "1/10", decimal: "0.1" },
          { fraction: "3/10", decimal: "0.3" },
          { fraction: "9/10", decimal: "0.9" }
        ];
        const selected = basicConversionPool[Math.floor(index / 2) % basicConversionPool.length];
        const { options, answerIndex } = buildOptions(selected.decimal, basicConversionPool.filter((item) => item.decimal !== selected.decimal).slice(0, 3).map((item) => item.decimal), rng);
        return {
          prompt: `What decimal is equal to ${selected.fraction}?`,
          options,
          answerIndex,
          explanation: `${selected.fraction} is equal to ${selected.decimal} as a decimal.`
        };
      }

      if (difficulty <= 4) {
        if (index % 3 === 0) {
          const addPairPool = [
            { a: [1, 2], b: [1, 4], total: [3, 4] },
            { a: [1, 3], b: [1, 6], total: [1, 2] },
            { a: [2, 5], b: [1, 10], total: [1, 2] },
            { a: [3, 4], b: [1, 8], total: [7, 8] },
            { a: [1, 4], b: [1, 2], total: [3, 4] },
            { a: [1, 6], b: [1, 3], total: [1, 2] },
            { a: [1, 5], b: [3, 10], total: [1, 2] },
            { a: [1, 3], b: [1, 4], total: [7, 12] }
          ];
          const pair = addPairPool[Math.floor(index / 3) % addPairPool.length];
          const correct = `${pair.total[0]}/${pair.total[1]}`;
          const { options, answerIndex } = buildOptions(correct, [
            `${pair.a[0] + pair.b[0]}/${pair.a[1]}`,
            `${pair.total[0] + 1}/${pair.total[1]}`,
            `${pair.total[1]}/${pair.total[0]}`
          ], rng);
          return {
            prompt: `What is ${pair.a[0]}/${pair.a[1]} + ${pair.b[0]}/${pair.b[1]}?`,
            options,
            answerIndex,
            explanation: `Rename the fractions with a common denominator, then add. The total is ${correct}.`
          };
        }

        if (index % 3 === 1) {
          const subtractPairPool = [
            { a: [3, 4], b: [1, 2], total: [1, 4] },
            { a: [5, 6], b: [1, 3], total: [1, 2] },
            { a: [7, 8], b: [1, 4], total: [5, 8] },
            { a: [9, 10], b: [2, 5], total: [1, 2] },
            { a: [5, 6], b: [1, 2], total: [1, 3] },
            { a: [3, 4], b: [1, 3], total: [5, 12] },
            { a: [7, 10], b: [1, 5], total: [1, 2] },
            { a: [11, 12], b: [1, 4], total: [2, 3] }
          ];
          const pair = subtractPairPool[Math.floor(index / 3) % subtractPairPool.length];
          const correct = `${pair.total[0]}/${pair.total[1]}`;
          const { options, answerIndex } = buildOptions(correct, [
            `${pair.a[0] - pair.b[0]}/${pair.a[1]}`,
            `${pair.total[0] + 1}/${pair.total[1]}`,
            `${pair.total[1]}/${pair.total[0]}`
          ], rng);
          return {
            prompt: `What is ${pair.a[0]}/${pair.a[1]} - ${pair.b[0]}/${pair.b[1]}?`,
            options,
            answerIndex,
            explanation: `Rename the fractions with a common denominator, then subtract. The difference is ${correct}.`
          };
        }

        const conversionPool = [
          { fraction: "1/8", decimal: "0.125" },
          { fraction: "3/5", decimal: "0.6" },
          { fraction: "5/8", decimal: "0.625" },
          { fraction: "7/10", decimal: "0.7" },
          { fraction: "9/20", decimal: "0.45" },
          { fraction: "3/8", decimal: "0.375" },
          { fraction: "7/8", decimal: "0.875" },
          { fraction: "11/20", decimal: "0.55" }
        ];
        const selected = conversionPool[Math.floor(index / 3) % conversionPool.length];
        const { options, answerIndex } = buildOptions(selected.decimal, conversionPool.filter((item) => item.decimal !== selected.decimal).slice(0, 3).map((item) => item.decimal), rng);
        return {
          prompt: `What decimal is equal to ${selected.fraction}?`,
          options,
          answerIndex,
          explanation: `${selected.fraction} is equal to ${selected.decimal} as a decimal.`
        };
      }

      if (index % 3 === 0) {
        const hundredthsPool = [
          [0.35, 0.27],
          [0.48, 0.16],
          [0.62, 0.19],
          [0.75, 0.08],
          [0.42, 0.33],
          [0.56, 0.29],
          [0.18, 0.67]
        ];
        const hundredths = hundredthsPool[Math.floor(index / 3) % hundredthsPool.length];
        const total = formatDecimalAnswer(hundredths[0] + hundredths[1], 2, 1);
        const { options, answerIndex } = buildOptions(total, [
          formatDecimalAnswer(hundredths[0] - hundredths[1], 2, 1),
          formatDecimalAnswer(hundredths[0] + hundredths[1] + 0.1, 2, 1),
          formatDecimalAnswer(hundredths[0] + hundredths[1] - 0.1, 2, 1)
        ], rng);
        return {
          prompt: `What is ${hundredths[0]} + ${hundredths[1]}?`,
          options,
          answerIndex,
          explanation: `Line up the decimal points and add: ${hundredths[0]} + ${hundredths[1]} = ${total}.`
        };
      }

      if (index % 3 === 1) {
        const complexSubtractPool = [
          { a: [5, 6], b: [1, 4], total: [7, 12] },
          { a: [7, 8], b: [1, 3], total: [13, 24] },
          { a: [3, 5], b: [1, 4], total: [7, 20] },
          { a: [11, 12], b: [1, 6], total: [3, 4] },
          { a: [4, 5], b: [1, 3], total: [7, 15] },
          { a: [5, 8], b: [1, 6], total: [11, 24] },
          { a: [9, 10], b: [1, 4], total: [13, 20] }
        ];
        const pair = complexSubtractPool[Math.floor(index / 3) % complexSubtractPool.length];
        const correct = `${pair.total[0]}/${pair.total[1]}`;
        const { options, answerIndex } = buildOptions(correct, [
          `${pair.total[0] + 1}/${pair.total[1]}`,
          `${pair.total[1]}/${pair.total[0]}`,
          `${Math.max(1, pair.total[0] - 1)}/${pair.total[1]}`
        ], rng);
        return {
          prompt: `What is ${pair.a[0]}/${pair.a[1]} - ${pair.b[0]}/${pair.b[1]}?`,
          options,
          answerIndex,
          explanation: `Use a common denominator and simplify. The answer is ${correct}.`
        };
      }

      const percentPool = difficulty <= 4 ? [5, 10, 20, 25, 40, 50, 75] : [5, 12, 15, 18, 20, 25, 40, 62, 75, 85];
      const percent = percentPool[Math.floor(index / 3) % percentPool.length];
      const correct = percent / 100;
      const { options, answerIndex } = buildOptions(formatDecimalAnswer(correct, 2, 1), [
        formatDecimalAnswer(correct + 0.1, 2, 1),
        formatDecimalAnswer(Math.max(0, correct - 0.1), 2, 1),
        formatDecimalAnswer(correct * 10, 2, 1)
      ], rng);
      return {
        prompt: `Convert ${percent}% to a decimal.`,
        options,
        answerIndex,
        explanation: `${percent}% means ${percent}/100, so the decimal is ${formatDecimalAnswer(correct, 2, 1)}.`
      };
    }

    const denominator = pick(difficulty <= 3 ? [2, 4, 5, 10] : [2, 4, 5, 8, 10, 20], rng);
    const numerator = number(1, denominator - 1, rng);
    const correct = formatDecimalAnswer(numerator / denominator, 2, 1);
    const { options, answerIndex } = buildOptions(correct, [
      formatDecimalAnswer(Math.min(0.99, numerator / denominator + 0.1), 2, 1),
      formatDecimalAnswer(Math.max(0, numerator / denominator - 0.1), 2, 1),
      `${numerator}${denominator}`
    ], rng);
    return {
      prompt: `Write ${numerator}/${denominator} as a decimal.`,
      options,
      answerIndex,
      explanation: `${numerator} / ${denominator} = ${correct}.`
    };
  },

  measurement(rng, grade, config, index, difficulty) {
    const level = config.level;

    if (level <= 2 && index % 2 === 0 && difficulty <= 3) {
      const hour = number(1, 12, rng);
      const minute = pick([0, 15, 30, 45], rng);
      const display = `${hour}:${String(minute).padStart(2, "0")}`;
      const phrases = {
        0: `${hour} o'clock`,
        15: `quarter past ${hour}`,
        30: `half past ${hour}`,
        45: `quarter to ${hour === 12 ? 1 : hour + 1}`
      };
      const correct = phrases[minute];
      const distractors = Object.values(phrases).filter((value) => value !== correct).slice(0, 3);
      const { options, answerIndex } = buildOptions(correct, distractors, rng);
      return {
        prompt: `How would you say the time ${display}?`,
        options,
        answerIndex,
        explanation: `${display} is read as ${correct}.`
      };
    }

    if (level >= 4 && index % 3 === 0) {
      const length = number(3, difficultyStep(5, difficulty, 40), rng);
      const width = number(2, difficultyStep(4, difficulty, 28), rng);
      const correct = length * width;
      const { options, answerIndex } = buildOptions(correct, [length + width, 2 * (length + width), correct + width], rng);
      return {
        prompt: `A rectangle has length ${length} cm and width ${width} cm. What is its area?`,
        options: options.map((option) => `${option} cm^2`),
        answerIndex,
        explanation: `Area = length x width = ${length} x ${width} = ${correct} cm^2.`
      };
    }

    const first = number(grade * difficulty, grade * difficultyStep(4, difficulty, 80) + 10, rng);
    const second = number(grade, grade * difficultyStep(3, difficulty, 60) + 5, rng);
    const larger = Math.max(first, second);
    const smaller = Math.min(first, second);
    const correct = larger - smaller;
    const { options, answerIndex } = buildOptions(correct, [
      correct + 1,
      correct + 2,
      Math.max(1, correct - 1)
    ], rng);
    return {
      prompt: `One ribbon is ${unitLabel(larger)} long and another is ${unitLabel(smaller)} long. How many units longer is the longer ribbon?`,
      options: options.map((value) => unitLabel(value)),
      answerIndex,
      explanation: `Subtract the smaller measurement from the larger one: ${larger} - ${smaller} = ${unitLabel(correct)}.`
    };
  },

  geometry(rng, grade, config, index, difficulty) {
    const level = config.level;

    if (config.skill === "grade7GeometryMeasurement") {
      if (index % 3 === 0) {
        const base = number(4, difficultyStep(6, difficulty, 22), rng);
        const height = number(3, difficultyStep(5, difficulty, 18), rng);
        const correct = (base * height) / 2;
        const { options, answerIndex } = buildOptions(correct, [base * height, base + height, correct + base], rng);
        return {
          prompt: `A triangle has base ${base} cm and height ${height} cm. What is its area?`,
          options: options.map((value) => `${value} cm^2`),
          answerIndex,
          explanation: `Area of a triangle = (base x height) / 2 = (${base} x ${height}) / 2 = ${correct} cm^2.`
        };
      }

      if (index % 3 === 1) {
        const length = number(4, difficultyStep(6, difficulty, 26), rng);
        const width = number(3, difficultyStep(5, difficulty, 18), rng);
        const correct = 2 * (length + width);
        const { options, answerIndex } = buildOptions(correct, [length * width, length + width, correct + 4], rng);
        return {
          prompt: `What is the perimeter of a rectangle with length ${length} cm and width ${width} cm?`,
          options: options.map((value) => `${value} cm`),
          answerIndex,
          explanation: `Perimeter = 2(length + width) = 2(${length} + ${width}) = ${correct} cm.`
        };
      }

      const shape = pick([
        { shape: "a square", order: "4" },
        { shape: "a rectangle", order: "2" },
        { shape: "an equilateral triangle", order: "3" },
        { shape: "a regular hexagon", order: "6" }
      ], rng);
      const { options, answerIndex } = buildOptions(shape.order, ["1", "2", "3", "4", "6"].filter((value) => value !== shape.order), rng);
      return {
        prompt: `What is the order of rotational symmetry for ${shape.shape}?`,
        options,
        answerIndex,
        explanation: `${shape.shape.charAt(0).toUpperCase() + shape.shape.slice(1)} matches itself ${shape.order} times during one full turn.`
      };
    }

    if (config.skill === "grade7Circles") {
      if (index % 3 === 0) {
        const radius = number(2, difficultyStep(9, difficulty, 14), rng);
        const correct = radius * 2;
        const { options, answerIndex } = buildOptions(correct, [radius, correct + 2, correct - 2], rng);
        return {
          prompt: `A circle has radius ${radius} cm. What is its diameter?`,
          options: options.map((value) => `${value} cm`),
          answerIndex,
          explanation: `The diameter is twice the radius, so 2 x ${radius} = ${correct} cm.`
        };
      }

      if (index % 3 === 1) {
        const diameterPool = [6, 7, 10, 12, 14, 16, 20, 21, 28];
        const diameter = diameterPool[Math.floor(index / 3) % diameterPool.length];
        const correct = `${diameter}\u03c0`;
        const { options, answerIndex } = buildOptions(correct, [`${diameter / 2}\u03c0`, `${diameter * 2}\u03c0`, `${diameter + 3}\u03c0`], rng);
        return {
          prompt: `Using C = \u03c0d, what is the circumference of a circle with diameter ${diameter} cm?`,
          options: options.map((value) => `${value} cm`),
          answerIndex,
          explanation: `Substitute the diameter into C = \u03c0d. So C = \u03c0 x ${diameter} = ${correct} cm.`
        };
      }

      const radiusPool = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      const radius = radiusPool[Math.floor(index / 3) % radiusPool.length];
      const correct = `${radius * radius}\u03c0`;
      const { options, answerIndex } = buildOptions(correct, [`${radius * 2}\u03c0`, `${radius + radius}\u03c0`, `${(radius * radius) + radius}\u03c0`], rng);
      return {
        prompt: `Using A = \u03c0r^2, what is the area of a circle with radius ${radius} cm?`,
        options: options.map((value) => `${value} cm^2`),
        answerIndex,
        explanation: `Substitute the radius into A = \u03c0r^2. So A = \u03c0 x ${radius}^2 = ${correct} cm^2.`
      };
    }

    if (level <= 2 && difficulty <= 3) {
      const shapes = [
        { name: "triangle", fact: "3 sides" },
        { name: "square", fact: "4 equal sides" },
        { name: "rectangle", fact: "4 sides" },
        { name: "circle", fact: "no corners" },
        { name: "pentagon", fact: "5 sides" },
        { name: "hexagon", fact: "6 sides" },
        { name: "octagon", fact: "8 sides" },
        { name: "cube", fact: "6 flat faces" },
        { name: "sphere", fact: "no flat faces" },
        { name: "cylinder", fact: "2 flat circle faces" },
        { name: "cone", fact: "1 flat circle face and 1 point" },
        { name: "diamond (rhombus)", fact: "4 equal slanted sides" },
        { name: "heptagon", fact: "7 sides" },
        { name: "trapezoid", fact: "4 sides with one pair parallel" },
        { name: "oval", fact: "a rounded, stretched circle shape" },
        { name: "star", fact: "points sticking out in a pattern" },
        { name: "prism", fact: "flat faces on all sides" },
        { name: "pyramid", fact: "a flat base and triangle sides meeting at a point" }
      ];

      if (index % 2 === 0) {
        const shape = shapes[Math.floor(index / 2) % shapes.length];
        const { options, answerIndex } = buildOptions(shape.fact, shapes.filter((item) => item.fact !== shape.fact).slice(0, 3).map((item) => item.fact), rng);
        return {
          prompt: `Which fact describes a ${shape.name}?`,
          options,
          answerIndex,
          explanation: `A ${shape.name} has ${shape.fact}.`
        };
      }

      const shape = shapes[Math.floor(index / 2) % shapes.length];
      const { options, answerIndex } = buildOptions(shape.name, shapes.filter((item) => item.name !== shape.name).slice(0, 3).map((item) => item.name), rng);
      return {
        prompt: `Which shape has ${shape.fact}?`,
        options,
        answerIndex,
        explanation: `A ${shape.name} is the shape that has ${shape.fact}.`
      };
    }

    if (level >= 4 && index % 5 === 2) {
      const symmetrySetPool = [
        { shape: "an equilateral triangle", order: "3" },
        { shape: "a square", order: "4" },
        { shape: "a rectangle", order: "2" },
        { shape: "a regular pentagon", order: "5" },
        { shape: "a regular hexagon", order: "6" }
      ];
      const symmetrySet = symmetrySetPool[Math.floor(index / 5) % symmetrySetPool.length];
      const correct = symmetrySet.order;
      const distractors = ["1", "2", "3", "4", "5", "6"].filter((value) => value !== correct).slice(0, 3);
      const { options, answerIndex } = buildOptions(correct, distractors, rng);
      return {
        prompt: `What is the order of rotational symmetry for ${symmetrySet.shape}?`,
        options,
        answerIndex,
        explanation: `${symmetrySet.shape.charAt(0).toUpperCase() + symmetrySet.shape.slice(1)} matches itself ${correct} times in one full turn, so its rotational symmetry order is ${correct}.`
      };
    }

    if (level >= 8 && index % 2 === 0) {
      const a = number(3, difficultyStep(9, difficulty, 26), rng);
      const b = number(4, difficultyStep(11, difficulty, 32), rng);
      const exact = Math.sqrt((a * a) + (b * b));
      const correct = (Math.round(exact * 10) / 10).toFixed(1);
      const { options, answerIndex } = buildOptions(correct, [
        (Math.round((a + b) * 10) / 10).toFixed(1),
        (Math.round(Math.abs(a - b) * 10) / 10).toFixed(1),
        (Math.round((exact + 2) * 10) / 10).toFixed(1)
      ], rng);
      return {
        prompt: `A right triangle has legs ${a} and ${b}. Which is closest to the hypotenuse length?`,
        options,
        answerIndex,
        explanation: `Step 1: Use the Pythagorean theorem, c^2 = ${a}^2 + ${b}^2.<br>Step 2: Compute ${a * a} + ${b * b} = ${(a * a) + (b * b)}.<br>Step 3: Take the square root: c â‰ˆ ${correct}.`,
        diagram: triangleDiagram(a, b)
      };
    }

    if (level >= 9 && index % 4 === 1) {
      const l = number(4, difficultyStep(9, difficulty, 26), rng);
      const w = number(3, difficultyStep(8, difficulty, 20), rng);
      const h = number(2, difficultyStep(6, difficulty, 16), rng);
      const correct = 2 * ((l * w) + (l * h) + (w * h));
      const { options, answerIndex } = buildOptions(correct, [correct + (l * w), correct - (w * h), correct + 2 * h], rng);
      return {
        prompt: `Find the surface area of this rectangular prism.`,
        options: options.map((option) => `${option} cm^2`),
        answerIndex,
        explanation: `Surface area = 2(lw + lh + wh) = 2(${l * w} + ${l * h} + ${w * h}) = ${correct} cm^2.`,
        diagram: prismDiagram(l, w, h)
      };
    }

    if (level >= 5 && index % 3 === 0) {
      const side = number(2, difficultyStep(9, difficulty, 26), rng);
      const correct = side * side * side;
      const { options, answerIndex } = buildOptions(correct, [side * side, 6 * side * side, correct + side], rng);
      return {
        prompt: `What is the volume of a cube with side length ${side} cm?`,
        options: options.map((option) => `${option} cm^3`),
        answerIndex,
        explanation: `Volume of a cube is side^3, so ${side}^3 = ${correct} cm^3.`,
        diagram: cubeDiagram(side)
      };
    }

    const anglePool = difficulty <= 3 ? [20, 30, 45, 60, 75, 90, 105, 120] : [10, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165];

    if (index % 3 === 1) {
      const occurrence = Math.floor(index / 3);
      const first = anglePool[occurrence % anglePool.length];
      const second = anglePool.filter((value) => value !== first)[occurrence % (anglePool.length - 1)];
      const correct = first > second ? `${first} degrees` : `${second} degrees`;
      const { options, answerIndex } = buildOptions(correct, [
        first > second ? `${second} degrees` : `${first} degrees`,
        "They are equal",
        `${Math.max(first, second) + 15} degrees`
      ], rng);
      return {
        prompt: `Which angle is larger: ${first} degrees or ${second} degrees?`,
        options,
        answerIndex,
        explanation: `Compare the two measures directly. ${correct} is the larger angle.`
      };
    }

    if (index % 3 === 2) {
      const angleTypePool = ["acute angle", "right angle", "obtuse angle", "straight angle", "reflex angle"];
      const angleType = angleTypePool[Math.floor(index / 3) % angleTypePool.length];
      const correct = angleType === "reflex angle" ? "Between 180 and 360 degrees"
        : angleType === "acute angle" ? "Less than 90 degrees"
        : angleType === "right angle" ? "Exactly 90 degrees"
          : angleType === "obtuse angle" ? "Between 90 and 180 degrees"
            : "Exactly 180 degrees";
      const { options, answerIndex } = buildOptions(correct, ["Less than 90 degrees", "Exactly 90 degrees", "Between 90 and 180 degrees", "Exactly 180 degrees", "Between 180 and 360 degrees"].filter((item) => item !== correct).slice(0, 3), rng);
      return {
        prompt: `What is true about the measure of a(n) ${angleType}?`,
        options,
        answerIndex,
        explanation: `A(n) ${angleType} measures: ${correct}.`
      };
    }

    const angle = anglePool[Math.floor(index / 3) % anglePool.length];
    const correct = angle === 90 ? "right angle" : angle === 180 ? "straight angle" : angle < 90 ? "acute angle" : "obtuse angle";
    const { options, answerIndex } = buildOptions(correct, ["acute angle", "right angle", "obtuse angle", "straight angle"].filter((item) => item !== correct), rng);
    return {
      prompt: `What kind of angle is ${angle} degrees?`,
      options,
      answerIndex,
      explanation: `${angle} degrees is ${correct}.`,
      diagram: angleDiagram(angle)
    };
  },

  patternsData(rng, grade, config, index, difficulty) {
    const level = config.level;

    if (index % 2 === 0) {
      const start = number(1, difficultyStep(6, difficulty, 50), rng);
      const step = pick(difficulty <= 2 ? [2, 3, 4] : difficulty <= 4 ? [2, 3, 4, 5, 10] : [3, 4, 5, 6, 9, 10, 12], rng);
      const seq = [start, start + step, start + 2 * step, start + 3 * step];
      const correct = start + 4 * step;
      const { options, answerIndex } = buildOptions(correct, [correct + step, correct - step, correct + 2], rng);
      return {
        prompt: `What comes next in the pattern ${seq.join(", ")}?`,
        options,
        answerIndex,
        explanation: `The pattern adds ${step} each time, so the next number is ${correct}.`
      };
    }

    const maxValue = difficultyStep(5, difficulty, 32);
    const values = [number(2, maxValue, rng), number(2, maxValue, rng), number(2, maxValue, rng)];
    const correct = values.reduce((sum, value) => sum + value, 0);
    const { options, answerIndex } = buildOptions(correct, [correct + 2, Math.max(0, correct - 2), correct + 4], rng);
    return {
      prompt: level <= 3
        ? `A picture graph shows ${values[0]}, ${values[1]}, and ${values[2]} votes. How many votes altogether?`
        : `A data table shows ${values[0]}, ${values[1]}, and ${values[2]} results. What is the total?`,
      options,
      answerIndex,
      explanation: `Add the data values: ${values.join(" + ")} = ${correct}.`
    };
  },

  algebra(rng, grade, config, index, difficulty) {
    const level = config.level;

    if (config.skill === "grade7PatternsExpressions") {
      if (index % 3 === 0) {
        const start = number(2, 12, rng);
        const step = pick([2, 3, 4, 5], rng);
        const values = [start, start + step, start + (2 * step), start + (3 * step)];
        const correct = start + (4 * step);
        const { options, answerIndex } = buildOptions(correct, [correct + step, correct - step, start + (5 * step)], rng);
        return {
          prompt: `What comes next in the pattern ${values.join(", ")}?`,
          options,
          answerIndex,
          explanation: `The pattern increases by ${step} each time, so the next value is ${correct}.`
        };
      }

      if (index % 3 === 1) {
        const coefficient = number(2, 6, rng);
        const constant = number(1, 8, rng);
        const correct = `${coefficient}n + ${constant}`;
        const { options, answerIndex } = buildOptions(correct, [
          `${coefficient + constant}n`,
          `${coefficient}n - ${constant}`,
          `${constant}n + ${coefficient}`
        ], rng);
        return {
          prompt: `A pattern starts at ${coefficient + constant} and increases by ${coefficient} each step. Which expression fits term n?`,
          options,
          answerIndex,
          explanation: `If the pattern grows by ${coefficient} each step, use ${coefficient}n. The constant adjusts the start, so the rule is ${correct}.`
        };
      }

      const x = number(2, difficultyStep(4, difficulty, 14), rng);
      const a = number(2, 5, rng);
      const b = number(1, 8, rng);
      const correct = (a * x) + b;
      const { options, answerIndex } = buildOptions(correct, [correct + 2, correct - 2, a + b + x], rng);
      return {
        prompt: `If x = ${x}, what is ${a}x + ${b}?`,
        options,
        answerIndex,
        explanation: `Substitute ${x} for x: ${a}(${x}) + ${b} = ${correct}.`
      };
    }

    if (config.skill === "grade7Algebra") {
      if (index % 3 === 0) {
        const solution = number(2, difficultyStep(4, difficulty, 12), rng);
        const constant = number(2, 9, rng);
        const total = solution + constant;
        const correct = solution;
        const { options, answerIndex } = buildOptions(correct, [correct + 1, correct - 1, total], rng);
        return {
          prompt: `Solve: x + ${constant} = ${total}`,
          options,
          answerIndex,
          explanation: `Subtract ${constant} from both sides. That gives x = ${correct}.`
        };
      }

      if (index % 3 === 1) {
        const coefficient = pick([2, 3, 4], rng);
        const solution = number(2, difficultyStep(4, difficulty, 10), rng);
        const total = coefficient * solution;
        const correct = solution;
        const { options, answerIndex } = buildOptions(correct, [correct + 1, correct - 1, total], rng);
        return {
          prompt: `Solve: ${coefficient}x = ${total}`,
          options,
          answerIndex,
          explanation: `Divide both sides by ${coefficient}. So x = ${correct}.`
        };
      }

      const constant = number(2, 8, rng);
      const limit = number(6, 16, rng);
      const correct = `x > ${limit - constant}`;
      const { options, answerIndex } = buildOptions(correct, [
        `x < ${limit - constant}`,
        `x > ${limit - constant + 1}`,
        `x < ${limit - constant + 1}`
      ], rng);
      return {
        prompt: `Solve the inequality: x + ${constant} > ${limit}`,
        options,
        answerIndex,
        explanation: `Subtract ${constant} from both sides. The solution is ${correct}.`
      };
    }

    if (config.skill === "quadraticsIntro") {
      const mode = index % 4;

      if (mode === 0) {
        const a = pick([1, 2, 3], rng);
        const b = number(-6, 6, rng);
        const c = number(-8, 8, rng);
        const correct = `a = ${a}, b = ${b < 0 ? "-" : ""}${Math.abs(b)}, c = ${c < 0 ? "-" : ""}${Math.abs(c)}`;
        const { options, answerIndex } = buildOptions(correct, [
          `a = ${b}, b = ${a}, c = ${c}`,
          `a = ${a}, b = ${c}, c = ${b}`,
          `a = ${c}, b = ${b}, c = ${a}`
        ], rng);
        return {
          prompt: `In the quadratic ${a}x^2 ${b < 0 ? "-" : "+"} ${Math.abs(b)}x ${c < 0 ? "-" : "+"} ${Math.abs(c)}, what are a, b, and c?`,
          options,
          answerIndex,
          explanation: `In standard form ax^2 + bx + c, match each term to its coefficient: a = ${a}, b = ${b}, c = ${c}.`
        };
      }

      if (mode === 1) {
        const a = pick([1, 2, 3], rng);
        const c = number(-6, 6, rng);
        const correct = c;
        const { options, answerIndex } = buildOptions(correct, [correct + a, correct - a, a], rng);
        return {
          prompt: `What is the y-intercept of y = ${a}x^2 ${c < 0 ? "-" : "+"} ${Math.abs(c)}?`,
          options,
          answerIndex,
          explanation: `The y-intercept happens when x = 0. Substituting x = 0 leaves just the constant, so the y-intercept is ${correct}.`
        };
      }

      if (mode === 2) {
        const a = pick([1, 2, 3], rng);
        const x = number(-3, 3, rng);
        const b = number(-4, 4, rng);
        const c = number(-5, 5, rng);
        const correct = (a * x * x) + (b * x) + c;
        const { options, answerIndex } = buildOptions(correct, [correct + a, correct - a, (a * x) + b + c], rng);
        return {
          prompt: `If y = ${a}x^2 ${b < 0 ? "-" : "+"} ${Math.abs(b)}x ${c < 0 ? "-" : "+"} ${Math.abs(c)}, what is y when x = ${x}?`,
          options,
          answerIndex,
          explanation: `Substitute x = ${x}: ${a}(${x})^2 ${b < 0 ? "-" : "+"} ${Math.abs(b)}(${x}) ${c < 0 ? "-" : "+"} ${Math.abs(c)} = ${correct}.`
        };
      }

      const opensUp = rng() > 0.5;
      const a = opensUp ? pick([1, 2, 3], rng) : pick([-1, -2, -3], rng);
      const cSign = rng() > 0.5 ? "-" : "+";
      const cVal = number(1, 5, rng);
      const correct = opensUp ? "Opens upward" : "Opens downward";
      const { options, answerIndex } = buildOptions(correct, ["Opens upward", "Opens downward"].filter((item) => item !== correct), rng);
      return {
        prompt: `Does the parabola y = ${a}x^2 ${cSign} ${cVal} open upward or downward?`,
        options,
        answerIndex,
        explanation: `When the coefficient of x^2 (a = ${a}) is positive, the parabola opens upward. When it is negative, it opens downward.`
      };
    }

    if (level <= 7) {
      if (index % 4 === 2) {
        const constant = number(2, difficultyStep(4, difficulty, 14), rng);
        const total = constant + number(2, difficultyStep(5, difficulty, 16), rng);
        const correctValue = total - constant;
        const correct = `x > ${correctValue}`;
        const { options, answerIndex } = buildOptions(correct, [
          `x < ${correctValue}`,
          `x > ${correctValue - 1}`,
          `x < ${correctValue + 1}`
        ], rng);
        return {
          prompt: `Solve the linear inequality: x + ${constant} > ${total}`,
          options,
          answerIndex,
          explanation: `Subtract ${constant} from both sides: x + ${constant} - ${constant} > ${total} - ${constant}. So x > ${correctValue}.`
        };
      }

      const x = number(1, difficultyStep(12, difficulty, 20), rng);
      const n = number(2, difficultyStep(10, difficulty, 25), rng);
      const correct = x + n;
      const { options, answerIndex } = buildOptions(correct, [correct + 1, Math.max(0, correct - 1), x * n], rng);
      return {
        prompt: `If x = ${x}, what is x + ${n}?`,
        options,
        answerIndex,
        explanation: `Substitute x = ${x}. Then ${x} + ${n} = ${correct}.`
      };
    }

    if (level <= 9) {
      if (index % 4 === 1) {
        const coefficient = pick([2, 3, 4], rng);
        const solution = number(2, difficultyStep(4, difficulty, 14), rng);
        const offset = number(1, difficultyStep(3, difficulty, 12), rng);
        const total = (coefficient * solution) + offset;
        const correct = `x <= ${solution}`;
        const { options, answerIndex } = buildOptions(correct, [
          `x >= ${solution}`,
          `x <= ${solution + 1}`,
          `x < ${solution}`
        ], rng);
        return {
          prompt: `Solve the linear inequality: ${coefficient}x + ${offset} <= ${total}`,
          options,
          answerIndex,
          explanation: `Subtract ${offset} from both sides to get ${coefficient}x <= ${total - offset}. Then divide both sides by ${coefficient}. So x <= ${solution}.`
        };
      }

      const x = number(2, difficultyStep(6, difficulty, 45), rng);
      const constant = number(2, difficultyStep(4, difficulty, 28), rng);
      const total = x + constant;
      const correct = x;
      const { options, answerIndex } = buildOptions(correct, [correct + 1, correct - 1, total], rng);
      return {
        prompt: `Solve: x + ${constant} = ${total}`,
        options,
        answerIndex,
        explanation: `Subtract ${constant} from both sides, so x = ${correct}.`
      };
    }

    if (config.skill === "powersRadicals") {
      const mode = index % 4;
      const radicalTable = [
        { radicand: 8, simplified: "2√2" },
        { radicand: 12, simplified: "2√3" },
        { radicand: 18, simplified: "3√2" },
        { radicand: 20, simplified: "2√5" },
        { radicand: 27, simplified: "3√3" },
        { radicand: 32, simplified: "4√2" },
        { radicand: 45, simplified: "3√5" },
        { radicand: 50, simplified: "5√2" },
        { radicand: 75, simplified: "5√3" },
        { radicand: 98, simplified: "7√2" },
        { radicand: 120, simplified: "2√30" },
        { radicand: 150, simplified: "5√6" },
        { radicand: 200, simplified: "10√2" }
      ];

      if (mode === 0) {
        const pool = difficulty <= 2 ? radicalTable.slice(0, 5) : difficulty <= 4 ? radicalTable.slice(0, 10) : radicalTable;
        const selected = pool[Math.floor(index / 4) % pool.length];
        const { options, answerIndex } = buildOptions(selected.simplified, radicalTable.filter((item) => item.simplified !== selected.simplified).slice(0, 3).map((item) => item.simplified), rng);
        return {
          prompt: `Simplify √${selected.radicand}.`,
          options,
          answerIndex,
          explanation: `Find the largest perfect square factor of ${selected.radicand} and pull it out of the radical. √${selected.radicand} = ${selected.simplified}.`
        };
      }

      if (mode === 1) {
        const base = pick([2, 3, 4, 5, 6, 10], rng);
        const exponent = number(1, difficultyStep(2, difficulty, 7), rng);
        const correct = `1/${base}^${exponent}`;
        const { options, answerIndex } = buildOptions(correct, [`${base}^${exponent}`, `-${base}^${exponent}`, `1/${base}`], rng);
        return {
          prompt: `Simplify ${base}^-${exponent}.`,
          options,
          answerIndex,
          explanation: `A negative exponent means take the reciprocal: ${base}^-${exponent} = ${correct}.`
        };
      }

      if (mode === 2) {
        const basePool = difficulty <= 3 ? [4, 9, 16, 25, 36, 49, 64] : [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144];
        const base = basePool[Math.floor(index / 4) % basePool.length];
        const root = Math.round(Math.sqrt(base));
        const correct = String(root);
        const { options, answerIndex } = buildOptions(correct, [String(root + 1), String(Math.max(1, root - 1)), String(base)], rng);
        return {
          prompt: `Simplify ${base}^(1/2).`,
          options,
          answerIndex,
          explanation: `A power of 1/2 means square root. ${base}^(1/2) = √${base} = ${correct}.`
        };
      }

      const a = pick([2, 3, 5], rng);
      const b = pick([2, 3, 5].filter((value) => value !== a), rng);
      const correct = `√${a * b}`;
      const { options, answerIndex } = buildOptions(correct, [`√${a + b}`, `${a}√${b}`, `√${a}√${b}`], rng);
      return {
        prompt: `Simplify √${a} × √${b}.`,
        options,
        answerIndex,
        explanation: `Multiply the radicands together: √${a} × √${b} = √${a * b}.`
      };
    }

    if (level === 10) {
      const mode = index % 4;

      if (mode === 0) {
        const a = number(2, difficultyStep(3, difficulty, 12), rng);
        const b = number(2, difficultyStep(3, difficulty, 12), rng);
        const c = number(1, difficultyStep(3, difficulty, 10), rng);
        const d = number(1, difficultyStep(3, difficulty, 10), rng);
        const correct = `${a + b}x + ${c + d}`;
        const { options, answerIndex } = buildOptions(correct, [
          `${a + b}x + ${Math.abs(c - d)}`,
          `${a * b}x + ${c + d}`,
          `${a + b + c + d}x`
        ], rng);
        return {
          prompt: `Simplify: ${a}x + ${c} + ${b}x + ${d}`,
          options,
          answerIndex,
          explanation: `Combine the like terms: ${a}x + ${b}x = ${a + b}x, and ${c} + ${d} = ${c + d}. So the simplified expression is ${correct}.`
        };
      }

      if (mode === 1) {
        const coeff = number(2, difficultyStep(3, difficulty, 9), rng);
        const innerX = number(2, difficultyStep(2, difficulty, 6), rng);
        const innerConstant = number(2, difficultyStep(3, difficulty, 12), rng);
        const correct = `${coeff * innerX}x + ${coeff * innerConstant}`;
        const { options, answerIndex } = buildOptions(correct, [
          `${coeff + innerX}x + ${coeff + innerConstant}`,
          `${coeff * innerConstant}x + ${coeff * innerX}`,
          `${coeff * innerX}x + ${innerConstant}`
        ], rng);
        return {
          prompt: `Expand: ${coeff}(${innerX}x + ${innerConstant})`,
          options,
          answerIndex,
          explanation: `Distribute ${coeff} to each term inside the brackets: ${coeff}(${innerX}x + ${innerConstant}) = ${coeff * innerX}x + ${coeff * innerConstant}.`
        };
      }

      if (mode === 2) {
        const coeff = number(2, difficultyStep(3, difficulty, 9), rng);
        const inner = number(2, difficultyStep(3, difficulty, 12), rng);
        const correct = `${coeff}x + ${coeff * inner}`.replace(/^1x/, "x");
        const distractA = `${coeff * inner}x + ${coeff * inner}`;
        const distractB = `${coeff * inner}x`;
        const distractC = `${coeff}x + ${inner}`;
        const { options, answerIndex } = buildOptions(correct, [distractA, distractB, distractC], rng);
        return {
          prompt: `Expand: ${coeff}(x + ${inner})`,
          options,
          answerIndex,
          explanation: `Distribute ${coeff} across both terms: ${coeff}(x + ${inner}) = ${coeff}x + ${coeff * inner}.`
        };
      }

      const x = number(2, difficultyStep(3, difficulty, 9), rng);
      const leftCoeff = pick([2, 3, 4], rng);
      const constant = number(2, difficultyStep(3, difficulty, 12), rng);
      const total = (leftCoeff * x) + constant;
      const { options, answerIndex } = buildOptions(`x = ${x}`, [`x = ${total}`, `x = ${constant}`, `x = ${x + 1}`], rng);
      return {
        prompt: `Solve for x: ${leftCoeff}x + ${constant} = ${total}`,
        options,
        answerIndex,
        explanation: `Subtract ${constant} from both sides to get ${leftCoeff}x = ${total - constant}. Then divide by ${leftCoeff}, so x = ${x}.`
      };
    }

    if (config.skill === "sequencesSeries") {
      const mode = index % 3;

      if (mode === 0) {
        const firstTerm = number(2, difficultyStep(6, difficulty, 30), rng);
        const difference = pick([2, 3, 4, 5, 6, 7, 8], rng);
        const termNumber = number(6, difficultyStep(8, difficulty, 30), rng);
        const correct = firstTerm + ((termNumber - 1) * difference);
        const { options, answerIndex } = buildOptions(correct, [
          correct + difference,
          correct - difference,
          firstTerm + (termNumber * difference)
        ], rng);
        return {
          prompt: `An arithmetic sequence has first term ${firstTerm} and common difference ${difference}. What is term ${termNumber}?`,
          options,
          answerIndex,
          explanation: `Use a_n = a_1 + (n - 1)d. So a_${termNumber} = ${firstTerm} + (${termNumber} - 1)(${difference}) = ${correct}.`
        };
      }

      if (mode === 1) {
        const firstTerm = pick([2, 3, 4, 5, 6], rng);
        const ratio = pick([2, 3, 4], rng);
        const termNumber = number(4, difficultyStep(4, difficulty, 10), rng);
        const correct = firstTerm * (ratio ** (termNumber - 1));
        const { options, answerIndex } = buildOptions(correct, [
          correct * ratio,
          Math.max(1, Math.round(correct / ratio)),
          firstTerm * ratio * termNumber
        ], rng);
        return {
          prompt: `A geometric sequence has first term ${firstTerm} and common ratio ${ratio}. What is term ${termNumber}?`,
          options,
          answerIndex,
          explanation: `Use a_n = a_1r^(n - 1). So a_${termNumber} = ${firstTerm}(${ratio})^${termNumber - 1} = ${correct}.`
        };
      }

      const firstTerm = number(1, difficultyStep(5, difficulty, 16), rng);
      const difference = pick([1, 2, 3, 4, 5], rng);
      const numTerms = number(3, difficultyStep(4, difficulty, 14), rng);
      const lastTerm = firstTerm + ((numTerms - 1) * difference);
      const correct = Math.round((numTerms / 2) * (firstTerm + lastTerm));
      const { options, answerIndex } = buildOptions(correct, [
        correct + difference,
        correct - numTerms,
        firstTerm + lastTerm
      ], rng);
      return {
        prompt: `An arithmetic series has first term ${firstTerm}, common difference ${difference}, and ${numTerms} terms. What is the sum of the series?`,
        options,
        answerIndex,
        explanation: `Use S_n = (n/2)(a_1 + a_n). The last term is ${lastTerm}, so S_${numTerms} = (${numTerms}/2)(${firstTerm} + ${lastTerm}) = ${correct}.`
      };
    }

    if (level >= 11) {
      if (index % 4 === 0) {
        const solution = number(2, difficultyStep(4, difficulty, 20), rng);
        const leftCoefficient = pick([3, 4, 5, 6, 7], rng);
        const rightCoefficient = pick([1, 2].filter((value) => value < leftCoefficient), rng) || 1;
        const leftConstant = number(2, 10, rng);
        const rightConstant = (leftCoefficient - rightCoefficient) * solution + leftConstant;
        const { options, answerIndex } = buildOptions(solution, [solution + 1, solution - 1, leftConstant], rng);
        return {
          prompt: `Solve: ${leftCoefficient}x + ${leftConstant} = ${rightCoefficient}x + ${rightConstant}`,
          options,
          answerIndex,
          explanation: `Move the variable terms to one side and the constants to the other, then divide. This gives x = ${solution}.`
        };
      }

      if (index % 4 === 1) {
        const base = pick([2, 3, 4, 5, 6], rng);
        const largerExponent = number(4, difficultyStep(4, difficulty, 14), rng);
        const smallerExponent = number(1, Math.max(1, largerExponent - 1), rng);
        const correct = `${base}^${largerExponent - smallerExponent}`;
        const { options, answerIndex } = buildOptions(correct, [
          `${base}^${largerExponent + smallerExponent}`,
          `${base}^${smallerExponent - largerExponent}`,
          `${base * 2}^${largerExponent - smallerExponent}`
        ], rng);
        return {
          prompt: `Simplify ${base}^${largerExponent} / ${base}^${smallerExponent}.`,
          options,
          answerIndex,
          explanation: `When dividing powers with the same base, subtract the exponents. So ${base}^${largerExponent} / ${base}^${smallerExponent} = ${correct}.`
        };
      }

      if (index % 4 === 2) {
        const root1 = pick([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5], rng);
        const root2 = pick([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5].filter((value) => value !== root1), rng);
        const sum = root1 + root2;
        const product = root1 * root2;
        const answerText = [root1, root2].sort((a, b) => a - b).join(" and ");
        const distractor1 = [root1, -root2].sort((a, b) => a - b).join(" and ");
        const distractor2 = [product, sum].sort((a, b) => a - b).join(" and ");
        const distractor3 = [root1 + 1, root2 - 1].sort((a, b) => a - b).join(" and ");
        const { options, answerIndex } = buildOptions(answerText, [distractor1, distractor2, distractor3], rng);
        const middleTerm = sum >= 0 ? ` - ${sum}x` : ` + ${Math.abs(sum)}x`;
        const constantTerm = product >= 0 ? ` + ${product}` : ` - ${Math.abs(product)}`;
        return {
          prompt: `Solve x^2${middleTerm}${constantTerm} = 0.`,
          options,
          answerIndex,
          explanation: `Factor the quadratic into two linear factors. The solutions are x = ${root1} and x = ${root2}.`
        };
      }

      const value = number(2, 6, rng);
      const powerA = number(2, difficultyStep(3, difficulty, 7), rng);
      const powerB = number(2, difficultyStep(3, difficulty, 7), rng);
      const correct = `${value}^${powerA + powerB}`;
      const { options, answerIndex } = buildOptions(correct, [
        `${value}^${powerA * powerB}`,
        `${value}^${Math.abs(powerA - powerB)}`,
        `${value * 2}^${powerA + powerB}`
      ], rng);
      return {
        prompt: `Simplify ${value}^${powerA} x ${value}^${powerB}.`,
        options,
        answerIndex,
        explanation: `When multiplying powers with the same base, add the exponents. So ${value}^${powerA} x ${value}^${powerB} = ${value}^${powerA + powerB}.`
      };
    }

    const x = number(1, difficultyStep(3, difficulty, 12), rng);
    const a = number(1, difficultyStep(2, difficulty, 6), rng);
    const b = number(1, difficultyStep(3, difficulty, 10), rng);
    const correct = (a * x) + b;
    const { options, answerIndex } = buildOptions(correct, [correct + 2, Math.max(0, correct - 2), a + b + x], rng);
    return {
      prompt: `If x = ${x}, what is ${a}x + ${b}?`,
      options,
      answerIndex,
      explanation: `Substitute x = ${x}: ${a}(${x}) + ${b} = ${correct}.`
    };
  },

  statisticsProbability(rng, grade, config, index, difficulty) {
    if (config.skill === "grade7CentralTendency") {
      if (index % 3 === 0) {
        const data = Array.from({ length: 5 }, () => number(4, difficultyStep(6, difficulty, 30), rng));
        const correct = Math.round(data.reduce((sum, value) => sum + value, 0) / data.length);
        const { options, answerIndex } = buildOptions(correct, [correct + 1, correct - 1, data[0]], rng);
        return {
          prompt: `What is the mean of ${data.join(", ")} rounded to the nearest whole number?`,
          options,
          answerIndex,
          explanation: `Add all values, then divide by ${data.length}. The mean is about ${correct}.`
        };
      }

      if (index % 3 === 1) {
        const sorted = shuffle([number(2, 9, rng), number(10, 14, rng), number(15, 18, rng), number(19, 22, rng), number(23, 28, rng)], rng).sort((a, b) => a - b);
        const correct = sorted[2];
        const { options, answerIndex } = buildOptions(correct, [sorted[1], sorted[3], sorted[0]], rng);
        return {
          prompt: `What is the median of ${sorted.join(", ")}?`,
          options,
          answerIndex,
          explanation: `The median is the middle number once the data is ordered. The middle value is ${correct}.`
        };
      }

      const mode = pick([4, 6, 8, 10, 12], rng);
      const data = shuffle([mode, mode, number(1, 14, rng), number(1, 14, rng), number(1, 14, rng)], rng);
      const { options, answerIndex } = buildOptions(mode, [...new Set(data.filter((value) => value !== mode))].slice(0, 3), rng);
      return {
        prompt: `What is the mode of ${data.join(", ")}?`,
        options,
        answerIndex,
        explanation: `The mode is the value that appears most often. Here, ${mode} appears the most.`
      };
    }

    if (config.skill === "grade7Probability") {
      if (index % 3 === 0) {
        const total = pick([6, 8, 10, 12], rng);
        const favorable = number(1, total - 1, rng);
        const correct = fractionString(favorable, total, true);
        const { options, answerIndex } = buildOptions(correct, [
          fractionString(total - favorable, total, true),
          fractionString(favorable + 1, total, true),
          fractionString(favorable, total - 1, true)
        ], rng);
        return {
          prompt: `A spinner has ${favorable} winning sections out of ${total} equal sections. What is the theoretical probability of winning?`,
          options,
          answerIndex,
          explanation: `Theoretical probability = favorable outcomes / total outcomes = ${favorable}/${total} = ${correct}.`
        };
      }

      if (index % 3 === 1) {
        const success = number(3, 12, rng);
        const total = success + number(3, 10, rng);
        const correct = fractionString(success, total, true);
        const { options, answerIndex } = buildOptions(correct, [
          fractionString(total - success, total, true),
          fractionString(success + 1, total, true),
          fractionString(success, total - 1, true)
        ], rng);
        return {
          prompt: `An event happened ${success} times in ${total} trials. What is the experimental probability?`,
          options,
          answerIndex,
          explanation: `Experimental probability = successes / trials = ${success}/${total} = ${correct}.`
        };
      }

      const favorable = number(1, 5, rng);
      const total = favorable + number(2, 6, rng);
      const correct = fractionString(total - favorable, total, true);
      const { options, answerIndex } = buildOptions(correct, [
        fractionString(favorable, total, true),
        fractionString(total - favorable - 1, total, true),
        fractionString(total, favorable, true)
      ], rng);
      return {
        prompt: `The probability of drawing a blue marble is ${fractionString(favorable, total, true)}. What is the probability of not drawing a blue marble?`,
        options,
        answerIndex,
        explanation: `Use the complement: 1 - ${fractionString(favorable, total, true)} = ${correct}.`
      };
    }

    if (config.level >= 7 && difficulty >= 4 && index % 3 === 1) {
      const total = pick([6, 8, 10, 12], rng);
      const favorable = number(1, total - 1, rng);
      const correct = fractionString(favorable, total, true);
      const { options, answerIndex } = buildOptions(correct, [
        fractionString(total - favorable, total, true),
        fractionString(favorable, total - 1, true),
        fractionString(Math.min(total, favorable + 1), total, true)
      ], rng);
      return {
        prompt: `An event has ${favorable} favorable outcomes out of ${total} equally likely outcomes. What is the probability?`,
        options,
        answerIndex,
        explanation: `Step 1: Probability = favorable outcomes / total outcomes.<br>Step 2: Write ${favorable}/${total}.<br>Step 3: Simplify if possible. The probability is ${correct}.`
      };
    }

    if (config.level >= 11) {
      if (index % 4 === 0) {
        const n = number(5, difficultyStep(9, difficulty, 13), rng);
        const r = number(2, Math.min(5, n - 1), rng);
        const correct = combination(n, r);
        const { options, answerIndex } = buildOptions(correct, [
          permutation(n, r),
          combination(n, Math.max(1, r - 1)),
          correct + n
        ], rng);
        return {
          prompt: `How many combinations of ${r} items can be chosen from ${n} items?`,
          options,
          answerIndex,
          explanation: `Use combinations because order does not matter. ${n}C${r} = ${correct}.`
        };
      }

      if (index % 4 === 1) {
        const red = number(3, 8, rng);
        const blue = number(3, 8, rng);
        const total = red + blue;
        const correct = fractionString(red, total, true);
        const { options, answerIndex } = buildOptions(correct, [
          fractionString(blue, total, true),
          fractionString(red, Math.max(1, total - 1), true),
          fractionString(total, red, true)
        ], rng);
        return {
          prompt: `A bag has ${red} red marbles and ${blue} blue marbles. What is the probability of drawing a red marble on one draw?`,
          options,
          answerIndex,
          explanation: `Probability = favorable outcomes / total outcomes = ${red}/${total} = ${correct}.`
        };
      }

      if (index % 4 === 2) {
        const mean = number(55, 90, rng);
        const sd = pick(difficulty <= 3 ? [4, 5, 6, 8] : [4, 5, 6, 8, 10, 12], rng);
        const score = mean + (sd * pick([-2, -1, 1, 2], rng));
        const correct = formatDecimalAnswer((score - mean) / sd, 2, 1);
        const { options, answerIndex } = buildOptions(correct, [
          formatDecimalAnswer((mean - score) / sd, 2, 1),
          formatDecimalAnswer(score / sd, 2, 1),
          formatDecimalAnswer((score - sd) / mean, 2, 1)
        ], rng);
        return {
          prompt: `A test score is ${score}, with mean ${mean} and standard deviation ${sd}. What is the z-score?`,
          options,
          answerIndex,
          explanation: `Use z = (x - mean) / standard deviation = (${score} - ${mean}) / ${sd} = ${correct}.`
        };
      }

      const win1 = pick([2, 4, 5, 6], rng);
      const win2 = pick([1, 3, 4, 5], rng);
      const loss1 = pick([2, 3, 4], rng);
      const loss2 = pick([3, 4, 5], rng);
      const total = win1 + win2 + loss1 + loss2;
      const correct = formatDecimalAnswer((win1 + win2) / total, 3, 2);
      const { options, answerIndex } = buildOptions(correct, [
        formatDecimalAnswer((win1 + loss1) / total, 3, 2),
        formatDecimalAnswer((win2 + loss2) / total, 3, 2),
        formatDecimalAnswer((loss1 + loss2) / total, 3, 2)
      ], rng);
      return {
        prompt: `A table shows wins and losses for two teams: Team A wins ${win1}, Team B wins ${win2}, Team A losses ${loss1}, Team B losses ${loss2}. What fraction of all results are wins?`,
        options,
        answerIndex,
        explanation: `Add the wins: ${win1} + ${win2} = ${win1 + win2}. Then divide by the total ${total}. The result is ${correct}.`
      };
    }

    if (index % 2 === 0) {
      const dataLength = difficulty >= 4 ? 5 : 4;
      const dataMax = difficultyStep(8, difficulty, 55);
      const data = Array.from({ length: dataLength }, () => number(2, dataMax, rng));
      const correct = Math.round(data.reduce((sum, value) => sum + value, 0) / data.length);
      const { options, answerIndex } = buildOptions(correct, [correct + 1, Math.max(0, correct - 1), data[0]], rng);
      return {
        prompt: `Which value is the mean rounded to the nearest whole number for ${data.join(", ")}?`,
        options,
        answerIndex,
        explanation: `Step 1: Add the values: ${data.join(" + ")} = ${data.reduce((sum, value) => sum + value, 0)}.<br>Step 2: Divide by ${data.length}.<br>Step 3: Round the result to the nearest whole number. The mean is about ${correct}.`
      };
    }

    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    const totalSections = difficulty >= 4 ? 6 : 4;
    const activeColors = colors.slice(0, totalSections);
    const color = pick(activeColors, rng);
    const repeats = difficulty >= 5 ? number(1, 2, rng) : 1;
    const labels = Array.from({ length: totalSections }, (_, sectionIndex) =>
      sectionIndex < repeats ? color : pick(activeColors.filter((item) => item !== color), rng)
    );
    const favorable = labels.filter((item) => item === color).length;
    const correct = fractionString(favorable, totalSections, true);
    const { options, answerIndex } = buildOptions(correct, [
      fractionString(totalSections - favorable, totalSections, true),
      fractionString(favorable, Math.max(1, totalSections - 1), true),
      fractionString(Math.min(totalSections, favorable + 1), totalSections, true)
    ], rng);
    return {
      prompt: `A spinner has ${totalSections} equal sections labelled ${labels.join(", ")}. What is the probability of landing on ${color}?`,
      options,
      answerIndex,
      explanation: `Step 1: Count the sections labelled ${color}. There are ${favorable}.<br>Step 2: Count the total equal sections. There are ${totalSections}.<br>Step 3: Write the probability as ${favorable}/${totalSections}.<br>Step 4: Simplify if possible. The answer is ${correct}.`
    };
  },

  integersRational(rng, grade, config, index, difficulty) {
    if (config.skill === "exponentsRoots") {
      const mode = index % 4;

      if (mode === 0) {
        const base = number(2, difficultyStep(3, difficulty, 10), rng);
        const exponent = number(2, difficultyStep(2, difficulty, 5), rng);
        const correct = base ** exponent;
        const { options, answerIndex } = buildOptions(correct, [
          base * exponent,
          correct + base,
          base ** (exponent - 1)
        ], rng);
        return {
          prompt: `What is ${base}^${exponent}?`,
          options,
          answerIndex,
          explanation: `${base}^${exponent} means ${base} multiplied by itself ${exponent} times, which is ${correct}.`
        };
      }

      if (mode === 1) {
        const root = number(2, difficultyStep(3, difficulty, 15), rng);
        const square = root * root;
        const { options, answerIndex } = buildOptions(root, [root + 1, Math.max(1, root - 1), square], rng);
        return {
          prompt: `What is the square root of ${square}?`,
          options,
          answerIndex,
          explanation: `${root} x ${root} = ${square}, so the square root of ${square} is ${root}.`
        };
      }

      if (mode === 2) {
        const cubeRoot = number(2, difficultyStep(2, difficulty, 7), rng);
        const cube = cubeRoot ** 3;
        const { options, answerIndex } = buildOptions(cubeRoot, [cubeRoot + 1, Math.max(1, cubeRoot - 1), cubeRoot * cubeRoot], rng);
        return {
          prompt: `What is the cube root of ${cube}?`,
          options,
          answerIndex,
          explanation: `${cubeRoot}^3 = ${cube}, so the cube root of ${cube} is ${cubeRoot}.`
        };
      }

      const base = pick([2, 3, 4, 5, 6, 10], rng);
      const exponentA = number(1, difficultyStep(2, difficulty, 6), rng);
      const exponentB = number(1, difficultyStep(2, difficulty, 6), rng);
      const correct = `${base}^${exponentA + exponentB}`;
      const { options, answerIndex } = buildOptions(correct, [
        `${base}^${exponentA * exponentB}`,
        `${base * 2}^${exponentA + exponentB}`,
        `${base}^${Math.abs(exponentA - exponentB)}`
      ], rng);
      return {
        prompt: `Simplify ${base}^${exponentA} x ${base}^${exponentB}.`,
        options,
        answerIndex,
        explanation: `When multiplying powers with the same base, add the exponents: ${base}^${exponentA} x ${base}^${exponentB} = ${correct}.`
      };
    }

    if (config.skill === "rationalIrrational") {
      const mode = index % 3;

      if (mode === 0) {
        const perfectSquares = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144];
        const nonSquares = [2, 3, 5, 7, 8, 10, 11, 12, 15, 18, 20];
        const isRational = rng() > 0.5;
        const value = isRational ? pick(perfectSquares, rng) : pick(nonSquares, rng);
        const correct = isRational ? "Rational" : "Irrational";
        const { options, answerIndex } = buildOptions(correct, ["Rational", "Irrational"].filter((item) => item !== correct), rng);
        return {
          prompt: `Is the square root of ${value} rational or irrational?`,
          options,
          answerIndex,
          explanation: isRational
            ? `${value} is a perfect square, so its square root is a whole number, which is rational.`
            : `${value} is not a perfect square, so its square root is a non-repeating, non-terminating decimal, which is irrational.`
        };
      }

      if (mode === 1) {
        const numerator = number(1, 9, rng);
        const denominator = number(2, 9, rng);
        const correct = `${numerator}/${denominator}`;
        const { options, answerIndex } = buildOptions(correct, ["pi", "the square root of 2", "0.1010010001..."], rng);
        const rationalPromptVariants = [
          `Which of these is a rational number?`,
          `Which option below is a rational number?`,
          `Which of the following numbers is rational?`,
          `Select the rational number from the choices below.`,
          `Which value in this list is rational?`
        ];
        return {
          prompt: rationalPromptVariants[Math.floor(index / 3) % rationalPromptVariants.length],
          options,
          answerIndex,
          explanation: `${correct} can be written as a ratio of two integers, so it is rational. Numbers like pi and non-repeating decimals cannot.`
        };
      }

      const irrationalExamples = ["pi", "the square root of 2", "the square root of 3", "the square root of 5"];
      const correct = pick(irrationalExamples, rng);
      const { options, answerIndex } = buildOptions(correct, ["1/2", "0.75", "the square root of 9"].filter((item) => item !== correct), rng);
      const irrationalPromptVariants = [
        `Which of these is an irrational number?`,
        `Which option below is an irrational number?`,
        `Which of the following numbers is irrational?`,
        `Select the irrational number from the choices below.`,
        `Which value in this list is irrational?`
      ];
      return {
        prompt: irrationalPromptVariants[Math.floor(index / 3) % irrationalPromptVariants.length],
        options,
        answerIndex,
        explanation: `${correct} cannot be written exactly as a ratio of two integers, so it is irrational.`
      };
    }

    const limit = difficultyStep(4, difficulty, 55);
    const a = number(-limit, limit, rng);
    const b = number(-limit, limit, rng);
    const mode = index % 4;

    if (mode === 2) {
      const factor = number(2, difficultyStep(3, difficulty, 16), rng);
      const signedFactor = rng() > 0.5 ? factor : -factor;
      const other = number(2, difficultyStep(3, difficulty, 16), rng);
      const signedOther = rng() > 0.5 ? other : -other;
      const correct = signedFactor * signedOther;
      const { options, answerIndex } = buildOptions(correct, [-correct, correct + signedOther, correct - signedOther], rng);
      return {
        prompt: `What is ${signedFactor} x (${signedOther})?`,
        options,
        answerIndex,
        explanation: `Multiply the values and apply the sign rule. ${signedFactor} x (${signedOther}) = ${correct}.`
      };
    }

    if (mode === 3) {
      const quotient = number(2, difficultyStep(3, difficulty, 16), rng);
      const divisor = number(2, difficultyStep(2, difficulty, 10), rng);
      const dividend = quotient * divisor;
      const signedDividend = rng() > 0.5 ? dividend : -dividend;
      const signedDivisor = signedDividend < 0 ? (rng() > 0.5 ? divisor : -divisor) : divisor;
      const correct = signedDividend / signedDivisor;
      const { options, answerIndex } = buildOptions(correct, [-correct, correct + 1, Math.max(1, correct - 1)], rng);
      return {
        prompt: `What is ${signedDividend} / (${signedDivisor})?`,
        options,
        answerIndex,
        explanation: `Divide the values and apply the sign rule. ${signedDividend} / (${signedDivisor}) = ${correct}.`
      };
    }

    const correct = mode === 0 ? a + b : a - b;
    const { options, answerIndex } = buildOptions(correct, [correct + 2, correct - 2, -correct], rng);
    return {
      prompt: mode === 0 ? `What is ${a} + ${b}?` : `What is ${a} - (${b})?`,
      options,
      answerIndex,
      explanation: mode === 0 ? `${a} + ${b} = ${correct}.` : `${a} - (${b}) = ${correct}.`
    };
  },

  ratiosProportions(rng, grade, config, index, difficulty) {
    const ratioA = number(1, difficulty <= 3 ? 6 : 18, rng);
    const ratioB = number(1, difficulty <= 3 ? 8 : 22, rng);
    const multiplier = number(2, difficulty <= 3 ? 6 : 16, rng);
    const correct = ratioB * multiplier;
    const { options, answerIndex } = buildOptions(correct, [correct + ratioB, Math.max(1, correct - ratioB), ratioA * multiplier], rng);
    return {
      prompt: `If the ratio is ${ratioA}:${ratioB}, then ${ratioA * multiplier}:__ is proportional. What number goes in the blank?`,
      options,
      answerIndex,
      explanation: `Multiply both parts by ${multiplier}. ${ratioB} x ${multiplier} = ${correct}.`
    };
  },

  functionsGraphing(rng, grade, config, index, difficulty) {
    const level = config.level;

    if (config.skill === "grade7CoordinatesTransformations") {
      if (index % 3 === 0) {
        const x = pick([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5], rng);
        const y = pick([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5], rng);
        const correct = x > 0 && y > 0 ? "Quadrant I"
          : x < 0 && y > 0 ? "Quadrant II"
            : x < 0 && y < 0 ? "Quadrant III"
              : "Quadrant IV";
        const { options, answerIndex } = buildOptions(correct, ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"].filter((item) => item !== correct), rng);
        return {
          prompt: `Which quadrant contains the point (${x}, ${y})?`,
          options,
          answerIndex,
          explanation: `Check the signs of x and y. The point (${x}, ${y}) is in ${correct}.`
        };
      }

      if (index % 3 === 1) {
        const startX = number(-4, 4, rng);
        const startY = number(-4, 4, rng);
        const right = number(1, 4, rng);
        const up = number(1, 4, rng);
        const correct = `(${startX + right}, ${startY + up})`;
        const { options, answerIndex } = buildOptions(correct, [
          `(${startX - right}, ${startY + up})`,
          `(${startX + right}, ${startY - up})`,
          `(${startX - right}, ${startY - up})`
        ], rng);
        return {
          prompt: `Translate the point (${startX}, ${startY}) by ${right} right and ${up} up. What is the image?`,
          options,
          answerIndex,
          explanation: `Add ${right} to x and ${up} to y. The image is ${correct}.`
        };
      }

      const x = number(1, 6, rng);
      const y = number(-6, 6, rng);
      const correct = `(${-x}, ${y})`;
      const { options, answerIndex } = buildOptions(correct, [
        `(${x}, ${-y})`,
        `(${-x}, ${-y})`,
        `(${y}, ${x})`
      ], rng);
      return {
        prompt: `What is the reflection of (${x}, ${y}) across the y-axis?`,
        options,
        answerIndex,
        explanation: `Reflecting across the y-axis changes the sign of x only. So the image is ${correct}.`
      };
    }

    if (config.skill === "coordinateGraphing") {
      if (index % 3 === 0) {
        const x = pick([-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6], rng);
        const y = pick([-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6], rng);
        let correct = "Quadrant I";
        if (x < 0 && y > 0) {
          correct = "Quadrant II";
        } else if (x < 0 && y < 0) {
          correct = "Quadrant III";
        } else if (x > 0 && y < 0) {
          correct = "Quadrant IV";
        }
        const { options, answerIndex } = buildOptions(correct, ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"].filter((item) => item !== correct), rng);
        return {
          prompt: `Which quadrant contains the point (${x}, ${y})?`,
          options,
          answerIndex,
          explanation: `The x-value is ${x < 0 ? "negative" : "positive"} and the y-value is ${y < 0 ? "negative" : "positive"}, so the point (${x}, ${y}) is in ${correct}.`
        };
      }

      if (index % 3 === 1) {
        const startX = number(-4, 4, rng);
        const startY = number(-4, 4, rng);
        const right = number(1, difficulty <= 3 ? 3 : 5, rng);
        const up = number(1, difficulty <= 3 ? 3 : 5, rng);
        const correct = `(${startX + right}, ${startY + up})`;
        const { options, answerIndex } = buildOptions(correct, [
          `(${startX - right}, ${startY + up})`,
          `(${startX + right}, ${startY - up})`,
          `(${startX - right}, ${startY - up})`
        ], rng);
        return {
          prompt: `Start at (${startX}, ${startY}). Move ${right} units right and ${up} units up. Where do you land?`,
          options,
          answerIndex,
          explanation: `Moving right adds ${right} to x, so x becomes ${startX + right}. Moving up adds ${up} to y, so y becomes ${startY + up}. The new point is ${correct}.`
        };
      }

      const x = number(-6, 6, rng);
      const y = number(-6, 6, rng);
      const correct = `(${x}, ${y})`;
      const { options, answerIndex } = buildOptions(correct, [
        `(${y}, ${x})`,
        `(${x}, ${-y})`,
        `(${-x}, ${y})`
      ], rng);
      return {
        prompt: `Which ordered pair has x-coordinate ${x} and y-coordinate ${y}?`,
        options,
        answerIndex,
        explanation: `In an ordered pair, the x-coordinate comes first and the y-coordinate comes second, so the correct point is ${correct}.`
      };
    }

    if (config.skill === "linearPatterns") {
      const mode = index % 3;

      if (mode === 0) {
        const start = number(1, difficultyStep(4, difficulty, 15), rng);
        const step = pick([2, 3, 4, 5], rng);
        const xValues = [1, 2, 3, 4];
        const yValues = xValues.map((x) => start + ((x - 1) * step));
        const correct = `y = ${step}x + ${start - step}`;
        const { options, answerIndex } = buildOptions(correct, [
          `y = ${step}x + ${start}`,
          `y = ${start}x + ${step}`,
          `y = ${step + 1}x + ${start - step}`
        ], rng);
        return {
          prompt: `A table shows x: ${xValues.join(", ")} and y: ${yValues.join(", ")}. Which equation matches the pattern?`,
          options,
          answerIndex,
          explanation: `Each time x increases by 1, y increases by ${step}, so the slope is ${step}. Checking x = 1 gives the rule ${correct}.`
        };
      }

      if (mode === 1) {
        const m = pick([2, 3, 4], rng);
        const b = number(1, difficultyStep(3, difficulty, 10), rng);
        const correct = `y = ${m}x + ${b}`;
        const { options, answerIndex } = buildOptions(correct, [`y = ${b}x + ${m}`, `y = ${m}x - ${b}`, `y = ${m + b}x`], rng);
        return {
          prompt: `A graph crosses the y-axis at ${b} and rises ${m} units for every 1 unit right. Which equation matches this graph?`,
          options,
          answerIndex,
          explanation: `The y-intercept is ${b} and the slope (rise per run) is ${m}, so the equation is ${correct}.`
        };
      }

      const m = pick([2, 3, 4], rng);
      const b = number(-4, 4, rng);
      const correct = m;
      const { options, answerIndex } = buildOptions(correct, [correct + 1, correct - 1, b], rng);
      return {
        prompt: `The equation y = ${m}x ${b < 0 ? "-" : "+"} ${Math.abs(b)} and a table both represent the same linear pattern. What is the constant rate of change (slope) shown by both?`,
        options,
        answerIndex,
        explanation: `In y = mx + b, the coefficient of x is the slope. Here the slope is ${correct}, which matches the constant difference between consecutive y-values in the table.`
      };
    }

    if (config.skill === "relationsGraphs") {
      const mode = index % 3;

      if (mode === 0) {
        const isFunction = rng() > 0.5;
        const xValues = isFunction
          ? shuffle([1, 2, 3, 4], rng)
          : shuffle([1, 1, 2, 3], rng);
        const yValues = [number(1, 10, rng), number(1, 10, rng), number(1, 10, rng), number(1, 10, rng)];
        const pairs = xValues.map((x, i) => `(${x}, ${yValues[i]})`).join(", ");
        const correct = isFunction ? "Yes, it is a function" : "No, it is not a function";
        const { options, answerIndex } = buildOptions(correct, ["Yes, it is a function", "No, it is not a function"].filter((item) => item !== correct), rng);
        return {
          prompt: `Does this set of ordered pairs represent a function: ${pairs}?`,
          options,
          answerIndex,
          explanation: isFunction
            ? "Every x-value appears only once, so each input has exactly one output. This is a function."
            : "At least one x-value repeats with a different y-value, so this relation is not a function."
        };
      }

      if (mode === 1) {
        const xValues = [number(-4, -1, rng), number(0, 3, rng), number(4, 7, rng)];
        const correct = `{${xValues.join(", ")}}`;
        const distractors = [
          `{${xValues.map((v) => v + 1).join(", ")}}`,
          `{${xValues.map((v) => -v).join(", ")}}`,
          `{${[xValues[0], xValues[1]].join(", ")}}`
        ];
        const { options, answerIndex } = buildOptions(correct, distractors, rng);
        return {
          prompt: `A relation contains the points (${xValues[0]}, 2), (${xValues[1]}, 5), and (${xValues[2]}, 9). What is the domain of the relation?`,
          options,
          answerIndex,
          explanation: `The domain is the set of all x-values (inputs) in the relation, so the domain is ${correct}.`
        };
      }

      const yValues = [number(-5, -1, rng), number(0, 4, rng), number(5, 9, rng)];
      const correct = `{${yValues.join(", ")}}`;
      const distractors = [
        `{${yValues.map((v) => v + 1).join(", ")}}`,
        `{${yValues.map((v) => -v).join(", ")}}`,
        `{${[yValues[0], yValues[1]].join(", ")}}`
      ];
      const { options, answerIndex } = buildOptions(correct, distractors, rng);
      return {
        prompt: `A relation contains the points (1, ${yValues[0]}), (2, ${yValues[1]}), and (3, ${yValues[2]}). What is the range of the relation?`,
        options,
        answerIndex,
        explanation: `The range is the set of all y-values (outputs) in the relation, so the range is ${correct}.`
      };
    }

    if (level <= 9) {
      const x = number(1, difficultyStep(3, difficulty, 16), rng);
      const m = number(1, difficultyStep(2, difficulty, 11), rng);
      const b = number(0, difficultyStep(3, difficulty, 20), rng);
      const correct = (m * x) + b;
      const { options, answerIndex } = buildOptions(correct, [correct + 2, Math.max(0, correct - 2), m + b], rng);
      return {
        prompt: `For y = ${m}x + ${b}, what is y when x = ${x}?`,
        options,
        answerIndex,
        explanation: `Substitute x = ${x}. y = ${m}(${x}) + ${b} = ${correct}.`
      };
    }

    if (level < 11) {
      if (index % 3 === 0) {
        const a = pick([1, 2, 3], rng);
        const h = number(-4, 4, rng);
        const k = number(-6, 6, rng);
        const correct = `(${h}, ${k})`;
        const { options, answerIndex } = buildOptions(correct, [
          `(${k}, ${h})`,
          `(${-h}, ${k})`,
          `(${h}, ${-k})`
        ], rng);
        return {
          prompt: `What is the vertex of y = ${a}(x ${h < 0 ? "+" : "-"} ${Math.abs(h)})^2 ${k < 0 ? "-" : "+"} ${Math.abs(k)}?`,
          options,
          answerIndex,
          explanation: `In vertex form y = a(x - h)^2 + k, the vertex is (h, k). So the vertex is ${correct}.`
        };
      }

      if (index % 3 === 1) {
        const a = pick([1, 2, 3], rng);
        const b = pick([2, 3, 4, 5], rng);
        const x = number(1, 4, rng);
        const correct = a * (b ** x);
        const { options, answerIndex } = buildOptions(correct, [
          a * (b ** (x - 1)),
          (a + b) * x,
          correct + a
        ], rng);
        return {
          prompt: `If y = ${a}(${b})^x, what is y when x = ${x}?`,
          options,
          answerIndex,
          explanation: `Substitute x = ${x}: y = ${a}(${b})^${x} = ${a * (b ** x)}.`
        };
      }

      const x = number(1, 5, rng);
      const a = pick([1, 2, 3], rng);
      const b = number(-5, 5, rng);
      const c = number(-6, 6, rng);
      const correct = (a * x * x) + (b * x) + c;
      const { options, answerIndex } = buildOptions(correct, [
        correct + a,
        correct - a,
        (a * x) + b + c
      ], rng);
      return {
        prompt: `If f(x) = ${a}x^2 ${b < 0 ? "-" : "+"} ${Math.abs(b)}x ${c < 0 ? "-" : "+"} ${Math.abs(c)}, what is f(${x})?`,
        options,
        answerIndex,
        explanation: `Substitute x = ${x} into the quadratic and simplify to get ${correct}.`
      };
    }

    if (config.skill === "precalc20") {
      const mode = index % 3;

      if (mode === 0) {
        const m = pick([2, 3, 4, 5], rng);
        const b = number(-4, 4, rng);
        const x1 = number(-3, 2, rng);
        const x2 = x1 + number(1, difficultyStep(3, difficulty, 10), rng);
        const y1 = (m * x1) + b;
        const y2 = (m * x2) + b;
        const correct = m;
        const { options, answerIndex } = buildOptions(correct, [correct + 1, correct - 1, y2 - y1], rng);
        return {
          prompt: `For f(x) = ${m}x ${b < 0 ? "-" : "+"} ${Math.abs(b)}, what is the average rate of change from x = ${x1} to x = ${x2}?`,
          options,
          answerIndex,
          explanation: `Average rate of change = (f(${x2}) - f(${x1})) / (${x2} - ${x1}) = (${y2} - ${y1}) / (${x2 - x1}) = ${correct}.`
        };
      }

      if (mode === 1) {
        const a = pick([1, 2, 3], rng);
        const x1 = number(1, 3, rng);
        const x2 = x1 + number(1, difficultyStep(2, difficulty, 5), rng);
        const y1 = a * x1 * x1;
        const y2 = a * x2 * x2;
        const correct = Math.round((y2 - y1) / (x2 - x1));
        const { options, answerIndex } = buildOptions(correct, [correct + a, correct - a, y2 - y1], rng);
        return {
          prompt: `For f(x) = ${a}x^2, what is the average rate of change from x = ${x1} to x = ${x2}?`,
          options,
          answerIndex,
          explanation: `Average rate of change = (f(${x2}) - f(${x1})) / (${x2} - ${x1}) = (${y2} - ${y1}) / ${x2 - x1} = ${correct}.`
        };
      }

      const x1 = number(0, 3, rng);
      const x2 = x1 + number(1, difficultyStep(3, difficulty, 8), rng);
      const y1 = number(-6, 6, rng);
      const y2 = y1 + (pick([2, 3, 4, 5], rng) * (x2 - x1));
      const correct = Math.round((y2 - y1) / (x2 - x1));
      const { options, answerIndex } = buildOptions(correct, [correct + 1, correct - 1, y2 - y1], rng);
      return {
        prompt: `A table shows f(${x1}) = ${y1} and f(${x2}) = ${y2}. What is the average rate of change over this interval?`,
        options,
        answerIndex,
        explanation: `Average rate of change = (change in y) / (change in x) = (${y2} - ${y1}) / (${x2} - ${x1}) = ${correct}.`
      };
    }

    if (config.skill === "expLogModels") {
      const mode = index % 3;

      if (mode === 0) {
        const base = pick([2, 3, 4, 5, 10], rng);
        const exponent = number(2, difficultyStep(2, difficulty, 5), rng);
        const value = base ** exponent;
        const correct = `log base ${base} of ${value} = ${exponent}`;
        const { options, answerIndex } = buildOptions(correct, [
          `log base ${value} of ${base} = ${exponent}`,
          `log base ${base} of ${exponent} = ${value}`,
          `log base ${exponent} of ${value} = ${base}`
        ], rng);
        return {
          prompt: `Write ${base}^${exponent} = ${value} in logarithmic form.`,
          options,
          answerIndex,
          explanation: `Exponential form b^x = y converts to logarithmic form log base b of y = x. So ${base}^${exponent} = ${value} becomes ${correct}.`
        };
      }

      if (mode === 1) {
        const value = pick([8, 16, 32, 64, 100, 1000], rng);
        const useBaseTen = value === 100 || value === 1000;
        const base = useBaseTen ? 10 : 2;
        const correct = useBaseTen ? (value === 100 ? 2 : 3) : Math.round(Math.log2(value));
        const { options, answerIndex } = buildOptions(correct, [correct + 1, Math.max(0, correct - 1), base], rng);
        return {
          prompt: `What is log base ${base} of ${value}?`,
          options,
          answerIndex,
          explanation: `log base ${base} of ${value} asks for the exponent on ${base} that gives ${value}. That exponent is ${correct}.`
        };
      }

      const start = pick([100, 200, 500, 1000], rng);
      const doublingPeriod = pick([2, 3, 4], rng);
      const periods = number(1, difficultyStep(2, difficulty, 4), rng);
      const years = doublingPeriod * periods;
      const correct = start * (2 ** periods);
      const { options, answerIndex } = buildOptions(correct, [
        start * periods * 2,
        start * (2 ** (periods - 1)),
        start + (start * periods)
      ], rng);
      return {
        prompt: `A population of ${start} doubles every ${doublingPeriod} years. What will the population be after ${years} years?`,
        options,
        answerIndex,
        explanation: `The population doubles ${periods} times, so multiply by 2 a total of ${periods} times: ${start} x 2^${periods} = ${correct}.`
      };
    }

    if (level < 12) {
      if (index % 4 === 0) {
        const h = pick([-4, -3, -2, -1, 1, 2, 3, 4], rng);
        const k = number(-5, 5, rng);
        const correct = `x = ${h}`;
        const { options, answerIndex } = buildOptions(correct, [
          `y = ${k}`,
          `x = ${-h}`,
          `y = ${h}`
        ], rng);
        return {
          prompt: `What is the vertical asymptote of y = 1 / (x ${h < 0 ? "+" : "-"} ${Math.abs(h)}) ${k < 0 ? "-" : "+"} ${Math.abs(k)}?`,
          options,
          answerIndex,
          explanation: `A vertical asymptote happens where the denominator is 0. So x ${h < 0 ? "+" : "-"} ${Math.abs(h)} = 0 gives ${correct}.`
        };
      }

      if (index % 4 === 1) {
        const a = pick([2, 3, 4, 5], rng);
        const exponent = number(2, difficultyStep(2, difficulty, 6), rng);
        const correct = exponent;
        const { options, answerIndex } = buildOptions(correct, [
          exponent + 1,
          exponent - 1,
          a
        ], rng);
        return {
          prompt: `If ${a}^x = ${a ** exponent}, what is the value of x?`,
          options,
          answerIndex,
          explanation: `When the bases are the same, the exponents must match. So x = ${correct}.`
        };
      }

      if (index % 4 === 2) {
        const value = pick([8, 16, 32, 64, 100, 1000], rng);
        const useBaseTen = value === 100 || value === 1000;
        const base = useBaseTen ? 10 : 2;
        const correct = useBaseTen ? (value === 100 ? 2 : 3) : Math.round(Math.log2(value));
        const { options, answerIndex } = buildOptions(correct, [
          correct + 1,
          Math.max(0, correct - 1),
          base
        ], rng);
        return {
          prompt: `What is log base ${base} of ${value}?`,
          options,
          answerIndex,
          explanation: `log base ${base} of ${value} asks for the exponent on ${base} that gives ${value}. That exponent is ${correct}.`
        };
      }

      const x = number(-2, 3, rng);
      const a = pick([1, 2], rng);
      const b = pick([1, 3, 5], rng);
      const c = number(-4, 4, rng);
      const correct = (a * (x ** 3)) + (b * x) + c;
      const { options, answerIndex } = buildOptions(correct, [
        correct + 2,
        correct - 2,
        (a * (x ** 2)) + (b * x) + c
      ], rng);
      return {
        prompt: `If p(x) = ${a}x^3 ${b < 0 ? "-" : "+"} ${Math.abs(b)}x ${c < 0 ? "-" : "+"} ${Math.abs(c)}, what is p(${x})?`,
        options,
        answerIndex,
        explanation: `Substitute x = ${x} into the polynomial and simplify to get ${correct}.`
      };
    }

    if (config.skill === "functionTransformations") {
      const mode = index % 3;

      if (mode === 0) {
        const baseLabel = pick(["x^2", "|x|", "sqrt(x)"], rng);
        const right = number(1, difficultyStep(3, difficulty, 10), rng);
        const up = number(1, difficultyStep(3, difficulty, 10), rng);
        const correct = `f(x ${right < 0 ? "+" : "-"} ${Math.abs(right)}) ${up < 0 ? "-" : "+"} ${Math.abs(up)}`;
        const { options, answerIndex } = buildOptions(correct, [
          `f(x ${right < 0 ? "-" : "+"} ${Math.abs(right)}) ${up < 0 ? "-" : "+"} ${Math.abs(up)}`,
          `f(x ${right < 0 ? "+" : "-"} ${Math.abs(right)}) ${up < 0 ? "+" : "-"} ${Math.abs(up)}`,
          `${up}f(x ${right < 0 ? "+" : "-"} ${Math.abs(right)})`
        ], rng);
        return {
          prompt: `If f(x) = ${baseLabel}, which equation shifts the graph right ${right} units and up ${up} units?`,
          options,
          answerIndex,
          explanation: `Shifting right subtracts inside the function, and shifting up adds outside the function. The new equation is y = ${correct}.`
        };
      }

      if (mode === 1) {
        const point = [number(-4, 4, rng), number(-4, 4, rng)];
        const transform = pick(["reflect over the x-axis", "reflect over the y-axis", "stretch vertically by 2"], rng);
        let correct;
        if (transform === "reflect over the x-axis") {
          correct = `(${point[0]}, ${-point[1]})`;
        } else if (transform === "reflect over the y-axis") {
          correct = `(${-point[0]}, ${point[1]})`;
        } else {
          correct = `(${point[0]}, ${point[1] * 2})`;
        }
        const { options, answerIndex } = buildOptions(correct, [
          `(${point[0]}, ${point[1]})`,
          `(${-point[0]}, ${-point[1]})`,
          `(${point[1]}, ${point[0]})`
        ], rng);
        return {
          prompt: `The point (${point[0]}, ${point[1]}) is on the graph of y = f(x). After the transformation "${transform}", what is the image point?`,
          options,
          answerIndex,
          explanation: `Reflecting over the x-axis negates y, reflecting over the y-axis negates x, and a vertical stretch by 2 multiplies y by 2. The image is ${correct}.`
        };
      }

      const before = "y = f(x)";
      const transformType = pick([
        { after: "y = f(x) + 3", correct: "Vertical shift up 3" },
        { after: "y = f(x) - 4", correct: "Vertical shift down 4" },
        { after: "y = f(x - 2)", correct: "Horizontal shift right 2" },
        { after: "y = f(x + 5)", correct: "Horizontal shift left 5" },
        { after: "y = -f(x)", correct: "Reflection over the x-axis" },
        { after: "y = f(-x)", correct: "Reflection over the y-axis" }
      ], rng);
      const allLabels = ["Vertical shift up 3", "Vertical shift down 4", "Horizontal shift right 2", "Horizontal shift left 5", "Reflection over the x-axis", "Reflection over the y-axis"];
      const { options, answerIndex } = buildOptions(transformType.correct, allLabels.filter((item) => item !== transformType.correct).slice(0, 3), rng);
      return {
        prompt: `Starting from ${before}, the equation becomes ${transformType.after}. What transformation was applied?`,
        options,
        answerIndex,
        explanation: `Compare the two equations. ${transformType.after} matches the pattern for: ${transformType.correct}.`
      };
    }

    if (index % 3 === 0) {
      const a = number(1, difficultyStep(3, difficulty, 6), rng);
      const b = pick([1, 2, 4], rng);
      const c = number(-difficultyStep(3, difficulty, 8), difficultyStep(3, difficulty, 8), rng);
      const d = number(-2, difficultyStep(5, difficulty, 10), rng);
      const correct = `${a * b}x ${((a * c) + d) < 0 ? "-" : "+"} ${Math.abs((a * c) + d)}`;
      const { options, answerIndex } = buildOptions(correct, [
        `${a + b}x + ${c + d}`,
        `${a * b}x + ${Math.abs((a * c) - d)}`,
        `${a}x + ${b + c + d}`
      ], rng);
      return {
        prompt: `If f(x) = ${a}x ${c < 0 ? "-" : "+"} ${Math.abs(c)} and g(x) = ${b}x ${d < 0 ? "-" : "+"} ${Math.abs(d)}, what is (f o g)(x)?`,
        options,
        answerIndex,
        explanation: `Compose the functions: f(g(x)) = ${a}(${b}x ${d < 0 ? "-" : "+"} ${Math.abs(d)}) ${c < 0 ? "-" : "+"} ${Math.abs(c)} = ${correct}.`
      };
    }

    if (index % 3 === 1) {
      const a = pick([2, 3, 4, 5], rng);
      const b = number(-difficultyStep(4, difficulty, 10), difficultyStep(4, difficulty, 10), rng);
      const xValue = number(-2, difficultyStep(4, difficulty, 8), rng);
      const correct = (xValue - b) / a;
      const { options, answerIndex } = buildOptions(correct, [
        correct + 1,
        correct - 1,
        a * xValue + b
      ], rng);
      return {
        prompt: `If f(x) = ${a}x ${b < 0 ? "-" : "+"} ${Math.abs(b)}, what is f^-1(${xValue})?`,
        options,
        answerIndex,
        explanation: `Set y = ${a}x ${b < 0 ? "-" : "+"} ${Math.abs(b)} and solve for x. Then substitute y = ${xValue}, giving ${correct}.`
      };
    }

    const a = pick([2, 3, 4, 5], rng);
    const x = pick([1, 2, 3, 4], rng);
    const correct = 1 / (a ** x);
    const correctText = formatDecimalAnswer(correct, 4, 2);
    const { options, answerIndex } = buildOptions(correctText, [
      formatDecimalAnswer(a ** x, 2, 1),
      formatDecimalAnswer(1 / (a ** (x - 1)), 4, 2),
      formatDecimalAnswer(1 / (a * x), 4, 2)
    ], rng);
    return {
      prompt: `Evaluate ${a}^(-${x}).`,
      options,
      answerIndex,
      explanation: `A negative exponent means reciprocal: ${a}^(-${x}) = 1 / ${a}^${x} = ${correctText}.`
    };
  },

  trigonometry(rng, grade, config, index, difficulty) {
    if (config.level <= 10) {
      const tier = Math.max(1, Math.min(5, difficulty));
      const roundTenth = (value) => Math.round(value * 10) / 10;

      if (tier === 1) {
        const ratio = ["sine", "cosine", "tangent"][index % 3];
        const descriptions = {
          sine: ["opposite / hypotenuse", "adjacent / hypotenuse", "opposite / adjacent", "hypotenuse / opposite"],
          cosine: ["adjacent / hypotenuse", "opposite / hypotenuse", "opposite / adjacent", "hypotenuse / adjacent"],
          tangent: ["opposite / adjacent", "adjacent / hypotenuse", "opposite / hypotenuse", "adjacent / opposite"]
        };
        const correct = descriptions[ratio][0];
        const { options, answerIndex } = buildOptions(correct, descriptions[ratio].slice(1), rng);
        const context = ["a roof triangle", "a wheelchair ramp", "a surveyor's right triangle", "a ladder diagram", "a support cable diagram"][Math.floor(index / 3) % 5];
        return {
          prompt: `In ${context}, which side ratio represents ${ratio} of angle theta?`,
          options,
          answerIndex,
          explanation: `${ratio[0].toUpperCase()}${ratio.slice(1)} uses ${correct}. Identify the sides relative to angle theta first.`
        };
      }

      if (tier === 2) {
        const angle = pick([25, 28, 32, 35, 38, 41, 47, 52, 56, 63], rng);
        const knownSide = number(6, 24, rng);
        const mode = index % 3;
        const ratios = [Math.sin(angle * Math.PI / 180), Math.cos(angle * Math.PI / 180), Math.tan(angle * Math.PI / 180)];
        const correct = roundTenth(knownSide * ratios[mode]);
        const labels = ["opposite side", "adjacent side", "opposite side"];
        const givens = ["hypotenuse", "hypotenuse", "adjacent side"];
        const ratioNames = ["sine", "cosine", "tangent"];
        const { options, answerIndex } = buildOptions(correct, [roundTenth(correct + 2), roundTenth(Math.max(0.1, correct - 2)), roundTenth(knownSide / ratios[mode])], rng);
        return {
          prompt: `A right triangle has an angle of ${angle} degrees and a ${givens[mode]} of ${knownSide} cm. Find the ${labels[mode]} to the nearest tenth.`,
          options,
          answerIndex,
          explanation: `Use ${ratioNames[mode]}: the required side is ${knownSide} x ${ratioNames[mode]}(${angle} degrees) = ${correct} cm.`
        };
      }

      if (tier === 3) {
        const adjacent = number(5, 22, rng);
        const opposite = number(4, 20, rng);
        const angle = roundTenth(Math.atan(opposite / adjacent) * 180 / Math.PI);
        const { options, answerIndex } = buildOptions(angle, [roundTenth(90 - angle), roundTenth(angle + 8), roundTenth(Math.max(1, angle - 8))], rng);
        return {
          prompt: `In a right triangle, the side opposite angle theta is ${opposite} m and the adjacent side is ${adjacent} m. Find theta to the nearest tenth of a degree.`,
          options,
          answerIndex,
          explanation: `tan(theta) = ${opposite}/${adjacent}. Therefore theta = tan^-1(${opposite}/${adjacent}) = ${angle} degrees.`
        };
      }

      if (tier === 4) {
        const angle = number(24, 58, rng);
        const horizontal = number(12, 48, rng);
        const eyeHeight = pick([1.5, 1.6, 1.7], rng);
        const height = roundTenth(horizontal * Math.tan(angle * Math.PI / 180) + eyeHeight);
        const { options, answerIndex } = buildOptions(height, [roundTenth(height - eyeHeight), roundTenth(horizontal / Math.tan(angle * Math.PI / 180)), roundTenth(height + horizontal / 10)], rng);
        return {
          prompt: `From ${horizontal} m away, a surveyor measures an angle of elevation of ${angle} degrees to the top of a building. The instrument is ${eyeHeight} m high. Find the building height to the nearest tenth.`,
          options,
          answerIndex,
          explanation: `First find the rise: ${horizontal}tan(${angle} degrees). Then add the ${eyeHeight} m instrument height, giving ${height} m.`
        };
      }

      const angle = number(28, 62, rng);
      const shadow = number(9, 35, rng);
      const firstHeight = roundTenth(shadow * Math.tan(angle * Math.PI / 180));
      const extension = number(2, 8, rng);
      const finalHeight = roundTenth(firstHeight + extension);
      const { options, answerIndex } = buildOptions(finalHeight, [firstHeight, roundTenth(finalHeight - extension / 2), roundTenth(shadow / Math.tan(angle * Math.PI / 180) + extension)], rng);
      return {
        prompt: `A tower casts a ${shadow} m shadow when the angle of elevation is ${angle} degrees. A ${extension} m antenna sits on top. Find the total height to the nearest tenth.`,
        options,
        answerIndex,
        explanation: `Tower height = ${shadow}tan(${angle} degrees) = ${firstHeight} m. Add the ${extension} m antenna: ${firstHeight} + ${extension} = ${finalHeight} m.`
      };
    }

    if (config.level < 12) {
      if (index % 3 === 0) {
        const wideSinAngles = [120, 135, 150, 210, 225, 240, 300, 315, 330];
        const angle = wideSinAngles[Math.floor(index / 3) % wideSinAngles.length];
        const sinMap = {
          120: "sqrt(3)/2",
          135: "sqrt(2)/2",
          150: "1/2",
          210: "-1/2",
          225: "-sqrt(2)/2",
          240: "-sqrt(3)/2",
          300: "-sqrt(3)/2",
          315: "-sqrt(2)/2",
          330: "-1/2"
        };
        const correct = sinMap[angle];
        const distractorPool = ["1/2", "-1/2", "sqrt(2)/2", "-sqrt(2)/2", "sqrt(3)/2", "-sqrt(3)/2"];
        const { options, answerIndex } = buildOptions(correct, distractorPool.filter((item) => item !== correct).slice(0, 3), rng);
        return {
          prompt: `What is sin(${angle} degrees)?`,
          options,
          answerIndex,
          explanation: `Use the unit circle and the reference angle. sin(${angle} degrees) = ${correct}.`
        };
      }

      if (index % 3 === 1) {
        const degreePool = [30, 45, 60, 90, 120, 135, 150, 180];
        const degree = degreePool[Math.floor(index / 3) % degreePool.length];
        const radianMap = {
          30: "pi/6",
          45: "pi/4",
          60: "pi/3",
          90: "pi/2",
          120: "2pi/3",
          135: "3pi/4",
          150: "5pi/6",
          180: "pi"
        };
        const correct = radianMap[degree];
        const { options, answerIndex } = buildOptions(correct, ["pi/6", "pi/4", "pi/3", "pi/2", "2pi/3", "3pi/4", "5pi/6", "pi"].filter((item) => item !== correct).slice(0, 3), rng);
        return {
          prompt: `Convert ${degree} degrees to radians.`,
          options,
          answerIndex,
          explanation: `Multiply by pi/180. ${degree} degrees = ${correct} radians.`
        };
      }

      const solveOccurrence = Math.floor(index / 3);
      const solveMode = ["sinPositive", "cosPositive"][solveOccurrence % 2];
      const value = [30, 45, 60][solveOccurrence % 3];
      const sinVal = value === 30 ? "1/2" : value === 45 ? "sqrt(2)/2" : "sqrt(3)/2";
      const cosVal = value === 30 ? "sqrt(3)/2" : value === 45 ? "sqrt(2)/2" : "1/2";

      if (solveMode === "sinPositive") {
        const second = 180 - value;
        const correct = `${value} degrees and ${second} degrees`;
        const { options, answerIndex } = buildOptions(correct, [
          `${value} degrees only`,
          `${second} degrees only`,
          `${180 + value} degrees and ${360 - value} degrees`
        ], rng);
        return {
          prompt: `On 0 degrees to 360 degrees, solve sin(x) = ${sinVal}.`,
          options,
          answerIndex,
          explanation: `Sine is positive in Quadrants I and II. The solutions are ${value} degrees and ${second} degrees.`
        };
      }

      const second = 360 - value;
      const correct = `${value} degrees and ${second} degrees`;
      const { options, answerIndex } = buildOptions(correct, [
        `${value} degrees only`,
        `${second} degrees only`,
        `${180 - value} degrees and ${180 + value} degrees`
      ], rng);
      return {
        prompt: `On 0 degrees to 360 degrees, solve cos(x) = ${cosVal}.`,
        options,
        answerIndex,
        explanation: `Cosine is positive in Quadrants I and IV. The solutions are ${value} degrees and ${second} degrees.`
      };
    }

    if (index % 3 === 0) {
      const wideCosAngles = [0, 30, 45, 60, 90, 120, 135, 150, 180];
      const angle = wideCosAngles[Math.floor(index / 3) % wideCosAngles.length];
      const cosMap = {
        0: "1",
        30: "sqrt(3)/2",
        45: "sqrt(2)/2",
        60: "1/2",
        90: "0",
        120: "-1/2",
        135: "-sqrt(2)/2",
        150: "-sqrt(3)/2",
        180: "-1"
      };
      const correct = cosMap[angle];
      const distractorPool = ["1", "-1", "0", "1/2", "-1/2", "sqrt(2)/2", "-sqrt(2)/2", "sqrt(3)/2", "-sqrt(3)/2"];
      const { options, answerIndex } = buildOptions(correct, distractorPool.filter((item) => item !== correct).slice(0, 3), rng);
      return {
        prompt: `What is cos(${angle} degrees)?`,
        options,
        answerIndex,
        explanation: `From the unit circle, cos(${angle} degrees) = ${correct}.`
      };
    }

    if (index % 3 === 1) {
      const tanMap = {
        0: "0", 30: "1/sqrt(3)", 45: "1", 60: "sqrt(3)",
        120: "-sqrt(3)", 135: "-1", 150: "-1/sqrt(3)", 180: "0"
      };
      const wideTanAngles = [0, 30, 45, 60, 120, 135, 150, 180];
      const angle = wideTanAngles[Math.floor(index / 3) % wideTanAngles.length];
      const correct = tanMap[angle];
      const distractorPool = ["0", "1", "-1", "sqrt(3)", "-sqrt(3)", "1/sqrt(3)", "-1/sqrt(3)"];
      const { options, answerIndex } = buildOptions(correct, distractorPool.filter((item) => item !== correct).slice(0, 3), rng);
      return {
        prompt: `What is tan(${angle} degrees)?`,
        options,
        answerIndex,
        explanation: `Use tan(x) = sin(x) / cos(x). So tan(${angle} degrees) = ${correct}.`
      };
    }

    const identityQuestions = [
      {
        prompt: `Which identity is equal to tan(x)?`,
        correct: "sin(x) / cos(x)",
        distractors: ["cos(x) / sin(x)", "1 / cos(x)", "1 / sin(x)"],
        explanation: `The quotient identity says tan(x) = sin(x) / cos(x).`
      },
      {
        prompt: `Which identity always equals 1, for any angle x?`,
        correct: "sin^2(x) + cos^2(x)",
        distractors: ["sin(x) + cos(x)", "sin(x) - cos(x)", "tan(x) + 1"],
        explanation: `The Pythagorean identity states sin^2(x) + cos^2(x) = 1 for every angle x.`
      },
      {
        prompt: `Which expression is the reciprocal identity for sec(x)?`,
        correct: "1 / cos(x)",
        distractors: ["1 / sin(x)", "sin(x) / cos(x)", "cos(x) / sin(x)"],
        explanation: `Secant is defined as the reciprocal of cosine, so sec(x) = 1 / cos(x).`
      },
      {
        prompt: `Which expression is the reciprocal identity for csc(x)?`,
        correct: "1 / sin(x)",
        distractors: ["1 / cos(x)", "sin(x) / cos(x)", "cos(x) / sin(x)"],
        explanation: `Cosecant is defined as the reciprocal of sine, so csc(x) = 1 / sin(x).`
      },
      {
        prompt: `Which identity is equal to cot(x)?`,
        correct: "cos(x) / sin(x)",
        distractors: ["sin(x) / cos(x)", "1 / cos(x)", "1 / sin(x)"],
        explanation: `Cotangent is the reciprocal of tangent, so cot(x) = cos(x) / sin(x).`
      }
    ];
    const chosen = identityQuestions[Math.floor(index / 3) % identityQuestions.length];
    const { options, answerIndex } = buildOptions(chosen.correct, chosen.distractors, rng);
    return {
      prompt: chosen.prompt,
      options,
      answerIndex,
      explanation: chosen.explanation
    };
  },

  calculus(rng, grade, config, index, difficulty) {
    if (config.skill === "derivativeApplications") {
      const mode = index % 3;

      if (mode === 0) {
        const a = number(1, difficultyStep(3, difficulty, 14), rng);
        const b = number(1, difficultyStep(4, difficulty, 16), rng);
        const t = number(1, difficultyStep(2, difficulty, 8), rng);
        const correct = (2 * a * t) + b;
        const { options, answerIndex } = buildOptions(correct, [correct + a, correct - a, (a * t * t) + (b * t)], rng);
        return {
          prompt: `An object's position is s(t) = ${a}t^2 + ${b}t. What is its velocity (ds/dt) when t = ${t}?`,
          options,
          answerIndex,
          explanation: `Velocity is the derivative of position: s'(t) = ${2 * a}t + ${b}. At t = ${t}, s'(${t}) = ${2 * a}(${t}) + ${b} = ${correct}.`
        };
      }

      if (mode === 1) {
        const coefficient = number(2, difficultyStep(3, difficulty, 10), rng);
        const power = number(2, difficulty <= 3 ? 3 : 5, rng);
        const x = number(1, difficultyStep(2, difficulty, 5), rng);
        const derivativeCoefficient = coefficient * power;
        const correct = derivativeCoefficient * (x ** (power - 1));
        const { options, answerIndex } = buildOptions(correct, [correct + derivativeCoefficient, correct - derivativeCoefficient, coefficient * (x ** power)], rng);
        return {
          prompt: `For f(x) = ${coefficient}x^${power}, what is the slope of the tangent line at x = ${x}?`,
          options,
          answerIndex,
          explanation: `First find f'(x) = ${derivativeCoefficient}x^${power - 1} using the power rule. Then substitute x = ${x}: f'(${x}) = ${correct}.`
        };
      }

      const a = number(2, difficultyStep(3, difficulty, 8), rng);
      const b = number(1, difficultyStep(4, difficulty, 10), rng);
      const c = number(1, 10, rng);
      const correct = (2 * a) + b;
      const { options, answerIndex } = buildOptions(correct, [correct + a, correct - a, a + b], rng);
      return {
        prompt: `A cost function is C(x) = ${a}x^2 + ${b}x + ${c}. What is the marginal cost (C'(x)) when x = 1?`,
        options,
        answerIndex,
        explanation: `Marginal cost is the derivative: C'(x) = ${2 * a}x + ${b}. At x = 1, C'(1) = ${2 * a}(1) + ${b} = ${correct}.`
      };
    }

    const mode = index % 3;

    if (mode === 1) {
      const a = number(1, difficultyStep(3, difficulty, 10), rng);
      const target = number(-3, 3, rng);
      const b = number(-5, 5, rng);
      const correct = (a * target) + b;
      const { options, answerIndex } = buildOptions(correct, [correct + a, correct - a, a + b], rng);
      return {
        prompt: `What is the limit as x approaches ${target} of ${a}x ${b < 0 ? "-" : "+"} ${Math.abs(b)}?`,
        options,
        answerIndex,
        explanation: `Because this function is continuous, substitute directly: ${a}(${target}) ${b < 0 ? "-" : "+"} ${Math.abs(b)} = ${correct}.`
      };
    }

    if (mode === 2) {
      const coefA = number(1, difficultyStep(3, difficulty, 12), rng);
      const powerA = number(2, difficulty <= 3 ? 3 : 5, rng);
      const coefB = number(1, difficultyStep(3, difficulty, 12), rng);
      const correct = `${coefA * powerA}x^${powerA - 1} + ${coefB}`;
      const { options, answerIndex } = buildOptions(correct, [
        `${coefA * powerA}x^${powerA} + ${coefB}`,
        `${coefA}x^${powerA - 1} + ${coefB}`,
        `${coefA * powerA}x^${powerA - 1}`
      ], rng);
      return {
        prompt: `What is the derivative of ${coefA}x^${powerA} + ${coefB}x?`,
        options,
        answerIndex,
        explanation: `Differentiate each term with the power rule: d/dx(${coefA}x^${powerA}) = ${coefA * powerA}x^${powerA - 1}, and d/dx(${coefB}x) = ${coefB}. So the derivative is ${correct}.`
      };
    }

    const coefficient = number(2, difficultyStep(3, difficulty, 16), rng);
    const power = number(2, difficulty <= 3 ? 4 : 7, rng);
    const correct = `${coefficient * power}x^${power - 1}`;
    const { options, answerIndex } = buildOptions(correct, [
      `${coefficient + power}x^${power - 1}`,
      `${coefficient * power}x^${power}`,
      `${power}x^${coefficient - 1}`
    ], rng);
    return {
      prompt: `What is the derivative of ${coefficient}x^${power}?`,
      options,
      answerIndex,
      explanation: `Use the power rule: d/dx(ax^n) = anx^(n-1), so the derivative is ${correct}.`
    };
  },

  financialMath(rng, grade, config, index, difficulty) {
    if (config.level >= 12) {
      if (index % 3 === 0) {
        const principal = number(500, difficultyStep(1500, difficulty, 6000), rng);
        const rate = pick(difficulty <= 3 ? [3, 4, 5, 6, 7] : [3, 4, 5, 6, 7, 8, 9, 10], rng);
        const years = number(2, difficultyStep(4, difficulty, 10), rng);
        const correct = (principal * ((1 + rate / 100) ** years)).toFixed(2);
        const { options, answerIndex } = buildOptions(correct, [
          (principal * (1 + (rate / 100) * years)).toFixed(2),
          (principal * ((1 + rate / 100) ** (years - 1))).toFixed(2),
          (principal + (rate * years)).toFixed(2)
        ], rng);
        return {
          prompt: `What is the value of $${principal} invested at ${rate}% compounded annually for ${years} years?`,
          options: options.map((option) => `$${option}`),
          answerIndex,
          explanation: `Use A = P(1 + r)^t. So A = ${principal}(1 + ${rate}/100)^${years} = $${correct}.`
        };
      }

      if (index % 3 === 1) {
        const payment = number(100, difficultyStep(250, difficulty, 800), rng);
        const months = pick(difficulty <= 3 ? [12, 24, 36] : [12, 24, 36, 48, 60], rng);
        const correct = payment * months;
        const { options, answerIndex } = buildOptions(correct, [
          correct + payment,
          correct - payment,
          payment + months
        ], rng);
        return {
          prompt: `A student saves $${payment} each month for ${months} months. How much money is saved in total before interest?`,
          options: options.map((option) => `$${option}`),
          answerIndex,
          explanation: `Multiply the monthly deposit by the number of months: ${payment} x ${months} = $${correct}.`
        };
      }

      const currentValue = number(800, difficultyStep(2000, difficulty, 8000), rng);
      const growthRate = pick(difficulty <= 3 ? [2, 3, 4, 5] : [2, 3, 4, 5, 6, 7, 8], rng);
      const years = number(2, difficultyStep(3, difficulty, 8), rng);
      const correct = (currentValue * ((1 + growthRate / 100) ** years)).toFixed(2);
      const { options, answerIndex } = buildOptions(correct, [
        (currentValue * (1 + (growthRate / 100) * years)).toFixed(2),
        (currentValue * ((1 + growthRate / 100) ** (years - 1))).toFixed(2),
        (currentValue + (growthRate * years)).toFixed(2)
      ], rng);
      return {
        prompt: `An investment of $${currentValue} grows by ${growthRate}% per year. What is its value after ${years} years if growth compounds yearly?`,
        options: options.map((option) => `$${option}`),
        answerIndex,
        explanation: `Compound growth uses repeated multiplication: ${currentValue}(1 + ${growthRate}/100)^${years} = $${correct}.`
      };
    }

    if (index % 2 === 0) {
      const price = number(20, difficultyStep(40, difficulty, 850), rng);
      const discount = pick(difficulty <= 3 ? [5, 10, 15, 20, 25] : [5, 10, 12, 15, 18, 20, 25, 30, 35], rng);
      const correct = (price * (1 - discount / 100)).toFixed(2);
      const { options, answerIndex } = buildOptions(correct, [
        (price * (discount / 100)).toFixed(2),
        (price * (1 + discount / 100)).toFixed(2),
        (price - discount).toFixed(2)
      ], rng);
      return {
        prompt: `A jacket costs $${price}. After a ${discount}% discount, what is the sale price?`,
        options: options.map((option) => `$${option}`),
        answerIndex,
        explanation: `Discounted price = ${price} x (1 - ${discount}/100) = $${correct}.`
      };
    }

    const principal = number(100, difficultyStep(150, difficulty, 7000), rng);
    const rate = pick(difficulty <= 3 ? [2, 3, 4, 5, 6] : [2.5, 3, 4.5, 5, 6.5, 8], rng);
    const correct = (principal * rate / 100).toFixed(2);
    const { options, answerIndex } = buildOptions(correct, [
      (principal + principal * rate / 100).toFixed(2),
      (principal / rate).toFixed(2),
      (principal * (rate + 1) / 100).toFixed(2)
    ], rng);
    return {
      prompt: `What is the simple interest on $${principal} for 1 year at ${rate}%?`,
      options: options.map((option) => `$${option}`),
      answerIndex,
      explanation: `Simple interest = principal x rate = ${principal} x ${rate}% = $${correct}.`
    };
  },

  grade7ProbabilityMastery(rng, grade, config, index, difficulty) {
    const tabId = config.patTabId || "probability-basics";
    const groupsByTab = {
      "probability-basics": [
        probabilityMasteryGenerators.basics.slice(0, 3),
        probabilityMasteryGenerators.basics.slice(3, 5),
        probabilityMasteryGenerators.basics.slice(5)
      ],
      "organize-outcomes": [
        probabilityMasteryGenerators.organize.slice(0, 2),
        probabilityMasteryGenerators.organize.slice(2, 4),
        probabilityMasteryGenerators.organize.slice(4)
      ],
      "independent-events": [
        probabilityMasteryGenerators.independent.slice(0, 2),
        probabilityMasteryGenerators.independent.slice(2, 4),
        probabilityMasteryGenerators.independent.slice(4)
      ]
    };
    const groups = groupsByTab[tabId] || groupsByTab["probability-basics"];
    const builder = chooseFromProgressiveGroups(groups, rng, difficulty, index);
    const built = builder(rng, difficulty, index);
    const { options, answerIndex } = buildOptions(built.correct, built.distractors, rng);
    return {
      prompt: built.prompt,
      options,
      answerIndex,
      explanation: built.explanation,
      hint: built.hint,
      diagram: built.diagram
    };
  },

  crossGradeMastery(rng, grade, config, index, difficulty) {
    const built = buildCrossGradeMasteryQuestion(config.domain, rng, grade, index, difficulty);
    if (built) {
      return {
        ...built,
        hint: built.hint || "Start with the fraction or decimal form you already know, then convert or solve step by step."
      };
    }

    return buildEmergencyQuestion(
      makeCategory("mastery-fallback", "Topic Mastery", "Cross-grade mastery practice.", "numberSense", {}),
      grade,
      difficulty,
      index
    );
  },

  englishGrammar(rng, grade, config, index, difficulty) {
    const band = englishBand(grade);
    const pool = englishSkillPools.grammar[band];
    const item = chooseFromProgressivePool(pool, rng, difficulty, index, 15);
    const { options, answerIndex } = buildOptions(item.correct, item.distractors, rng);

    return {
      prompt: item.prompt,
      options,
      answerIndex,
      explanation: item.explanation,
      hint: item.hint
    };
  },

  englishReading(rng, grade, config, index, difficulty) {
    const band = englishBand(grade);
    const pool = englishSkillPools.reading[band];
    const item = chooseFromProgressivePool(pool, rng, difficulty, index, 15);
    const { options, answerIndex } = buildOptions(item.correct, item.distractors, rng);

    return {
      prompt: item.prompt,
      options,
      answerIndex,
      explanation: item.explanation,
      hint: item.hint
    };
  },

  englishVocabulary(rng, grade, config, index, difficulty) {
    const band = englishBand(grade);
    const pool = englishSkillPools.vocabulary[band];
    const item = chooseFromProgressivePool(pool, rng, difficulty, index, 15);
    const { options, answerIndex } = buildOptions(item.correct, item.distractors, rng);

    return {
      prompt: item.prompt,
      options,
      answerIndex,
      explanation: item.explanation,
      hint: item.hint
    };
  },

  englishWriting(rng, grade, config, index, difficulty) {
    const band = englishBand(grade);
    const pool = englishWritingPools[band];
    const item = chooseFromProgressivePool(pool, rng, difficulty, index, 15);
    const { options, answerIndex } = buildOptions(item.correct, item.distractors, rng);

    return {
      prompt: item.prompt,
      options,
      answerIndex,
      explanation: item.explanation,
      hint: item.hint
    };
  },

  englishPatPartA(rng, grade, config, index, difficulty) {
    const essayGroups = [
      [patPartAEssayIntroductionChoices, patPartAThesisChoices, patPartAEssaySupportChoices],
      [patPartAOrganizationChoices, patPartARevisionChoices, patPartAVocabularyChoices],
      [patPartAEssayConclusionChoices, patPartAConventionsChoices, englishPatPartAEssayGeneralPool]
    ];
    const narrativeGroups = [
      [patPartANarrativeIntroductionChoices, patPartANarrativeSupportChoices],
      [patPartAOrganizationChoices, patPartARevisionChoices, patPartAVoiceChoices],
      [patPartANarrativeConclusionChoices, patPartAConventionsChoices, englishPatPartANarrativeGeneralPool]
    ];
    const businessGroups = [
      [englishPatPartABusinessWritingPool.slice(0, 4)],
      [englishPatPartABusinessWritingPool.slice(0, 8)],
      [englishPatPartABusinessWritingPool]
    ];
    const item = config.patTabId === "narrative"
      ? chooseFromProgressiveGroups(narrativeGroups, rng, difficulty, index)
      : config.patTabId === "business-writing"
        ? chooseFromProgressiveGroups(businessGroups, rng, difficulty, index)
        : chooseFromProgressiveGroups(essayGroups, rng, difficulty, index);
    const { options, answerIndex } = buildOptions(item.correct, item.distractors, rng);

    return {
      prompt: item.prompt,
      options,
      answerIndex,
      explanation: item.explanation,
      hint: item.hint
    };
  },

  englishPatPartB(rng, grade, config, index, difficulty) {
    const pool = config.patTabId === "visual"
      ? englishPatPartBVisualPool
      : config.patTabId === "informational"
        ? englishPatPartBInformationalPool
        : englishPatPartBLiteraryPool;
    const item = chooseFromProgressivePool(pool, rng, difficulty, index, 15);
    const { options, answerIndex } = buildOptions(item.correct, item.distractors, rng);

    return {
      prompt: item.prompt,
      options,
      answerIndex,
      explanation: item.explanation,
      hint: item.hint
    };
  },

  englishPatGrade6PartB(rng, grade, config, index, difficulty) {
    const pool = config.patTabId === "poetry"
      ? englishPatGrade6PartBPoetryPool
      : config.patTabId === "visual"
        ? englishPatGrade6PartBVisualPool
        : config.patTabId === "informational"
          ? englishPatGrade6PartBInformationalPool
          : englishPatGrade6PartBStoryPool;
    const item = chooseFromProgressivePool(pool, rng, difficulty, index, 15);
    const { options, answerIndex } = buildOptions(item.correct, item.distractors, rng);

    return {
      prompt: item.prompt,
      options,
      answerIndex,
      explanation: item.explanation,
      hint: item.hint
    };
  }
};

function renderHint(question) {
  if (!elements.hintButton || !elements.hintBox) {
    return;
  }

  const hasHint = Boolean(question.hint);
  elements.hintButton.classList.add("hidden");
  elements.hintButton.textContent = `${UI_EMOJIS.hint} Show Hint`;
  elements.hintBox.className = "feedback-box hint-box hidden";
  elements.hintBox.innerHTML = hasHint ? `<strong>${UI_EMOJIS.hint} Hint</strong><div>${question.hint}</div>` : "";
}

function toggleHint() {
  if (!elements.hintButton || !elements.hintBox) {
    return;
  }

  const isHidden = elements.hintBox.classList.contains("hidden");
  elements.hintBox.classList.toggle("hidden", !isHidden);
  elements.hintButton.textContent = isHidden ? `${UI_EMOJIS.hint} Hide Hint` : `${UI_EMOJIS.hint} Show Hint`;
}

function roundByGrade(value, grade) {
  const unit = roundUnit(grade);
  return Math.round(value / unit) * unit;
}

function roundUnit(grade) {
  if (grade <= 2) {
    return 10;
  }
  if (grade <= 4) {
    return 100;
  }
  if (grade <= 6) {
    return 1000;
  }
  return 10;
}

function roundLabel(grade) {
  if (grade <= 2) {
    return "10";
  }
  if (grade <= 4) {
    return "100";
  }
  if (grade <= 6) {
    return "1,000";
  }
  return "10";
}

function placeValueQuestion(value, grade) {
  const placeNames = ["ones", "tens", "hundreds", "thousands", "ten-thousands", "hundred-thousands"];
  let adjustedValue = value;
  if (grade <= 2 && adjustedValue < 10) {
    adjustedValue += 10;
  }
  if (grade >= 3 && adjustedValue < 100) {
    adjustedValue += 100;
  }
  if (grade >= 5 && adjustedValue < 1000) {
    adjustedValue += 1000;
  }

  const text = String(adjustedValue);
  const desiredIndex = grade <= 1 ? 0 : grade <= 2 ? 1 : grade <= 4 ? 2 : Math.min(5, text.length - 1);
  const index = Math.min(text.length - 1, desiredIndex);
  const digit = Number(text[text.length - 1 - index]);
  return {
    prompt: `In the number ${adjustedValue}, what digit is in the ${placeNames[index]} place?`,
    answer: String(digit),
    distractors: [...new Set([String((digit + 1) % 10), String((digit + 2) % 10), String((digit + 9) % 10)])],
    explanation: `In ${adjustedValue}, the ${placeNames[index]} digit is ${digit}.`
  };
}

function angleDiagram(angle) {
  return `
    <svg viewBox="0 0 240 160" aria-label="Angle diagram">
      <line x1="40" y1="120" x2="120" y2="120" stroke="#1d2433" stroke-width="4" />
      <line x1="40" y1="120" x2="${40 + Math.cos((angle * Math.PI) / 180) * 80}" y2="${120 - Math.sin((angle * Math.PI) / 180) * 80}" stroke="#0f7b6c" stroke-width="4" />
      <path d="M70 120 A30 30 0 0 1 ${40 + Math.cos((angle * Math.PI) / 180) * 30} ${120 - Math.sin((angle * Math.PI) / 180) * 30}" fill="none" stroke="#f4b860" stroke-width="4" />
      <text x="90" y="105" font-size="16" fill="#1d2433">${angle} deg</text>
    </svg>
  `;
}

function triangleDiagram(a, b) {
  return `
    <svg viewBox="0 0 240 170" aria-label="Right triangle diagram">
      <polygon points="40,130 160,130 40,40" fill="#edf7f5" stroke="#0f7b6c" stroke-width="4" />
      <text x="88" y="148" font-size="16" fill="#1d2433">${a}</text>
      <text x="12" y="92" font-size="16" fill="#1d2433">${b}</text>
      <rect x="40" y="114" width="16" height="16" fill="none" stroke="#f4b860" stroke-width="3" />
    </svg>
  `;
}

function cubeDiagram(side) {
  return `
    <svg viewBox="0 0 240 190" aria-label="Cube diagram">
      <rect x="55" y="55" width="90" height="90" fill="#f8fbff" stroke="#0f7b6c" stroke-width="4" />
      <rect x="85" y="30" width="90" height="90" fill="#edf7f5" stroke="#0f7b6c" stroke-width="4" />
      <line x1="55" y1="55" x2="85" y2="30" stroke="#0f7b6c" stroke-width="4" />
      <line x1="145" y1="55" x2="175" y2="30" stroke="#0f7b6c" stroke-width="4" />
      <line x1="145" y1="145" x2="175" y2="120" stroke="#0f7b6c" stroke-width="4" />
      <text x="100" y="170" font-size="16" fill="#1d2433">${side} cm</text>
    </svg>
  `;
}

function prismDiagram(length, width, height) {
  return `
    <svg viewBox="0 0 280 190" aria-label="Rectangular prism diagram">
      <rect x="45" y="65" width="120" height="80" fill="#f8fbff" stroke="#0f7b6c" stroke-width="4" />
      <rect x="95" y="35" width="120" height="80" fill="#edf7f5" stroke="#0f7b6c" stroke-width="4" />
      <line x1="45" y1="65" x2="95" y2="35" stroke="#0f7b6c" stroke-width="4" />
      <line x1="165" y1="65" x2="215" y2="35" stroke="#0f7b6c" stroke-width="4" />
      <line x1="165" y1="145" x2="215" y2="115" stroke="#0f7b6c" stroke-width="4" />
      <text x="92" y="160" font-size="15" fill="#1d2433">l = ${length} cm</text>
      <text x="220" y="82" font-size="15" fill="#1d2433">h = ${height} cm</text>
      <text x="152" y="28" font-size="15" fill="#1d2433">w = ${width} cm</text>
    </svg>
  `;
}

function buildWritingKeywords(answer) {
  return answer
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3)
    .filter((word, index, list) => list.indexOf(word) === index)
    .slice(0, 4);
}

function evaluateWritingResponse(question, response) {
  const normalized = response.toLowerCase();
  const words = response.trim().split(/\s+/).filter(Boolean);
  const keywordHits = (question.requiredKeywords || []).filter((keyword) => normalized.includes(keyword));
  const startsWithCapital = /^[A-Z]/.test(response.trim());
  const hasEndingPunctuation = /[.!?]$/.test(response.trim());
  const meetsLength = words.length >= (question.minWords || 5);
  const correct = keywordHits.length >= Math.max(1, Math.ceil((question.requiredKeywords || []).length / 2)) && meetsLength;

  const checks = [];
  if (meetsLength) {
    checks.push(`You wrote enough detail with ${words.length} words.`);
  } else {
    checks.push(`Try to write a little more detail. Aim for at least ${question.minWords || 5} words.`);
  }
  if (startsWithCapital) {
    checks.push("You started with a capital letter.");
  } else {
    checks.push("Begin your answer with a capital letter.");
  }
  if (hasEndingPunctuation) {
    checks.push("You ended with punctuation.");
  } else {
    checks.push("Finish your answer with a full stop, question mark, or exclamation mark.");
  }
  if (keywordHits.length) {
    checks.push(`Good idea words used: ${keywordHits.join(", ")}.`);
  } else if ((question.requiredKeywords || []).length) {
    checks.push(`Try to include key idea words like: ${(question.requiredKeywords || []).join(", ")}.`);
  }

  const explanation = `${correct ? "Nice writing." : "This needs a little more work."} ${checks.join(" ")} Model answer: ${question.sampleAnswer}`;
  return { correct, explanation };
}

function showHintAfterWrong(question) {
  if (!elements.hintButton || !elements.hintBox || !question.hint) {
    return;
  }

  elements.hintButton.classList.remove("hidden");
  elements.hintButton.textContent = `${UI_EMOJIS.hint} Show Hint`;
  elements.hintBox.classList.add("hidden");
}

function renderHint(question) {
  if (!elements.hintButton || !elements.hintBox) {
    return;
  }

  const hasHint = Boolean(question.hint);
  elements.hintButton.classList.add("hidden");
  elements.hintButton.textContent = `${UI_EMOJIS.hint} Show Hint`;
  elements.hintBox.className = "feedback-box hint-box hidden";
  elements.hintBox.innerHTML = hasHint ? `<strong>${UI_EMOJIS.hint} Hint</strong><div>${question.hint}</div>` : "";
}

function toggleHint() {
  if (!elements.hintButton || !elements.hintBox) {
    return;
  }

  const isHidden = elements.hintBox.classList.contains("hidden");
  elements.hintBox.classList.toggle("hidden", !isHidden);
  elements.hintButton.textContent = isHidden ? `${UI_EMOJIS.hint} Hide Hint` : `${UI_EMOJIS.hint} Show Hint`;
}

