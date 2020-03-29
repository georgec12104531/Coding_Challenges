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
