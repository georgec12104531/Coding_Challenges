function primeFactorization(num) {
  if (num === 1) return [];

  let upperRange = Math.ceil(Math.sqrt(num))

  for (var i = 2; i <= upperRange; i++) {
    if (num % i === 0) {
      let factors = [i].concat(primeFactorization(num / i))
      return factors;
      console.log("hit");
    }
  }
  return [num]
}
