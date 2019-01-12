const flipAndInvertImage = array => {
  const reversedArray = array.map(arr => arr.reverse())

  return reversedArray.map(arr => {
    return arr.map(num => num === 1 ? 0 : 1)
  })
}

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))
