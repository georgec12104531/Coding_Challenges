// input: [1, 'a', [1, 2, 3, [1, 2, 3, 4]], 6];
// output: [1, 'a', 1, 2, 3, 1, 2, 3, 4, 6];

// Plan: 
// - Iterate through the array 
// - If the typeof === 'object' 
//   result = result.concat(function(element))
//   else 
//     result.push(element);

// - return result

const flatten = (arr) => {
  let result = [];

  for(let i=0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }

  return result;
}

const flatten = (arr) => {
  return arr.reduce((acc, el) => {
    if (typeof el === 'object') {
      return acc.concat(flatten(el));
    } else {
      return acc.concat(el);
    }
  }, [])
}

flatten([1, 'a', [1, 2, 3, [1, 2, 3, 4]] , 6]);
