const twoSum = function(arr, target) {
  let indices = [];
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    let diff = target - val;

    if (hash[diff] === undefined) {
      hash[val] = i
    } else {
      result = [hash[diff], i]
    }
  }

  return result;
}



console.log(twoSum([1, 2, 3, 4], 6))


//return pairs, no duplicates 

const twoSum = (arr, target) => {
  let differenceHash = {};
  let usedHash = {};
  let resultArr = [];
  let diff = null; 

  arr.forEach(num => {
    diff = target - num
    if (differenceHash[num] && !usedHash[num]) {
      resultArr.push([num, differenceHash[num]])
      usedHash[num] = num
      usedHash[diff] = diff
    } else {
      differenceHash[diff] = num
    }
  })

  return resultArr;
}
