const fib = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 1
  let prevTwo = 1
  let current = 1
  for (let i = 2; i < n; i++) {
    current = prev + prevTwo;
    prevTwo = prev;
    prev = current
  }

  return current;
}

//O(N) solution


//recursive solution

const fib = (n) => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}
