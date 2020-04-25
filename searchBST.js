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

//

function Node(val, left=null, right=null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const one = new Node(1);
const three = new Node(3);
const two = new Node(2, one, three);
const seven = new Node(7);
const four = new Node(4, two, seven);

// Plan:
// - loop through the array 
// - if !node return null;
// - if the node.val = val return node;
// - call searchBST on the left if the value is less than the current node's value
// - call searchBST on the right if the values is greater than the current node's value


const searchBST = (root, val) => {
  if (!root) return [];
  if (root.val === val) return root;

  if (root.val > val && root.left) {
    return searchBST(root.left, val);
  }
  if (root.val < val && root.right) {
    return searchBST(root.right, val);
  }
}; 

const searchBST = (root, val) => {
  while (root) {
    if (root.val === val) return root;
    root = root.val > val ? root.left : root.right;
  }
}

searchBST(four, 1)
