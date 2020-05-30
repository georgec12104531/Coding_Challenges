//     3
//    / \
//   9  20
//     /  \
//    15   7

function Node(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const fifteen = new Node(15);
const seven = new Node(7);
const twenty = new Node(20, fifteen, seven);
const nine = new Node(9);
const three = new Node(3, nine, twenty);

const bfsStack = (root) => {
  let result = [];
  let queue = [];
  queue.push(root);

  // While there are still nodes in the queue 
  while (queue.length) {
    let next = queue.shift();
    result.push(next.val);
    
    if (next.left) {
      queue.push(next.left);
    }

    if (next.right) {
      queue.push(next.right);
    }
  }

  return result;
}

bfsStack(three);

const dfsStack = (root) => {
  stack = [root];
  result = [];

  while (stack.length) {
    let current = stack.pop();
    result.push(current.val);

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  return result;
}

dfsStack(three)
