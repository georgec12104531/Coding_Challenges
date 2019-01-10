const morrisCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

const alphabet = "abcdefghijklmnopqrstuvwxyz"

const morrisConverter = (str) => {
  const alphaHash = alphabet.split("").reduce((hash, char, idx) => {
    hash[char] = morrisCode[idx];
    return hash
  }, {})

  return str.split("").reduce((total, char) => {
    total += alphaHash[char];
    return total;
  }, "")
}


const uniqueMorseRepresentations = (strArr) => {
  const morrisHash = strArr.reduce((hash, word) => {
    hash[morrisConverter(word)] ? hash[morrisConverter(word)]++ : hash[morrisConverter(word)] = 1;
    return hash
  }, {})

  return Object.keys(morrisHash).length
}


console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))
