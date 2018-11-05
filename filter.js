function filter(arr, test) {
  finalArr = [];
  for (let el of arr) {
    if (test(el)) finalArr.push(el);
  }
  return finalArr;
}

filter([1, 2, 3], (el) => (el % 2 === 0));

