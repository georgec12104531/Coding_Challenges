const peakIndexInMountain = (arr) => {
  let middle = Math.floor(arr.length / 2)
  let max = [[arr[middle]], middle]

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > max[0]) {
      max = [arr[i], i]
    }
  }

  return max[1]
}

//time complexity: O(n)

const peakIndexInMountainArray = (arr) => {
  if (arr.length === 0) return null
  if (arr.length === 1) return arr[0]
  if (arr.length === 2) return arr.indexOf(Math.max(...arr)) 

  let mid = Math.floor(arr.length / 2)
  let left = arr[mid - 1]
  let right = arr[mid + 1]
  let current = arr[mid]

  if (left < current && right < current) {
    return mid
  } else if (left > current) {
    let leftResult = peakIndexInMountainArray(arr.slice(0, mid))
    return leftResult
  } else {

    
    let result = peakIndexInMountainArray(arr.slice(mid + 1))
    
    return result === null ? null : result + mid + 1
  }
}

const peakIndexInMountainArray = (arr) => {
  return arr.indexOf(Math.max(...arr))
}

const peakIndexInMountainArray = (arr) => {

  const mid = (left, right) => {
    return Math.floor((right - left) / 2)
  }

  let [left, right] = [0, arr.length - 1]
  let pivot = mid(left, right)
  
  console.log(arr[pivot])
  while (arr[pivot - 1] > arr[pivot] || arr[pivot + 1] > arr[pivot] ) {
    if (arr[left] > arr[pivot]) {
      console.log('left')
      right = pivot
      pivot = mid(left, right)
    } else {
      left = pivot 
      pivot += mid(left + right)
    }
  }

  return pivot
}
