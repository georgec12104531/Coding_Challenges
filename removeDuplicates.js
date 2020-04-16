// Plan: 
// - Create an object, if the object does not contain the object, then add to count
// - return return count 


const removeDuplicates = function(nums) {
  const numObj = {};
  let count = 0;

  nums.forEach((num) => {
    if (!numObj[num]) {
      numObj[num] = true;
      count += 1
    }
  })

  return count;
};

const removeDuplicates = (nums) => {
  if (nums.length === 0) return nums;

  count = 0;
  for(let i = 0; i < nums.length; i++) {
    if (nums[count] !== nums[i]) {
      count++;
      nums[count] = nums[i];
    }
  } 

  return count + 1;
}

removeDuplicates([0,0,1,1,1,2,2,3,3,4])
