'use strict';

// Imports
import * as view from './view.js';

// HELPER FUNCTIONS
const btnSound = (btn, volume) => {
  btn.volume = volume; // Set the volume (between 0.0 and 1.0) 0 is 0%, 1 is 100%
  btn.play(); // Play the sound
};

const switchPlayer = () => {};
const clear = () => {};

// Functionality
// 1. New game
export const newGame = () => {
  // 1. Sound
  btnSound(view.newGameBtn, 0.3);
};

// 2. Roll Dice
export const rollDice = () => {
  // 1. Sound
  btnSound(view.rollDiceBtn, 0.4);
};

// 3. Hold score
export const holdScore = () => {
  // 1. Sound
  btnSound(view.holdScoreBtn, 1);
};
