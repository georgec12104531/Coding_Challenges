
const threeSum = (arr) => {
  let resultArr = [];
  let sumObj = {}

  arr.forEach((fixedNumber, index) => {
    for (let i = index + 1; i < arr.length; i++) {
      let currentNum = arr[i];
      const difference = 0 - currentNum - fixedNumber ;

      if (!sumObj[difference]) {
        sumObj[currentNum] = fixedNumber;
        console.log(sumObj)
      } else {
        resultArr.push([currentNum, difference, sumObj[difference]])
      }

    }
    sumObj = {}
  })

  return resultArr;
}


threeSum([0,0,0]);
