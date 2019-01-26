var arrayPairSum = function(nums) {
  
  const sorted = nums.sort((x, y) => x - y);
  console.log(sorted)
  let res = 0;
  for(let i = 0; i < nums.length; i += 2){
    res += nums[i];
    console.log(res)
  }
  return res;
};


console.log(arrayPairSum([1, 3, 2, 4]))
