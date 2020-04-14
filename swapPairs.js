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

const swapPairs = (head) => {
  if (!head) return null;
  if (!head.next) return head;

  const nextCopy = head.next;
  const nextNextCopy = head.next.next;
  nextCopy.next = head;
  head.next = swapPairs(nextNextCopy);

  return nextCopy;
}

swapPairs(one)
