// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

function Node(val, left=null, right=null) {
  this.val = val 
  this.left = left
  this.right = right
}

const fifteen = new Node(15);
const seven = new Node(7);
const twenty = new Node (20, fifteen, seven);
const nine = new Node(9);
const three = new Node(3, nine, twenty);


// Plan
// create result = []
// create a queue

// add the first node into the queue 
// while queue.length 
// create a currentArr
// loop through the queue, add the values into the the currentArr
// Add the left and right into the qeue
// Add currentArr into the result
// newQueue = queue
// Reverse the result


const levelOrderBottom = (node) => {
  if (!node) return [];
  let result = [];
  let queue = [];
  queue.push(node);

  while (queue.length) {
    console.log('inside')
    let nextQueue = []
    let currentArr = [];

    while (queue.length) {
      let current = queue.shift();

      currentArr.push(current.val);
      if (current.left) nextQueue.push(current.left);
      if (current.right) nextQueue.push(current.right);
    }

    result.push(currentArr)
    queue = nextQueue;
  }

  return result.reverse();
}

// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

function Node(val, left=null, right=null) {
  this.val = val 
  this.left = left
  this.right = right
}

const fifteen = new Node(15);
const seven = new Node(7);
const twenty = new Node (20, fifteen, seven);
const nine = new Node(9);
const three = new Node(3, nine, twenty);


// Plan
// create result = []
// create a queue

// add the first node into the queue 
// while queue.length 
// create a currentArr
// loop through the queue, add the values into the the currentArr
// Add the left and right into the qeue
// Add currentArr into the result
// newQueue = queue
// Reverse the result


const levelOrderBottom = (node) => {
  if (!node) return [];
  let result = [];
  let queue = [];
  queue.push(node);

  while (queue.length) {
    console.log('inside')
    let nextQueue = []
    let currentArr = [];

    while (queue.length) {
      let current = queue.shift();

      currentArr.push(current.val);
      if (current.left) nextQueue.push(current.left);
      if (current.right) nextQueue.push(current.right);
    }

    result.push(currentArr)
    queue = nextQueue;
  }

  return result.reverse();
}

levelOrderBottom(three)
