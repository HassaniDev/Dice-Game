'use strict';

// 🎮 ELEMENTS
export const btnRoll = document.querySelector('.btn--roll'); // 🎲 Roll Dice button
export const btnHold = document.querySelector('.btn--hold'); // 🛑 Hold Score button
export const btnNew = document.querySelector('.btn--new'); // 🔄 New Game button
export const diceEl = document.querySelector('.dice'); // 🎲 Dice element
export const sparkles = document.querySelector('.sparkles'); // ✨ Sparkles animation
export const points = document.querySelectorAll('.points'); // 🔢 Points display elements

// 🎵 Sounds
export const newGameBtn = new Audio('Sounds/new-game.mp3'); // 🔊 New Game sound
export const holdScoreBtn = new Audio('Sounds/hold.mp3'); // 🛑 Hold Score sound
export const rollDiceBtn = new Audio('Sounds/dice-roll.mp3'); // 🎲 Dice Roll sound
export const winnerSound = new Audio('Sounds/winner.mp3'); // 🎉 Winner sound

// 🔄 Reset Scores to 0
document.querySelector('#score--0').textContent = 0; // Player 1 score reset
document.querySelector('#score--1').textContent = 0; // Player 2 score reset

// 🏅 Function to show winning points message
export const winPoints = function (currentPlayer) {
  return `
   <div class="current-winner">
          <p class="icon">🎉</p>  <!-- Victory icon -->
          <p class="message">You won!</p>  <!-- Winning message -->
          <p class="stats">
            Congratulations 🎉, you won by <strong>${currentPlayer}</strong> points!  <!-- Score message -->
          </p>
        </div>
  `;
};
