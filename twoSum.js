const twoSum = (arr, target) => {
  // Difference: index, Object 
  let targetObj = {};

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let diff = target - current;
    // If the difference exists then we know there is a perfect sum
    if (targetObj[diff] || targetObj[diff] === 0) return [targetObj[diff], i];
    // Store
    targetObj[current] = i;
  }
}
