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
