const isSqArr = (arrayOne, arrayTwo) => {

  if (arrayOne == null || arrayTwo == null) return false;
  const arrayOneSorted = arrayOne.sort((a, b) => a - b)
  const arrayTwoSorted = arrayTwo.sort((a, b) => a - b)

  return arrayOneSorted.map(num => Math.pow(num, 2))
                              .every((num, i) => num === arrayTwoSorted[i])
}

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

console.log(isSqArr(a, b))
