const middleNode = (head) => {
    let listLength = findListLength(head, 0);
    let mid = findMid(listLength);
    
    return findMidNode(head, mid, 0)
};
    
const findMid = (length) => {
    return Math.floor(length / 2);
}

const findListLength = (head, length) => {
    if (head === null) {
        return length
    }
   
    return findListLength(head.next, length + 1) 
}

const findMidNode = (head, magicNumber, counter) => {
    if (counter === magicNumber) {
        return head
    }
    
    return findMidNode(head.next, magicNumber, counter + 1)
}

///

var middleNode = function(head) {
    let mid = findMidNode(head, 0);
    while (mid > 0) {
        head = head.next;
        mid -= 1;
    }
    
    return head
};

const findMidNode = (head, length) => {
    let node = head
    while (node) {
        node = node.next
        length += 1
    }
    
    return isEven(length) ? Math.floor(length / 2) : Math.floor(length / 2)
}

const isEven = (num) => {
  return num % 2 === 0
}

////

const middleNode = (head) => {
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow
};




