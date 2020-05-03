
// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3

function Node(val, next, prev) {
  this.val = val;
  this.next = next;
  this.prev = prev;
}

class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.cache = {};
    this.head;
    this.tail;

  }

  get(val) {
    // console.log(this.cache);
    return this.cache[val] ? this.cache[val].val : -1;
  }

  put(key, val) {
    if (this.size === this.capacity) {
      this.tail.prev = null;
      this.tail.prev.next = null;
      this.tail = tail.prev;
    } else if (this.size === 0) {
      
    }
    
    const newNode = new Node(val, this.head, null);
    if (newNode.next) {
      newNode.next.prev = newNode;
    }
    console.log(newNode.next);
    // newNode.next.prev = newNode;
    this.head = newNode;
    // this.head.next.prev = newNode;


    this.cache[key] = newNode;
    this.size++;
  }
}

const lru = new LRU(2);

lru.put(4, 4);
lru.put(3, 3);
// lru.put(2, 2);


// lru.put(2, 2);
// lru.put(1, 1);

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1

// console.log('-----------------------');
// lru.get(3)?;

// console.log(lru);
