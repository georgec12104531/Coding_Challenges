var maxArea = function(height) {
    let largestContainer = 0;
    
    for (let i = 0; i < height.length - 1;i++) {
        for (let j = i + 1; j < height.length; j ++) {
            let lowestPeak = Math.min(height[i], height[j])
            let distance = j - i
            let currentArea = distance * lowestPeak
            
            if (currentArea > largestContainer) {
                largestContainer = currentArea
            }
        }
    }
    
    return largestContainer
}; 

// keep track of a maxArea
// keep track of a left
// keep track of a right

// if the element at left index is < element at right peak, move left index to the right 
// else move the element on the right to the left 
// Calculate the Math.max between the maxArea and current Area 
// return the maxArea


const maxArea = (height) => {
  let largestArea = 0;
  let leftIndex = 0;
  let rightIndex = height.length - 1;

  while (leftIndex < rightIndex) {
    let lowestPeak = Math.min(height[leftIndex], height[rightIndex]);
    let width = rightIndex - leftIndex;
    let currentArea = lowestPeak * width;
    largestArea = Math.max(largestArea, currentArea);

    if (height[leftIndex] < height[rightIndex]) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return largestArea;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
