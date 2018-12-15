const narcissistic = (value) => {
  let strArr = String(value).split("");
  let power = strArr.length;
  let sum = strArr.reduce((total, num) => total + Math.pow(num, power), 0)

  return sum === value
}

console.log(narcissistic(153))
