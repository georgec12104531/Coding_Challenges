function pairMatch(array, callback) {
  let indices = [];

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (callback(array[i], array[j]) === true && (i !== j)) {
        indices.push([i, j]);
      }
    }
  }

  return indices;

}
