'use strict';

let targetNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === targetNumber) {
    displayMessage('Correct Number! 🎉');
    document.querySelector('.number').textContent = targetNumber;
    document.querySelector('body').style.backgroundColor = '#808000';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (score > 0) {
    displayMessage(guess > targetNumber ? 'Too high! ⬆️' : 'Too low! ⬇️');
    score--;
  } else {
    displayMessage('You lost the game.');
    score = 0;
  }

  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  targetNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
