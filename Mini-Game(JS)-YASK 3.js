const guessInput = document.getElementById('guess');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const attemptsSpan = document.getElementById('attempts');
const highScoreText = document.getElementById('high-score');
const resetBtn = document.getElementById('reset-btn');
const difficultySelect = document.getElementById('difficulty');


let randomNumber;
let attempts = 0;
let highScore = localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : Infinity;
let range = { min: 1, max: 10 };


difficultySelect.addEventListener('change', () => {
  const difficulty = difficultySelect.value;
  switch(difficulty) {
    case 'easy':
      range = { min: 1, max: 10 };
      break;
    case 'medium':
      range = { min: 1, max: 50 };
      break;
    case 'hard':
      range = { min: 1, max: 100 };
      break;
  }
  startNewGame();
});


function startNewGame() {
  randomNumber = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
  attempts = 0;
  feedback.textContent = '';
  attemptsSpan.textContent = attempts;
  guessInput.value = '';
  submitBtn.disabled = false;
  resetBtn.style.display = 'none';
}


function checkGuess() {
  const userGuess = parseInt(guessInput.value);
  if (isNaN(userGuess)) {
    feedback.textContent = 'Please enter a valid number.';
    return;
  }
  
  attempts++;
  attemptsSpan.textContent = attempts;
  
  if (userGuess === randomNumber) {
    feedback.textContent = `Correct! The number was ${randomNumber}.`;
    submitBtn.disabled = true;
    if (attempts < highScore) {
      highScore = attempts;
      localStorage.setItem('highScore', highScore);
      highScoreText.textContent = `High Score: ${highScore} attempts`;
    }
    resetBtn.style.display = 'inline-block';
  } else if (userGuess < randomNumber) {
    feedback.textContent = 'Too low! Try again.';
  } else {
    feedback.textContent = 'Too high! Try again.';
  }
}


submitBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', startNewGame);

window.onload = startNewGame;
