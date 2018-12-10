          
const isPrime = (n) => {
  if (n === 1) return false
  for (let i = 2; i < n - 1; i ++) {
    if (n % i === 0) return false 
  }
  return true;
}

const sqRev = (n) => {
  let num = n ** 2
  let numPrime = Number(num.toString()
                  .split("")
                  .reverse()
                  .join(""))
  return(isPrime(numPrime));
}



const cubeRev = (n) => {
  let num = n ** 3
  let numPrime = Number(num.toString()
                .split("")
                .reverse()
                .join(""))
  return isPrime(numPrime);
}




const sqCubRevPrime = (n) => {
  let i = 89
  let counter = 1
  while (counter < n + 1) {
    if (sqRev(i) && cubeRev(i) && counter === n) {
      return i
    } else if (sqRev(i) && cubeRev(i)) {
      console.log(i)
      counter++
    }
    i++
  }
}

sqCubRevPrime(4)
