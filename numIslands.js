// Given 2 dimensional array of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
// E.g

// [[1,1,0,0,0],
//  [1,1,0,0,0],
//  [0,0,1,0,0],
//  [0,0,0,1,1]]

// Output 3

// E.g

// [[1,1,1,0],
//  [0,0,1,1],
//  [0,0,0,1]]

// Output 1
// ----------------------------------------------------------------------------------
// Plan 
// Create a new matrix which will be filled when islands parts are visited
// Loop through the matrix, nested for loop
// Find the first island (1) that is not part of the visited matrix
// Update island counter += 1
// Add the island part to the visited matrix
// recursively find all other parts of the island
// Add island part to visited
// recursive call on the left, right, up, down of the island, pass visited as well
// ----------------------------------------------------------------------------------

// Time Complexity: O(M*N);
// Space Complexity O(M*N);
// ----------------------------------------------------------------------------------

const islandCount = (arr) => {
  let count = 0;

  // create a new matrix to add pieces of islands that we've
  // visited in order to not modify our origin matrix when performing dfs 
  let visited = Array(arr.length).fill().map(() => []);

  const dfs = (row, col, visited) => {
    if (visited[row][col] === 1) return;

    let top = row - 1;
    let bottom = row + 1;
    let right = col + 1;
    let left = col - 1;

    visited[row][col] = 1;
    
    // check row above
    if (top >= 0 && arr[top][col] === 1) {
      dfs(top, col, visited)
    }

    // check row below 
    if (bottom <= arr.length - 1 && arr[bottom][col] === 1) {
      dfs(bottom, col, visited);
    }

    // check column to the left
    if (left >= 0 && arr[row][left] === 1) {
      dfs(row, left, visited);
    }

    // check column to the right
    if (right <= arr[row].length - 1 && arr[row][right] === 1) {
      dfs(row, right, visited);
    }
  }

  for(let row = 0; row < arr.length; row++) {
    for(let col = 0; col < arr[0].length; col++) {
      if (!visited[row][col] && arr[row][col] === 1) {
        count++;
        dfs(row, col, visited);
      }
      visited[row][col] = 1;
    }
  }

  return count;
}

islandCount(
[[1,0,1,0],
 [1,0,0,1],
 [1,1,0,1]]
)
