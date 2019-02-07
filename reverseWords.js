const reverseWords = (words) => {
  return words.split(" ")
              .map(word => reverseWord(word))
              .join(" ")
}

const reverseWord = (word) => {
  return word.split("")
       .reverse()
       .join("")
}

/// 

const reverseWords = (words) => {
  let result = ""
  let word = ""
  
  for (let letter of words) {
    if (letter === " ") {
      result += word + " "
      // `${word} `
      word = ""
    } else {
      word = letter + word
    }
  }

  return result
}

