// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false


const wordBreak = (str, dict) => {
  // Create convert dict into set for faster lookup time
  // Create a new set of visited starting indexes 
  // start a queue initializing it with 0 as the first element

  // Create a while loop (queue is not empty)
  // take the first element that was placed in the queue out 
  // start a for loop where the end is start + 1 and goes until the end of the string
  // slice the string from start to end (end is non-inclusive)
  // if the dictionary has the word
    // if the end is the s.length then return true 
  // Add the end to the queue
  // add start to visited
  // return false if all the final end is not the length of the string
}

// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

const wordBreak = (arr, s) => {
  let dictionary = new Set(arr);
  let visited = new Set();
  let queue = [0];

  while(queue.length) {
    let start = queue.shift();

    for(let end = start + 1; end <= s.length; end++) {
      let current = s.slice(start, end);

      if (dictionary.has(current) && !visited.has(current)) {
        if (end === s.length) return true
        queue.push(end);
      }
    }
  }

  return false
}

wordBreak(["apple", "pen"], 'applepenapple')
