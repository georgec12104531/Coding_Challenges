// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1


// Edgecases: 
// - if the haystack === needle, return 0
// - if needle is not part of haystack return -1
// - multiple needles in haystack
// - needle is empty string, return 9

// Plan:
// - if needle is less length === 0 return 0;
// - Iterate through the haystack
// - if the first letters in haystack and needle match then search to see the rest of the haystack
// - Create helper function to check substring (haystack, index, index + needle.length), returns boolean 
// - if true, then return the current index 
// - return -1

const strStr = (haystack, needle) => {
  if (needle.length === 0) return 0;

  for(let i=0; i < haystack.length;i++) {
    let firstNeedleLetter = needle[0];
    let currentLetter = haystack[i];

    if (
      firstNeedleLetter === currentLetter 
      && isSubstring(haystack, needle, i, i + needle.length)
    ) {
      return i;
    }
  } 

  return -1
}

const isSubstring = (haystack, needle, start, end) => {
  let str = '';
  let needleCopy = needle.slice();
  // console.log(needleCopy);
  for (let i = start; i < end; i++) {
    if (haystack[i] !== needleCopy[0]) {
      return false;
    }
     needleCopy = needleCopy.slice(1, needleCopy.length); 
  }

  return true;
}

const strStr = (haystack, needle) => {
  if (needle.length === 0) return 0;

  for(let i=0; i < haystack.length;i++) {
    let firstNeedleLetter = needle[0];
    let currentLetter = haystack[i];

    if (firstNeedleLetter === currentLetter) {
      let substr = haystack.substring(i, i + needle.length);
      if (substr === needle) {
        return i
      }
    }
  } 

  return -1
}

strStr("abcde", 'cd')
