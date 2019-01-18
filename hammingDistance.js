// The ^ operator returns a 1 when the bits are difference 

const hammingDistance = function(x, y) {
  return  oneDiff = (x^y).toString(2)
                         .split("")
                         .filter(el => el === '1')
                         .length
};
