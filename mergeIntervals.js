// Input: [[1,3],[2,6],[3,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

const mergeIntervals = (intervals) => {
  // Sort intervals 
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  // instantiate prev with the first interval inside the sortedIntervals
  let prev = intervals[0];
  result = [prev];

  for(let i = 1; i < sortedIntervals.length; i++) {
    let curr = sortedIntervals[i];
    
    // if the start time for the current element is less than the previous end time, resassign the end time, which is pointing to the last interval pushed into result
    if (curr[0] < prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      result.push(curr);
      // prev = curr;
      // prev points to the last
      prev = result[result.length - 1];
    }
  }
  
  return result;
}




// --------------------

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Plan
// Create merged 
// Add first interval to merged
// Sort the intervals - n(log(n))
// Loop through the sorted intervals, starting with the interval at index 1
  // set currentInt = merged[merged.length - 1] 
  // if the start time current interval <= currentIn end time
    // currentInt[endTime] = current end time
  // else
    // add the current into interval 
    // reassign currentIn
// return the merged 


const mergeIntervals = (intervals) => {
  if (!intervals.length) return [];
  const sorted = intervals.sort((a, b) => a[0] - b[0])
  let merged = [sorted[0]];

  // console.log(merged)
  
  for(let i = 1; i < sorted.length; i++) {
    let time = sorted[i];
    let currentInt = merged[merged.length - 1];

    if (time[0] <= currentInt[1]) {

      currentInt[1] = Math.max(currentInt[1], time[1]);
    } else {
      merged.push(time);
    }
  }

  return merged;
}

mergeIntervals([[1,4],[2,3]])

mergeIntervals([[1,3],[2,6],[3,10],[15,18]])
