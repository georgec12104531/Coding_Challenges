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
