// // Input: [
// //   [2,1,1],
// //   [1,1,0],
// //   [0,1,1]
// // ]
// // // Output: 4


// // Plan:
// // - Create a queue 
// // - Create a freshTomatoes
// // - Create a minutes
// // - Loop through the array using a nested for loop to get the number of fresh tomatoes 
// //   - if the tomato is rotten (2) add [r, c] to the queue
// //   - if the tomato is fresh (1), count++ 


// // - Create a while loop, while there are the number of freshTomatoes > 0 && queue.length > 0 
// //   - unshift the first element off the queue 
// //   - put the array into a function that infects the surrounding tomatoes 
// //     - Add newly infected into the queue
// //     - return number of newly infected 
// //   - freshTomatoes = newly infected
// //   - minutes++
// // - return minutes

const rottenTomatoes = (arr) => {
  let queue = [], freshTomatoes = 0, minutes = 0;

  arr.forEach((row, rIndex) => {
    row.forEach((column, cIndex) => {
      let currentTomato = arr[rIndex][cIndex];

      if (currentTomato === 2) {
        queue.push([rIndex, cIndex])
      } else if (currentTomato === 1) {
        freshTomatoes++;
      }
     })
  })

  while(queue.length && freshTomatoes) { 
    let newQueue = [];
    
    while(queue.length) {
      let currentInfected = queue.shift();
      let newly = infect(currentInfected, arr, newQueue);

      freshTomatoes -= newly;
    }

    minutes++;
    queue = newQueue
  }

  return minutes;
}


function infect(tomato, arr, q) {
  let newlyInfect = 0;
  let r = tomato[0];
  let c = tomato[1];
  

  if (r < arr.length - 1 && arr[r + 1][c] === 1) {
    arr[r + 1][c]++;
    newlyInfect++;
    q.push([r + 1, c])
  }
  if (r > 0 && arr[r - 1][c] === 1) {
    arr[r - 1][c]++;
    newlyInfect++;
    q.push([r - 1, c])
  }
  if (c < arr[0].length - 1 && arr[r][c + 1] === 1) {
    arr[r][c + 1]++;
    newlyInfect++;
    q.push([r, c + 1])
  }
  if (c > 0 && arr[r][c - 1] === 1) {
    arr[r][c - 1]++;
    newlyInfect++;
    q.push([r, c - 1])
  }
  
  return newlyInfect;
}
