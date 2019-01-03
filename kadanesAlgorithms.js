const kandanesAlgorithm = (arr) => {
  let subSum = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i ++) {
    subSum = Math.max(0, subSum + arr[i])
    sum = Math.max(subSum, sum)
    
    console.log("this is the current element", arr[i])
    console.log("this is subSum", subSum)
    console.log("this is sum", sum)
  }

  return sum
}

console.log(kandanesAlgorithm([1, 2, -4, 1, 5]))

//Finds the largest sum of contiguous subarrays
//Time complexity: O(n) because it loops through the array once
