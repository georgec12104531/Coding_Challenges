
// Plan: 
// - Keep track of a longestPrefix
// - Loop through the input 
// - Loop through string at index 0
//     - if all strings contain the current letter then add it to the longestPrefix
//     - else break
// - return longestPrefix

// Input: ["flower","flow","flight"]
// Output: "fl"

const longestCommonPrefix = (strs) => {
  let longestPrefix = '';
  const firstStr = strs[0];

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < firstStr.length; j++) {
      // If 
      if (strs[i][j] === firstStr[j] && i === strs.length - 1) {
        console.log('last string, matching letter')
        longestPrefix += firstStr[j];
      } else if (strs[i][j] === firstStr[j]) {
        break;
      } else if (strs[i][j] !== firstStr[j]) {
        return longestPrefix;
      }  
    }
  }

  return longestPrefix 
};

const longestCommonPrefix = (strs) => {
  let longestCommonPrefix = '';
  const firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    for (str of strs) {
      if (str[i] !== firstStr[i]) {
        return str.slice(0, i)
      }
    }
  }

  return longestCommonPrefix;
}

console.log(longestCommonPrefix(["flower","asdf","ffaslight"]))
