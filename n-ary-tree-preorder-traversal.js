const preorder = (root) => {
    return createPreorder(root, []);
}

const createPreorder = (node, list) => {
    if (!node) return list;
    
    list.push(node.val);
    
    node.children.forEach(child => {
        createPreorder(child, list)
    });
    
    return list;
}
