const filterNonVowel = (str) => {
  const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
  const strArr = str.split("");
  console.log(strArr)
  return strArr.filter(el => !vowels.includes(el)).join("")
}

const filterNonVowelWords = (str) => {
  const strArr = str.split(" ");
  const filterStrArr = strArr.map(word => filterNonVowel(word))
  return filterStrArr.join(" ");
}

const disemVowel = (str) => {
  return str.replace(/blue/gi, "red");
}


console.log(disemVowel("Mr.Blue, likes blue things that are blue LOL blue blue blueee "))
