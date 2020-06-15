// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// Plan
// Create a hash without the bucket to index into 
// Create current bucket length 
// Loop through the words and sort each
  // Check to see that it exists inside of the object 
    // if it does, add it to the value 
    // if it doesn't, add it to the object and 
    // Add it as a new bucket
// Return bucket 

// Time Complexity: o(n nlog(n))
// Space Complexity: o(n)
// const groupAnagrams = (words) => {
//   let wordObj = {};
//   let length = 0;
//   let wordBuckets = [];

//   words.forEach((word) => {
//     let sorted = word.split('').sort().join('');
//     if (wordObj[sorted] || wordObj[sorted] === 0) {
//       wordBuckets[wordObj[sorted]].push(word);
//     } else {
//       // Add new word
//       wordObj[sorted] = length;
//       wordBuckets[length] = [word];
//       length++;
//     }
//   })

//   return wordBuckets
// }


// Obj Example
// {
//   'asd': ['asd', 'dsa']
// }

const groupAnagrams = (words) => {
  let wordObj = {};

  for(let word of words) {
    let sorted = [...word].sort();
    if (wordObj[sorted]) {
      wordObj[sorted].push(word);
    } else {
      wordObj[sorted] = [word];
    }
  }

  return Object.values(wordObj);
}


groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])

