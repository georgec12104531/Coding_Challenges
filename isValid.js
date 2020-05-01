// Notes:
// - equal left brackets to right brackets 
// - order matters

// "( ) [ ] { }"
//    |

// brackObj = {
//     '{': '}',
//     '(': ')',
//     '[': ']'
// }


// leftBrac = '('

// Edgecases: 

// Plan: 
// - Iterate through the string, if you can key into the brackObj (it is left)
// - prepend the bracket into the string
// - once we hit a bracket that is not a left bracket we go throught the first element in the str
// - key into the bracket, and make sure that it's matching the value in the brackObj
// - if it is matching we can remove the string (.slice) from the leftBrack
// - if it's not matching then return false
// - return true at the end




var isValid = function(s) {
  brackObj = {
    '{': '}',
    '(': ')',
    '[': ']'
  }

  let leftBrackets = ''

  for (let i = 0; i < s.length; i++) {
    let currentBrack = s[i];
    let isLeftBracket = brackObj[currentBrack];
    
    if (isLeftBracket) {
      leftBrackets = currentBrack + leftBrackets;
    }

    if (!isLeftBracket) {
        if (brackObj[leftBrackets[0]] === currentBrack) {
          leftBrackets = leftBrackets.slice(1, leftBrackets.length);
        } else {
          return false;
        }
    }
  } 
  
  return true;
};


// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

// Plan:
// - Obj, to identify matching brackets 
// - Keep track of the left brackets, queue?
// - Iterate through the strBrackets
//   if (its a left bracket)
//     add it to the queue (unshift) 
//   if (it's a right racket)
//     check the queue to see that it's matching with bracketObj, 
//       return false, if not 
//     pop off queue 
// - return true;


// ['],

// ' ( [ { } ] )'
//             |


// refactor, change bracketMatchingObj and condition to match


// const isValid = (s) => {
//   bracketMatchingObj = {
//     ')':'(',
//     ']':'[',
//     '}': '{', 
//   }

//   let queue = [];

//   for(let i = 0; i < s.length; i++) {
//     let bracket = s[i];

//     if (!bracketMatchingObj[bracket]) {
//       queue.unshift(bracket);
//     } else {
//       if (bracketMatchingObj[bracket] !== queue[queue.length - 1]) return false
//       queue.pop();;
//     }
//   }
    
//   return true;
// };

const isValid = (s) => {
  bracketMatchingObj = {
    '(':')',
    '[':']',
    '{': '}', 
  }

  let stack = [];

  for(let i = 0; i < s.length; i++) {
    let bracket = s[i];
    console.log('BRACKET: ', bracket);
    if (bracketMatchingObj[bracket]) {
      stack.push(bracket);
    } else {
      let lastBracket = stack[stack.length - 1];
      
      if (bracketMatchingObj[lastBracket] !== bracket) return false;
      stack.pop();;
    }
  }

  return stack.length === 0;
};

isValid("[{{{{")
