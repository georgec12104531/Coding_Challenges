function Node(val, l, r) {
  this.val = val;
  this.left = l;
  this.right = r;
}

// const four = new Node(4, null, null);
// const eight = new Node(8, null, null);
const seven = new Node(7, null, null);
const six = new Node(6, null, null);
const thirteen = new Node(13, null, null);
const eleven = new Node(11, six, thirteen);
const ten = new Node(10, seven, eleven);

const bfour = new Node(4, null, null);
const beight = new Node(8, null, null);
const bseven = new Node(7, bfour, beight);
const bsix = new Node(6, null, null);
const bthirteen = new Node(13, null, null);
const beleven = new Node(11, bsix, bthirteen);
const bten = new Node(10, bseven, beleven);

// Edgecases: 


// Plan: 
// - Create dummyHead which points newNode
// - if !t1 and !t2 return null;
// - if they do then create a new node with the values added together
// - if there t1.val exist, but t2.val, then newNode.val = t1.val
// - if there t2.val exist, but t1.val, then newNode.val = t2.val
// - newNode.left = mergeTrees(t1.left, t2.left)
// - newNode.right = mergeTrees(t1.right, t2.right)
// - return dummyHead

var mergeTrees = function(t1, t2) {
  if (!t2) return t1;
  if (!t1) return t2;
  if (!t1 && !t2) return null;
  
  let newHead;

  if (t1 && t2) {
    newHead = new Node(t1.val + t2.val);
  }

  newHead.left = mergeTrees(t1.left, t2.left);
  newHead.right = mergeTrees(t1.right, t2.right);

  return newHead
};

mergeTrees(ten, bten)
