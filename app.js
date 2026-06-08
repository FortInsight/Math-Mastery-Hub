const grades = Array.from({ length: 12 }, (_, index) => index + 1);

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
    makeCategory("add-sub", "Addition & Subtraction", "Add and subtract with regrouping ideas.", "additionSubtraction", { maxA: 100, maxB: 100 }),
    makeCategory("skip-counting", "Skip Counting", "Build fluency with 2s, 5s, 10s, and repeated patterns.", "patternsData", { level: 2 }),
    makeCategory("measurement", "Measurement & Money", "Tell time, count coins, and compare measures.", "measurement", { level: 2 }),
    makeCategory("shapes", "Shapes & Fractions", "Name shapes and equal parts.", "geometry", { level: 2 }),
    makeCategory("fractions", "Equal Parts", "Recognize halves, thirds, and fourths in shapes.", "fractionsDecimalsPercent", { stage: "basicFractions" }),
    makeCategory("patterns", "Patterns & Graphs", "Use skip counting and read simple graphs.", "patternsData", { level: 2 })
  ],
  3: [
    makeCategory("numbers", "Numbers & Place Value", "Build fluency with numbers to 10,000.", "numberSense", { min: 100, max: 10000 }),
    makeCategory("mult-div", "Multiplication & Division", "Use arrays, groups, and fact families.", "multiplicationDivision", { max: 10 }),
    makeCategory("fractions", "Fractions", "Understand halves, thirds, fourths, and simple comparisons.", "fractionsDecimalsPercent", { stage: "basicFractions" }),
    makeCategory("measurement", "Measurement", "Perimeter, time, mass, capacity, and money.", "measurement", { level: 3 }),
    makeCategory("geometry", "Geometry & Data", "Angles, shapes, bar graphs, and tables.", "geometry", { level: 3 }),
    makeCategory("graphs", "Graphs & Tables", "Read bar graphs, tables, and simple data displays.", "patternsData", { level: 3 }),
    makeCategory("money", "Money Problems", "Solve everyday spending and change questions.", "measurement", { level: 3 })
  ],
  4: [
    makeCategory("numbers", "Whole Numbers", "Compare, round, and estimate larger numbers.", "numberSense", { min: 100, max: 100000 }),
    makeCategory("mult-div", "Multiplication & Division", "Multi-step operations with larger factors.", "multiplicationDivision", { max: 12 }),
    makeCategory("fractions", "Fractions & Decimals", "Equivalent fractions and tenths.", "fractionsDecimalsPercent", { stage: "fractionDecimalBridge" }),
    makeCategory("measurement", "Measurement & Area", "Area, perimeter, elapsed time, and conversions.", "measurement", { level: 4 }),
    makeCategory("patterns", "Patterns & Algebra", "Number patterns and input-output rules.", "patternsData", { level: 4 }),
    makeCategory("geometry", "Lines, Angles & Shapes", "Study lines, angles, symmetry, and polygons.", "geometry", { level: 4 }),
    makeCategory("data", "Data & Graphing", "Read charts, graphs, and line plot style questions.", "patternsData", { level: 4 })
  ],
  5: [
    makeCategory("numbers", "Number Sense", "Place value, rounding, and powers of 10.", "numberSense", { min: 1000, max: 1000000 }),
    makeCategory("operations", "Operations", "Multiply, divide, and solve word problems.", "multiplicationDivision", { max: 20 }),
    makeCategory("fractions", "Fractions, Decimals & Percent", "Operate with fractions and decimals.", "fractionsDecimalsPercent", { stage: "upperElementary" }),
    makeCategory("geometry", "Geometry", "Volume, coordinates, and classification.", "geometry", { level: 5 }),
    makeCategory("data", "Data & Patterns", "Graphs, mean ideas, and pattern rules.", "patternsData", { level: 5 }),
    makeCategory("measurement", "Measurement & Conversions", "Convert units and solve area and volume questions.", "measurement", { level: 5 }),
    makeCategory("graphing", "Coordinate Graphing", "Plot points and describe positions on a grid.", "geometry", { level: 5 })
  ],
  6: [
    makeCategory("numbers", "Ratios & Number Sense", "Factors, multiples, and rational number foundations.", "numberSense", { min: 10, max: 500 }),
    makeCategory("operations", "Fractions & Decimals", "Compute with fractions, decimals, and percent.", "fractionsDecimalsPercent", { stage: "middleSchoolStart" }),
    makeCategory("algebra", "Expressions & Equations", "Use variables, order of operations, and simple equations.", "algebra", { level: 6 }),
    makeCategory("geometry", "Geometry & Measurement", "Area, surface area, and volume.", "geometry", { level: 6 }),
    makeCategory("data", "Statistics", "Interpret data sets and probability language.", "statisticsProbability", { level: 6 }),
    makeCategory("ratios", "Ratios & Rates", "Use unit rates, ratio language, and percent ideas.", "ratiosProportions", { level: 6 }),
    makeCategory("integers", "Integers Intro", "Prepare for signed number thinking with ordered values.", "integersRational", { level: 6 })
  ],
  7: [
    makeCategory("integers", "Integers & Rational Numbers", "Add, subtract, multiply, and divide signed numbers.", "integersRational", { level: 7 }),
    makeCategory("algebra", "Algebraic Expressions", "Simplify expressions and solve equations.", "algebra", { level: 7 }),
    makeCategory("ratios", "Ratios & Proportions", "Rates, percent, and proportional thinking.", "ratiosProportions", { level: 7 }),
    makeCategory("geometry", "Geometry", "Angles, circles, scale drawings, and rotational symmetry.", "geometry", { level: 7 }),
    makeCategory("coordinates", "Coordinate Graphing", "Plot ordered pairs, read all four quadrants, and describe movement on the coordinate plane.", "functionsGraphing", { level: 7, skill: "coordinateGraphing" }),
    makeCategory("data", "Data & Probability", "Compare samples and experimental probability.", "statisticsProbability", { level: 7 }),
    makeCategory("probability-mastery", "Probability Mastery", "Study Grade 7 worksheet examples, then solve mastery questions with step-by-step solutions and sample-space models.", "grade7ProbabilityMastery", { level: 7, skill: "probability-mastery" }),
    makeCategory("equations", "Equations & Inequalities", "Solve one-step and multi-step equations and linear inequalities.", "algebra", { level: 7 }),
    makeCategory("percent", "Percent Applications", "Solve tax, discount, and percent change questions.", "ratiosProportions", { level: 7 })
  ],
  8: [
    makeCategory("numbers", "Rational & Irrational Numbers", "Classify numbers and use exponents.", "integersRational", { level: 8 }),
    makeCategory("algebra", "Linear Equations & Inequalities", "Solve linear equations and inequalities and analyze linear relationships.", "algebra", { level: 8 }),
    makeCategory("functions", "Functions", "Understand input-output rules, tables, and graphs.", "functionsGraphing", { level: 8 }),
    makeCategory("geometry", "Transformations & Geometry", "Congruence, similarity, rotational symmetry, and the Pythagorean theorem.", "geometry", { level: 8 }),
    makeCategory("data", "Statistics", "Scatter plots, lines of best fit, and probability.", "statisticsProbability", { level: 8 }),
    makeCategory("exponents", "Exponents & Roots", "Work with powers, roots, and scientific notation ideas.", "integersRational", { level: 8 }),
    makeCategory("systems", "Linear Patterns", "Compare patterns in tables, graphs, and equations.", "functionsGraphing", { level: 8.5 })
  ],
  9: [
    makeCategory("algebra", "Algebra Foundations", "Laws of exponents, factoring, solving equations, and linear inequalities.", "algebra", { level: 9 }),
    makeCategory("functions", "Linear Functions", "Slope, intercepts, tables, and graphs.", "functionsGraphing", { level: 9 }),
    makeCategory("geometry", "Geometry", "Triangles, similarity, and coordinate geometry.", "geometry", { level: 9 }),
    makeCategory("statistics", "Statistics & Probability", "Analyze distributions and probability models.", "statisticsProbability", { level: 9 }),
    makeCategory("financial", "Financial Math", "Discounts, tax, interest, and budgeting.", "financialMath", { level: 9 }),
    makeCategory("quadratics", "Intro to Quadratics", "Explore quadratic patterns, forms, and solutions.", "algebra", { level: 9.5 }),
    makeCategory("relations", "Relations & Graphs", "Interpret graphs, relations, and domain-range ideas.", "functionsGraphing", { level: 9 })
  ],
  10: [
    makeCategory("algebra", "Advanced Algebra", "Quadratics, radicals, and polynomial operations.", "algebra", { level: 10 }),
    makeCategory("functions", "Functions & Graphing", "Linear, quadratic, and exponential behaviour.", "functionsGraphing", { level: 10 }),
    makeCategory("trig", "Trigonometry", "Use right triangle ratios and angle relationships.", "trigonometry", { level: 10 }),
    makeCategory("statistics", "Statistics & Probability", "Normal ideas, variation, and event probability.", "statisticsProbability", { level: 10 }),
    makeCategory("geometry", "Measurement & Geometry", "Surface area, volume, and coordinate geometry.", "geometry", { level: 10 }),
    makeCategory("exponents", "Powers & Radicals", "Simplify radical and exponent expressions.", "algebra", { level: 10 }),
    makeCategory("finance", "Applied Financial Math", "Use percentage models, budgeting, and interest.", "financialMath", { level: 10 })
  ],
  11: [
    makeCategory("functions", "Functions", "Polynomial, rational, logarithmic, and exponential ideas.", "functionsGraphing", { level: 11 }),
    makeCategory("algebra", "Advanced Algebra", "Sequences, series, and equation solving.", "algebra", { level: 11 }),
    makeCategory("trig", "Trigonometry", "Unit circle, identities, and solving trig equations.", "trigonometry", { level: 11 }),
    makeCategory("statistics", "Statistics", "Sampling, distributions, and inference ideas.", "statisticsProbability", { level: 11 }),
    makeCategory("precalc", "Pre-Calculus", "Rates of change and model analysis.", "functionsGraphing", { level: 11.5 }),
    makeCategory("sequences", "Sequences & Series", "Work with arithmetic and geometric sequences.", "algebra", { level: 11 }),
    makeCategory("logarithms", "Exponential & Logarithmic Models", "Study growth, decay, and logarithmic behaviour.", "functionsGraphing", { level: 11.2 })
  ],
  12: [
    makeCategory("calculus", "Calculus", "Limits, derivatives, and real-world applications.", "calculus", { level: 12 }),
    makeCategory("advanced-func", "Advanced Functions", "Composite, inverse, and transformed functions.", "functionsGraphing", { level: 12 }),
    makeCategory("trig", "Trigonometry", "Advanced identities and modelling.", "trigonometry", { level: 12 }),
    makeCategory("statistics", "Statistics & Probability", "Expected value, inference, and models.", "statisticsProbability", { level: 12 }),
    makeCategory("financial", "Financial Math", "Loans, annuities, and growth models.", "financialMath", { level: 12 }),
    makeCategory("derivatives", "Derivatives & Applications", "Use derivative rules and interpret rates of change.", "calculus", { level: 12 }),
    makeCategory("integrated-func", "Function Transformations", "Combine advanced functions, graphs, and modelling.", "functionsGraphing", { level: 12.2 })
  ]
};

