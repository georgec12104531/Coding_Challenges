// Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population..
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

// Input: 
// [
//   [0,1,0],
//   [0,0,1],
//   [1,1,1],
//   [0,0,0]
// ]
// Output: 
// [
//   [0,0,0],
//   [1,0,1],
//   [0,1,1],
//   [0,1,0]
// ]


// Plan
// Create a new board
// Loop through the board
// send each position into a new function that will mutate our nextStateBoard
// retur next stateboard

const gameOfLife = (board) => {
  let result = []
  for(let times = 1; times <= board.length; times++) {
    let current = [];
    for(let el = 0; el < board[0].length; el++) {
      current.push(0);
    }
    result.push(current)
  }

  let newState = result;

  const infect = (row, col) => {
    let alive = board[row][col] === 1;

    let top = row - 1;
    let right = col + 1;
    let bottom = row + 1;
    let left = col - 1;

    let count = 0;
    // top 
    if (top >= 0 && board[top][col] === 1) count++;
    // top right
    if (top >= 0 && right < board[row].length && board[top][right] === 1) count++;
    // right
    if (right < board[row].length && board[row][right] === 1) count++;
    if (bottom < board.length && right < board[row].length && board[bottom][right] === 1) count++;
     // bottom 
    if (bottom < board.length && board[bottom][col] === 1) count++
    // bottom left;
    if (bottom < board.length && left >= 0 && board[bottom][left] === 1) count++;
    // left
    if (left >= 0 && board[row][left] === 1) count++;
    // top left
    if (top >= 0 && left >= 0 && board[top][left] === 1) count++;

    if (alive) {
      if (count === 2 && count === 3) {
        newState[row][col] = 1
      }
    } else {
      // dead
      if (count === 3) {
        newState[row][col] = 1
      }
    }
  }


  for(let row = 0; row < board.length; row++) {
    for(let col = 0; col < board[row].length; col++) {
      infect(row, col);
    }
  }

  return newState;
};

gameOfLife(
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
])

// [
//   [0,0,0],
//   [1,0,1],
//   [0,1,1],
//   [0,1,0]
// ]
