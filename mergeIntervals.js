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

mergeIntervals([[1,3],[2,6],[3,10],[15,18]])
