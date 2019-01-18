  const bitHash = {
  0: '0000',
  1: '0001',
  2: '0010',
  3: '0011',
  4: '0100',
  5: '0101',
  6: '0110',
  7: '0111',
  8: '1000',
  9: '1001'
}


const hammingDistance = (x, y) => {
  const xBits = convertToBits(x);
  const yBits = convertToBits(y);

  console.log(xBits)
  console.log(yBits)

  let differenceCount = 0
  for (let i = 0; i < xBits.length; i++) {
    if (xBits[i] === undefined || yBits[i] === undefined) differenceCount += 4
    else differenceCount += bitDifference(xBits[i], yBits[i])
  }

  return differenceCount
}

const convertToBits = (num) => {
  return num.toString()
     .split("")
     .reduce((acc, char) => {
       acc.push(bitHash[char]);
       return acc;
     }, [])
}

const bitDifference = (numOne, numTwo) => {    
    let count = 0
    
    for (let i = 0; i < numOne.length; i++) {     
      count += bitNumDifferenceCounter(numOne[i], numTwo[i])
    }
    return count                
}


const bitNumDifferenceCounter = (numOne, numTwo) => {
  return (numOne !== numTwo) ? 1 : 0
}
