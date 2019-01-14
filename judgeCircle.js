const judgeCircle = (string) => {
  let [leftRight, upDown] = [0, 0]

  const moves = string.split("")

  moves.forEach(move => {
    if (move === "U") upDown++
    else if (move === "D") upDown--
    else if (move === "R") leftRight++ 
    else if (move === "L") leftRight--
  })

  return leftRight === 0 && upDown === 0
}

console.log(judgeCircle("UD"))
