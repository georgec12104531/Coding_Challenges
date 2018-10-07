function substrings(string) {
  let substring = [];

  for (var i = 0; i < string.length; i++) {
    for (var j = i; j < string.length; j++) {
      substring.push(string.slice(i, j + 1));
    }
  }

  return substring;
}


function uniqueSubstrings(string) {
  let subs = substrings(string);
  let uniqueSubs = [];

  for (var i = 0; i < subs.length; i++) {
    if (!uniqueSubs.includes(subs[i])) {
      uniqueSubs.push(subs[i]);
    }
  }

  return uniqueSubs;
}
