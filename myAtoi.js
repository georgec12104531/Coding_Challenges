var myAtoi = function(str) {
    
    // check to see if first non white space is a letter 
    const spacesRemovedStr = str.split(' ').join('');
    if (
      !parseInt(spacesRemovedStr[0]) && spacesRemovedStr[0] !== '-' || 
      !parseInt(spacesRemovedStr[1]) && spacesRemovedStr[0] !== '-' 
    ) {
        return 0
    }
    
    const isNeg = spacesRemovedStr[0] === '-' || spacesRemovedStr[0] === '-'
    
    const strNum = str.split('').reduce((acc, el) => {
        if (parseInt(el)) {
            acc = acc + el 
        }
        console.log(acc)
        return acc;
    }, '') 
    
    const finalInt = parseInt(strNum)
    
    if (finalInt > Math.pow(2, 32)) {
        return Math.pow(2, 31)
    }

    if (isNeg && finalInt > Math.pow(2, 32)) {
        return Math.pow(2, 31) * -1
    } else if (isNeg) {
        return finalInt * -1
    } else {
        return finalInt
    }
}

const myAtoi = (str) => {

  let result = 0;
  let i = 0;
  let isNegative = false;

  while(str[i] === ' ') {
    i += 1
  }

  if (str[i] === '-') {
    isNegative = true;
    i += 1
  }

  for (; i < str.length - 1; i ++) {
    let currInt = str.charCodeAt(i) - 48

    if (currInt < 0 || currInt > 9) {
      break;
    }

    result *= 10;
    result += currInt;
  }

  if (isNegative) {
    result = -result;
  }

  return Math.max(Math.min((2**31), result), -(2**31))
}
