//Tail End Recursion

const hasPathSum = function(root, sum) {
    return hasPath(root, sum, 0);
};

const hasPath = (root, sum, count) => {
    if (!root) return null;
    
    count += root.val
    console.log(count)
    
    if (!root.left && !root.right) {
        return sum === count;
    }
    
    return hasPath(root.left, sum, count) || hasPath(root.right, sum, count)
}



//Closure Version
const hasPathSum = function(root, sum) {
    const hasPath = (root, sum, target) => {
        if (!root) return false 
        target += root.val
        
        if (!root.left && !root.right) {
            return sum === target
        }
        
        return hasPath(root.left, sum, target) || hasPath(root.right, sum, target)
    }
    return hasPath(root, sum, 0)
};


//#3

const hasPathSum = (root, sum) => {
  let a = false;
      b = false

  sum -= root.val;
  if (sum === 0 && !root.left && !root.right) {
    return true;
  }

  if (root.left) {
   a = hasPathSum(root.left, sum);   
  }
  if (root.right) {
   b = hasPathSum(root.right, sum);   
  }

  return a || b
}




