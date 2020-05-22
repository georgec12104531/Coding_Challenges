const permuation = (arr) => {
  let result = [];
  permute(result, [], arr);
  return result;
}

const permute = (result, curr, remainder) => {
  if (remainder.length === 0) {
    result.push(curr);
  }

  for(let i = 0; i < remainder.length; i++) {
    permute(result,  [...curr, remainder[i]], [...remainder.slice(0, i), ...remainder.slice(i + 1)]);
  }
}

permuation([1, 2, 3])
