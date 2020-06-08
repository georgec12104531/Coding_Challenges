
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

// ------------------------------------------------------------------

function LRUCache(capacity) {
  this.capacity = capacity;
  this.size = size;
  this.head = null;
  this.tail = null
  this.dictionary = {};
}

LRUCache.prototype.get = (key) => {
  // For nodes that already exist inside the cache
  if (this.dictionary[key]) {
    let { value, prev, next } = this.dictionary[key];
  
    // Remove the node from the linked list 
    // For nodes that aren't the head, have the previous nodes next pointer, 
    // point to the removed nodes next
    if (prev) { prev.next = next }
    // for nodes that aren't the tail, have removed node's next node point to its previous node 
    // unless it's the head. If it's the head, assigning its next node's previous to point to its previous
    // would make it the new head, since it would point to null
    if (next) { next.prev = prev || next.prev}

    // If the node is the tail, then assign it the new tail to its previous. However, 
    // if the node is the only node in the linked list, then we don't want to point this.tail to null,
    // so we will keep it as it is. 
    if (this.tail === this.dictionary[key]) {
      this.tail = prev || this.dictionary[key];
    }

    // This node will now become the new head and its prev will point to null
    this.dictionary[key].prev = null;

    if (this.head !== this.dictionary[key]) {
      // Have the current head point to the current node
      this.head.prev = this.dictionary[key];
      // Have the node point to the old head
      this.dictionary[key].next = this.head;
    }

    // The node becomes the new head
    this.head = this.dictionary[key];

    return value;
  }
  // Node doesn't exist inside the cache
  return -1;
}
