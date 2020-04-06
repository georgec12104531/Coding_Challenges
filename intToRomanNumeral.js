const intToRoman = (int) => {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

  let num = int;
  let romNumStr = '';
  while (num > 0) {
    for(let i = 0; i < values.length; i++) {
      if (num >= values[i]) {
        num -= values[i]
        romNumStr += romNum[i];
        break;
      }
    }
  }

  return romNumStr;
}
