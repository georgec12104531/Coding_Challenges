function get(url) { 
  const mostRecentPic = hashMap[url].photo;
  hashMap[url].next = ;
  hashMap[url].previous = ;
  //Returns a photo attached to the URL
  //O(1)
}

function put(url, photo) {
  //O(1)
}


LRU Cache 
MAX_SIZE = 5; 

 [1 2 3 4 5 ] 
 

node {
  Photo, next, prev
}
 
 
 {node} <-> {node} <-> {node}  <-> {node}
 
 
 - lruCache is hash containing a linked list
 ex. {url:node, url:node, ...}
