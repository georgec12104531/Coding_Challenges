function Node(val, next=null, prev=null, child=null) {
  this.val = val;
  this.next = next;
  this.prev = prev;
  this.child = child;
}

// const six = new Node(6);
// const five = new Node(5, six);
// const four = new Node(4, five);
// const three = new Node(3, four);
// const two = new Node(2, three);
// const one = new Node(1, two);

// const reverseList = (head) => {
//   const dummyHead = new Node();
//   dummyHead.next = head;
//   let prev = null;

//   while(head) {
//     let next = head.next;
//     head.prev = prev;
//     prev = head;
//     head = next;
//   }

//   let fakeHead = dummyHead.next
//   while(fakeHead) {
//     console.log(fakeHead.next.prev)
//     fakeHead = fakeHead.next
//   } 


//   // return dummyHead.next;
// }

// reverseList(one);

const flatten = (head) => {
  const dummyHead = new Node();
  dummyHead.next = head;
  let stack = [head];
  let prev = null;

  // loop through the ll 
  while (stack.length) {
    // pop off first item in the stack 
    let next = stack.shift();
    // Add the val into a result

    if (prev) {
      current.prev = prev;
      prev.next = current;
    } 

    // Add next the stack, if next exists
    if (next.next) stack.unshift(next.next);
    // Look at the child, if there child add it to the stack
    if (next.child) stack.unshift(next.next);
  }

  return result;
}
