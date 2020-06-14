const topKFrequent = (arr, k) => {
  let result = [];
  let countObj = {}
  // Without using map, you it creates N number of arrays however, they are referenced the same.
  // Mutating one, mutates the rest.
  let buckets = Array(arr.length + 1).fill().map(() => []);;

  // Count numbers
  arr.forEach((number) => {
    countObj[number] = ~~countObj[number] + 1;
  })

  // Put numbers into buckets based on count 
  for(let num in countObj) {
    buckets[countObj[num]].push(num) ;
  }
  
  // In reverse, get the K push the K number of elements into the result array 
  let count = k;
  for (let i = arr.length; i >= 0 && count > 0; i--) {
    console.log('i', i, 'buckets', buckets[i])
      if (buckets[i].length === 0) {
        continue;
      } else {
        result.push(buckets[i].shift());
        i++;
        count--;
      }
  }

  return result;
}

///////////////////


// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"

// Plan
// Create object 
// Create array of n empty array(s) 
// Loop through to add to count obj
// Loop through obj and add key to count index 
// Loop through array backwards and get the array that is not empty 
// return sorted

// n log(n)
const topKFrequent = (arr) => {
  let buckets = new Array(arr.length + 1).fill().map(() => []);
  let countObj = {};

  for(let i = 0; i < arr.length; i++) {
    let current = arr[i];

    if (countObj[current]) {
      countObj[current] = countObj[current] + 1;
    } else {
      countObj[current] = 1;
    }
  }

  console.log(countObj)

  for(let key in countObj) {
    buckets[countObj[key]].push(key);
  }

  let mostFrequent;

  for(let i = buckets.length - 1; i >= 0; i--) {
    let current = buckets[i];
    if (current.length) {
      mostFrequent = current;
      break;
    }
  }

  return mostFrequent.sort();                                  
}

topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"])

// Example 1:
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:
// Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// Output: ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
//     with the number of occurrence being 4, 3, 2 and 1 respectively.

// Create an object with counts
// Sort based on count value 

Time Complexity: o(n log(n))

const topKFrequent = (words, k) => {
  const wordCount = words.reduce((acc, word) => { 
    acc[word] = acc[word] + 1 || 1
    return acc
  }, {})

  let sorted = Object.keys(wordCount).sort((a, b) => {
    if (wordCount[a] > wordCount[b]) return -1;
    if (wordCount[a] < wordCount[b]) return 1;
    if (wordCount[a] === wordCount[b]) {
      return a < b ? -1 : 1
    }
  })

  return sorted.slice(0, k)
}


topKFrequent( ["m", "love", "leetcode", "m", "love", "coding"], 2)
