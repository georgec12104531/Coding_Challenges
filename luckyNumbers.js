
Input: matrix = 
[
  [3,7,8],
  [9,11,13],
  [15,16,17]
]
Output: [15]

// get all the minimums in the row

// {
//   0: 14,
//   1: 12,
//   2: 23,
// }
// nested for loop 
// get the largest number
// if the largest number in the column === object[i], we can push into our result array the number 
// return resultArr
// o(n^2)


const luckyNumbers = (matrix) => {
  let luckyNumArr = [];
  let rowMinNum = {};

  // Find a minimum in row;
  matrix.forEach((row) => {
    let min;
    row.forEach((item, index) => {
      console.log(item)
      if (!min || item < min) {
        // console.log('hi')
          min = item;
         rowMinNum[index] = item;
      }
    })
  })

  console.log(rowMinNum)
  
  // Find max in column
  for (let i=0; i < matrix[0].length; i++) {
    let columnMax;
    matrix.forEach((row, j) => {
      let currentItem = row[i];
      if(!columnMax || currentItem > columnMax) {
        columnMax = currentItem;
      }
      if (j === matrix.length - 1 && columnMax === rowMinNum[i]) {
        console.log(currentItem)
        luckyNumArr.push(currentItem);
      }
    })
  }

  return luckyNumArr;
};

luckyNumbers([[7,8],[1,2]]);

// Draft
// Build two arrays
// Loop through both to check is element exists both
