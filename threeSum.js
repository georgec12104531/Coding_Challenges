// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// EC: 
// - If none equal sum, return empty arr 
// - duplicates? Add the arrays to se a set, convert set back to array?

// Plan:
// - loop through the array 
//   - create fixed element 
//   - create left pointer (i + 1);
//   - create right pointer (arr.length - 1)
// - while (i < j)
// - if (all three elements add up to 0)
//   - add [a, b, c] into set 
//   i++, j++
// - convert Set back to array 
// - return array

const threeSum = (arr) => {
  let result = [];
  const sorted = arr.sort((a, b) => a - b);

  for(let i = 0; i < sorted.length - 2; i++) {
    let l = i + 1;
    let r = sorted.length - 1;

    if (i > 0 && sorted[i] === sorted[i - 1]) {
     continue;
    }

    while (l < r) {
      let currentSum = sorted[i] + sorted[l] + sorted[r];

      if (currentSum < 0) {
        l++;
      } else if (currentSum > 0) {
        r--;
      } else if (currentSum === 0) {
        result.push([sorted[i], sorted[l], sorted[r]])
        l++;
        r--;

        while (l < r && arr[l] === arr[l - 1]) {
          l++;
        }

        while (l < r && arr[r] === arr[r + 1]) {
          r--;
        }
      }
    }
  }

  return result;
}

