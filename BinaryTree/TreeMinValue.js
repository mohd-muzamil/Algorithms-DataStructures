/*
Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. 
The function should return the minimum value within the tree.
*/

// class to implement nodes in a binary tree
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//DFS using recursion
const treeMinValue = (root) => {
  if (root === null) return Infinity;
  const smallestLeftValue = treeMinValue(root.left);
  const smallestRightValue = treeMinValue(root.right);
  return Math.min(root.val, smallestLeftValue, smallestRightValue);
};
//n = number of nodes
//Time: O(n)
//Space: O(n)

//BFS using iteration
const treeMinValue = (root) => {
  const queue = [root];

  let smallest = Infinity;
  while (queue.length) {
    const current = queue.shift();
    if (current.val < smallest) smallest = current.val;

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return smallest;
};
//n = number of nodes
//Time: O(n)
//Space: O(n)
//Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n). 
//JavaScript does not have a native queue data structure that is maximally efficient.

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

result = treeMinValue(a);
console.log(result) // -> -2
