// Use Set to store, if object exist already, then return the num;

const findDuplicate = (nums) => {
  let numSet = new Set();
  
  for(let i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i])) {
      return nums[i];
    } else {
      numSet.add(nums[i])
    }
  }
 
  return -1;
}

// const findDuplicate = (nums) => {
//   let countObj = {};
//   let buckets = Array(nums.length + 1).fill().map(() => []);

//   // Create count object
//   nums.forEach((num) => {
//     countObj[num] = (countObj[num] || 0) + 1;
//   }) 

//   // Add numbers to count buckets
//   nums.forEach(num => {
//    buckets[countObj[num]].push(num);
//   })

//   // loop through in reverse, to get the largest count bucket
//   for(let i = buckets.length - 1; i >= 0; i--) {
//     let currentBucket = buckets[i];
//     if (currentBucket[0]) {
//       return currentBucket[0];
//     }
//   }

//   return -1
// };

findDuplicate([1, 2, 3, 2, 5])
