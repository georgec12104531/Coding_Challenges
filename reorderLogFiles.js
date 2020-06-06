// Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

// Plan
// Loop through the array, 
// if the element is a dig add it to the dig array 
// if the elemnt is let add it to the letter array 

// Sort the digital array 
// Sort the letter array 

// combine the dig with the letter array 

 const reorderLogFiles = (arr) => {

   // Filter the dig strings
   // O(n)
   let digArr = arr.reduce((acc, str) => {
     if (str[0] === 'd') {
        acc.push(str);
     }
    
     return acc;
   }, []);

   // Sort digArr by the number after 'dig'
   let sortedDigArr = digArr.sort((a, b) => a[3] - b[3]);

   // Filter  letter strings
   // O(n)
   let letArr = arr.reduce((acc, str) => {
     if (str[0] === 'l') {
       acc.push(str)
     }
     
     return acc
   }, []);

    // console.log('letARr', letArr)

   let sortedLetArr = letArr.sort((a,b) => {
      var aSlice = a.slice(5);
      var bSlice = b.slice(5);
      // a is less than b return -1 
      // b is less than a return 1
      return aSlice < bSlice ? -1 : 1;
    });

   return [...sortedLetArr, ...sortedDigArr];
 }

 reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"])
