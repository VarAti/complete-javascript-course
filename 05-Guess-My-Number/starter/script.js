'use strict';

// HTML Nodes
const checkButton_node = document.querySelector('.check');
const againButton_node = document.querySelector('.again');
const guess_node = document.querySelector('.guess');
const message_node = document.querySelector('.message');
const score_node = document.querySelector('.score');
const highscore_node = document.querySelector('.highscore');
const number_node = document.querySelector('.number');
const body_node = document.querySelector('body');

// Game data
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// number_node.textContent = secretNumber;

// Game logic
checkButton_node.addEventListener('click', function () {
  const guess = Number(guess_node.value);

  // If not a valid guess
  if (!guess) {
    message_node.textContent = '⛔️ Not a valid guess!';
    guess_node.value = '';

    // When player wins
  } else if (guess === secretNumber) {
    message_node.textContent = '🎉 You nailed it!';
    highscore = score;
    body_node.style.backgroundColor = '#60b347';
    highscore_node.textContent = highscore;
    number_node.style.width = '30rem';
    number_node.textContent = secretNumber;
    checkButton_node.disabled = true;

    // When the guess is low
  } else if (guess < secretNumber) {
    message_node.textContent = '⬆️ Higher!';
    score--;

    // When the guess is high
  } else if (guess > secretNumber) {
    message_node.textContent = '⬇️ Lower!';
    score--;
  }

  score_node.textContent = score;

  // When player lose
  if (score == 0) {
    message_node.textContent = '😩 You lose!';
    number_node.textContent = secretNumber;
    checkButton_node.disabled = true;
  }
});

guess_node.addEventListener('focusin', function () {
  guess_node.value = '';
});

// Restart game
againButton_node.addEventListener('click', function () {
  checkButton_node.disabled = false;
  guess_node.value = '';
  score = 20;
  score_node.textContent = score;
  message_node.textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number_node.textContent = '?';
  body_node.style.backgroundColor = '#222';
  number_node.style.width = '15rem';
});
