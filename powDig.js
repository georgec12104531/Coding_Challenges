const powerDig = (numOne, numTwo) => {
  let intArr = String(numOne).split("");
  let power = numTwo;
  let sum = 0;
  let i = 0;

  while (i < intArr.length) {
    let currentInt = Number(intArr[i]);
    sum += Math.pow(currentInt, power);

    i++
    power++
  }

  return sum % numOne === 0 ? sum / numOne : -1
} 

const digPow = (num, pow) => {
  let total = String(num).split("").reduce((sum, num, index) => sum + Math.pow(num, pow + index), 0)
  return total % num === 0 ? total / num : -1
}


console.log(digPow(695, 2))
