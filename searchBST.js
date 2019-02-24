Note:
- You need to return each recursive searchBST call in order to actually return 
the node in the end. Without it the function will just return undefined.


const searchBST = (root, val) => {
    //if the node if null or the value of the node is the value, return the node.
    if (!root || root.val === val ) {
        return root;   
    } else if (root.val > val) {
    //if the node's value if greater than the target value, look on the left side of the BST
        return searchBST(root.left, val);   
    } else {
    // if the node's value is less than the target value, look on the right side of the BST
        return searchBST(root.right, val);   
    }
};
