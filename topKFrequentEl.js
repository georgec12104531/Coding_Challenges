// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]


// Plan
// - Create result arr 
// - Create count obj 
// - loop through object and create an [[], [], []];
// - sort by index 1 
// - loop through to get top k numbers; 
// - return result 


var topKFrequent = function(nums, k) {
  if (k > nums.length) return [];
  let countArr = [];
  let result = [];

  let countObj = nums.reduce((count, el) => {
    count[el] = count[el] + 1 || 1
    return count;
  }, {})

  for(let el in countObj) {
    countArr.push([el, countObj[el]])
  }

  // console.log(countObj)

  let sortedCountArr = countArr.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;
  });

  for(let i = 0; i < k; i++) {
    result.push(+sortedCountArr[i][0])
  }

  return result
};

topKFrequent([4,1,-1,2,-1,2,3], 2)
