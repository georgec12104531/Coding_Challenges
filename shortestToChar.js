const shortestToChar = (S, C) => {
  return S.split("").map((char, idx) => {
    return distanceToChar(S, C, idx)
  })
}

const distanceToChar = (string, target, index) => {
  let left = index - 1;
  let right = index + 1;

  if (string[index] === target) return 0
  
  while (left >= 0 || right <= string.length - 1 ) {
    if (string[left] === target) return (index - left);
    if (string[right] === target) return (right - index);
    left--;
    right++;
  }
}
