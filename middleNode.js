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
