// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

var subsets = function(nums) {
  let result = [];

  const doRecursion = (curr, arr) => {
    result.push(curr);

    arr.forEach((el, i) => {
      let newCurr = curr.slice();
      newCurr.push(el);
      doRecursion(newCurr, arr.slice(i + 1));
    })
  }

  doRecursion([], nums)
  return result;
};

subsets([1, 2, 3])
