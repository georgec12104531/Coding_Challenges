// Input: "The quick brown fox jumps over the lazy dog."
// Output: True

// Input: "This is not a pangram."
// Output: False

const isPangram = (string) => {
  const alpha = "abcdefghijklmnopqrstuvqxyz"
  
  const strHash = string.split("").reduce((hash, char) => {
    let lowerCaseCurr = char.toLowerCase()
    hash[lowerCaseCurr] ? hash[lowerCaseCurr]++ : hash[lowerCaseCurr] = 1;
    return hash
  }, {})

  return alpha.split("").every(char => strHash[char])
}

console.log(isPangram("This is not a pangram."))
