const oddOrEven = (arr) => {
  const sum = arr.reduce((sum, el) => sum + el, 0)
  return sum % 2 === 0 ? "even" : "odd"
}

console.log(oddOrEven([2, 4, 5, 1]))

