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
