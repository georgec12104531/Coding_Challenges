
const uniqueInOrder = (iterable) => {
  let uniqArr = []

  for (let i = 0; i < iterable.length; i++) {
    if (uniqArr[uniqArr.length-1] !== iterable[i] ) {
      uniqArr.push(iterable[i])
    }
  }

  return uniqArr;
}

const uniqueInOrder = (arr) => {
  return [...arr].filter((el, idx) => el !== arr[idx - 1])
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
