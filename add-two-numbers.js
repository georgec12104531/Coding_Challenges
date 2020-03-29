function ListNode(val, next = null) {
  this.val = val
  this.next = next;
}

// LinkedList1
const n3 = new ListNode(3);
const n2 = new ListNode(2, n3);
const n1 = new ListNode(1, n2);


// LinkedList2
const m3 = new ListNode(5);
const m2 = new ListNode(4, m3);
const m1 = new ListNode(3, m2);

const joinArrOfStr = (arr) => {
  return arr.join('');
} 

const returnReversedInteger = (current) => {
  let reversedIntArray = new Array;

  while (current) {
    reversedIntArray.unshift(current.val)
    current = current.next;
  }

  const strInt = joinArrOfStr(reversedIntArray);
  return parseInt(strInt);
}

const addTwoNumbers = (l1, l2) => {
  const reversedIntOne = returnReversedInteger(l1);
  const reversedIntTwo = returnReversedInteger(l2);

  return reversedIntOne + reversedIntTwo;
};

console.log(addTwoNumbers(n1, m1));

const reverseLinkedList = (currentNode) => {
  // keep current node
  let previous = null;

  // while the current node is truthy
  while (currentNode) {
    // Keep a copy of the next node 
    let copyNextNode = currentNode.next;
    // reverse the linked list, if first node point to null, if not then point to the previous one
    currentNode.next = previous;
    // make the currentNode the previous node
    previous = currentNode;
    // Move the current node forward
    currentNode = copyNextNode; 
  }

  return previous;
}
