// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.


function maxSubArray(arr) {
  let currentSum = 0;
  let maxSum = -Number.MAX_VALUE;
  
  for(let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    if (currentNum > currentNum + currentSum) {
      currentSum = currentNum;
    } else {
      currentSum += currentNum;
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

function maxSubArray(arr) {
  let currentSum = 0;
  let maxSum = -Number.MAX_VALUE;

  arr.forEach((currentNum) => {
    currentSum = Math.max(currentNum + currentSum, currentNum);
    maxSum = Math.max(currentSum, maxSum);
  })

  return maxSum;
}

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
