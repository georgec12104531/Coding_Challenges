const findMissingNum = (nums) => {
  const sortedNums = nums.sort((a, b) => a - b);

  let current = nums[0];
  current++;
  for(let i = 1; i < sortedNums.length; i++) {
    if (sortedNums[i] !== current) return current;
    current++;
  }
}

const findMissingNum = (nums) => {
  const n = nums.length;
  const total = nums.reduce((sum, num) => (sum + num), 0);
  const sum = ((n + 1) * (n + 2)) / 2;

  return sum - total;
} 

findMissingNum([1, 2, 3, 4, 5, 7])
