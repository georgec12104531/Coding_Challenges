const sortArrayByParity = (array) => {
  const evens = array.filter(num => num % 2 === 0)
  const odds = array.filter(num => num % 2 === 1)
  
  return [...evens,...odds]
}

const sortArrayByParity = (arr) => {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    if (arr[left] % 2 === 1 && arr[right] % 2 === 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
    }
    //left is even
    if (arr[left] % 2 === 0) {
      left++
    }
    //right is odd
    if (arr[left] % 2 === 1) {
      right--
    }
  }
  return arr
}

console.log(sortArrayByParity([1, 3, 7, 8, 1, 5, 2, 3, 4]))
