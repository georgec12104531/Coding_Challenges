const highAndLow = (numbers) => {
  let strArr = numbers.split(" ");
  let max = strArr[0];
  let min = strArr[0];

  for (let i = 0; i < strArr.length; i++) {
    let currentMax = Number(max);
    let currentMin = Number(min);
    let currentNum = Number(strArr[i])
    let currentNumStr = strArr[i];

    if (currentNum > currentMax) {
      max = currentNumStr;
    } else if (currentNum < currentMin) {
      min = currentNumStr;
    }
  }
  return `${max} ${min}`
}

console.log(highAndLow("1 2 -3 4 5"))

const highAndLow = (numbers) => {
  let numStrArr = numbers.split(" ").map(Number);
  let max = Math.max.apply(0, numStrArr)
  let min = Math.min.apply(0, numStrArr)
  
  return `${max} ${min}` 
}


console.log(highAndLow("1 2 3 4 5 6"))
