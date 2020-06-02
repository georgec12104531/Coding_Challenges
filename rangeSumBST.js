// Plan
// Initialize a sum = 0;
// create a function addNumbers(root, sum, l, r)
  // if (root.val <= R && root.val >= L) sum += root.val
  // addNumber(root.left, sum, l, r);
  //  
// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32

function Node(val, left=null, right=null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

  //    10 
  //    / \ 
  //   5   15
  //  /\  /  \
  // 3  7null 18


const eighteen = new Node(18);
const fifteen = new Node(15, null, eighteen);

const seven = new Node(7);
const three = new Node(3);
const five = new Node(5, three, seven);

const ten = new Node(10, five, fifteen);

var rangeSumBST = function(root, L, R) {
  let sum = 0;

  // rangeSumBst has closure over addNumbers, sum, L, R are accessible 
  function addNumbers(root) {
    if (!root) return;
    if (root.val >= L && root.val <= R) {
      sum += root.val;
    }
     
    addNumbers(root.left);
    addNumbers(root.right);
  }

  addNumbers(root);
  return sum;
};

rangeSumBST(ten, 7, 15);
