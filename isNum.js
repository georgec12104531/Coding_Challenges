function isNum(str) {
  let strArr = str.trim().split('');
  let decimalCount = 0;

  for(let i = 0; i < strArr.length; i++) {
    let currentItem = strArr[i];

    if (currentItem === '-' && i !== 0) return false;
    if (currentItem === '.') {
      decimalCount++;
      if (decimalCount > 1) return false;
    }

    if (currentItem !== '.' && currentItem !== '-' && isNaN(currentItem)) return false;
  }

  return true;
}
