function Node(val, l, r) {
  this.val = val;
  this.left = l;
  this.right = r;
}



const four = new Node(4, null, null);
const eight = new Node(8, null, null);
const seven = new Node(7, four, eight);
const six = new Node(6, null, null);
const thirteen = new Node(13, null, null);
const eleven = new Node(11, six, thirteen);
const ten = new Node(10, seven, eleven);


var rangeSumBST = function(root, L, R) {
  if (!root.val) return 0;
  let sum = 0;

  if (root.val >= L && root.val <= R) {
    sum += root.val;
  }

  if (root.left) {
    sum += rangeSumBST(root.left, L, R);
  } 

  if (root.right) {
    sum += rangeSumBST(root.right, L, R);
  }

  return sum;
};

rangeSumBST(ten, 6, 12);
