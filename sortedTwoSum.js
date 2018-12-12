// - Keeping pointers for left and right 
// - if the sum is less than target, than move left one element to the right 
// - if the sum is greater than the target than move right element, one element to the left
// - return indices if sum is target 
// - return -1 if both indices are pointing at the same element 


const sortedTwoSum = (arr, target) => {
 let left = 0
 let right = arr.length-1

  while (arr[left] !== arr[right]) {
    let sum = arr[left] + arr[right]
    if (sum === target) {
      return [left, right]
    } else if (sum < target) {
      left++
    }
    else if (sum > target) {
      right--
    }
  }
  
  return -1
}

console.log(sortedTwoSum([0, 1, 4, 6, 8], 5))
