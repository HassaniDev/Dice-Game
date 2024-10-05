'use strict';

// IMPORTING EXTERNAL FILES
import modal from './modal.js';
import * as view from './view.js';
import { newGame, holdScore, rollDice } from './helper.js';
import WINNING_SCORE from './config.js';

// EVENTS

// METHOD 1 ☝️
// Controller object
const controller = {
  // Initialize function that sets up event listeners
  init: function () {
    view.btnRoll.addEventListener('click', rollDice);
    view.btnHold.addEventListener('click', holdScore);
    view.btnNew.addEventListener('click', newGame);
  },
};

// Initialize the controller when the page loads
document.addEventListener('DOMContentLoaded', () => {
  controller.init();
});

// METHOD 2 ✌️
// const init = () => {
//   view.btnRoll.addEventListener('click', rollDice);
//   view.btnHold.addEventListener('click', holdScore);
//   view.btnNew.addEventListener('click', newGame);
// };

// // Initialize the controller when the page loads
// document.addEventListener('DOMContentLoaded', init);

// console.log(modal.state.currentPlayer);
