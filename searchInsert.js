// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0


// Loop through the array   
    // Check to see that element(input) is equal || // Check to see theat element(input) is less than 
        // return the index 
// return nums.length 

// -------------------------------------------------------------------------------------------------------
// Time Complexity: O(n)
// Space Complexity: O(1)
// -------------------------------------------------------------------------------------------------------

var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        let current = nums[i];
        
        if (target <= current) return i; 
    }
    
    return nums.length;
};

// Plan
// create left pointer starting from index 0
// create right pointer starting from index arr.length - 1
// start a while loop, left <= right
  // if the mid is less, move left to mid + 1 to look the right
  // if the mid is more, move right to mid - 1 to look to the righ t
  // else mid is equal to the target, return the mid index 
  
  // left and right will eventually becomes the same if the target is not present 
  // if the target is less than all numbers is the array, the algorithm will set right to -1 and we will return
  // left which is 0;

  // is the target is greater than all the numbers the left and right will eventually becomes the same 
  // which is the arr.length - 1. left will get added one index and we will return left 

// -------------------------------------------------------------------------------------------------------
// Time Complexity: O(log n)
// Space Complexity: O(1)
// -------------------------------------------------------------------------------------------------------

const searchInsert = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(left, right, mid)
    if (arr[mid] < target) {
      left = mid + 1;
      console.log('left', left)
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return left;
}

searchInsert([1,3,5,6], 7)
