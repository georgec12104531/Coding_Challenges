const sortedSquares = function(A) {
    return A.map(el => el * el)
            .sort((a, b) => a - b);
};

const sortedSquares = (arr) => {
  l = 0;
  r = arr.length - 1;
  resultArr = [];

  while (l <= r) {
    if (arr[l] ** 2 > arr[r] ** 2) {
      resultArr.unshift(arr[l] ** 2);
      l++;
    } else {
      resultArr.unshift(arr[r] ** 2)
      r--;
    }
  }

  return resultArr;
}


console.log(sortedSquares([-4, -2, -1, 0, 1, 3, 4]))
