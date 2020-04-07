const romanToInt = (str) => {
  const romanValObj = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]])

  let i = str.length - 1;
  let result = romanValObj.get(str[i]);

  while (i > 0) {
    console.log('hi')
    let current = str[i];
    let previous = str[i - 1];

    if (romanValObj.get(previous) >= romanValObj.get(current)) {
      result += romanValObj.get(previous);
    } else {
      result -= romanValObj.get(previous);
    }

    i--;
  }

  return result;
}

romanToInt("MCMXCIV")
