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

////The array is modified as it is passed up the call stack, unlike integers which are primitive datatypes



const leafSimilar = function(root1, root2) {
    return leaves(root1, []);
};

const leaves = (root, result) => {
    if (!root) return null;
    console.log(root.val, 'this is node', result, 'result before everything')
    if (!root.left && !root.right) {
        result.push(root.val);
    }
    console.log(root.val, 'this is node', result, "result before left")
    leaves(root.left, result)
    console.log(root.val, 'this is node', result, 'result before right')
    leaves(root.right, result)
    
    return result;
}
