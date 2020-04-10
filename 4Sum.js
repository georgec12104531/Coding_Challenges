var fourSum = function(nums, target) {
    resultArr = [];

    let sortedNums = nums.sort((a, b) => a- b)
    
    for (let a = 0; a <= sortedNums.length - 4; a++) {
        for (let b = a + 1; b <= sortedNums.length - 3; b++) {
            let l = b + 1;
            let r = sortedNums.length - 1;
            
            while (l < r) {
                let sum = sortedNums[a] + sortedNums[b] + sortedNums[l] + sortedNums[r];  
                if (sum > target) {
                    r--;
                } else if (sum < target) {
                    l++;
                } else {
                    resultArr.push([sortedNums[a], sortedNums[b], sortedNums[l], sortedNums[r]]);

                    l++;
                    r--;
                }
            }
        }
    }
    
    return resultArr
};