grades.forEach((grade) => {
  curriculum[grade].push(...makeEnglishCategories(grade));
});

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
  lastStudyTickAt: 0
};

const questionBankCache = new Map();
const levelQuestionCache = new Map();
let topicSearchCatalogCache = null;
const profilesStoreKey = "maths-mastery-profiles-v1";
const profilesStore = loadProfilesStore();
const guestStoreKey = "maths-mastery-guest-v1";
const guestStore = loadGuestStore();
const studyTickMs = 1000;

const elements = {
  profileNameLabel: document.getElementById("profile-name-label"),
  profileGradeLabel: document.getElementById("profile-grade-label"),
  profileNameInput: document.getElementById("profile-name"),
  profileGradeInput: document.getElementById("profile-grade"),
  profilePasswordInput: document.getElementById("profile-password"),
  createProfileButton: document.getElementById("create-profile-button"),
  loginProfileButton: document.getElementById("login-profile-button"),
  logoutProfileButton: document.getElementById("logout-profile-button"),
  profileMessage: document.getElementById("profile-message"),
  toggleProfilePanelButton: document.getElementById("toggle-profile-panel-button"),
  profilePanelContent: document.getElementById("profile-panel-content"),
  toggleGradePanelButton: document.getElementById("toggle-grade-panel-button"),
  gradePanelContent: document.getElementById("grade-panel-content"),
  gradeButtons: document.getElementById("grade-buttons"),
  mathCategorySelect: document.getElementById("math-category-select"),
  englishCategorySelect: document.getElementById("english-category-select"),
  topicSearchInput: document.getElementById("topic-search-input"),
  topicSearchButton: document.getElementById("topic-search-button"),
  clearSearchButton: document.getElementById("clear-search-button"),
  topicSearchResults: document.getElementById("topic-search-results"),
  categoryCurrentCard: document.getElementById("category-current-card"),
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
  resultsBreakdown: document.getElementById("results-breakdown"),
  retryLevelButton: document.getElementById("retry-level-button"),
  nextLevelButton: document.getElementById("next-level-button"),
  reviewSection: document.getElementById("review-section"),
  reviewLevelSelect: document.getElementById("review-level-select"),
  openReviewButton: document.getElementById("open-review-button"),
  reviewEmpty: document.getElementById("review-empty"),
  reviewDetails: document.getElementById("review-details"),
  reviewSummary: document.getElementById("review-summary"),
  reviewBreakdown: document.getElementById("review-breakdown")
};

init();

function init() {
  populateProfileGradeOptions();
  applyCurrentProfile();
  renderGradeButtons();
  renderCategories();
  attachEvents();
  renderScoreHistory();
  renderStudyTime();
  renderHeroActivity();
  startStudyTimer();
}

function attachEvents() {
  elements.createProfileButton.addEventListener("click", handleCreateProfile);
  elements.loginProfileButton.addEventListener("click", handleLoginProfile);
  elements.logoutProfileButton.addEventListener("click", handleLogoutProfile);
  elements.previousButton.addEventListener("click", moveToPreviousQuestion);
  elements.nextButton.addEventListener("click", moveToNextQuestion);
  elements.submitWritingButton?.addEventListener("click", submitWritingAnswer);
  elements.retryLevelButton.addEventListener("click", () => startLevel(state.selectedLevel));
  elements.nextLevelButton.addEventListener("click", moveToNextLevel);
  elements.openReviewButton.addEventListener("click", openSelectedReview);
  elements.resetTopicProgressButton?.addEventListener("click", resetSelectedTopicProgress);
  elements.hintButton?.addEventListener("click", toggleHint);
  elements.mathCategorySelect?.addEventListener("change", (event) => handleCategorySelect(event, "maths"));
  elements.englishCategorySelect?.addEventListener("change", (event) => handleCategorySelect(event, "english"));
  elements.topicSearchInput?.addEventListener("input", (event) => {
    state.searchQuery = event.target.value;
    renderTopicSearch();
  });
  elements.topicSearchButton?.addEventListener("click", renderTopicSearch);
  elements.clearSearchButton?.addEventListener("click", clearTopicSearch);
  elements.topicSearchResults?.addEventListener("click", handleTopicSearchJump);
  if (elements.toggleProfilePanelButton) {
    elements.toggleProfilePanelButton.addEventListener("click", toggleProfilePanel);
  }
  if (elements.toggleGradePanelButton) {
    elements.toggleGradePanelButton.addEventListener("click", toggleGradePanel);
  }
  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.addEventListener("beforeunload", flushStudyTime);
}

function toggleProfilePanel() {
  const isHidden = elements.profilePanelContent.classList.toggle("hidden");
  elements.toggleProfilePanelButton.textContent = isHidden ? "Show Profile" : "Hide Profile";
  elements.toggleProfilePanelButton.setAttribute("aria-expanded", String(!isHidden));
}

function toggleGradePanel() {
  const isHidden = elements.gradePanelContent.classList.toggle("hidden");
  elements.toggleGradePanelButton.textContent = isHidden ? "Show Grades" : "Hide Grades";
  elements.toggleGradePanelButton.setAttribute("aria-expanded", String(!isHidden));
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
      hideQuizViews();
      renderGradeButtons();
      renderCategories();
      renderTopicSearch();
      renderStudyTime();
    });
    elements.gradeButtons.appendChild(button);
  });
}

