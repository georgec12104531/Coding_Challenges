// Edgecases: 
// empty arr

// Plan
// - sort the array by star time 
// - loop through the array 
//     - if the currentEnd > nextStart
//         return false;

var canAttendMeetings = function(intervals) {
    const sortedMeetings = intervals.sort((a, b) => a[0] - b[0])

    for(let i = 0; i < sortedMeetings.length - 1; i++) {
      let currentEnd = sortedMeetings[i].end;
      let nextStart = sortedMeetings[i + 1].start;

      if(currentEnd > nextStart) return false;
    }
    
    return true;
};

canAttendMeetings([[0,4],[5,10],[12, 14]]);
