function Node(val, next) {
  this.val = val;
  this.next = next;
}

const five = new Node(5, null);
const four = new Node(4, five);
const three = new Node(3, four);
const two = new Node(2, three);
const one = new Node(1, two);

// console.log(one)

const reverseKGroup = (head, k) => {
  if (!head) return null;
  // find the k tail
  let tail = head;
  for(let i = 1; i < k; i++) {
    tail = tail.next;
    if (!tail) return head;
  }

  // link the reversed tail with the actual next node
  let next = tail.next;
  // cut off the ties with actual next node in order to reverse
  tail.next = null;
  // console.log('head passed in', head)
  reverseLinkedList(head);
  head.next = reverseKGroup(next, k);
  return tail;
}

const reverseLinkedList = (head) => {
  let previous = null;

  while (head) {
    let tempNext = head.next;
    head.next = previous;
    previous = head;
    head = tempNext;
  }

  return previous;
}

reverseKGroup(one, 3)
