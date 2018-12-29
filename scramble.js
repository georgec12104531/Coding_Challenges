const scramble = (strOne, strTwo) => {
  const strOneHash = {};
  strOne.split("").forEach(char => strOneHash[char] = (strOneHash[char] || 0) + 1)
  return strTwo.split("").every(char => strOneHash[char])
}


const scramble = (strOne, strTwo) => {
  const hash = strOne.split("").reduce((hash, char) => {
    hash[char] ? hash[char]++ : hash[char] = 1;
    return hash;
  }, {})

  return strTwo.split("").every(char => hash[char]) 
}
