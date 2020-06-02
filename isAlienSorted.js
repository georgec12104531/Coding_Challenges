// Plan:
// create a map to index into into the order
// Check to see that the current words first letter is has a smaller index compared to the next 
  // if it is larger return false 
  // if both have the same letter, loop through until they don't 
  // if word on right's current index is undefined return false 
  // if the word on the right's letter is less than the previous letter, return false 

const isAlienSorted = (words, order) => {
  // Create a map to for o(1) lookup
  let dictionary = order.split('').reduce((result, letter, index) => {
    result[letter] = index;
    return result;
  }, {})

  for(let i = 0; i < words.length - 1; i++) {
    let current = words[i], next = words[i + 1];

    if (dictionary[current[0]] > dictionary[next[0]]) return false;
    if (dictionary[current[0]] === dictionary[next[0]])  {
      // Find the next letter where they arent't the same 
      let index = 1;
      while(current[index] === next[index]) index++;
      
      // Shorter words with matching letters is considered "smaller"
      if (next[index] === undefined) return false;
      if (dictionary[next[index]] < dictionary[current[index]]) return false;
    }
  }

  return true;
}
