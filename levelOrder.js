//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

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

const levelOrder = (head) => {
  if (!head) return null;

  let result = [];
  let queue = [head];

  while (queue.length) {
    let currentLevel = [];
    // snap shot of length of nodes added previously
    let size = queue.length;
    for (let i = 0; i < size; i++) {

      let current = queue.shift();
      currentLevel.push(current.val);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }
    result.push(currentLevel);
  }

  return result;
}

levelOrder(three);
