// Plan: 
// - extract all the strings using letters.
// - sort the stringArr 
// - concat both arrays together

// Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]


const reorderLogFiles = (logs) => {
  const getBody = (str) => (str.split(' ')[1][0]);
  const alphabet = 'abcdefghijklmnopqrstuvqxyz';

  const strLetterArr = logs.filter((str) => {
    const firstEl = str.split(' ')[1][0];
    return alphabet.includes(firstEl)
  })

  const compare = (a, b) => {
    return getBody(a).localeCompare(getBody(b));
  };

  const sortedStrLetterArr = strLetterArr.sort(compare)

  logs.forEach((log) => {
    if (!isNaN(getBody(log))) {
      sortedStrLetterArr.push(log);
    }
  })

  return sortedStrLetterArr;
};

reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]);
