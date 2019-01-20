function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const mergeTrees = (t1, t2) => {
  if (!t1 && !t2) return null
  if (t1 && !t2) return t1
  if (!t1 && t2 ) return t2
      
  let mergeValue = t1.val + t2.val
  let mergeNode = new TreeNode(mergeValue)
  mergeNode.left = mergeTrees(t1.left, t2.left)
  mergeNode.right = mergeTrees(t1.right, t2.right)

  return mergeNode
}
