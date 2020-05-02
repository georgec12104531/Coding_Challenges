
const createStr = (str, start, end) => {
    let currentStr = '';
    
    for(let i = start; i <= end; i++) {
        currentStr = currentStr.concat(str[i]);   
    }    
    
    return currentStr;
}
    
const isPalindrome = (str) => {
    let reverseStr = '';
    
    for (let j = str.length - 1; j >= 0; j--) {
        reverseStr = reverseStr.concat(str[j])
    }
    
    return str === reverseStr; 
}

var longestPalindrome = function(s) {
    const subStrArr = [];
    let longestPal = '';
    
    for(let i = 0; i < s.length; i++) {
        for(let j = i; j < s.length; j ++) {
            const currentStr = createStr(s, i, j);
            
            if (isPalindrome(currentStr) && currentStr.length > longestPal.length) {
                longestPal = currentStr
            }
        }
    }
    
    return longestPal;
};


longestPalindrome('cbbd')


// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

// Plan: 
// - Find the center of a palindrome 
//   for loop
// - assign left and right pointer to itself or the next element to the right;
//   second for loop
// - move left and right pointers as far out as element at left and element at right are the same 
// - check to see that the length is greater than the longestLength 
// - return longestLength 

var longestPalindrome = function(s) {
  let left = null, right = null;
  let longestLength = 0;

  for (let i = 0; i < s.length - 1; i++) {
    for (let j = 0; j <= 1; j++) {
      left = i;
      right = i + j;

      while(s[left] && s[left] === s[right]) {
        left--;
        right++;
      }

      length = right - left - 1;
      
      if (length > longestLength) {
        longestLength = length; 
      }
    }
  }
  
  return longestLength;
}

longestPalindrome('aaaaadddaaaaaaaasdfdsa');
