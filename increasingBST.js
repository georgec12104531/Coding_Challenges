const increasingBST = (root) => {
    let nodes = []
    dfs(root)
    const treeNode = new TreeNode(0);
    let current = treeNode;
    for (let i = 0; i < nodes.length; i++) {
        current.right = new TreeNode(nodes[i]);
        current = current.right
    }
    
    return treeNode
    
    function dfs(root) {
        if(root != null) {
            dfs(root.left)
            nodes.push(root.val)
            dfs(root.right)
        }
    }   
    
};
