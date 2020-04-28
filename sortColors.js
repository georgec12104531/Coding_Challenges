// Input: [2,0,2,1,1,0]
// [0,2,1, 1,0,2]
          //  | |

// Output: [0,0,1,1,2,2

// Plan:
// - sorted = false;

// - while (!sorted) {
// - sorted = true
// - for loop through array 
// - declare current 
// - declare next 
// }
// - current number > next, number, switch
//   sorted = false 

const sortColors = (nums) => {
    let sorted = false;

    while (!sorted) {
      console.log('inside while')
      sorted = true;
      for(let i = 0; i < nums.length - 1; i++) {
        let current = nums[i];
        let next = nums[i + 1];

        console.log(current, next); 

        if (current > next) {
          [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
          sorted = false;
        }
      }
    }

    return nums;
};

sortColors([2,0,2,1,1,0]);

function sortColors (nums) {
    let low = 0, high = nums.length - 1

    for (let i = 0; i <= high;i++) {
        if (nums[i] === 0) {
            [nums[i], nums[low]] = [nums[low], nums[i]]
            low++;
        } else if (nums[i] == 2) {
            [nums[i], nums[high]] = [nums[high], nums[i]]
            high--;i--
        } 
    }
};

sortColors([2,0,2,1]);
