const reverseInt = (num) => {
  const neg = Math.abs(num) === (num * -1)
  const reverseNum = num.toString()
                        .split("")
                        .reverse()
                        .join("")

  return neg ? Number(reverseNum.slice(0, reverseNum.length-1)) * -1 : Number(reverseNum)
}
