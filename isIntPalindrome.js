var isPalindrome = function(x) {
    // short-circuit number if negative
    if (Math.abs(x) !== x) return false;
    
    const strInt = x.toString();
    const isEven = strInt.length % 2 === 0;
    const leftCenter = isEven ? Math.floor(strInt.length / 2) - 1 : Math.floor(strInt.length / 2);
    const rightCenter = isEven ? Math.floor(strInt.length / 2) : Math.floor(strInt.length / 2);

    let left = 0;
    let right = strInt.length - 1;

    if (left === 0 && right === 1 && strInt[0] !== strInt[1]) return false;

    console.log(left, leftCenter, right, rightCenter)
    while (left !== leftCenter && right !== rightCenter) {
      console.log(strInt[leftCenter], strInt[rightCenter])
        if (strInt[left] !== strInt[right]) {
            return false;
        }
            
        left++;
        right--;
    }

    if (isEven) {
       return strInt[left] === strInt[right]
    }
    
    return true;
};

const isPalindrome = (int) => {
  if (int < 10 && int >= 0) return true;
  console.log(int < 0)
  if (int < 0) return false;
  if (int % 10 === 0) return false

  let copyInt = int;
  let revInt = 0;

  while (copyInt > 0) {
    revInt *= 10;
    revInt += copyInt % 10;
    copyInt = Math.trunc(copyInt / 10); 
  }

  return int === revInt
}
