const reverseInt = (num) => {
  const neg = Math.abs(num) === (num * -1)
  const reverseNum = num.toString()
                        .split("")
                        .reverse()
                        .join("")

  return neg ? Number(reverseNum.slice(0, reverseNum.length-1)) * -1 : Number(reverseNum)
}

const reverseInt = (int) => {
  let neg = Math.abs(int) === (int * -1)
  let num = Math.abs(int)
  let rev = 0
  
  while (num !== 0) {
    let pop = num % 10
    num = Math.floor(num / 10)
    rev = rev * 10 + pop
  }

  return neg ? -1 * rev : rev
}

var reverse = function(x) {
    const strInt = x.toString();
    const isNeg = strInt[0] === '-';
    const end = isNeg ? 1 : 0;
    let reversedStrInt = '';

    for (let i = strInt.length - 1; i >= end; i--) {
        reversedStrInt += strInt[i];
    }
    
    const reversedInt = parseInt(reversedStrInt)
    
    return isNeg ? -1 * reversedInt : reversedInt    
};

const reverse = (int) => {
  const isNeg = int < 0;

  let x = isNeg ? Math.abs(int) : int;
  let reversedInt = 0;
  while (x > 0) {
    const nextInt = x % 10;
    x =  Math.floor(x / 10);
    reversedInt = reversedInt * 10 + nextInt
  }

  return isNeg ? reversedInt * -1 : reversedInt
}

// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

const reverseInt = (int) => {
  let strIntArr = int.toString().split('');
  revResultStr = '';
  const isNeg = int < 0;
  if (isNeg) {
    revResultStr += '-';
  }

  for(let i = strIntArr.length - 1; i >= 0; i--) {
    let current = strIntArr[i];
    if (i === strIntArr.length - 1 && strIntArr[i] === '0') {
      while (strIntArr[i] === '0') {
        i--;
      }
      i++;
    } else {
      revResultStr = revResultStr.concat(current);
    }
  }
  
  return parseInt(revResultStr);
}

const reverse = (int) => {
  let isNeg = int < 0;
  
  reversedIntStr = int
    .toString()
    .split('')
    .reverse()
    .join('')

  let maxNum = Math.pow(2, 31) - 1;
  
  resultInt = parseInt(reversedIntStr);

  if (isNeg) {
    resultInt = -(resultInt);
  }
  if (Math.abs(resultInt) >= maxNum) return 0;
  return resultInt;
}

reverse(-123000)
