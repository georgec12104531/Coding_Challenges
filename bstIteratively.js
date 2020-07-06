// Iteratively 

// Get left and right indexes 
// While left < right 
// get new middle 
// check if middle index is element is equal to target 
// if current is less than target , move left to middle 
// if current is more than target more right to middle 

const bst = (arr, target) => {
  let left = 0
  // O(n)
  let right = arr.length
  //o(n)
  while (left + 1 < right) {
    let mid = Math.floor((right - left) / 2);
    console.log('l', left, 'r', right, 'mid', mid)
    let guess = left + mid;

    if (arr[guess] === target) {
      return true;
    }

    if (arr[guess] < target) left = guess;
    if (arr[guess] > target) right = guess;
  }

  return false;
}



bst([1, 2,3, 4, 6, 7, 8, 9], 5)
