
function betterCompression(str) {
    let regexStr = str.match(/[a-zA-Z]+|[0-9]+(?:\.[0-9]+|)/g);
    let sortedRegexStr = sortCompressions(regexStr);
    let number_hash = addCompressionsToHash(sortedRegexStr);
    let res = sortedCombinedCompressions(number_hash);

    return res;
}

const addCompressionsToHash = (sortedRegexStr) => {
    let number_hash = {}

    for (let i = 0; i < sortedRegexStr.length; i+=2) {
        number_hash[sortedRegexStr[i]] = number_hash[sortedRegexStr[i]] ? +sortedRegexStr[i + 1] + +number_hash[sortedRegexStr[i]] : sortedRegexStr[i + 1] 
    }

    return number_hash
}


const sortedCombinedCompressions = (number_hash) => {
  let keys = Object.keys(number_hash)
  let values = Object.values(number_hash)
  let result = ""

  for (let i = 0; i < keys.length; i ++) {
      result += keys[i]
      result += values[i]
  }

  return result;
}

const sortCompressions = (arr) => {
  let newDuoArr = []
    for (let i = 0; i < arr.length; i += 2) {
      newDuoArr.push(arr[i] + arr[i + 1])
    }

    return newDuoArr.sort()
                    .join()
                    .match(/[a-zA-Z]+|[0-9]+(?:\.[0-9]+|)/g)
}


console.log(betterCompression("c12a9b4a19"))
