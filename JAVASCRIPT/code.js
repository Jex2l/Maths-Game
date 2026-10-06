/**
 * Maths Game
 * A 60-second multiplication quiz: pick the box with the correct
 * product before time runs out. Score goes up for every correct pick.
 */

const GAME_LENGTH_SECONDS = 60;
const BOX_COUNT = 4;

let playing = false;
let score = 0;
let timeRemaining = 0;
let correctAnswer = null;
let countdownTimer = null;

const startResetBtn = document.getElementById("startReset");
const boxes = Array.from({ length: BOX_COUNT }, (_, i) =>
  document.getElementById(`box${i + 1}`)
);

startResetBtn.addEventListener("click", () => {
  if (playing) {
    hide("gameOver");
    location.reload();
    return;
  }

  playing = true;
  score = 0;
  hide("gameOver");
  document.getElementById("scoreValue").textContent = score;

  show("timeRemaining");
  timeRemaining = GAME_LENGTH_SECONDS;
  document.getElementById("timeremainingvalue").textContent = timeRemaining;

  startResetBtn.textContent = "Reset Game";

  startCountdown();
  generateQA();
});

boxes.forEach((box) => {
  box.addEventListener("click", () => handleAnswer(box));
});

function handleAnswer(box) {
  if (!playing) return;

  if (box.textContent === String(correctAnswer)) {
    score += 1;
    document.getElementById("scoreValue").textContent = score;
    flash("correct");
    generateQA();
  } else {
    flash("wrong");
  }
}

function flash(id) {
  hide(id === "correct" ? "wrong" : "correct");
  show(id);
  setTimeout(() => hide(id), 1000);
}

function startCountdown() {
  countdownTimer = setInterval(() => {
    timeRemaining -= 1;
    document.getElementById("timeremainingvalue").textContent = timeRemaining;

    if (timeRemaining <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(countdownTimer);
  playing = false;
  show("gameOver");
  document.getElementById("finalscore").textContent = score;
  hide("timeRemaining");
  hide("correct");
  hide("wrong");
  startResetBtn.textContent = "Start Game";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function randomFactor() {
  return 1 + Math.round(9 * Math.random());
}

function generateQA() {
  const x = randomFactor();
  const y = randomFactor();
  correctAnswer = x * y;
  document.getElementById("question").textContent = `${x} x ${y}`;

  const usedAnswers = new Set([correctAnswer]);
  const correctBoxIndex = Math.floor(Math.random() * BOX_COUNT);

  boxes.forEach((box, index) => {
    if (index === correctBoxIndex) {
      box.textContent = correctAnswer;
      return;
    }

    let wrongAnswer;
    do {
      wrongAnswer = randomFactor() * randomFactor();
    } while (usedAnswers.has(wrongAnswer));

    usedAnswers.add(wrongAnswer);
    box.textContent = wrongAnswer;
  });
}
