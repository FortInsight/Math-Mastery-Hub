const grades = Array.from({ length: 12 }, (_, index) => index + 1);

const curriculum = {
  1: [
    makeCategory("numbers", "Numbers to 100", "Count, compare, order, and build number sense.", "numberSense", { min: 0, max: 100 }),
    makeCategory("add-sub", "Addition & Subtraction", "Solve simple number stories and number sentences.", "additionSubtraction", { maxA: 20, maxB: 20 }),
    makeCategory("shapes", "Shapes & Space", "Identify 2D and 3D shapes and their features.", "geometry", { level: 1 }),
    makeCategory("measurement", "Measurement & Time", "Compare length, mass, time, and money ideas.", "measurement", { level: 1 }),
    makeCategory("patterns", "Patterns & Data", "Extend patterns and read picture data.", "patternsData", { level: 1 })
  ],
  2: [
    makeCategory("numbers", "Place Value", "Work with ones, tens, and numbers to 1,000.", "numberSense", { min: 10, max: 1000 }),
    makeCategory("add-sub", "Addition & Subtraction", "Add and subtract with regrouping ideas.", "additionSubtraction", { maxA: 100, maxB: 100 }),
    makeCategory("measurement", "Measurement & Money", "Tell time, count coins, and compare measures.", "measurement", { level: 2 }),
    makeCategory("shapes", "Shapes & Fractions", "Name shapes and equal parts.", "geometry", { level: 2 }),
    makeCategory("patterns", "Patterns & Graphs", "Use skip counting and read simple graphs.", "patternsData", { level: 2 })
  ],
  3: [
    makeCategory("numbers", "Numbers & Place Value", "Build fluency with numbers to 10,000.", "numberSense", { min: 100, max: 10000 }),
    makeCategory("mult-div", "Multiplication & Division", "Use arrays, groups, and fact families.", "multiplicationDivision", { max: 10 }),
    makeCategory("fractions", "Fractions", "Understand halves, thirds, fourths, and simple comparisons.", "fractionsDecimalsPercent", { stage: "basicFractions" }),
    makeCategory("measurement", "Measurement", "Perimeter, time, mass, capacity, and money.", "measurement", { level: 3 }),
    makeCategory("geometry", "Geometry & Data", "Angles, shapes, bar graphs, and tables.", "geometry", { level: 3 })
  ],
  4: [
    makeCategory("numbers", "Whole Numbers", "Compare, round, and estimate larger numbers.", "numberSense", { min: 100, max: 100000 }),
    makeCategory("mult-div", "Multiplication & Division", "Multi-step operations with larger factors.", "multiplicationDivision", { max: 12 }),
    makeCategory("fractions", "Fractions & Decimals", "Equivalent fractions and tenths.", "fractionsDecimalsPercent", { stage: "fractionDecimalBridge" }),
    makeCategory("measurement", "Measurement & Area", "Area, perimeter, elapsed time, and conversions.", "measurement", { level: 4 }),
    makeCategory("patterns", "Patterns & Algebra", "Number patterns and input-output rules.", "patternsData", { level: 4 })
  ],
  5: [
    makeCategory("numbers", "Number Sense", "Place value, rounding, and powers of 10.", "numberSense", { min: 1000, max: 1000000 }),
    makeCategory("operations", "Operations", "Multiply, divide, and solve word problems.", "multiplicationDivision", { max: 20 }),
    makeCategory("fractions", "Fractions, Decimals & Percent", "Operate with fractions and decimals.", "fractionsDecimalsPercent", { stage: "upperElementary" }),
    makeCategory("geometry", "Geometry", "Volume, coordinates, and classification.", "geometry", { level: 5 }),
    makeCategory("data", "Data & Patterns", "Graphs, mean ideas, and pattern rules.", "patternsData", { level: 5 })
  ],
  6: [
    makeCategory("numbers", "Ratios & Number Sense", "Factors, multiples, and rational number foundations.", "numberSense", { min: 10, max: 500 }),
    makeCategory("operations", "Fractions & Decimals", "Compute with fractions, decimals, and percent.", "fractionsDecimalsPercent", { stage: "middleSchoolStart" }),
    makeCategory("algebra", "Expressions & Equations", "Use variables, order of operations, and simple equations.", "algebra", { level: 6 }),
    makeCategory("geometry", "Geometry & Measurement", "Area, surface area, and volume.", "geometry", { level: 6 }),
    makeCategory("data", "Statistics", "Interpret data sets and probability language.", "statisticsProbability", { level: 6 })
  ],
  7: [
    makeCategory("integers", "Integers & Rational Numbers", "Add, subtract, multiply, and divide signed numbers.", "integersRational", { level: 7 }),
    makeCategory("algebra", "Algebraic Expressions", "Simplify expressions and solve equations.", "algebra", { level: 7 }),
    makeCategory("ratios", "Ratios & Proportions", "Rates, percent, and proportional thinking.", "ratiosProportions", { level: 7 }),
    makeCategory("geometry", "Geometry", "Angles, circles, and scale drawings.", "geometry", { level: 7 }),
    makeCategory("data", "Data & Probability", "Compare samples and experimental probability.", "statisticsProbability", { level: 7 })
  ],
  8: [
    makeCategory("numbers", "Rational & Irrational Numbers", "Classify numbers and use exponents.", "integersRational", { level: 8 }),
    makeCategory("algebra", "Linear Equations", "Solve equations and analyze linear relationships.", "algebra", { level: 8 }),
    makeCategory("functions", "Functions", "Understand input-output rules, tables, and graphs.", "functionsGraphing", { level: 8 }),
    makeCategory("geometry", "Transformations & Geometry", "Congruence, similarity, and the Pythagorean theorem.", "geometry", { level: 8 }),
    makeCategory("data", "Statistics", "Scatter plots, lines of best fit, and probability.", "statisticsProbability", { level: 8 })
  ],
  9: [
    makeCategory("algebra", "Algebra Foundations", "Laws of exponents, factoring, and solving equations.", "algebra", { level: 9 }),
    makeCategory("functions", "Linear Functions", "Slope, intercepts, tables, and graphs.", "functionsGraphing", { level: 9 }),
    makeCategory("geometry", "Geometry", "Triangles, similarity, and coordinate geometry.", "geometry", { level: 9 }),
    makeCategory("statistics", "Statistics & Probability", "Analyze distributions and probability models.", "statisticsProbability", { level: 9 }),
    makeCategory("financial", "Financial Math", "Discounts, tax, interest, and budgeting.", "financialMath", { level: 9 })
  ],
  10: [
    makeCategory("algebra", "Advanced Algebra", "Quadratics, radicals, and polynomial operations.", "algebra", { level: 10 }),
    makeCategory("functions", "Functions & Graphing", "Linear, quadratic, and exponential behaviour.", "functionsGraphing", { level: 10 }),
    makeCategory("trig", "Trigonometry", "Use right triangle ratios and angle relationships.", "trigonometry", { level: 10 }),
    makeCategory("statistics", "Statistics & Probability", "Normal ideas, variation, and event probability.", "statisticsProbability", { level: 10 }),
    makeCategory("geometry", "Measurement & Geometry", "Surface area, volume, and coordinate geometry.", "geometry", { level: 10 })
  ],
  11: [
    makeCategory("functions", "Functions", "Polynomial, rational, logarithmic, and exponential ideas.", "functionsGraphing", { level: 11 }),
    makeCategory("algebra", "Advanced Algebra", "Sequences, series, and equation solving.", "algebra", { level: 11 }),
    makeCategory("trig", "Trigonometry", "Unit circle, identities, and solving trig equations.", "trigonometry", { level: 11 }),
    makeCategory("statistics", "Statistics", "Sampling, distributions, and inference ideas.", "statisticsProbability", { level: 11 }),
    makeCategory("precalc", "Pre-Calculus", "Rates of change and model analysis.", "functionsGraphing", { level: 11.5 })
  ],
  12: [
    makeCategory("calculus", "Calculus", "Limits, derivatives, and real-world applications.", "calculus", { level: 12 }),
    makeCategory("advanced-func", "Advanced Functions", "Composite, inverse, and transformed functions.", "functionsGraphing", { level: 12 }),
    makeCategory("trig", "Trigonometry", "Advanced identities and modelling.", "trigonometry", { level: 12 }),
    makeCategory("statistics", "Statistics & Probability", "Expected value, inference, and models.", "statisticsProbability", { level: 12 }),
    makeCategory("financial", "Financial Math", "Loans, annuities, and growth models.", "financialMath", { level: 12 })
  ]
};