function renderCategories() {
  const categories = curriculum[state.selectedGrade];
  const completedLevels = getCompletedLevelsCount(state.selectedGrade);

  elements.selectedGradeLabel.textContent = `Grade ${state.selectedGrade}`;
  elements.saveStatusLabel.textContent = state.currentProfileId ? getCurrentProfile().name : "Guest browser";
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

  const selectedCategory = categories.find((category) => category.id === state.selectedCategoryId);
  if (!selectedCategory) {
    elements.categoryCurrentCard?.classList.add("hidden");
    elements.patTabSection?.classList.add("hidden");
    elements.probabilityModeSection?.classList.add("hidden");
    elements.probabilityExampleSection?.classList.add("hidden");
    if (elements.categoryCurrentCard) {
      elements.categoryCurrentCard.innerHTML = "";
    }
    return;
  }

  if (elements.categoryCurrentCard) {
    elements.categoryCurrentCard.classList.remove("hidden");
    elements.categoryCurrentCard.innerHTML = `
      <h3>${selectedCategory.title}</h3>
      <p>${selectedCategory.description}</p>
      <small>100 questions | 10 levels</small>
    `;
  }

  renderPatTabs(selectedCategory);
}

function getPatTabDefinitions(categoryId, grade = state.selectedGrade) {
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
  elements.hintButton.textContent = "💡 Show Hint";
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

  for (let level = 1; level <= 10; level += 1) {
    const button = document.createElement("button");
    button.type = "button";
    const savedAttempt = getSavedAttempt(state.selectedGrade, activeContext.key, level);
    const isCompleted = Boolean(savedAttempt);
    button.className = `level-card ${isCompleted ? "completed" : "pending"} ${level === state.selectedLevel ? "active" : ""}`;
    button.innerHTML = `
      <strong>Level ${level}</strong>
      <span>${isCompleted ? `Completed | Best ${savedAttempt.score}/10` : "Not completed yet"}</span>
    `;
    button.addEventListener("click", () => startLevel(level));
    elements.levelGrid.appendChild(button);
  }

  renderResetTopicButton();
}

function startLevel(level) {
  if (isProbabilityMasteryCategory() && state.selectedProbabilityMode !== "mastery") {
    state.selectedProbabilityMode = "mastery";
    renderProbabilityModeTabs(getSelectedCategory());
  }

  flushStudyTime();
  state.selectedLevel = level;
  state.currentQuestions = getQuestionsForLevel(state.selectedGrade, state.selectedCategoryId, state.selectedPatTab, level);
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;
  state.lastResults = [];
  state.questionResults = Array.from({ length: state.currentQuestions.length }, () => null);

  elements.resultsSection.classList.add("hidden");
  elements.quizSection.classList.remove("hidden");
  elements.reviewSection?.classList.add("hidden");
  renderLevels();
  renderQuestion();
  renderStudyTime();
  elements.quizSection?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderQuestion() {
  const question = state.currentQuestions[state.currentIndex];
  const questionNumber = state.currentIndex + 1;
  const existingResult = state.questionResults[state.currentIndex];
  const answeredCount = getAnsweredCount();
  const promptParts = splitQuestionPrompt(question.prompt);

  elements.quizMeta.textContent = `Grade ${state.selectedGrade} | ${getActiveCategoryContext().title} | Level ${state.selectedLevel}`;
  elements.questionTitle.textContent = `Question ${questionNumber} of 10`;
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
      button.textContent = option;
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

  elements.liveScore.textContent = `${state.score} / ${state.currentIndex + 1}`;
  elements.feedbackBox.classList.remove("hidden");
  elements.feedbackBox.classList.add(isCorrect ? "success" : "error");
  elements.feedbackBox.innerHTML = `
    <div class="feedback-reaction">
      <span class="feedback-emoji">${isCorrect ? "🎉" : "😅"}</span>
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
  elements.hintButton.textContent = "💡 Show Hint";
  elements.hintButton.textContent = "💡 Show Hint";
  elements.hintBox.className = "feedback-box hint-box hidden";
  elements.hintBox.innerHTML = hasHint ? `<strong>💡 Hint</strong><div>${question.hint}</div>` : "";
  elements.hintBox.innerHTML = hasHint ? `<strong>💡 Hint</strong><div>${question.hint}</div>` : "";
  elements.hintButton.textContent = "💡 Show Hint";
  elements.hintBox.innerHTML = hasHint ? `<strong>💡 Hint</strong><div>${question.hint}</div>` : "";
}

function toggleHint() {
  if (!elements.hintButton || !elements.hintBox) {
    return;
  }

  const isHidden = elements.hintBox.classList.contains("hidden");
  elements.hintBox.classList.toggle("hidden", !isHidden);
  elements.hintButton.textContent = isHidden ? "💡 Hide Hint" : "💡 Show Hint";
  elements.hintButton.textContent = isHidden ? "💡 Hide Hint" : "💡 Show Hint";
  elements.hintButton.textContent = isHidden ? "💡 Hide Hint" : "💡 Show Hint";
}

function moveToPreviousQuestion() {
  if (state.currentIndex === 0) {
    return;
  }

  state.currentIndex -= 1;
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
  renderQuestion();
}

function completeLevel() {
  flushStudyTime();
  const activeContext = getActiveCategoryContext();
  const currentProfile = getCurrentProfile();
  state.lastResults = state.questionResults
    .filter(Boolean)
    .map(({ selectedIndex: ignoredSelectedIndex, ...result }) => result);
  const savedToProfile = saveCompletedLevel(state.selectedGrade, activeContext.key, activeContext.title, state.selectedLevel, state.score);
  elements.quizSection.classList.add("hidden");
  elements.resultsSection.classList.remove("hidden");
  elements.reviewSection?.classList.remove("hidden");
  elements.progressBar.style.width = "100%";

  const percentage = Math.round((state.score / state.currentQuestions.length) * 100);
  const saveMessage = savedToProfile
    ? currentProfile
      ? `Saved to ${currentProfile.name}'s profile.`
      : "Saved in this browser for guest progress."
    : "Create or log in to a profile to save this progress.";
  elements.resultsSummary.textContent = `You scored ${state.score} out of 10 in Grade ${state.selectedGrade} ${activeContext.title}, Level ${state.selectedLevel} (${percentage}%). ${saveMessage}`;
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
      <span class="feedback-emoji">${isCorrect ? "🎸" : "😅"}</span>
      <strong class="feedback-title">${isCorrect ? "Yeah!" : "Oh no."}</strong>
    </div>
    <div>${isCorrect ? "Yeah, you got it." : "That is not correct. Check the hint to learn more."}</div>
    <div>${explanation}</div>
  `;
  elements.feedbackBox.innerHTML = elements.feedbackBox.innerHTML
    .replace("ðŸŽ¸", "\u{1F3B8}")
    .replace("ðŸ˜…", "\u{1F605}");
}

function playAnswerFeedback(isCorrect) {
  if (typeof window === "undefined") {
    return;
  }

  if (isCorrect) {
    playGuitarSuccess();
  }
}

function playGuitarSuccess() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return;
  }

  if (!playGuitarSuccess.audioContext) {
    playGuitarSuccess.audioContext = new AudioContextClass();
  }

  const context = playGuitarSuccess.audioContext;
  if (context.state === "suspended") {
    context.resume().catch(() => {});
  }

  const now = context.currentTime;
  [392, 494, 587].forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(frequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.98, now + 0.35);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.14 - (index * 0.025), now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now + (index * 0.03));
    oscillator.stop(now + 0.5);
  });
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
    .map((attempt) => `<option value="${attempt.level}">Level ${attempt.level} | Score ${attempt.score}/10</option>`)
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

    profilesStore.profiles[profile.id] = profile;
    saveProfilesStore();
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
  elements.reviewSummary.textContent = `Grade ${state.selectedGrade} | ${activeContext.title} | Level ${level} | Score ${attempt.score}/10`;
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

function getSelectedCategory() {
  return curriculum[state.selectedGrade].find((category) => category.id === state.selectedCategoryId);
}

function getActiveCategoryContext() {
  const category = getSelectedCategory();
  const tab = getSelectedPatTabDefinition();
  if (!category) {
    return { key: "", title: "", category: null, tab: null };
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

  const category = curriculum[grade].find((item) => item.id === categoryId);
  const seedBase = hashCode(cacheKey);
  const seenPrompts = new Set();
  const promptOccurrences = new Map();
  const bank = Array.from({ length: 100 }, (_, index) => {
    const difficulty = Math.floor(index / 10) + 1;

    for (let attempt = 0; attempt < 60; attempt += 1) {
      const rng = mulberry32(seedBase + index * 97 + 1 + (attempt * 1009));
      const rawQuestion = questionFactories[category.factory](rng, grade, { ...category.config, patTabId }, index + attempt, difficulty);
      const question = ensureQuestionHint(category.factory, rawQuestion, difficulty, category.config);
      const normalizedPrompt = normalizeQuestionPrompt(question.prompt);
      if (!seenPrompts.has(normalizedPrompt)) {
        seenPrompts.add(normalizedPrompt);
        promptOccurrences.set(normalizedPrompt, 1);
        return question;
      }
    }

    const fallbackRng = mulberry32(seedBase + index * 97 + 1 + 99991);
    const fallbackRawQuestion = questionFactories[category.factory](fallbackRng, grade, { ...category.config, patTabId }, index + 37, difficulty);
    let fallbackQuestion = ensureQuestionHint(category.factory, fallbackRawQuestion, difficulty, category.config);
    let normalizedPrompt = normalizeQuestionPrompt(fallbackQuestion.prompt);

    if (seenPrompts.has(normalizedPrompt)) {
      const occurrence = (promptOccurrences.get(normalizedPrompt) || 1) + 1;
      promptOccurrences.set(normalizedPrompt, occurrence);
      fallbackQuestion = uniquifyQuestionPrompt(fallbackQuestion, occurrence);
      normalizedPrompt = normalizeQuestionPrompt(fallbackQuestion.prompt);
    } else {
      promptOccurrences.set(normalizedPrompt, 1);
    }

    seenPrompts.add(normalizedPrompt);
    return fallbackQuestion;
  });

  const uniqueBank = enforceUniqueQuestionPrompts(bank);
  questionBankCache.set(cacheKey, uniqueBank);
  return uniqueBank;
}

function getQuestionsForLevel(grade, categoryId, patTabId = null, level = 1) {
  const cacheKey = `${grade}-${categoryId}-${patTabId || "base"}-level-${level}`;
  if (levelQuestionCache.has(cacheKey)) {
    return levelQuestionCache.get(cacheKey);
  }

  const category = curriculum[grade].find((item) => item.id === categoryId);
  if (!category) {
    return [];
  }

  const seedBase = hashCode(cacheKey);
  const difficulty = level;
  const seenPrompts = new Set();
  const promptOccurrences = new Map();
  const bank = Array.from({ length: 10 }, (_, questionIndex) => {
    const absoluteIndex = ((level - 1) * 10) + questionIndex;

    for (let attempt = 0; attempt < 60; attempt += 1) {
      const rng = mulberry32(seedBase + questionIndex * 97 + 1 + (attempt * 1009));
      const rawQuestion = questionFactories[category.factory](rng, grade, { ...category.config, patTabId }, absoluteIndex + attempt, difficulty);
      const question = ensureQuestionHint(category.factory, rawQuestion, difficulty, category.config);
      const normalizedPrompt = normalizeQuestionPrompt(question.prompt);
      if (!seenPrompts.has(normalizedPrompt)) {
        seenPrompts.add(normalizedPrompt);
        promptOccurrences.set(normalizedPrompt, 1);
        return question;
      }
    }

    const fallbackRng = mulberry32(seedBase + questionIndex * 97 + 1 + 99991);
    const fallbackRawQuestion = questionFactories[category.factory](fallbackRng, grade, { ...category.config, patTabId }, absoluteIndex + 37, difficulty);
    let fallbackQuestion = ensureQuestionHint(category.factory, fallbackRawQuestion, difficulty, category.config);
    let normalizedPrompt = normalizeQuestionPrompt(fallbackQuestion.prompt);

    if (seenPrompts.has(normalizedPrompt)) {
      const occurrence = (promptOccurrences.get(normalizedPrompt) || 1) + 1;
      promptOccurrences.set(normalizedPrompt, occurrence);
      fallbackQuestion = uniquifyQuestionPrompt(fallbackQuestion, occurrence);
      normalizedPrompt = normalizeQuestionPrompt(fallbackQuestion.prompt);
    } else {
      promptOccurrences.set(normalizedPrompt, 1);
    }

    seenPrompts.add(normalizedPrompt);
    return fallbackQuestion;
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
    elements.topicSearchResults.innerHTML = `<div class="topic-search-empty">Search a topic or keyword to see matching courses and question levels.</div>`;
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
      <span>${escapeHtml(result.trackLabel)} | Grade ${result.grade}</span>
      <small>${escapeHtml(result.preview)}</small>
      <div class="topic-search-actions">
        <button type="button" class="secondary-button topic-search-action" data-action="open-topic" data-grade="${result.grade}" data-category-id="${escapeHtml(result.category.id)}">Open Topic</button>
      </div>
    </div>
  `).join("");
}

