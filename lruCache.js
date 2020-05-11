
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
function Node(val, next=null, prev=null) {
  this.val = val;
  this.next = next;
  this.prev = prev;
}

function LRU(capacity) {
  this.count = count;
  this.obj = {};
  this.head;
  this.tail;
  this.capacity = capacity;

  this.get(key) {

    // Check to see that the value exists
    if (this.obj[key]) {
      { value, prev, next } = this.obj[key];

      prev.next = next;
      next.prev = prev;

      if (this.tail === this.obj[key]) {
        this.tail = this.tail.prev || this.obj[key];
      }

      this.obj[key].prev = null;
      this.obj[key].next = null;

      if(this.obj[key] !== this.head) {
        this.head.prev = this.obj[key];
        this.obj[key].next = this.head;
        this.head = this.obj[key];
      }
      return value;
    } else {
      return -1
    }
  }

  this.put(key, value) {
    if (this.obj[key]) {
      this.get(key)
    } else {
      // Add the key to this object
      this.obj[key] = { key, value, prev: null, next: null}
      // This node now becomes the new head
      if (this.head) {
        this.head.prev = this.obj[key];
        this.obj[key].next = this.head; 
      }

      // Regardless, the new node that we are adding becomes the new head
      this.head = this.obj[key];

      if (!this.tail) {
        this.tail = this.obj[key];
      }

      this.count++
    }
    
    // If LRU is at capacity
    if (this.count > this.capacity) {
      let removedKey = this.tail.key;

      // if there are more than one nodes in the linked list 
      if (this.tail.prev) {
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      }
      delete this.obj[removedKey];

      this.count--;
    }
  }
}
