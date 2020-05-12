const mergeKSorted = (arr) => {
  const dummyHead = new Node(null);
  let prev = dummyHead;

  min = arr[0].val;

  while (min || min === 0) {
    min = arr[0].val
    let index;
    // potentially null
    for(i = 0; i < arr.length; i++) {
      // Set initial min
      if (arr[i].val < min) {
        min = arr[i].val;
        index = i;
      } 
    }  

    prev.next = new Node(min)
    prev = arr[min];
    arr[index] = arr[index].next
  }

  return dummyHead.next;
}



