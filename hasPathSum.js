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

