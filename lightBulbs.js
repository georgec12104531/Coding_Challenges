const lightBulbs = (arr) => {
  let moment = 0;
  let current = null
  let looking = 1
  let peak = arr[0]

  for (let i = 0; i < arr.length; i++) {
    current = arr[i]
    if (current > peak) peak = current;
    if (current === looking && looking === peak) {
      looking++
      moment++
    }
    if (current === looking) looking++
    if (looking === peak) {
      looking++
      moment++
    }
  }

  return moment
}


console.log(lightBulbs([4, 1, 2, 3, 5, 6, 7, 9, 8]))
