const swapNum = (int) => {
  const strInt = int.toString();
  let largestNum = [null, null];

  for(let i = 1; i < strInt.length; i++) {
    if(!largestNum[0] || strInt[i] >= largestNum[0]) {
      largestNum = [strInt[i], i];
    }
  }

  strIntArr = strInt.split('');

  for(let i = 0; i < strIntArr.length; i++) {
    if(largestNum[0] > strIntArr[i]) {
  
      [strIntArr[i], strIntArr[largestNum[1]]] = [strIntArr[largestNum[1]], strIntArr[i]];
      break;
    }
  } 

  const newStrInt = strIntArr.join('');
  const swapInt = parseInt(newStrInt);
  
  return swapInt;
}

swapNum(2849)
