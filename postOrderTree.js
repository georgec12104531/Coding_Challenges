var postorder = function(root) {
    return createPostOrder(root, [])
};

const createPostOrder = (node, list) => {
    if (!node) return list;
    
    node.children.forEach(child => {
        createPostOrder(child, list)
    });
    
    list.push(node.val);
    
    return list;
}
