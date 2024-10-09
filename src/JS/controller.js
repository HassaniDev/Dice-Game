'use strict';

// 📂 IMPORTING EXTERNAL FILES
import modal from './modal.js';
import * as view from './view.js';
import {
  btnSound,
  switchPlayer,
  clear,
  winner,
  restartGame,
} from './helper.js';
import WINNING_SCORE from './config.js';

// 🎮 FUNCTIONALITY

// 1️⃣ New game
export const newGame = () => {
  // 🔊 Play sound for new game
  btnSound(view.newGameBtn, 0.3);

  // 🔄 Reset and restart the game
  restartGame();
};

// 2️⃣ Roll Dice
export const rollDice = () => {
  if (modal.state.play) {
    // 🎲 Play roll dice sound
    btnSound(view.rollDiceBtn, 0.4);

    // 🎲 Generate random dice value (1-6)
    const dice = Math.floor(Math.random() * 6) + 1; // 1 - 6
    view.diceEl.src = `./Images/dice-${dice}.png`;

    // 🛑 If dice === 1, switch player
    if (dice === 1) switchPlayer();
    else {
      // 🔢 Update current player score
      modal.state.currentScore += dice;
      modal.updateCurrentScore(modal.state.currentScore);

      document.querySelector(
        `#current--${modal.state.currentPlayer}`
      ).textContent = modal.state.currentScore;
    }
  }
};

// 3️⃣ Hold score
export const holdScore = () => {
  if (modal.state.play) {
    // 💼 Play hold score sound
    btnSound(view.holdScoreBtn, 1);

    // ➕ Update total score

    // METHOD 1 ⛳ --> Easy way
    // modal.state.totalScore[modal.state.currentPlayer] += Number(
    //   document.querySelector(`#current--${modal.state.currentPlayer}`).textContent
    // );

    // METHOD 2 ⛳
    modal.state.totalScore[modal.state.currentPlayer] +=
      modal.state.currentScore;
    modal.updateTotalScore(
      modal.state.currentPlayer, // 1️⃣
      modal.state.totalScore[modal.state.currentPlayer] // Update player's total score
    );

    document.querySelector(`#score--${modal.state.currentPlayer}`).textContent =
      modal.state.totalScore[modal.state.currentPlayer];

    // 🧹 Clear current score
    clear();

    // 🏆 Check if the current player won
    if (modal.state.totalScore[modal.state.currentPlayer] >= WINNING_SCORE) {
      // 🎲 Hide the dice
      view.diceEl.classList.add('hidden');

      // 🏅 Player wins
      winner();

      // 🚫 End the game (disable buttons)
      modal.updatePlayState(false); // play = false
    } else {
      // 🔄 Switch player
      switchPlayer();
    }
  }
};

// 📅 EVENTS

// METHOD 1 ☝️
// 🎮 Controller object
const controller = {
  // 🛠️ Initialize function that sets up event listeners
  init: function () {
    view.btnRoll.addEventListener('click', rollDice);
    view.btnHold.addEventListener('click', holdScore);
    view.btnNew.addEventListener('click', newGame);
  },
};

// 🌐 Initialize the controller when the page loads
document.addEventListener('DOMContentLoaded', () => {
  controller.init();
});

// METHOD 2 ✌️
// const init = () => {
//   view.btnRoll.addEventListener('click', rollDice);
//   view.btnHold.addEventListener('click', holdScore);
//   view.btnNew.addEventListener('click', newGame);
// };

// // 🌐 Initialize the controller when the page loads
// document.addEventListener('DOMContentLoaded', init);
