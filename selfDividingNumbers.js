const selfDividingNumbers = (left, right) => {
  let selfDivNum = [];
  for (let i = left; i < right + 1; i++) {
    if (isSelfDiv(i)) selfDivNum.push(i)
  }

  return selfDivNum;
}

const isSelfDiv = (num) => {
  const numString = num.toString()
                    .split("")

  return numString.every(el => {
    return num % el === 0 && el !== 0
  })
}

//Time Complexity: O(N^2)