function buildTopicSearchCatalog() {
  return grades.flatMap((grade) => {
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
}

function getTopicSearchCatalog() {
  if (!topicSearchCatalogCache) {
    topicSearchCatalogCache = buildTopicSearchCatalog();
  }
  return topicSearchCatalogCache;
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
  hideQuizViews();

  if (categoryId.startsWith("english-")) {
    if (elements.englishCategorySelect) {
      elements.englishCategorySelect.value = categoryId;
    }
    if (elements.mathCategorySelect) {
      elements.mathCategorySelect.value = "";
    }
  } else {
    if (elements.mathCategorySelect) {
      elements.mathCategorySelect.value = categoryId;
    }
    if (elements.englishCategorySelect) {
      elements.englishCategorySelect.value = "";
    }
  }

  renderGradeButtons();
  renderCategories();
  renderLevels();
  renderReviewOptions();
  renderStudyTime();
  renderTopicSearch();

  if (button.dataset.action === "open-level") {
    const level = Number(button.dataset.level);
    if (level >= 1 && level <= 10) {
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

function normalizeQuestionPrompt(prompt) {
  return String(prompt || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
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
    (text) => text.replace(/^A\b/i, "Practice: a"),
    (text) => `Practice version ${occurrence}: ${text}`
  ];

  const variantBuilder = replacements[Math.min(occurrence - 1, replacements.length - 1)];
  return {
    ...question,
    prompt: variantBuilder(prompt)
  };
}

function enforceUniqueQuestionPrompts(bank) {
  const seen = new Map();

  return bank.map((question) => {
    let nextQuestion = question;
    let normalizedPrompt = normalizeQuestionPrompt(nextQuestion.prompt);
    let occurrence = (seen.get(normalizedPrompt) || 0) + 1;

    while (occurrence > 1) {
      nextQuestion = uniquifyQuestionPrompt(nextQuestion, occurrence);
      normalizedPrompt = normalizeQuestionPrompt(nextQuestion.prompt);
      occurrence = (seen.get(normalizedPrompt) || 0) + 1;
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
      ? { progress: stored.progress || {}, scoreHistory: stored.scoreHistory || [], studyTime: stored.studyTime || null }
      : { progress: {}, scoreHistory: [], studyTime: null };
  } catch (error) {
    return { progress: {}, scoreHistory: [], studyTime: null };
  }
}

function saveProfilesStore() {
  localStorage.setItem(profilesStoreKey, JSON.stringify(profilesStore));
}

function saveGuestStore() {
  localStorage.setItem(guestStoreKey, JSON.stringify(guestStore));
}

function populateProfileGradeOptions() {
  elements.profileGradeInput.innerHTML = grades
    .map((grade) => `<option value="${grade}">Grade ${grade}</option>`)
    .join("");
}

function applyCurrentProfile() {
  flushStudyTime();
  state.currentProfileId = profilesStore.currentProfileId;
  const profile = getCurrentProfile();

  if (profile) {
    ensureProfileShape(profile);
    state.selectedGrade = profile.grade;
    elements.profileGradeInput.value = String(profile.grade);
  } else {
    state.selectedGrade = 1;
    elements.profileGradeInput.value = "1";
  }

  renderProfilePanel();
  renderReviewOptions();
  renderScoreHistory();
  renderStudyTime();
  renderHeroActivity();
}

function renderProfilePanel() {
  const profile = getCurrentProfile();

  if (profile) {
    elements.profileNameLabel.textContent = profile.name;
    elements.profileGradeLabel.textContent = `Grade ${profile.grade}`;
    elements.saveStatusLabel.textContent = profile.name;
    elements.logoutProfileButton.classList.remove("hidden");
  } else {
    elements.profileNameLabel.textContent = "Guest";
    elements.profileGradeLabel.textContent = "Not set";
    elements.saveStatusLabel.textContent = "Guest browser";
    elements.logoutProfileButton.classList.add("hidden");
  }
}

function handleCreateProfile() {
  const name = elements.profileNameInput.value.trim();
  const password = elements.profilePasswordInput.value;
  const grade = Number(elements.profileGradeInput.value);

  if (!name || !password) {
    showProfileMessage("Enter both a learner name and password to create a profile.", "error");
    return;
  }

  const profileId = buildProfileId(name);
  if (profilesStore.profiles[profileId]) {
    showProfileMessage("That learner name already exists. Log in or choose a different name.", "error");
    return;
  }

  profilesStore.profiles[profileId] = {
    id: profileId,
    name,
    grade,
    passwordHash: hashPassword(password),
    progress: {},
    scoreHistory: [],
    studyTime: createEmptyStudyTime()
  };
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
  showProfileMessage(`Profile created for ${name}. Progress will now be saved to this learner.`, "success");
}

function handleLoginProfile() {
  const name = elements.profileNameInput.value.trim();
  const password = elements.profilePasswordInput.value;

  if (!name || !password) {
    showProfileMessage("Enter the learner name and password to log in.", "error");
    return;
  }

  const profileId = buildProfileId(name);
  const profile = profilesStore.profiles[profileId];

  if (!profile || profile.passwordHash !== hashPassword(password)) {
    showProfileMessage("The name or password does not match a saved learner profile.", "error");
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
  showProfileMessage(`Welcome back, ${profile.name}. Your saved work has been loaded.`, "success");
}

function handleLogoutProfile() {
  profilesStore.currentProfileId = null;
  saveProfilesStore();
  state.currentProfileId = null;
  state.selectedCategoryId = null;
  state.selectedLevel = null;
  state.currentQuestions = [];
  hideQuizViews();
  applyCurrentProfile();
  renderGradeButtons();
  renderCategories();
  renderStudyTime();
  renderHeroActivity();
  showProfileMessage("You are now signed out. Create or log in to a profile to save progress.", "success");
}

function clearProfileFields() {
  elements.profileNameInput.value = "";
  elements.profilePasswordInput.value = "";
}

function showProfileMessage(message, type) {
  elements.profileMessage.className = `feedback-box ${type === "error" ? "error" : "success"}`;
  elements.profileMessage.textContent = message;
  elements.profileMessage.classList.remove("hidden");
}

function buildProfileId(name) {
  return name.trim().toLowerCase();
}

function hashPassword(password) {
  return String(hashCode(`maths-profile:${password}`));
}

function getCurrentProfile() {
  if (!state.currentProfileId) {
    return null;
  }

  const profile = profilesStore.profiles[state.currentProfileId] || null;
  if (profile) {
    ensureProfileShape(profile);
  }
  return profile;
}

function getActiveProgress() {
  const profile = getCurrentProfile();
  if (profile) {
    return profile.progress || {};
  }
  ensureGuestStoreShape();
  return guestStore.progress || {};
}

function syncProfileGrade() {
  const profile = getCurrentProfile();
  if (!profile) {
    return;
  }

  profile.grade = state.selectedGrade;
  profilesStore.profiles[profile.id] = profile;
  saveProfilesStore();
  elements.profileGradeInput.value = String(state.selectedGrade);
  renderProfilePanel();
}

function saveCompletedLevel(grade, categoryId, categoryTitle, level, score) {
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
    profilesStore.profiles[profile.id] = profile;
    saveProfilesStore();
    return true;
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
  const profile = getCurrentProfile();
  ensureGuestStoreShape();
  const scoreHistory = profile ? profile.scoreHistory : guestStore.scoreHistory;

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
        <span>Level ${entry.level} | Score ${entry.score}/10 (${entry.percentage}%)</span>
        <small>${formatDateTime(entry.completedAt)}</small>
      </div>
    `)
    .join("");

  renderHeroActivity();
}

function ensureProfileShape(profile) {
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
  return Object.values(gradeProgress).reduce((total, categoryLevels) => total + Object.keys(categoryLevels).length, 0);
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
    byDay: {}
  };
}

function ensureStudyTimeShape(studyTime) {
  if (!studyTime.byCourse || typeof studyTime.byCourse !== "object") {
    studyTime.byCourse = {};
  }
  if (!studyTime.byDay || typeof studyTime.byDay !== "object") {
    studyTime.byDay = {};
  }
}

function getActiveStudyTimeStore() {
  const profile = getCurrentProfile();
  if (profile) {
    ensureProfileShape(profile);
    return profile.studyTime;
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

  studyTime.byCourse[activeContext.key] = (studyTime.byCourse[activeContext.key] || 0) + secondsToAdd;
  const todayKey = getTodayKey();
  studyTime.byDay[todayKey] = (studyTime.byDay[todayKey] || 0) + secondsToAdd;

  persistStudyTime();
  renderStudyTime();
}

function persistStudyTime() {
  const profile = getCurrentProfile();
  if (profile) {
    profilesStore.profiles[profile.id] = profile;
    saveProfilesStore();
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

  const profile = getCurrentProfile();
  ensureGuestStoreShape();
  const studyTime = profile ? profile.studyTime : guestStore.studyTime;
  const scoreHistory = profile ? profile.scoreHistory : guestStore.scoreHistory;
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

function lerpRange(min, max, difficulty) {
  const span = max - min;
  const scaledMax = min + Math.max(1, Math.round((span * difficulty) / 10));
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
  const seen = new Set();

  rawPool.forEach((value) => {
    const label = formatter(value);
    if (!seen.has(label)) {
      seen.add(label);
      options.push(label);
    }
  });

  let attempt = 1;
  while (options.length < 4 && attempt <= 12 && canAutoGenerateFallbackOptions(correct)) {
    const fallbackValue = buildFallbackOptionValue(correct, attempt);
    const fallbackLabel = formatter(fallbackValue);
    if (!seen.has(fallbackLabel)) {
      seen.add(fallbackLabel);
      options.push(fallbackLabel);
    }
    attempt += 1;
  }

  const shuffledOptions = shuffle(options.slice(0, 4), rng);
  return {
    options: shuffledOptions,
    answerIndex: shuffledOptions.indexOf(formatter(correct))
  };
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
  if (difficulty <= 3) {
    return 1;
  }
  if (difficulty <= 7) {
    return 2;
  }
  return 3;
}

function progressivePool(pool, difficulty, minimum = 4) {
  if (!pool.length) {
    return [];
  }

  const unlockedRatio = 0.3 + ((Math.max(1, difficulty) - 1) * 0.08);
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
    lower: englishQuestionPools.lower.filter((item) => [
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
    upper: englishQuestionPools.upper.filter((item) => [
      "Which sentence uses the correct subject-verb agreement?",
      "Which word is an adverb in the sentence: 'The player moved quickly'?",
      "Choose the conjunction that completes the sentence: 'I wanted to go, ___ it started raining.'",
      "Which sentence uses a comma correctly?",
      "Choose the correct pronoun: 'The science books are on the desk. Put ___ away.'",
      "Which sentence is written in the past tense?",
      "Choose the sentence with the correct comparative adjective.",
      "Which word is a preposition in the sentence: 'The keys are under the chair'?"
    ].includes(item.prompt)),
    middle: englishQuestionPools.middle.filter((item) => [
      "Which sentence uses the correct pronoun-antecedent agreement?",
      "Which sentence contains an independent clause?",
      "Which sentence uses the semicolon correctly?",
      "Which sentence has the correct verb tense?",
      "Which revision removes the double negative?",
      "Which sentence uses an adjective clause?",
      "Which sentence is written in active voice?",
      "Which sentence uses parallel structure correctly?"
    ].includes(item.prompt)),
    senior: englishQuestionPools.senior.filter((item) => [
      "Which sentence uses the subjunctive mood correctly?",
      "Which revision fixes the dangling modifier?",
      "Which sentence uses parallel structure correctly?",
      "Which sentence uses a colon correctly?",
      "Which sentence uses the apostrophe correctly?",
      "Which sentence avoids a comma splice?",
      "Which sentence uses active voice more effectively?",
      "Which sentence uses standard formal grammar?"
    ].includes(item.prompt))
  },
  vocabulary: {
    lower: englishQuestionPools.lower.filter((item) => [
      "Which word means almost the same as 'happy'?",
      "Which word means the opposite of 'cold'?",
      "What does the word 'gigantic' mean?"
    ].includes(item.prompt)),
    upper: englishQuestionPools.upper.filter((item) => [
      "Which word has a prefix that means 'not'?",
      "What does the word 'predict' mean?",
      "Which word is the best synonym for 'ancient'?",
      "Which word completes the sentence correctly? 'Their team won ___ first game.'"
    ].includes(item.prompt)),
    middle: englishQuestionPools.middle.filter((item) => [
      "Choose the word that best completes the sentence: 'Her argument was ___ because it used strong evidence.'",
      "What is the best meaning of 'reluctant'?",
      "Choose the best synonym for 'analyze'.",
      "Which word best completes the sentence: 'The scientist reached a ___ after reviewing the results.'"
    ].includes(item.prompt)),
    senior: englishQuestionPools.senior.filter((item) => [
      "What is the best meaning of 'mitigate'?",
      "Which sentence demonstrates precise diction?",
      "What is the best synonym for 'coherent'?",
      "What does the word 'ambiguous' mean?"
    ].includes(item.prompt))
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
    { prompt: "Choose the best word to finish the sentence: The children ___ happy.", correct: "are", distractors: ["is", "was", "be"], hint: "A plural subject takes a plural helping verb.", explanation: "'Children' is plural, so 'are' is correct." }
  ],
  upper: [
    { prompt: "Fill in the gap: After lunch___ we returned to class.", correct: ",", distractors: [".", "!", "?"], hint: "An opening phrase is often followed by a comma.", explanation: "A comma is needed after the introductory phrase 'After lunch'." },
    { prompt: "Choose the best verb: Each player ___ a water bottle.", correct: "has", distractors: ["have", "having", "had"], hint: "'Each' is treated as singular.", explanation: "'Each player' is singular, so the correct verb is 'has'." },
    { prompt: "Choose the sentence with correct capitalization and punctuation.", correct: "Did you visit Cape Town?", distractors: ["did you visit Cape Town?", "Did you visit cape town?", "Did you visit Cape Town."], hint: "Check the first word, place name, and punctuation.", explanation: "The correct sentence starts with a capital, capitalizes the place name, and ends with a question mark." },
    { prompt: "Fill in the gap: My brother and I ___ walking home.", correct: "are", distractors: ["is", "am", "was"], hint: "A compound subject usually takes a plural verb.", explanation: "'My brother and I' is plural, so 'are' is the correct helping verb." },
    { prompt: "Choose the best topic sentence.", correct: "Keeping our classroom clean helps everyone learn better.", distractors: ["Our classroom.", "I swept yesterday.", "The bin is blue and the floor and desks."], hint: "A topic sentence should tell the main idea clearly.", explanation: "The best topic sentence introduces the main point of the paragraph." },
    { prompt: "Fill in the gap with the best punctuation: Wow___ that was a close game", correct: "!", distractors: [".", ",", "?"], hint: "Strong feeling often uses an exclamation mark.", explanation: "An exclamation mark fits the excitement in the sentence." }
  ],
  middle: [
    { prompt: "Choose the sentence with the best verb agreement.", correct: "Neither of the boys was late.", distractors: ["Neither of the boys were late.", "Neither of the boys are late.", "Neither of the boys be late."], hint: "'Neither' is usually treated as singular in formal writing.", explanation: "'Neither' takes the singular verb 'was'." },
    { prompt: "Fill in the gap with the best transition: The experiment failed___ we learned a great deal from it.", correct: "but", distractors: ["and", "because", "so"], hint: "Choose a word that shows contrast.", explanation: "'But' correctly shows contrast between failure and learning." },
    { prompt: "Choose the strongest concluding sentence.", correct: "For these reasons, community reading programs deserve more support.", distractors: ["That is all about reading.", "Reading is there in many places.", "People read books and programs and things."], hint: "A strong conclusion wraps up the main idea clearly.", explanation: "The best conclusion restates the point in a clear, formal way." },
    { prompt: "Fill in the gap: When the bell rang___ the students packed their bags.", correct: ",", distractors: [".", "!", ":"], hint: "A dependent clause at the start is usually followed by a comma.", explanation: "The opening clause should be followed by a comma." },
    { prompt: "Choose the sentence with correct capitalization, punctuation, and verb use.", correct: "Although it was late, Maria finished her homework.", distractors: ["although it was late Maria finished her homework.", "Although it was late Maria finished her homework", "Although it were late, Maria finished her homework."], hint: "Check the opener, comma, and correct verb.", explanation: "The correct sentence uses proper capitalization, comma placement, and verb form." },
    { prompt: "Fill in the gap with the best word: The writer chose a more ___ tone for the formal letter.", correct: "respectful", distractors: ["respect", "respectfully", "respected"], hint: "You need an adjective to describe the noun 'tone'.", explanation: "'Respectful' is the adjective that correctly describes the tone." }
  ],
  senior: [
    { prompt: "Choose the sentence with the most effective formal style.", correct: "The proposal should be revised before it is submitted to the board.", distractors: ["The proposal needs some fixing before they send it.", "The proposal is kind of not ready yet.", "They should maybe do the proposal better somehow."], hint: "Formal writing uses precise, professional language.", explanation: "The correct sentence is clear, formal, and precise." },
    { prompt: "Fill in the gap with the best punctuation: The committee reached one conclusion___ the policy must change.", correct: ":", distractors: [",", ".", ";"], hint: "A colon can introduce an explanation after a complete statement.", explanation: "The colon correctly introduces the conclusion that follows." },
    { prompt: "Choose the sentence with the strongest thesis statement.", correct: "Public transport should be expanded because it reduces traffic, lowers pollution, and improves access to jobs.", distractors: ["This essay is about public transport.", "Public transport is something many people use.", "There are buses and trains in many places."], hint: "A thesis should make a clear claim and preview the reasons.", explanation: "The best thesis states a position and gives clear supporting reasons." },
    { prompt: "Fill in the gap with the correct verb: Each of the reports ___ reviewed before publication.", correct: "was", distractors: ["were", "are", "be"], hint: "'Each' is singular in formal grammar.", explanation: "'Each of the reports' takes the singular verb 'was'." },
    { prompt: "Choose the sentence with correct punctuation and clause control.", correct: "Because the evidence was incomplete, the team delayed its decision.", distractors: ["Because the evidence was incomplete the team delayed its decision.", "Because the evidence was incomplete; the team delayed its decision.", "Because the evidence was incomplete: the team delayed its decision."], hint: "An opening dependent clause is usually followed by a comma.", explanation: "The comma correctly separates the opening clause from the main clause." },
    { prompt: "Fill in the gap with the most precise word: The author's claim was supported by ___ data from three independent studies.", correct: "reliable", distractors: ["nicely", "rely", "trust"], hint: "Choose the adjective that best describes data you can depend on.", explanation: "'Reliable' is the precise adjective that fits the sentence." }
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

const englishPatPartBVisualPool = englishPatPartBPool.filter((item) => [
  "When a word is printed in bold in a cartoon panel, it often signals",
  "Which device is shown when a character says something wildly overstated, like defeating many opponents at once?",
  "If a character talks bravely about one challenge but complains about a much smaller one, the author may be creating",
  "Which reading skill is being used when a student notices how bold print, a dash, or a cartoon frame affects meaning?",
  "If a reader is asked why an author chose a particular form, such as poem, cartoon, or job posting, the reader should think most about"
].includes(item.prompt));

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

const englishPatGrade6PartBStoryPool = englishPatGrade6PartBPool.filter((item) => [
  "When a question asks for a stated detail in a reading passage, what should you look for first?",
  "If characters keep looking over their shoulders and rushing, the author is most likely creating a feeling of",
  "When a word like 'camprobbers' appears in a story, the best strategy is to",
  "If the main problem in a story is that the characters must protect food and stay safe from danger, the conflict is most likely about",
  "The phrase 'hangdogging' in a climbing story most likely suggests someone is",
  "If a paragraph explains that climbing needs both technique and confidence, the main idea is that climbing is",
  "Calling a cliff 'a vertical puzzle' is an example of",
  "If a climber goes from discouragement to success by the end of a passage, the best description of the attitude change is"
].includes(item.prompt));

const englishPatGrade6PartBPoetryPool = englishPatGrade6PartBPool.filter((item) => [
  "What is a cliche?",
  "Why might a poet print some lines in italics?",
  "The phrase 'soft as lamb's wool' is an example of",
  "According to a poem about cliches, why do people often use cliches?",
  "If one sister keeps criticizing another sister's habits, the poem is most likely showing",
  "When a mother looks someone in the eye, she usually wants that person to",
  "If insects in a poem are used to compare family members, the insects are representing the characters'"
].includes(item.prompt));

const englishPatGrade6PartBVisualPool = englishPatGrade6PartBPool.filter((item) => [
  "When bold print is used inside a cartoon speech bubble, it usually shows",
  "If a character says something much bigger than reality for comic effect, that is",
  "Why might two characters exchange a knowing look in a cartoon?",
  "If a character asks a clever question that exposes a problem in someone else's idea, that character may be described as"
].includes(item.prompt));

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
        { label: "impossible", correct: "0 or 0%" }
      ], rng);
      return makeProbabilityQuestion({
        prompt: `Which statement correctly describes the probability of a ${outcomes.label} event?`,
        correct: outcomes.correct,
        distractors: outcomes.label === "certain" ? ["0 or 0%", "1/2 or 50%", "1/4 or 25%"] : ["1 or 100%", "1/2 or 50%", "3/4 or 75%"],
        hint: "A certain event always happens. An impossible event never happens.",
        steps: outcomes.label === "certain"
          ? [
              "A certain event always happens.",
              "That means the number of favourable outcomes equals the total number of outcomes.",
              "So the probability is 1, which is the same as 100%."
            ]
          : [
              "An impossible event cannot happen.",
              "That means there are 0 favourable outcomes.",
              "So the probability is 0, which is the same as 0%."
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
    const mode = index % 4;

    if (mode === 0) {
      const a = number(min, max, rng);
      const b = number(min, max, rng);
      const correct = Math.max(a, b);
      const { options, answerIndex } = buildOptions(correct, [Math.min(a, b), correct + 1, Math.max(0, correct - 1)], rng);
      return {
        prompt: `Which number is greater?`,
        options: [`${a} and ${b} → ${options[0]}`, `${a} and ${b} → ${options[1]}`, `${a} and ${b} → ${options[2]}`, `${a} and ${b} → ${options[3]}`],
        answerIndex,
        explanation: `Compare the values. ${correct} is greater than ${Math.min(a, b)}.`
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

    if (stage === "basicFractions") {
      const denominatorSets = [
        [2, 3, 4],
        [2, 3, 4, 5, 6],
        [2, 3, 4, 6, 8, 10]
      ];
      const denominator = pick(denominatorSets[Math.min(2, Math.floor((difficulty - 1) / 3))], rng);
      const numerator = number(1, denominator - 1, rng);
      const correct = `${numerator}/${denominator}`;
      const { options, answerIndex } = buildOptions(correct, [
        `${numerator + 1}/${denominator}`,
        `${numerator}/${denominator + 1}`,
        `${Math.max(1, numerator - 1)}/${denominator}`
      ], rng);
      return {
        prompt: `Which fraction names ${numerator} shaded part(s) out of ${denominator} equal parts?`,
        options,
        answerIndex,
        explanation: `${numerator} of ${denominator} equal parts is written as ${correct}.`
      };
    }

    if (stage === "fractionDecimalBridge") {
      const useHundredths = difficulty >= 6;
      const placeValue = useHundredths ? 100 : 10;
      const pieces = number(1, useHundredths ? 99 : 9, rng);
      const correct = `${pieces / placeValue}`;
      const { options, answerIndex } = buildOptions(correct, [`${(pieces + 1) / placeValue}`, `${Math.max(0, pieces - 1) / placeValue}`, `${pieces}`], rng);
      return {
        prompt: `What decimal is equal to ${pieces}/${placeValue}?`,
        options,
        answerIndex,
        explanation: `${pieces}/${placeValue} means ${pieces} part(s) out of ${placeValue}, which is ${correct}.`
      };
    }

    if (stage === "upperElementary" || stage === "middleSchoolStart") {
      const percentPool = difficulty <= 4 ? [10, 20, 25, 50] : difficulty <= 7 ? [5, 10, 20, 25, 40, 50, 75] : [5, 12, 15, 18, 20, 25, 40, 62, 75, 85];
      const percent = pick(percentPool, rng);
      const correct = percent / 100;
      const { options, answerIndex } = buildOptions(correct.toFixed(2), [
        (correct + 0.1).toFixed(2),
        Math.max(0, correct - 0.1).toFixed(2),
        (correct * 10).toFixed(2)
      ], rng);
      return {
        prompt: `Convert ${percent}% to a decimal.`,
        options,
        answerIndex,
        explanation: `${percent}% means ${percent}/100, so the decimal is ${correct.toFixed(2)}.`
      };
    }

    const denominator = pick(difficulty <= 5 ? [2, 4, 5, 10] : [2, 4, 5, 8, 10, 20], rng);
    const numerator = number(1, denominator - 1, rng);
    const correct = (numerator / denominator).toFixed(2);
    const { options, answerIndex } = buildOptions(correct, [
      (Math.min(0.99, numerator / denominator + 0.1)).toFixed(2),
      Math.max(0, numerator / denominator - 0.1).toFixed(2),
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

    if (level <= 2 && index % 2 === 0 && difficulty <= 6) {
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
      const length = number(3, difficultyStep(5, difficulty, 30), rng);
      const width = number(2, difficultyStep(4, difficulty, 20), rng);
      const correct = length * width;
      const { options, answerIndex } = buildOptions(correct, [length + width, 2 * (length + width), correct + width], rng);
      return {
        prompt: `A rectangle has length ${length} cm and width ${width} cm. What is its area?`,
        options: options.map((option) => `${option} cm^2`),
        answerIndex,
        explanation: `Area = length x width = ${length} x ${width} = ${correct} cm^2.`
      };
    }

    const first = number(grade * difficulty, grade * difficultyStep(4, difficulty, 60) + 10, rng);
    const second = number(grade, grade * difficultyStep(3, difficulty, 45) + 5, rng);
    const correct = Math.max(first, second);
    const optionValues = shuffle([first, second, correct + 2, Math.max(1, correct - 2)], rng);
    return {
      prompt: `Which measurement is larger?`,
      options: optionValues.map((value) => `${value} units`),
      answerIndex: optionValues.indexOf(correct),
      explanation: `${correct} units is the larger measurement.`
    };
  },

  geometry(rng, grade, config, index, difficulty) {
    const level = config.level;

    if (level <= 2 && difficulty <= 5) {
      const shapes = [
        { name: "triangle", fact: "3 sides" },
        { name: "square", fact: "4 equal sides" },
        { name: "rectangle", fact: "4 sides" },
        { name: "circle", fact: "no corners" }
      ];
      const shape = pick(shapes, rng);
      const { options, answerIndex } = buildOptions(shape.fact, shapes.filter((item) => item.fact !== shape.fact).slice(0, 3).map((item) => item.fact), rng);
      return {
        prompt: `Which fact describes a ${shape.name}?`,
        options,
        answerIndex,
        explanation: `A ${shape.name} has ${shape.fact}.`
      };
    }

    if (level >= 4 && index % 5 === 2) {
      const symmetrySet = pick([
        { shape: "an equilateral triangle", order: "3" },
        { shape: "a square", order: "4" },
        { shape: "a rectangle", order: "2" },
        { shape: "a regular pentagon", order: "5" },
        { shape: "a regular hexagon", order: "6" }
      ], rng);
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
      const a = number(3, difficultyStep(6, difficulty, 18), rng);
      const b = number(4, difficultyStep(7, difficulty, 24), rng);
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
        explanation: `Step 1: Use the Pythagorean theorem, c^2 = ${a}^2 + ${b}^2.<br>Step 2: Compute ${a * a} + ${b * b} = ${(a * a) + (b * b)}.<br>Step 3: Take the square root: c ≈ ${correct}.`,
        diagram: triangleDiagram(a, b)
      };
    }

    if (level >= 9 && index % 4 === 1) {
      const l = number(4, difficultyStep(6, difficulty, 18), rng);
      const w = number(3, difficultyStep(5, difficulty, 14), rng);
      const h = number(2, difficultyStep(4, difficulty, 12), rng);
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
      const side = number(2, difficultyStep(5, difficulty, 20), rng);
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

    const angle = pick(difficulty <= 5 ? [30, 45, 60, 90, 120] : [15, 30, 45, 60, 90, 120, 135, 150], rng);
    const correct = angle === 90 ? "right angle" : angle < 90 ? "acute angle" : "obtuse angle";
    const { options, answerIndex } = buildOptions(correct, ["acute angle", "right angle", "obtuse angle"].filter((item) => item !== correct), rng);
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
      const step = pick(difficulty <= 4 ? [2, 3, 4] : difficulty <= 7 ? [2, 3, 4, 5, 10] : [3, 4, 5, 6, 9, 10, 12], rng);
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

    const maxValue = difficultyStep(5, difficulty, 25);
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

      const x = number(1, difficultyStep(4, difficulty, 20), rng);
      const n = number(2, difficultyStep(5, difficulty, 25), rng);
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
        const solution = number(2, difficultyStep(4, difficulty, 10), rng);
        const offset = number(1, difficultyStep(3, difficulty, 8), rng);
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

      const x = number(2, difficultyStep(6, difficulty, 30), rng);
      const constant = number(2, difficultyStep(4, difficulty, 20), rng);
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

    if (level === 10) {
      const a = number(1, difficultyStep(2, difficulty, 8), rng);
      const b = number(1, difficultyStep(4, difficulty, 12), rng);
      const correct = `${a + b}x`;
      const { options, answerIndex } = buildOptions(correct, [`${a * b}x`, `${a - b}x`, `${a + b}`], rng);
      return {
        prompt: `Simplify: ${a}x + ${b}x`,
        options,
        answerIndex,
        explanation: `Like terms add together, so ${a}x + ${b}x = ${a + b}x.`
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

    if (index % 2 === 0) {
      const dataLength = difficulty >= 7 ? 5 : 4;
      const dataMax = difficultyStep(8, difficulty, 40);
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
    const totalSections = difficulty >= 7 ? 6 : 4;
    const activeColors = colors.slice(0, totalSections);
    const color = pick(activeColors, rng);
    const repeats = difficulty >= 8 ? number(1, 2, rng) : 1;
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
    const limit = difficultyStep(4, difficulty, 40);
    const a = number(-limit, limit, rng);
    const b = number(-limit, limit, rng);
    const correct = index % 2 === 0 ? a + b : a - b;
    const { options, answerIndex } = buildOptions(correct, [correct + 2, correct - 2, -correct], rng);
    return {
      prompt: index % 2 === 0 ? `What is ${a} + ${b}?` : `What is ${a} - (${b})?`,
      options,
      answerIndex,
      explanation: index % 2 === 0 ? `${a} + ${b} = ${correct}.` : `${a} - (${b}) = ${correct}.`
    };
  },

  ratiosProportions(rng, grade, config, index, difficulty) {
    const ratioA = number(1, difficulty <= 5 ? 6 : 12, rng);
    const ratioB = number(1, difficulty <= 5 ? 8 : 15, rng);
    const multiplier = number(2, difficulty <= 5 ? 6 : 12, rng);
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
        const right = number(1, difficulty <= 5 ? 3 : 5, rng);
        const up = number(1, difficulty <= 5 ? 3 : 5, rng);
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

    if (level <= 9) {
      const x = number(1, difficultyStep(3, difficulty, 12), rng);
      const m = number(1, difficultyStep(2, difficulty, 8), rng);
      const b = number(0, difficultyStep(3, difficulty, 15), rng);
      const correct = (m * x) + b;
      const { options, answerIndex } = buildOptions(correct, [correct + 2, Math.max(0, correct - 2), m + b], rng);
      return {
        prompt: `For y = ${m}x + ${b}, what is y when x = ${x}?`,
        options,
        answerIndex,
        explanation: `Substitute x = ${x}. y = ${m}(${x}) + ${b} = ${correct}.`
      };
    }

    if (level <= 11) {
      const x = number(1, difficultyStep(2, difficulty, 10), rng);
      const correct = x * x;
      const { options, answerIndex } = buildOptions(correct, [correct + x, x + x, correct - 1], rng);
      return {
        prompt: `If f(x) = x^2, what is f(${x})?`,
        options,
        answerIndex,
        explanation: `Square the input: ${x}^2 = ${correct}.`
      };
    }

    const x = number(1, difficultyStep(2, difficulty, 10), rng);
    const correct = 2 * x + 1;
    const { options, answerIndex } = buildOptions(correct, [correct + 2, correct - 2, x * x], rng);
    return {
      prompt: `If g(x) = 2x + 1, what is g(${x})?`,
      options,
      answerIndex,
      explanation: `Substitute ${x} into 2x + 1 to get ${correct}.`
    };
  },

  trigonometry(rng, grade, config, index, difficulty) {
    if (config.level <= 10) {
      const angle = pick(difficulty <= 5 ? [30, 45, 60] : [0, 30, 45, 60, 90], rng);
      const sinMap = {
        0: "0",
        30: "1/2",
        45: "sqrt(2)/2",
        60: "sqrt(3)/2",
        90: "1"
      };
      const correct = sinMap[angle];
      const distractorPool = ["0", "1", "1/2", "sqrt(2)/2", "sqrt(3)/2"];
      const { options, answerIndex } = buildOptions(correct, distractorPool.filter((item) => item !== correct).slice(0, 3), rng);
      return {
        prompt: `What is sin(${angle} degrees)?`,
        options,
        answerIndex,
        explanation: `Using special triangles, sin(${angle} degrees) = ${correct}.`
      };
    }

    const angle = pick([0, 30, 45, 60, 90], rng);
    const correct = angle === 0 ? "1" : angle === 90 ? "0" : angle === 60 ? "1/2" : angle === 45 ? "sqrt(2)/2" : "sqrt(3)/2";
    const { options, answerIndex } = buildOptions(correct, ["0", "1", "1/2", "sqrt(2)/2", "sqrt(3)/2"].filter((item) => item !== correct).slice(0, 3), rng);
    return {
      prompt: `What is cos(${angle} degrees)?`,
      options,
      answerIndex,
      explanation: `From the unit circle, cos(${angle} degrees) = ${correct}.`
    };
  },

  calculus(rng, grade, config, index, difficulty) {
    const coefficient = number(2, difficultyStep(3, difficulty, 12), rng);
    const power = number(2, difficulty <= 5 ? 4 : 6, rng);
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
    if (index % 2 === 0) {
      const price = number(20, difficultyStep(40, difficulty, 600), rng);
      const discount = pick(difficulty <= 5 ? [5, 10, 15, 20, 25] : [5, 10, 12, 15, 18, 20, 25, 30, 35], rng);
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

    const principal = number(100, difficultyStep(150, difficulty, 5000), rng);
    const rate = pick(difficulty <= 5 ? [2, 3, 4, 5, 6] : [2.5, 3, 4.5, 5, 6.5, 8], rng);
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
        probabilityMasteryGenerators.basics.slice(0, 2),
        probabilityMasteryGenerators.basics.slice(2, 4),
        probabilityMasteryGenerators.basics.slice(4)
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

  englishGrammar(rng, grade, config, index, difficulty) {
    const band = englishBand(grade);
    const pool = englishSkillPools.grammar[band];
    const item = chooseFromProgressivePool(pool, rng, difficulty, index, 6);
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
    const item = chooseFromProgressivePool(pool, rng, difficulty, index, 6);
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
    const item = chooseFromProgressivePool(pool, rng, difficulty, index, 6);
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
    const item = chooseFromProgressivePool(pool, rng, difficulty, index, 6);
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
    const item = chooseFromProgressivePool(pool, rng, difficulty, index, 6);
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
  elements.hintButton.textContent = "💡 Show Hint";
  elements.hintBox.className = "feedback-box hint-box hidden";
  elements.hintBox.innerHTML = hasHint ? `<strong>💡 Hint</strong><div>${question.hint}</div>` : "";
}

function toggleHint() {
  if (!elements.hintButton || !elements.hintBox) {
    return;
  }

  const isHidden = elements.hintBox.classList.contains("hidden");
  elements.hintBox.classList.toggle("hidden", !isHidden);
  elements.hintButton.textContent = isHidden ? "💡 Hide Hint" : "💡 Show Hint";
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
  const text = String(value);
  const placeNames = ["ones", "tens", "hundreds", "thousands", "ten-thousands", "hundred-thousands"];
  const index = Math.min(text.length - 1, grade <= 2 ? 1 : grade <= 4 ? 2 : Math.min(5, text.length - 1));
  const digit = Number(text[text.length - 1 - index]);
  return {
    prompt: `In the number ${value}, what digit is in the ${placeNames[index]} place?`,
    answer: String(digit),
    distractors: [...new Set([String((digit + 1) % 10), String((digit + 2) % 10), String((digit + 9) % 10)])],
    explanation: `In ${value}, the ${placeNames[index]} digit is ${digit}.`
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
  elements.hintButton.textContent = "💡 Show Hint";
  elements.hintBox.classList.add("hidden");
}

function renderHint(question) {
  if (!elements.hintButton || !elements.hintBox) {
    return;
  }

  const hasHint = Boolean(question.hint);
  elements.hintButton.classList.add("hidden");
  elements.hintButton.textContent = "💡 Show Hint";
  elements.hintBox.className = "feedback-box hint-box hidden";
  elements.hintBox.innerHTML = hasHint ? `<strong>💡 Hint</strong><div>${question.hint}</div>` : "";
}

function toggleHint() {
  if (!elements.hintButton || !elements.hintBox) {
    return;
  }

  const isHidden = elements.hintBox.classList.contains("hidden");
  elements.hintBox.classList.toggle("hidden", !isHidden);
  elements.hintButton.textContent = isHidden ? "💡 Hide Hint" : "💡 Show Hint";
}
