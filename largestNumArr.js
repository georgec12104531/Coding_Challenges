// Input: [3,30,34,5,9]
// Output: "9534330"

// Plan:
// .sort the nums
// compare the digits
  // we need both numbers to have the same amount of digits 
  // concating the numbers together, and then again in reverse order 
  // concat the digits together for the first number 
  // concat reverse for the second digit ex. `${b}${a}` - `${a}${b}`
  //
// compare the numbers
// return arr.join('')

const largestNumber = (nums) => {
  let sorted = nums.sort((a, b) => {
    return `${b}${a}` - `${a}${b}`
  }).join("")

  return sorted == 0 ? '0' : sorted;
}
