function Node(val, left=null, right=null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const seven = new Node(7);
const six = new Node(6);
const three = new Node(3, six, seven);
const five = new Node(5);
const four = new Node(4);
const two = new Node(2, four, five);
const one = new Node(1, two, three);

const zigzagLevelOrder = (head) => {
  let result = [];
  let queue = [head];
  let reverse = false;

  while(queue.length) {
    console.log(queue)
    let newQueue = [];
    let currArr = [];

    if (!reverse) {
      queue.forEach(el => {
        currArr.push(el.val);
        if (el.left) newQueue.push(el.left);
        if (el.right) newQueue.push(el.right);
      })
    } else {
      // Loop in reverse
      for(let i = queue.length - 1; i >= 0; i--) {
        let el = queue[i]
        currArr.push(el.val);
        if (el.left) newQueue.push(el.right);
        if (el.right) newQueue.push(el.left);
      }

    }

    result.push(currArr)
    reverse = !reverse;
    queue = newQueue
  }

  return result;
}

zigzagLevelOrder(one)
