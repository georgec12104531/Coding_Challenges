function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

const three = new ListNode(3);
const four = new ListNode(4, three);
const two = new ListNode(2, four);

const fourB = new ListNode(4);
const six = new ListNode(6, fourB);
const five = new ListNode(5, six);

const five = new ListNode(5);
const fiveB = new ListNode(5);

const addTwoNumbers = (l1, l2) => {
  const dummyHead = new ListNode(null);
  let prev = dummyHead;
  let current;
  let carryOver = 0;

  while(l1 || l2 || carryOver) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let sum = val1 + val2 + carryOver;
    if (sum >= 10) {
      current = sum % 10;
      carryOver = Math.floor(sum / 10);
    } else {
      current = sum;
      carryOver = 0;
    }
    let newNode = new ListNode(current);
    prev.next = newNode;
    prev = newNode;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummyHead.next;
}
