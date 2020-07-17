// Input: cells = [0,1,0,1,1,0,0,1], N = 7
// Output: [0,0,1,1,0,0,0,0]
// Explanation: 
// The following table summarizes the state of the prison on each day:
// Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
// Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
// Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
// Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
// Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
// Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
// Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
// Day 7: [0, 0, 1, 1, 0, 0, 0, 0]


// Plan:
// Create copy of arr 
// Use anther number for times
// Create a loop that counts down times 
// Loop through the array starting from index 1... i < arr.length - 1
// Access the adjacent elements 
	// if the left element === right elemtn 
		//middle element = 1
	// else
		// middle element = 0

const prisonAfterNDays = (arr, times) => {
  let cells = arr.slice();
  let count = times;
  const length = arr.length;

  while (count) {
    let prev = cells.slice();
          
    cells[0] = 0;
    cells[length - 1] = 0;

    for(let i = 1; i < prev.length - 1; i++) {
      let current = prev[i];
      let left = prev[i - 1];
      let right = prev[i + 1];

      if (left === right) {
        cells[i] = 1
      } else {
        cells[i] = 0;
      }
    }

    count--;
  }

  return cells;
}

prison([0,1,0,1,1,0,0,1], 7)
