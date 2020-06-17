const findKthLargest = function(nums, k) {
  if (k > nums.length) return -1;

  let sorted = nums.sort((a, b) => b - a);
  return sorted[k - 1]
};
