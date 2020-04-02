
// [1, 2]
// [3, 4]


const findMedianSortedArrays = (arr1, arr2) => {
  const combinedSortedArr = [];
  // arr1
  let a = 0;
  // arr2
  let b = 0;

  console.log(arr1, arr2)

  console.log(arr1.length - 1)
  console.log(arr2.length - 1)
  console.log(arr1[arr1.length - 1])

  while (a !== (arr1.length) && b !== (arr2.length)) {
  
    const arrACurrent1 = arr1[a];
    const arrBCurrent2 = arr2[b];
    console.log('current a', a, 'current b', b)
    console.log(arrACurrent1, arrBCurrent2)


    if (arrACurrent1 < arrBCurrent2 && a !== arr1.length) {
      combinedSortedArr.push(arrACurrent1)
      console.log('a', combinedSortedArr)
      a++;
      console.log('a after', a, 'b too after a', b)
    } else {
      console.log('b hit')
      combinedSortedArr.push(arrBCurrent2);
      console.log('b', combinedSortedArr)
      b++;
    }
  }

  // console.log(combinedSortedArr);

  // // even number of elements
  // if (combinedSortedArr.length % 2 === 0) {
  //   const indexOne = Math.round(combinedSortedArr.length / 2)
  //   const indexTwo =indexOne - 1;

  //   return (combinedSortedArr[indexOne] + combinedSortedArr[indexTwo]) / 2;
  // // odd number of elements
  // } else {
  //   return Math.floor(combinedSortedArr[combinedSortedArr.length / 2])
  // }
}

console.log(findMedianSortedArrays([1, 2], [3, 4]))
