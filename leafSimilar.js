const leafSimilar = function(root1, root2) {
    
    let leavesOne = [];
    let leavesTwo = [];
    
    const dfs = (root, arr) => {
        if (root === null) return null
        if (root.left === null && root.right === null) {
            arr.push(root.val)
        }
        
        dfs(root.left, arr)
        dfs(root.right, arr)
        return arr
    }
    
    
    let result = dfs(root1, leavesOne)
    let resultTwo = dfs(root2, leavesTwo)
    
    return result.every((el, idx) => resultTwo[idx] === el )   
};

