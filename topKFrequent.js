const topKFrequent = (arr, k) => {
  let result = [];
  let countObj = {}
  // Without using map, you it creates N number of arrays however, they are referenced the same.
  // Mutating one, mutates the rest.
  let buckets = Array(arr.length + 1).fill().map(() => []);;

  // Count numbers
  arr.forEach((number) => {
    countObj[number] = ~~countObj[number] + 1;
  })

  // Put numbers into buckets based on count 
  for(let num in countObj) {
    buckets[countObj[num]].push(num) ;
  }
  
  // In reverse, get the K push the K number of elements into the result array 
  let count = k;
  for (let i = arr.length; i >= 0 && count > 0; i--) {
    console.log('i', i, 'buckets', buckets[i])
      if (buckets[i].length === 0) {
        continue;
      } else {
        result.push(buckets[i].shift());
        i++;
        count--;
      }
  }

  return result;
}
