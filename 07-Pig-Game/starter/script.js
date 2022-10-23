'use strict';

// Selecting elements
// Player 0
const player0_mainScore = document.querySelector('#score--0');
const player0_currentScore = document.getElementById('current--0');
const player0_sect = document.querySelector('.player--0');

// Player 1
const player1_mainScore = document.getElementById('score--1');
const player1_currentScore = document.getElementById('current--1');
const player1_sect = document.querySelector('.player--1');

const dice_elmnt = document.querySelector('.dice');

// Buttons
const btnRoll_elmnt = document.querySelector('.btn--roll');
const btnHold_elmnt = document.querySelector('.btn--hold');
const btnNew_elmnt = document.querySelector('.btn--new');

// Set up starting conditions
let score0, score1, currentScore, isPlaying;

btnRoll_elmnt.addEventListener('click', rollDice);
btnHold_elmnt.addEventListener('click', endRound);
btnNew_elmnt.addEventListener('click', initGame);

initGame();

// Main game logic
function rollDice() {
    if (isPlaying) {
        let activePlayer = checkActivePlayer();

        // Generating a random dice roll
        let roll = Math.trunc(Math.random() * 6) + 1;

        //  Select the the dice face according to the roll
        let diceFace = `dice-${roll}.png`;

        //   Display the dice
        dice_elmnt.setAttribute('src', diceFace);
        dice_elmnt.classList.remove('hidden');

        // Check for rolled 1
        if (roll !== 1) {
            // Add roll to player's score
            currentScore += roll;
            updateActivePlayer(activePlayer, currentScore);
        } else {
            // Reset active player current score and switch player
            currentScore = 0;
            updateActivePlayer(activePlayer, currentScore);
            switchActivePlayer(activePlayer);
        }
    }
}

function checkActivePlayer() {
    if (player0_sect.classList.contains('player--active')) {
        return 0;
    } else {
        return 1;
    }
}

function updateActivePlayer(activePlayer, currentScore) {
    if (activePlayer === 0) {
        player0_currentScore.textContent = currentScore;
    } else {
        player1_currentScore.textContent = currentScore;
    }
}

function switchActivePlayer(activePlayer) {
    if (activePlayer === 0) {
        player0_sect.classList.remove('player--active');
        player1_sect.classList.add('player--active');
    } else {
        player1_sect.classList.remove('player--active');
        player0_sect.classList.add('player--active');
    }
}

function endRound() {
    const activePlayer = checkActivePlayer();
    if (activePlayer === 0) {
        score0 += currentScore;
        player0_mainScore.textContent = score0;
        if (score0 >= 50) {
            player0_sect.classList.add('player--winner');
            isPlaying = false;
        }
    } else {
        score1 += currentScore;
        player1_mainScore.textContent = score1;
        if (score1 >= 50) {
            player1_sect.classList.add('player--winner');
            isPlaying = false;
        }
    }

    currentScore = 0;
    switchActivePlayer(activePlayer);
    dice_elmnt.classList.add('hidden');
}

function initGame() {
    score0 = 0;
    score1 = 0;
    currentScore = 0;
    isPlaying = true;
    player0_mainScore.textContent = score0;
    player1_mainScore.textContent = score1;
    player0_currentScore.textContent = currentScore;
    player1_currentScore.textContent = currentScore;
    dice_elmnt.classList.add('hidden');
    player0_sect.classList.remove('player--winner');
    player1_sect.classList.remove('player--winner');
}
