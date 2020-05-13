// Create a new copyHead 
// create new references for head and copyHead 
// create an object {copyNode: oldNode}

// Iterate through both list again 
// change the .random property on the copyNode to the .random pointer on the originNode, using the object
// return the original reference to the new Node head

const copyRandomPointer = (head) => {
  let originalHead = head;
  let copyHead = new Node(head.val, null, null);

  let copyNode = copyHead;
  let linkObj = {};
  
  // Create copy of the linked list without the random pointer
  while(originalHead.next) {
   
    copyNode.next = node Node(originalHead.next.val, originalHead.next.next, null);

    linkObj[originalHead] = copyNode;
    
    copyNode = copyNode.next;
    originalHead = originalHead.next;
  }

  originalHead = head;
  copyNode = copyHead;

  while(originalHead && copyNode) {

    copyNode.random = originalHead.random ? linkObk[originalHead].random : null;

    originalHead = originalHead.next;
    copyNode = copyNode.next;
  } 

  return copyHead;   
}
