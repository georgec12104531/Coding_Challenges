const isUnique = (str) => {
  let letterObj = {};
  for(let i = 0; i < str.length; i++) {
    ch = str[i];
    if (letterObj[ch]) {
      return false;
    } else {
      letterObj[ch] = true;
    }
  }

  return true;
}

const lengthOfLongestSubstring = (s) => {
  if (s.length === 0) return 0;

  let currLength = 1;
  let currStr = '';

  let leaderLength = 1;
  let leaderStr = s[0];

  for (let i = 0; i < s.length - 1; i++) {
    currLength = 1;
    currStr = ''
    currStr = currStr.concat(s[i]);
    for (let j = i + 1; j < s.length; j++ ) {
      currStr = currStr.concat(s[j]);
      currLength += 1;
      if (isUnique(currStr) && currLength > leaderLength) {
        leaderStr = currStr;
        leaderLength = currLength;
      } else {
        continue;
      }
    }
  }

  return leaderLength
};
