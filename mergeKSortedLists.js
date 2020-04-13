function Node(val, next) {
  this.val = val;
  this.next = next;
}

const aFour = new Node(4, null);
const aTwo = new Node(2, aFour);
const aOne = new Node(1, aTwo);

const bFive = new Node(5, null);
const bFour = new Node(4, bFive);
const bThree = new Node(3, bFour);

const cThree = new Node(3, null);
const cTwo = new Node(2, cThree);
const cOne = new Node(1, cTwo);

const mergeKSortedLists = (lists) => {
  let tempHead = new Node(null)
  let previous = tempHead;
  let status = true;

  while (status) {
    let lowestNumIndex;
    
    lists.forEach((list, index) => {
      if (
        lists[index] && lists[lowestNumIndex] && lists[index].val <= lists[lowestNumIndex].val ||
        lists[index] && !lists[lowestNumIndex]) {
              lowestNumIndex = index
      }
    })

    const newOne = new Node(lists[lowestNumIndex].val)
    lists[lowestNumIndex] = lists[lowestNumIndex].next    
    previous.next = newOne
    previous = newOne
    
    status = lists.some((list) => list)
  }

  return tempHead.next;     
}

console.log(mergeKSortedLists([aOne, bThree, cOne]))
