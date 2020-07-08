
const multiply = (str1, str2) => {
  if (str)
  let product = str1 * str2;
  let result = ""

  while(product) {
    let tail = product % 10;
    result = ("" + tail).concat(result);
    product = Math.floor(product / 10);    
  }

  return result;
}

multiply(123, 123)
