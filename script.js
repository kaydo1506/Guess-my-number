'use strict';
document.querySelector('body').style.backgroundColor = '#985866';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const highscore = document.querySelector('.highscore');

let score = 20;
const gameScore = document.querySelector('.score');
gameScore.textContent = score;

const message = document.querySelector('.message');

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  if (guess == secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    message.textContent = '🎉 You guessed right!';
    if (gameScore.textContent > highscore.textContent) {
      highscore.textContent = gameScore.textContent;
    }

    // Css Manipulation
    document.querySelector('.guessMyNumber').textContent = 'Correct!';

    document.querySelector('.body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.border = '5px solid #60b347';
  }

  if (guess > secretNumber) {
    if (gameScore.textContent > 1) {
      message.textContent = 'Too high 📈';
      gameScore.textContent--;
    } else {
      message.textContent = '🧨 You lost the game!';
      gameScore.textContent = 0;
    }
  }
  if (guess < secretNumber) {
    if (gameScore.textContent > 1) {
      message.textContent = 'Too low 📉';
      gameScore.textContent--;
    } else {
      message.textContent = '🧨 You lost the game!';
      gameScore.textContent = 0;
    }
  }
  if (!guess) {
    message.textContent = '🚫 No number!';
  }
});

// Reset button "Again"
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guessMyNumber').textContent = 'Guess My Number!';
  gameScore.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#985866';
});
