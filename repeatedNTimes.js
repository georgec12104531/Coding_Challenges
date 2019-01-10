const repeatedNTimes = function(arr) {
    let repeat = Math.floor(arr.length / 2)

    const hashCount = arr.reduce((hash, num) => {
        hash[num] ? hash[num]++ : hash[num] = 1;
        return hash
    }, {})
    
    return arr.find(el => hashCount[el] === repeat)
};


const repeatedNTimes = function (arr) {
  let hash = {}
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      return arr[i]
    } else {
      hash[arr[i]] = 1
    }

    console.log(hash)
  }

  return null
}

console.log(repeatedNTimes([5,1,5,2,5,3,5,4]))
