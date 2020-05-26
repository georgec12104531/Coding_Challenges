// Split the linked list into two halves 
  // Find the middle of the linked list 
// merge sort the left, merge sort the right 
// combine the sorted
// 5 -> 3 -> 4 -> 1 -> 6 -> null

function Node(val, next=null) {
  this.val = val;
  this.next = next;
}

const six = new Node(6);
const one = new Node(1, six);
const four = new Node(4, one);
const three = new Node(3, four);
const five = new Node(5, three);

function mergeSort(head) {
  // short circuit if there is anything 
  if (head === null || head.next === null) {
    return head;
  }
  // get middle
  let slow = head;
  let fast = head;
  prev = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;

  let l1 = mergeSort(head);
  let l2 = mergeSort(slow);

  return merge(l1, l2);
}

const merge = (l1, l2) => {
  // console.log(l1, l2)
  let dummyHead = new Node(null);
  let prev = dummyHead;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      prev.next = l2
      prev = l2;
      l2 = l2.next; 
     
    } else {
      prev.next = l1
      prev = l1;
      l1 = l1.next;
    }
  }

  if (!l1) {
    prev.next = l2;
  } else if (!l2) {
    prev.next = l1;
  }

  return dummyHead.next;
}

mergeSort(five)
