const subset = (nums) => {
  let result = [];
  let current = [];

  const getSubset = (result, current, rest) => {
    if (current.length) {
      result.push(current);
    }

    for(let i = 0; i < rest.length; i++) {
      newCurrent = current.concat([rest[i]])
      newRest = rest.slice(i + 1);
      getSubset(result, newCurrent, newRest);
    }
  }

  getSubset(result, current, nums);

  return result;
}
