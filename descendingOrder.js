const descendingOrder = (num) => {
  numStr = String(num).split("")
                      .sort()
                      .reverse()
                      .join("")
                                    
  return numInt = Number(numStr)                      
}


console.log(descendingOrder(1234))
