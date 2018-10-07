Array.prototype.mergeSort = function (callback) {
  // let that = this;
  if (this.length <= 1) return this;

  if (!callback) {
    callback = (x, y) => {
      return x < y ? -1 : x > y ? 1 : 0;
    };
  }

  let mid = Math.floor(this.length / 2);
  let left = this.slice(0, mid).mergeSort(callback);
  let right = this.slice(mid).mergeSort(callback);

  return merge(left, right, callback);
};

function merge(left, right, callback) {
  let merged = [];

  while (left.length && right.length) {
    switch(callback(left[0], right[0])) {
      case -1:
        merged.push(left.shift());
        break;
      case 0:
        merged.push(left.shift());
        break;
      case 1:
        merged.push(right.shift());
        break;
    }
  }

  merged = merged.concat(left);
  merged = merged.concat(right);

  return merged;
}
