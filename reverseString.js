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

const reverse = (strArr) => {
  let strArrCopy = strArr.slice();
  let i = 0;
  let j = strArrCopy.length - 1;

  while (i < j) {
    [strArrCopy[i], strArrCopy[j]] = [strArrCopy[j], strArrCopy[i]]
    
    i++;
    j--;
  }

  return strArrCopy;
}

reverse(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
