  //   3
  //  / \
  // 9  20
  //   /  \
  //  15   7


function Node(val, left=null, right=null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const nine = new Node(9);
const fifteen = new Node(15);
const seven = new Node(7);
const twenty = new Node(20, fifteen, seven);
const three = new Node(3, nine, twenty);
// console.log(three)

// Edgecases: 
// - No root node, return 0;

// Plan: 
// - if !root return 0;
// - Create a count = 0
// - Adding to the count, 1
// - count += Math.max(function(root.left), function(root.right))
// - return count;


function maxDepth(root) {
  if (!root) return 0;

  let count = 0;
  count++;

  if (root.left && root.right) {
    count += Math.max(maxDepth(root.left), maxDepth(root.right))
  }
  
  return count;
}

maxDepth(three);

const maxDepth = (root) => {
  let count = 0;

  const getLength = (root, count) => {
    if(!root) return 0;
    count++;

    if (root.left && root.right) {
      count = Math.max(getLength(root.left, count), getLength(root.right, count));
    }

    return count;
  }

  return getLength(root, count);
}

maxDepth(three)

