// Plan
// If n < 2 return string n 
// let result = '11'
// let current = result[0]
// loop through, i starting at 2, until i < n 
// initialize newResult = ''
// intialize new counter = 0
// loop through the result
// if the el === current 
  // count++
// else 
  // newRes += counter + current 
  // current = el 
  // counter = 1
// result = newResult;
// result result

const countAndSay = (n) => {
  if (n < 2) {
    // Convert to string 
    return '' + n;
  }

  let result = '11';
  let curr = result[0];
  for (let i = 2; i < n; i++) {
    let newResult = '';
    let count = 0;

    for(let j = 0; j <= result.length; j++) {
      let el = result[j];

      if (el === curr) {
        count++;
      } else if(el !== curr) {
        newResult += count + curr;
        curr = el;
        count = 1
      }
    }

    result = newResult
  }

  return result;
}

countAndSay(3)
