// Plan: 
// - Create a new array to add to 
// - iterate through the children and 
// - add to the array = array.concat(preorder(node))
// - return the array

  //      1
  //   3  2  4 
  // 5  6

function Node(val, children=[]) {
  this.val = val;
  this.children = children;
}

const five = new Node(5);
const six = new Node(6);
const three = new Node(3, [five, six]);
const two = new Node(2);
const four = new Node(4);
const one = new Node(1, [three, two, four])

// Output: [1,3,5,6,2,4]

const preorder = function(root) {
  if (!root) return [];
  let resultArr = [];
  resultArr.push(root.val)
  for(let i = 0;i < root.children.length; i++) {
    resultArr = resultArr.concat(preorder(root.children[i]))
  }
  
  return resultArr;
};

preorder(one)
