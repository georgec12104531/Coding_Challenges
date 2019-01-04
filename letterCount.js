function count(string) {  
  return string.split("").reduce((hash, char) => {
     hash[char] ? hash[char]++ : hash[char] = 1;
     return hash
  }, {})
}

console.log(count("string"))
