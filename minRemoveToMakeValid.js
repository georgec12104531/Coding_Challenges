// Example 1:

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
// Example 2:

// Input: s = "a)b(c)d"
// Output: "ab(c)d"
// Example 3:

// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.
// Example 4:

// Input: s = "(a(b(c)d)"
// Output: "a(b(c)d)"


// Create a stack to validate parenthesis 
// Split the string into strArr
// Loop through the strArr 
  // If the element is '(' add ['(', index] to the stack
  // If the element is ')' and there are no elements in the stack 
    // then make it an empty str
  // else 
    // remove the first element from the stack 
    
// Check to see if there are elements in the stack left, 
// Loop through and make it an empty str 
// return strArr.joing('')

// Time Complexity: O(n)
// Space Complexit: O(n)

var minRemoveToMakeValid = function(s) {
  let strArr = s.split('');
  let stack = [];

  let i = 0;
  while(i < strArr.length) {
    let el = strArr[i];

    if (el === '(') {
      stack.push([el, i]);
    } else if (el === ')') {
      if (!stack.length) {
        strArr[i] = ''
      } else {
        stack.pop();
      }
    }

    i++;
  }
  
  // Deal with '(' stragglers
  if (stack.length) {
    stack.forEach((el, i) => {
      strArr[i] = ''
    })
  }

  return strArr.join('');
};

minRemoveToMakeValid("(a(b(c)d)")
