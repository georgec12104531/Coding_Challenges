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

//Refactored

const isUnique = (str, start, end) => {
  let letterObj = {};
  for(let i = start; i < end; i++) {
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
  let leader = 0;
 for (let i = 0; i < s.length; i++) {
   for (let j = i + 1; j < s.length; j++) {
     if (isUnique(s, i, j)) {
       length = j - i;
       leader = Math.max(leader, length)
     }
   } 
 }

 return leader;
};

//--------------------------------------------------------------------------------------

function lengthOfLongestSubstring(s) {
    let map = {};
    let left = 0;
    let max = 0;

    for(let i = 0; i < s.length; i++) {
      let current = s[i];

      // Check to see that the letter exists inside of the current substring
      // If it does, then shift left to the next index;
      // Uses >= operator to account for 0
      if (map[current] >= left) {
        left = map[current] + 1;
      } 

      map[current] = i;

      max = Math.max(max, i - left + 1);
      console.log(max)
    }

    return max; 
}

function lengthOfLongestSubstring(s) {
  let map = {};
  let left = 0;

  let maxLength = s.split('').reduce((max, el, i) => {
    if (map[el] >= left) {
      left = map[el] + 1;
    }

    map[el] = i;
    max = Math.max(max, i - left + 1);
  }, 0)

  return maxLength;
}

lengthOfLongestSubstring('abcabcbb')
