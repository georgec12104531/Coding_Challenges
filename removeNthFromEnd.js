function Node(val, next) {
  this.val = val;
  this.next = next;
}

const five = new Node(5, null);
const four = new Node(4, five);
const three = new Node(3, four);
const two = new Node(2, three);
const one = new Node(1, two);

// var removeNthFromEnd = function(head, n) {
        
//     let observerNode = new Node(null);
//     observerNode.next = head;

//     while (head) {
//       console.log('---------------------------------------')
//       let subhead = head;
//       console.log('subhead: ', subhead);
//       count = n - 1;
//       while (subhead && count >= 0) {
//         console.log('inside subhead', 'count: ', count);
//         if (count === 0 && subhead.next === null) {
//           console.log('this is the correct answer')
//           previous.next = head.next;
//           return observerNode.next;
          
//         }

//         subhead = subhead.next;
//         count--;
//       }

//       previous = head;
//       head = head.next;
//     }
  
//      return observerNode.next;
//  };

const removeNthFromEnd = (head, n) => {
  let curr = head, decoy = head;

  while (n > 0) {
    decoy = decoy.next;
    n--;
  }

  while(decoy && decoy.next) {
    curr = curr.next;
    decoy = decoy.next;
  }

  if (!decoy) {
    head = head.next;
  } else {
    curr.next = curr.next ? curr.next.next : null;
  }

  return head;
}

removeNthFromEnd(one, 3)
