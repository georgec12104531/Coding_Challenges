var threeSumClosest = function(nums, target) {
    let closest = 99999;
    
    for (let a = 0; a < nums.length - 2; a++) {
        for (let b = a + 1; b <nums.length - 1; b++) {
            for (let c = b + 1; c < nums.length; c++) {
              let sum = nums[a] + nums[b] + nums[c];
                if (Math.abs(target - sum) < Math.abs(target - closest)) {
                  closest = sum;
                }
            }
        }
    }
    
    return closest
};

threeSumClosest([-1, 2, 1, -4], 1)

const threeSumClosest = (arr, target) => {
  // sort the array 
  const sortedArr = arr.sort((a, b ) => a - b);
  let closest = 0;

  for (let i = 0; i < sortedArr.length - 2; i++) {
    let l = i + 1;
    let r = sortedArr.length - 1;

    while (l < r) {
      let sum = sortedArr[i] + sortedArr[l] + sortedArr[r];  
      if (target === sum) return target;

      if (target - closest > target - sum) {
        closest = sum;
      }

      sum > target ? r-- : l++;
    }
  }

  return closest;
}

threeSumClosest([-1, 2, 1, -4], 1)
