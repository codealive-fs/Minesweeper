// Display UI

import { createBoard, markTile } from "./minesweeper.js";

const BOARD_SIZE = 10;
const NUMBER_OF_MINES = 2;

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
const boardElement = document.querySelector(".board");
const minesLeftText = document.querySelector("[data-mine-count]");

console.log(board);

board.forEach((row) => {
  row.forEach((tile) => {
    boardElement.append(tile.element);
    tile.element.addEventListener("click", () => {});
    tile.element.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  });
});

boardElement.style.setProperty("--size", BOARD_SIZE);
minesLeftText.textContent = NUMBER_OF_MINES;
// console.log(board);

// 1. Populate a board with titles
// 2. Left click on tiles
// a. Reveal tiles
// 3. Right click on titles
// a. Mark titles
// 4. Check for win/lose
