//O(n) time complexity, O(1) space

const reverseLinkedList = (head) => {
  let node = head;
  let prev = null;
  let save;

  while (node) {
    //save the next node;
    save = node.next;

    //reverse the pointer
    node.next = prev;

    //shift node one node to the right
    prev = node;
    node = save;
  }

  return prev;
}

//recursive solution
//O(n) time complexity, O(n) space

const reverseLinkedList = (head) => {
  if (!head || !head.next) {
    return head;
  }

  let reverseHead = reverseLinkedList(head.next);
  head.next.next = head;
  head.next = null;
  return reverseHead;
}

function Node(value) {
  this.value = value;
  this.next = null;
}


//In action


class LinkedList {
  constructor(node) {
    this.head = node;
    this.length = 0;
  }

  add(val) {
    let newNode = new Node(val)
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  show() {
    let node = this.head;
  
    while (node) {
      console.log(node.value)
      node = node.next
    }
  }
}

const firstNode = new Node(1);
const newLinkedList = new LinkedList(firstNode)
newLinkedList.add(2);
newLinkedList.add(3);
newLinkedList.add(4);
newLinkedList.add(5);
console.log(newLinkedList.show())

console.log(newLinkedList.head, 'this is the head before the reversing')


const reverse = (head) => {
  if (!head || !head.next) {
    return head;
  }

  let reversedHead = reverse(head.next);
  head.next.next = head;
  head.next = null;

  return reversedHead
}

console.log(reverse(newLinkedList.head), 'this is the head after')










