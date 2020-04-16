// Edgecases: 
// - number does not exist inside the array the return the array.length

// Plan: 
// - Create i for index of current non val number
// - Create a scout to find the next non val number 
// - if (next non val number) then i++ and assign arr[i] to become that number 
// - return i + 1

var removeElement = function(nums, val) {
  let i = 0
  for(let j = 0; j < nums.length;j++) {
    if (nums[j] != val) {
      nums[i] = nums[j]
      i++;
      console.log('nums mod: ', nums)
    }
  }

  return i;
};
