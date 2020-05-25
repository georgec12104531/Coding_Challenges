function Node(val, next = null) {
  this.val = val;
  this.next = next;
}

const six = new Node(6);
const five = new Node(5, six);
const four = new Node(4, five);
const three = new Node(3, four);
const two = new Node(2, three);
const one = new Node(1, two);

const oddEven = (head) => {
  let evenDummy = new Node(null);
  let evenPrev = evenDummy;

  let oddDummy = new Node(null);
  let oddPrev = oddDummy;

  i = 1;
  while (head) {
    if (i % 2 === 0) {
      evenPrev.next = head;
      evenPrev = head;
    } else if ( i % 2 === 1) {
      oddPrev.next = head;
      oddPrev = head;
    };

    i++;
    head = head.next;
  }

  oddPrev.next = evenDummy.next;
  return oddDummy.next
}

oddEven(one);
