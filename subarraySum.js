// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:

// Input:nums = [1,1,1], k = 2
// Output: 2


// o(n^2)

const subArraySum = (num, k) => {
  subArrStartEnd = [];
  let count = 0;

  // Get start and ends
  for(let start = 0; start < num.length; start++) {
    for(let end = start; end < num.length; end++) {
      subArrStartEnd.push([start, end])
    }
  }

  // Get sub arrays
  let subArrays = [];
  for(let i = 0; i < subArrStartEnd.length; i++) {
    let current = subArrStartEnd[i];
    let [start, end] = current;
    subArrays.push(num.slice(start, end + 1))
  }

  // Get sums
  for(let subArr of subArrays) {
    let sum = subArr.reduce((acc, el) => {
      acc += el;
      return acc
    }, 0)

    if (sum === k) count++;
  }

  return count;
} 


subArraySum([1, 1, 2, 1], 3)