const state = {
  selectedGrade: 1,
  selectedCategoryId: null,
  selectedLevel: null,
  currentQuestions: [],
  currentIndex: 0,
  score: 0,
  answered: false,
  lastResults: [],
  currentProfileId: null
};

const questionBankCache = new Map();
const profilesStoreKey = "maths-mastery-profiles-v1";
const profilesStore = loadProfilesStore();

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
  gradeButtons: document.getElementById("grade-buttons"),
  categoryGrid: document.getElementById("category-grid"),
  levelGrid: document.getElementById("level-grid"),
  levelSection: document.getElementById("level-section"),
  quizSection: document.getElementById("quiz-section"),
  resultsSection: document.getElementById("results-section"),
  selectedGradeLabel: document.getElementById("selected-grade-label"),
  saveStatusLabel: document.getElementById("save-status-label"),
  selectedCategoryLabel: document.getElementById("selected-category-label"),
  completedLevelsLabel: document.getElementById("completed-levels-label"),
  quizMeta: document.getElementById("quiz-meta"),
  questionTitle: document.getElementById("question-title"),
  questionText: document.getElementById("question-text"),
  questionDiagram: document.getElementById("question-diagram"),
  optionsList: document.getElementById("options-list"),
  feedbackBox: document.getElementById("feedback-box"),
  nextButton: document.getElementById("next-button"),
  progressBar: document.getElementById("progress-bar"),
  liveScore: document.getElementById("live-score"),
  resultsSummary: document.getElementById("results-summary"),
  resultsBreakdown: document.getElementById("results-breakdown"),
  retryLevelButton: document.getElementById("retry-level-button"),
  nextLevelButton: document.getElementById("next-level-button"),
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
}

