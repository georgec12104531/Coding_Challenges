const reverseString = (s) => {
    return s.reduce((reverseArr, char) => {
        reverseArr.unshift(char);
        return reverseArr;
    }, [])
};


const reverseString = (s) => {
  let revArr = [];
  for (let i = s.length - 1; i >= 0; i--) {
    revArr.push(s[i])
  }

  return revArr
}


console.log(reverseString(["h","e", "l", "l", "o"]))

