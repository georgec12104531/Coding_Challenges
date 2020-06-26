// Create an empty set so we know if the sum has been seen before 
// while the number is not zero 
// loop through the number
  // sum 
  // cut off the number
  // square it and add it to the sum 
// if the sum is zero , return true  
// if the sum exists in the set, return false;
// else add it to the set 

const isHappy = x => {
  let seen = new Set()
  let n = x;

  while(x) {
    if (x === 1) return true;
    if (seen.has(x)) return false;
    seen.add(x);
    let d = x;
    let sum = 0;
    while (d) {
      let last = d % 10;
      sum += last * last;
      d = Math.floor(d / 10);
    }
    x = sum
  } 
};

const isHappy = (num) => {
  let seen = new Set();
  let x = num;
  const run = (x) => {
    console.log('x at the top', x)
    if (x === 1) return true;
    if (seen.has(x)) return false;
    seen.add(x)
    let sum = 0;
    while (x) {
      let next = x % 10;
      sum += next * next;
      x = Math.floor(x / 10); 
    }
    return run(sum)
  }
  return run(x);
}

isHappy(19)
