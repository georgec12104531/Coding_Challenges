const scramble = (strOne, strTwo) => {
  const strOneHash = {};
  strOne.split("").forEach(char => strOneHash[char] = (strOneHash[char] || 0) + 1)
  return strTwo.split("").every(char => strOneHash[char])
}

