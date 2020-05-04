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
  // worst case O(nlogn)
  arr = arr.sort();

  resultSet = new Set;

  // O(n^2)
  for(let i=0;i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;


    if(arr[i] === arr[i-1]) continue;

    while (left < right) {

      if (arr[i] + arr[left] + arr[right] < 0) {
        left++
      } else if (arr[i] + arr[left] + arr[right] > 0) {
        right--
      } else if (arr[i] + arr[left] + arr[right] === 0) {
        resultSet.add([arr[i], arr[left], arr[right]])
        left++
        right--
       
       	while (left < right && arr[left] === arr[left - 1]) {
					left++;
				}
				while (left < right && arr[right] === arr[right + 1]) {
					right--;
        }
      }
    }
  }

  return Array.from(resultSet)
}
