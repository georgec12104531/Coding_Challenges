
// Clarifying Question: 
// - Always Integers
// - 0 => false 

// Input: 6
// Output: 
// * 
// *  *
// *  *  *
// *  *  *  *
// *  *  *  *  *
// *  *  *  *  *  *
// *  *  *  *  *
// *  *  *  *
// *  *  *
// *  *  
// *


// - Use a loop that starts at 1 goes to n, 
// - [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]

// Design: 
// - First an array with the loop starting from 1 - n 
// - push into the array n-1 - 1 
// - iterate through the array, printing out the number * "*"

// - [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]

const starPrinter = (number) => {
  let multiplierArr = [];
  for (let i = 1; i <= number; i++) {
    console.log("*".repeat(i))
  }
  //[1, 2, 3, 4, 5, 6]

  for (let j = number - 1; j >= 1; j--) {
    console.log("*".repeat(j))
  }
  //[1, 2, 3, 4, 5, 6, 5, 3, 2, 1]
}

console.log(starPrinter(6))

//o(n^2)





