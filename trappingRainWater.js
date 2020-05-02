// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

// Plan: 

// - Start each pointer on the left side and right side 
// - if left < right, go left 
//   - if left > leftMax 
//       leftMax = left ;
//   - else 
//       add to area
//       leftMax - left; 
//   else 
//     is right > righMax
//       rightMax = max;
//     else 
//       rightMax - right;

// return max;

var trap = function(height) {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let area = 0;

  while (left < right) {

    if (height[left] < height[right]) {
      if (height[left] > leftMax) {
        leftMax = height[left];
      } else {
        area += leftMax - height[left];
      }

      left++;
    } else {
      if (height[right] > rightMax) {
        rightMax = height[right];
      } else {
        area += rightMax - height[right];
      }

      right--;
    }
  }

  return area;
};

trap([0,1,0,2,1,0,1,3,2,1,2,1]);
