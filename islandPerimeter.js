// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Example:

// Input:
// [[0,1,0,0],
//  [1,1,1,0],
//  [0,1,0,0],
//  [1,1,0,0]]


// [[1,1,1,0],
//  [1,1,1,0],
//  [0,1,0,0],
//  [1,1,0,0]]

// Output: 16

const islandPerimeter = (arr) => {
  let sides = 0;

  for(let row = 0; row < arr.length; row++) {
    for(let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === 1) {
        
        // [][col] allows the code not the break
        let top = (arr[row - 1] || [])[col] || 0;
        let bottom = (arr[row + 1] || [])[col] || 0;
        let right = arr[row][col + 1]  || 0; 
        let left = arr[row][col - 1] || 0;

        // get falsey values
        sides += 4 - (top + bottom + right + left)
      }
    }
  }

  return sides
}

islandPerimeter
([[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]
)
