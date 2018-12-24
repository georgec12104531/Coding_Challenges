const tripleDouble = (numOne, numTwo) => {
  for (let i = 0; i < 10; i++) {
    if (new RegExp(`${i}{3}`).test(numOne) && new RegExp(`${i}{2}`).test(numTwo)) return 1
  }

  return 0
}
