// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

// Example 1:

// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// Output: true
// Example 2:

// Input:     1         1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// Output: false
// Example 3:

// Input:     1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]

// Output: false




function Node(val, left=null, right=null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const three = new Node(3);
const two = new Node(2);
const one = new Node(1, two, three);

// const four2 = new Node(4)
const three2 = new Node(3);
const two2 = new Node(2);
const one2 = new Node(1, two2, three2);

// Plan

// [1, 2, 3] === [1, 2, 3]


const isSameTree = (head1, head2) => {
  let q1 = [head1];
  let q2 = [head2];

  while(q1.length) {
    let newQueue1 = [];
    let newQueue2 = [];

    for(let i = 0; i < q1.length; i++) {
      let curr1 = q1[i];
      let curr2 = q2[i];
      
      if (!curr1 && !curr2) continue;
      if ((!curr1 && curr2) || (curr1 && !curr2) ||  curr1.val !== curr2.val) return false

      newQueue1.push(curr1.left);
      newQueue1.push(curr1.right);
      newQueue2.push(curr2.left);
      newQueue2.push(curr2.right);
    }

    q1 = newQueue1;
    q2 = newQueue2;
  }
  
  return q1.length === q2.length
}

isSameTree(one, one2)
