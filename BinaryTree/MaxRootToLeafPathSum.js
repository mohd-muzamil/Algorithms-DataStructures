/*
Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n). 
JavaScript does not have a native queue data structure that is maximally efficient.
*/

// class to implement nodes in a binary tree
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// DFS using recursion
const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};
// n = number of nodes
// Time: O(n)
// Space: O(n)

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

result = maxPathSum(a);
console.log(result) // -> 18
