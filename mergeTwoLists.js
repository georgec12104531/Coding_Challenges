// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.


// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


function Node(val, next) {
  this.val = val;
  this.next = next;
}

const aFive = new Node(5, null)
const aFour = new Node(4, aFive);
const aTwo = new Node(2, aFour);
const aOne = new Node(1, aTwo);

const bFour = new Node(4, null);
const bThree = new Node(3, bFour);
const bOne = new Node(1, bThree);

// console.log(aOne);
// console.log(bOne);

// Notes:
// - create new head of joined linked list
// - keep copy of joined linked list head  
// - while loop iterate through the lists
// - keep track of previous head 
// - if a < b, add a new linked list 


// Edgecases: 
// - If one linked list is empty

// Plan: 

var mergeTwoLists = function(l1, l2) {
  const joinListHead = new Node(null, null);
  let previous = joinListHead;

  while (l1 || l2) {
    if (l1 && !l2 || l1.val < l2.val) {
      let newNode = new Node(l1.val, null);
      previous.next = newNode
      previous = newNode;
      l1 = l1.next;
    } else {
      let newNode = new Node(l2.val, null);
      previous.next = newNode
      previous = newNode;
      l2 = l2.next;
    }
  }

  return joinListHead.next

  // let testNode = joinListHead.next 

  // while (testNode) {
  //   console.log(testNode.val);
  //   testNode = testNode.next;
  // }
};

mergeTwoLists(aOne, bOne)
