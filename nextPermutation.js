// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
// The replacement must be in-place and use only constant extra memory.
// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

const nextPermutation = (nums) => {
  // Find the first dip where nums[i - 1] < nums[i] from right to left
  // From that index, find the next largest number
  // swap 
  // Reverse the section of of the array 
  // return new array 
}
