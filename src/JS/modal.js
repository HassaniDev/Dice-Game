'use strict';

/**
 * @typedef {Object} State
 * @property {number} currentPlayer - The index of the current player (0 or 1).
 * @property {number} currentScore - The score accumulated by the current player in the ongoing round.
 * @property {number[]} totalScore - The total scores of both players [player1, player2].
 * @property {boolean} play - Represents the play state of the game (true = ongoing, false = paused/stopped).
 */

// 🎮 STATES
/**
 * The state of the game, including the current player, current score, total scores, and play status.
 * @type {State}
 */
const state = {
  currentPlayer: 0, // 🕹️ Player 1 starts
  currentScore: 0, // 🏆 Score for the current round
  totalScore: [0, 0], // 🏅 Total scores for both players
  play: true, // 🎯 Game is live!
};

/**
 * Updates the current player.
 * @param {number} currentPlayer - The index of the current player (0 or 1).
 */
const updateCurrentPlayer = function (currentPlayer) {
  state.currentPlayer = currentPlayer;
};

/**
 * Updates the current score for the current player.
 * @param {number} currentScore - The score accumulated by the current player in the ongoing round.
 */
const updateCurrentScore = function (currentScore) {
  modal.state.currentScore = currentScore;
};

/**
 * Updates the total score of the specified player.
 * @param {number} currentPlayer - The index of the current player (0 or 1).
 * @param {number} CurrentTotalScore - The updated total score for the specified player.
 */
const updateTotalScore = function (currentPlayer, CurrentTotalScore) {
  state.totalScore[currentPlayer] = CurrentTotalScore;
};

/**
 * Updates the play state of the game.
 * @param {boolean} boolean - The new play state (true = ongoing, false = paused/stopped).
 */
const updatePlayState = function (boolean) {
  state.play = boolean;
};

/**
 * 🗃️ The modal object bundles the game state and its update functions.
 * @type {Object}
 * @property {State} state - The current state of the game.
 * @property {function(number): void} updateCurrentPlayer - Updates the current player.
 * @property {function(number): void} updateCurrentScore - Updates the current score.
 * @property {function(number, number): void} updateTotalScore - Updates the total score for the specified player.
 * @property {function(boolean): void} updatePlayState - Updates the play state of the game.
 */
const modal = {
  state, // 🎮 State object holding the current game data
  updateCurrentPlayer, // 🔄 Switch between players
  updateCurrentScore, // ➕ Update the running score
  updateTotalScore, // 🏅 Update total points for each player
  updatePlayState, // ⏯️ Toggle game state (play or pause)
};

// 🚀 Export the entire `modal` object
export default modal;

/*
 * 🚀 Heads up! I've only documented the `modal.js` object here because it's the engine behind
 * the game's state management and functionality. Keeping the focus sharp ensures the code
 * stays neat, maintainable, and ready for future upgrades. 🎮✨
 *
 * P.S. — The original script is down below for reference if you're curious! 🔍
 */

// 🎮 OLD STATES
// const state = {
//   currentPlayer: 0,  // 🕹️ Player 1 starts
//   currentScore: 0,  // 🏆 Score for the current round
//   totalScore: [0, 0],  // 🏅 Total scores for both players
//   play: true,  // 🎯 Game is live!
// };

// 🔄 Update current player
// const updateCurrentPlayer = function (currentPlayer) {
//   state.currentPlayer = currentPlayer;
// };

// ➕ Update current score
// const updateCurrentScore = function (currentScore) {
//   modal.state.currentScore = currentScore;
// };

// 🏅 Update total score
// const updateTotalScore = function (currentPlayer, CurrentTotalScore) {
//   state.totalScore[currentPlayer] = CurrentTotalScore;
// };

// ⏯️ Toggle play state
// const updatePlayState = function (boolean) {
//   state.play = boolean;
// };

// 🎮 Bundle everything into a single object
// const modal = {
//   state,  // 🎮 State object holding the current game data
//   updateCurrentPlayer,  // 🔄 Switch between players
//   updateCurrentScore,  // ➕ Update the running score
//   updateTotalScore,  // 🏅 Update total points for each player
//   updatePlayState,  // ⏯️ Toggle game state (play or pause)
// };

// 🚀 Export the entire `modal` object
// export default modal;
