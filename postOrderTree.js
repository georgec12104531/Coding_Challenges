function Node(val, children) {
  this.val = val;
  this.children = children;
}

const five = new Node(5, []);
const six = new Node(6, []);
const three = new Node(3, [five, six]);
const two = new Node(2, []);
const four = new Node(4, []);
const one = new Node(1, [three, two, four]);

var postorder = function(root) { 
    if(!root) return [];  
    let resultArr = [];

    root.children.forEach((child) => {
      resultArr = resultArr.concat(postorder(child))
    })
    resultArr.push(root.val);

    return resultArr;
};
