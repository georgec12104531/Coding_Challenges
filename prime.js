function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}


function primes(num) {
  const prime_arr = [];
  let i = 2;

  while (prime_arr.length < num) {
    if (isPrime(i)) prime_arr.push(i)
    i += 1
  }

  return prime_arr;
}
