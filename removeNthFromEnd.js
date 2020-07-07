function Node(val, next) {
  this.val = val;
  this.next = next;
}

const five = new Node(5, null);
const four = new Node(4, five);
const three = new Node(3, four);
const two = new Node(2, three);
const one = new Node(1, two);

// var removeNthFromEnd = function(head, n) {
        
//     let observerNode = new Node(null);
//     observerNode.next = head;

//     while (head) {
//       console.log('---------------------------------------')
//       let subhead = head;
//       console.log('subhead: ', subhead);
//       count = n - 1;
//       while (subhead && count >= 0) {
//         console.log('inside subhead', 'count: ', count);
//         if (count === 0 && subhead.next === null) {
//           console.log('this is the correct answer')
//           previous.next = head.next;
//           return observerNode.next;
          
//         }

//         subhead = subhead.next;
//         count--;
//       }

//       previous = head;
//       head = head.next;
//     }
  
//      return observerNode.next;
//  };

const removeNthFromEnd = (head, n) => {
  let curr = head, decoy = head;

  while (n > 0) {
    decoy = decoy.next;
    n--;
  }

  while(decoy && decoy.next) {
    curr = curr.next;
    decoy = decoy.next;
  }

  if (!decoy) {
    head = head.next;
  } else {
    curr.next = curr.next ? curr.next.next : null;
  }

  return head;
}

removeNthFromEnd(one, 3)


//------------------------------------

// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.


// function Node(val, next=null) {
//   this.val = val;
//   this.next = next;
// }

class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}

const five = new Node(5);
const four = new Node(4, five);
const three = new Node(3, four);
const two = new Node(2, three);
const one = new Node(1, two)

// console.log(one)

// Plan
// - Set up the scout by loop through the linked list 
//   - if the scount is null before we reach the Nth node, return null;
// - Create a dummyHead that points to Head 
// - Keep track of a previous node 
// - while the scout.next is true
//   - if the scount === null, our current node is the Nth from the tail 
//   - previous.next = current.next 
//   - return dummyHead.next 

const removeNthNode = (head, n) => {
  // find the scout 

  // dummyHead
  let dummyHead = new Node(null, head);

  let count = n - 1; // 2
  let scout = head;
  while (count) {
    scout = scout.next
    count--;
  }

  if (!scout) return null
  if (scout.next === null) return dummyHead.next.next;

  let prev = head;
  while(scout.next) {
    prev = head;
    scout = scout.next;
    head = head.next;
  } 

  prev.next = head.next;
  dummyHead.next
}

removeNthNode(one, 6)