function attachEvents() {
  elements.createProfileButton.addEventListener("click", handleCreateProfile);
  elements.loginProfileButton.addEventListener("click", handleLoginProfile);
  elements.logoutProfileButton.addEventListener("click", handleLogoutProfile);
  elements.nextButton.addEventListener("click", moveToNextQuestion);
  elements.retryLevelButton.addEventListener("click", () => startLevel(state.selectedLevel));
  elements.nextLevelButton.addEventListener("click", moveToNextLevel);
  elements.openReviewButton.addEventListener("click", openSelectedReview);
}

function renderGradeButtons() {
  elements.gradeButtons.innerHTML = "";

  grades.forEach((grade) => {
    const button = document.createElement("button");
    button.className = `grade-button ${grade === state.selectedGrade ? "active" : ""}`;
    button.textContent = `Grade ${grade}`;
    button.addEventListener("click", () => {
      state.selectedGrade = grade;
      syncProfileGrade();
      state.selectedCategoryId = null;
      state.selectedLevel = null;
      state.currentQuestions = [];
      hideQuizViews();
      renderGradeButtons();
      renderCategories();
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
  elements.categoryGrid.innerHTML = "";
  elements.levelGrid.innerHTML = "";
  categories.forEach((category) => {
    const card = document.createElement("button");
    card.className = `category-card ${category.id === state.selectedCategoryId ? "active" : ""}`;
    card.innerHTML = `
      <h3>${category.title}</h3>
      <p>${category.description}</p>
      <small>100 questions | 10 levels</small>
    `;
    card.addEventListener("click", () => {
      state.selectedCategoryId = category.id;
      state.selectedLevel = null;
      hideQuizViews();
      renderCategories();
      renderLevels();
      renderReviewOptions();
    });
    elements.categoryGrid.appendChild(card);
  });

  renderLevels();
  renderReviewOptions();
}

function renderLevels() {
  elements.levelGrid.innerHTML = "";

  if (!state.selectedCategoryId) {
    elements.levelGrid.innerHTML = `<p class="quiz-meta">Choose a topic above to unlock its 10 levels.</p>`;
    return;
  }

  const category = getSelectedCategory();
  elements.selectedCategoryLabel.textContent = category.title;

  for (let level = 1; level <= 10; level += 1) {
    const button = document.createElement("button");
    const isCompleted = isLevelCompleted(state.selectedGrade, category.id, level);
    button.className = `level-card ${level === state.selectedLevel ? "active" : ""}`;
    button.innerHTML = `Level ${level}${isCompleted ? " [Done]" : ""}`;
    button.addEventListener("click", () => startLevel(level));
    elements.levelGrid.appendChild(button);
  }
}

function startLevel(level) {
  state.selectedLevel = level;
  state.currentQuestions = getQuestionBank(state.selectedGrade, state.selectedCategoryId).slice((level - 1) * 10, level * 10);
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;
  state.lastResults = [];

  elements.resultsSection.classList.add("hidden");
  elements.quizSection.classList.remove("hidden");
  renderLevels();
  renderQuestion();
}

function renderQuestion() {
  const question = state.currentQuestions[state.currentIndex];
  const questionNumber = state.currentIndex + 1;

  elements.quizMeta.textContent = `Grade ${state.selectedGrade} | ${getSelectedCategory().title} | Level ${state.selectedLevel}`;
  elements.questionTitle.textContent = `Question ${questionNumber} of 10`;
  elements.questionText.textContent = question.prompt;
  renderQuestionDiagram(question);
  elements.optionsList.innerHTML = "";
  elements.feedbackBox.classList.add("hidden");
  elements.feedbackBox.className = "feedback-box hidden";
  elements.nextButton.classList.add("hidden");
  elements.liveScore.textContent = `${state.score} / ${state.currentIndex}`;
  elements.progressBar.style.width = `${(state.currentIndex / state.currentQuestions.length) * 100}%`;

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(index, button));
    elements.optionsList.appendChild(button);
  });
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

  state.lastResults.push({
    prompt: question.prompt,
    correct: isCorrect,
    explanation: question.explanation,
    answer: question.options[question.answerIndex],
    selectedAnswer: question.options[selectedIndex]
  });

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
  elements.nextButton.textContent = state.currentIndex === state.currentQuestions.length - 1 ? "See Score" : "Next Question";
  elements.nextButton.classList.remove("hidden");
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
  const category = getSelectedCategory();
  const savedToProfile = saveCompletedLevel(state.selectedGrade, category.id, state.selectedLevel, state.score);
  elements.quizSection.classList.add("hidden");
  elements.resultsSection.classList.remove("hidden");
  elements.progressBar.style.width = "100%";

  const percentage = Math.round((state.score / state.currentQuestions.length) * 100);
  elements.resultsSummary.textContent = `You scored ${state.score} out of 10 in Grade ${state.selectedGrade} ${category.title}, Level ${state.selectedLevel} (${percentage}%). ${savedToProfile ? `Saved to ${getCurrentProfile().name}'s profile.` : "Create or log in to a profile to save this progress."}`;
  elements.resultsBreakdown.innerHTML = state.lastResults
    .map((result, index) => renderResultItem(result, index))
    .join("");

  const nextLevel = Math.min(10, state.selectedLevel + 1);
  elements.nextLevelButton.disabled = state.selectedLevel === 10;
  elements.nextLevelButton.textContent = state.selectedLevel === 10 ? "Final Level Reached" : `Start Level ${nextLevel}`;
  elements.completedLevelsLabel.textContent = String(getCompletedLevelsCount(state.selectedGrade));
  renderLevels();
  renderReviewOptions();
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

function hideQuizViews() {
  elements.quizSection.classList.add("hidden");
  elements.resultsSection.classList.add("hidden");
}

function renderReviewOptions() {
  const attempts = getSavedAttemptsForSelection();

  if (!state.selectedCategoryId || attempts.length === 0) {
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

function openSelectedReview() {
  if (!state.selectedCategoryId) {
    return;
  }

  const level = Number(elements.reviewLevelSelect.value);
  const attempt = getSavedAttempt(state.selectedGrade, state.selectedCategoryId, level);
  if (!attempt) {
    return;
  }

  elements.reviewDetails.classList.remove("hidden");
  elements.reviewSummary.textContent = `Grade ${state.selectedGrade} | ${getSelectedCategory().title} | Level ${level} | Score ${attempt.score}/10`;
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

function getQuestionBank(grade, categoryId) {
  const cacheKey = `${grade}-${categoryId}`;
  if (questionBankCache.has(cacheKey)) {
    return questionBankCache.get(cacheKey);
  }

  const category = curriculum[grade].find((item) => item.id === categoryId);
  const seedBase = hashCode(cacheKey);
  const bank = Array.from({ length: 100 }, (_, index) => {
    const rng = mulberry32(seedBase + index * 97 + 1);
    const difficulty = Math.floor(index / 10) + 1;
    return questionFactories[category.factory](rng, grade, category.config, index, difficulty);
  });

  questionBankCache.set(cacheKey, bank);
  return bank;
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

function saveProfilesStore() {
  localStorage.setItem(profilesStoreKey, JSON.stringify(profilesStore));
}

function populateProfileGradeOptions() {
  elements.profileGradeInput.innerHTML = grades
    .map((grade) => `<option value="${grade}">Grade ${grade}</option>`)
    .join("");
}

function applyCurrentProfile() {
  state.currentProfileId = profilesStore.currentProfileId;
  const profile = getCurrentProfile();

  if (profile) {
    state.selectedGrade = profile.grade;
    elements.profileGradeInput.value = String(profile.grade);
  } else {
    state.selectedGrade = 1;
    elements.profileGradeInput.value = "1";
  }

  renderProfilePanel();
  renderReviewOptions();
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
    progress: {}
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
  return state.currentProfileId ? profilesStore.profiles[state.currentProfileId] || null : null;
}

function getActiveProgress() {
  return getCurrentProfile()?.progress || {};
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

function saveCompletedLevel(grade, categoryId, level, score) {
  const profile = getCurrentProfile();
  if (!profile) {
    return false;
  }

  if (!profile.progress[grade]) {
    profile.progress[grade] = {};
  }
  if (!profile.progress[grade][categoryId]) {
    profile.progress[grade][categoryId] = {};
  }
  profile.progress[grade][categoryId][level] = {
    score,
    completedAt: new Date().toISOString(),
    results: state.lastResults
  };
  profilesStore.profiles[profile.id] = profile;
  saveProfilesStore();
  return true;
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

  const categoryProgress = getActiveProgress()[state.selectedGrade]?.[state.selectedCategoryId] || {};
  return Object.entries(categoryProgress)
    .map(([level, attempt]) => ({ level: Number(level), ...attempt }))
    .sort((a, b) => a.level - b.level);
}

function makeCategory(id, title, description, factory, config) {
  return { id, title, description, factory, config };
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
  const options = shuffle([correct, ...distractors], rng).map(formatter);
  return {
    options,
    answerIndex: options.indexOf(formatter(correct))
  };
}

function pick(list, rng) {
  return list[number(0, list.length - 1, rng)];
}

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

    if (level >= 8 && index % 2 === 0) {
      const a = number(3, difficultyStep(6, difficulty, 18), rng);
      const b = number(4, difficultyStep(7, difficulty, 24), rng);
      const correct = Math.round(Math.sqrt((a * a) + (b * b)));
      const { options, answerIndex } = buildOptions(correct, [a + b, Math.abs(a - b), correct + 2], rng);
      return {
        prompt: `A right triangle has legs ${a} and ${b}. Which is closest to the hypotenuse length?`,
        options,
        answerIndex,
        explanation: `Use the Pythagorean theorem: c^2 = ${a}^2 + ${b}^2, so c is about ${correct}.`,
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
        explanation: `Add the values and divide by ${data.length}. The mean is about ${correct}.`
      };
    }

    const colors = ["red", "blue", "green", "yellow"];
    const color = pick(colors, rng);
    const correct = "1/4";
    const { options, answerIndex } = buildOptions(correct, ["1/2", "3/4", "1/3"], rng);
    return {
      prompt: `A spinner has 4 equal sections: red, blue, green, and yellow. What is the probability of landing on ${color}?`,
      options,
      answerIndex,
      explanation: `There is 1 favorable section out of 4 equal sections, so the probability is 1/4.`
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
  }
};

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
