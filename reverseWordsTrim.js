const reverseWords = (str) => {
  // trim 
  str = str.trim();
  let strArr = str.split(" ");

  filteredStrArr = strArr.filter((str) => {
    return str !== ""
  })

  return filteredStrArr
            .reverse()
            .join(" ");
}
