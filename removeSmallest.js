const removeSmallest = (numbers) => {
  const indexMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexMin), ...numbers.slice(indexMin + 1)]
}

const removeSmallest = (numbers) => {
  const indexMin = numbers.indexOf(Math.min(...numbers))
  return numbers.filter( (num, idx) => idx !== indexMin)
}

console.log(removeSmallest([1, 2, 3, 1, 5]))
