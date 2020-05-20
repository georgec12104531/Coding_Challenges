function Node(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const four = new Node(4);
const five = new Node(5);
const two = new Node(2, four, five);

const six = new Node(6);
const seven = new Node(7);
const three = new Node(3, six, seven);

const one = new Node(1, two, three);

//      1
//     / \
//    2   3 
//   / \ / \ 
//  4  5 6  7


// traverse through a tree in DFS 

// keep track of a result = [];
// traverse(head, result)

const dfs = (head) => {
  let result = [];
  traverse(head, result);
  return result;
}

const traverse = (head, result) => {
  if (!head) return;

  result.push(head.val);
  traverse(head.left, result);
  traverse(head.right, result);
}

// [1, 2, 4, 5, 3, 6, 7]

dfs(one);
