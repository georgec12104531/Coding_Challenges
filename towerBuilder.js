const towerBuilder = (n) => {
  let tower = [];
  for (let i = 0; i < n; i++) {
    let space = " ".repeat((n - i - 1))
    let asterisk = "*".repeat((i * 2) + 1) 
    tower.push(space + asterisk + space)
  }

  return tower
}

console.log(towerBuilder(3))

