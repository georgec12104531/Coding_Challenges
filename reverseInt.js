const reverseInt = (num) => {
  const neg = Math.abs(num) === (num * -1)
  const reverseNum = num.toString()
                        .split("")
                        .reverse()
                        .join("")

  return neg ? Number(reverseNum.slice(0, reverseNum.length-1)) * -1 : Number(reverseNum)
}

const reverseInt = (int) => {
  let neg = Math.abs(int) === (int * -1)
  let num = Math.abs(int)
  let rev = 0
  
  while (num !== 0) {
    let pop = num % 10
    num = Math.floor(num / 10)
    rev = rev * 10 + pop
  }

  return neg ? -1 * rev : rev
}
