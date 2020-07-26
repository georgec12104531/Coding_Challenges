// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

function Node(val, next=null) {
  this.val = val;
  this.next = next
}

const six2 = new Node(6);
const five = new Node(5, six2);
const four = new Node(4, five);
const three = new Node(3, four);
const six = new Node(6, three);
const two = new Node(2, six);
const one = new Node(1, two);

// console.log(one)
// Plan
// keep a dummyHead
// Loop through the array 
// keep track of prev and next;


var removeElements = function(head, val) {
  let dummyHead = new Node(null, head);
  let prev = null;

  while(head) {
      if(head.val === val) {
          head = head.next;
      } else {
          break;
      }
  }
  
  while(head) {
    if (head.val === val) {
      prev.next = head.next;
    }

    prev = head;
    head = head.next
  }

  return dummyHead.next;
};

removeElements(one, 6)

