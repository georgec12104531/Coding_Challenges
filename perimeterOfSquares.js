function perimeter(n) {
  let i = 2;
  let arr = [1, 1];
  while (i < n + 1) {
    arr.push(arr[i - 1] + arr[i - 2]);
    i ++;
  }

  sum = arr.reduce((total, num) => {
    return total + num
  })

  return sum * 4
}

Time Complexity: O(2N) => O(N)
