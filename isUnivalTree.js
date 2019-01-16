const isUnivalTree = function(root) {
    return processNode(root, root.val);
};

const processNode = function(node, rootValue) {
  if (node.value === null) return true 
  
  return (isSameAsRoot(node, rootValue) && isSameAsRoot(node.left, rootValue) && node.right, rootValue)
}

const isSameAsRoot = function(node, rootValue) {
  return node.value ===  rootValue
}
