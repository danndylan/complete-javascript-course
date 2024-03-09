'use strict';

let targetNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let message = '';

  if (!guess) {
    message = 'No number!';
  } else if (guess === targetNumber) {
    message = 'Correct Number! 🎉';
    document.querySelector('.number').textContent = targetNumber;
    document.querySelector('body').style.backgroundColor = '#808000';
  } else if (score > 0) {
    message = guess > targetNumber ? 'Too high! ⬆️' : 'Too low! ⬇️';
    score--;
  } else {
    message = 'You lost the game.';
    score = 0;
  }

  document.querySelector('.message').textContent = message;
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  targetNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
