const sortOddsArray = (arr) => {
  const sortedOdds = arr.filter(el => el % 2 === 1).sort((a, b) => a - b)
  return arr.map((el => el % 2 === 0 ? el : sortedOdds.shift()))
}

console.log(sortOddsArray([6, 3, 1, 6, 3, 5, 7, 8]))
