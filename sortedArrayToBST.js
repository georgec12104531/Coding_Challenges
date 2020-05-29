function Node(val, left=null, right=null) {
  this.val = val;
  this.left = left;
  this.right = right;

const sortedArrayToBST = (arr) => {
  if (!arr.length) return;
  let mid = Math.floor(arr.length / 2);
  let head = new Node(arr[mid]);

  head.left = sortedArrayToBST(arr.slice(0, mid));
  head.right = sortedArrayToBST(arr.slice(mid + 1));

  return head;
}

//       4
//    2      6 
// 1    3  5   7

// const sortedArrayToBST = (arr) => {
//   let mid = Math.floor(arr.length / 2);
//   let leftPrev = new Node(null);
//   let rightPrev = new Node(null);
//   let head = new Node(arr[mid], leftPrev, rightPrev);

//   let l = mid - 1;
//   let r = mid + 1;

//   while (l >= 0 || r <= arr.length - 1) {
//     if(arr[l]) {
//       let newLeft = new Node(arr[l]);
//       leftPrev.left = newLeft;
//       leftPrev = newLeft;
//       l--;
//     } else if (arr[r]) {
//       let newRight = new Node(arr[r]);
//       rightPrev.right = newRight;
//       rightPrev = newRight;
//       r++;
//     }
//   }

//   return head;
  
// }

sortedArrayToBST([1, 2, 3, 4, 5, 6, 7])
