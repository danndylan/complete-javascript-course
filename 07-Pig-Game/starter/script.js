'use strict';

//select elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

//init
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//rolling dice
btnRollEl.addEventListener('click', function () {
  // 1. generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. chek roll 1. if true, switch player
  if (dice !== 1) {
    // add score
    currentScore += dice;
    current0El.textContent = currentScore; // change later
  } else {
    currentScore = 0;
  }
});

let currentPlayer = 1;

let players = [
  {
    score: 0,
  },
  {
    score: 0,
  },
];
