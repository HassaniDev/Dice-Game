'use strict';

// 📂 Imports
import modal from './modal.js';
import * as view from './view.js';

// 🛠️ HELPER FUNCTIONS
export const btnSound = (btn, volume) => {
  btn.volume = volume; // 🎚️ Set the volume (between 0.0 and 1.0) 0 is 0%, 1 is 100%
  btn.play(); // ▶️ Play the sound
};

export const switchPlayer = () => {
  // 1. 🧹 Clear and reset the current score
  clear();

  // 2. 🔄 Update current player
  modal.state.currentPlayer = modal.state.currentPlayer === 0 ? 1 : 0; // Switch between player 0 and 1
  modal.updateCurrentPlayer(modal.state.currentPlayer);

  // 3. ✨ Remove active class from all players
  document.querySelectorAll('.player').forEach((Element) => {
    Element.classList.remove('player--active'); // 🟢 Remove active state
  });

  // 4. 🚦 Add active class to the current player
  document
    .querySelector(`#current--${modal.state.currentPlayer}`)
    .parentElement.parentElement.classList.toggle('player--active');
};

export const clear = () => {
  // 🧽 Clear and reset the current score
  modal.updateCurrentScore(0); // Reset score to 0
  document.querySelector(
    `#current--${modal.state.currentPlayer}`
  ).textContent = 0;
};

export const winner = function () {
  // 1. 🎯 Remove active class
  document.querySelectorAll('.player').forEach((Element) => {
    Element.classList.remove('player--active'); // Remove active class
  });

  // 2. 🏆 Add winner class to the current player
  document
    .querySelector(`#current--${modal.state.currentPlayer}`)
    .parentElement.parentElement.classList.toggle('player--winner');

  // 3. ✨ Show sparkles for 11.8s
  // METHOD 1 ☝️
  // view.sparkles.style.display = 'block'; // Show the image immediately

  // METHOD 2 ✌️
  setTimeout(() => (view.sparkles.style.display = 'block'), 300); // Delay sparkles for 300ms

  // 🕰️ Hide the sparkles after 7 seconds
  setTimeout(function () {
    view.sparkles.style.display = 'none';
  }, 7000);

  // 4. 🏅 Show winning points
  document.querySelector(`.winner--${modal.state.currentPlayer}`).innerHTML =
    ''; // Clear container
  document
    .querySelector(`.winner--${modal.state.currentPlayer}`)
    .insertAdjacentHTML(
      'beforeend',
      view.winPoints(modal.state.totalScore[modal.state.currentPlayer])
    );

  // 5. 🔊 Play winning sound
  view.winnerSound.play();
  view.winnerSound.volume = 0.1; // Set the volume to 10%
};

export const restartGame = function () {
  // 1. 🟢 Set play state back to true
  modal.updatePlayState(true);

  // 2. 🎲 Display the dice again (reset to 5)
  view.diceEl.src = `./Images/dice-${5}.png`;
  view.diceEl.classList.remove('hidden');

  // 3. 🎮 Set current player to player 0
  modal.updateCurrentPlayer(0);

  // 4. 🧼 Remove active & winner classes from all players
  document.querySelectorAll('.player').forEach((Element) => {
    Element.classList.remove('player--active'); // Remove active class
    Element.classList.remove('player--winner'); // Remove winner class
  });

  // 5. 🏅 Add active class to player 0
  document
    .querySelector(`#current--${modal.state.currentPlayer}`)
    .parentElement.parentElement.classList.add('player--active');

  // 6. ✨ Hide sparkles
  view.sparkles.style.display = 'none';

  // 7. 🧹 Clear current score
  clear();

  // 8. 🔄 Reset total score for both players
  modal.updateTotalScore(0, 0);
  modal.updateTotalScore(1, 0);

  // Update the displayed score
  modal.state.totalScore.forEach((Element, i) => {
    document.querySelector(`#score--${i}`).textContent =
      modal.state.totalScore[Element];
  });

  // 9. ✨ Clear winner message
};
