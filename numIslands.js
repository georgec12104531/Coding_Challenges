// Plan:
// - count = 0 
// - Find the first island ('1'),
//   - Nested for loop
// - Once we find the first island 
//   - count += 1
//   - perform a search on the surround 1's 
//     - row <= grid.length - 1
//     - column < grid[0].length
//     - converst all suround 1's to 0's
//   - if they are 0, return 
// - return count 

var numIslands = function(grid) {
    let count = 0;

    for(let r = 0; r < grid.length; r++) {
      for(let c = 0; c < grid[0].length; c++) {
        if (grid[r][c] === '1') {
          count++;

          search(r, c, grid);
        }
      }
    }

  return count;
};

const search = (r, c, grid) => {
      if (r < 0 || c < 0) return;
      if (r >= grid.length) return;
      if (c >= grid[0].length) return;
      if (grid[r][c] === '0') return;
      
      grid[r][c] = '0';

      search(r + 1, c, grid);
      search(r - 1, c, grid);
      search(r, c + 1, grid);
      search(r, c - 1, grid);
}

numIslands(
[ [ '1', '1', '1', '1', '0' ],
  [ '1', '1', '1', '1', '0' ],
  [ '1', '0', '0', '0', '0' ],
  [ '0', '0', '0', '1', '0' ] ]);
