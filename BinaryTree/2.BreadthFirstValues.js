/*
Write a function, breadthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in breadth-first order.
*/

// class to implement nodes in a binary tree
class Node {
  constructor(val){
    self.val = val;
    self.left = null;
    self.right = null;
  }
}

// BFS implementations using iteration
const breadthFirstValues = (root) => {
  if (root === null) return [];

  const values = [];
  const queue = [root];
  
  while ( queue.length > 0) {
    const node = queue.shift();
    values.push(node.val);
    
    if (!node.left !== null)  queue.push(node.left);
    if (!node.right !== null)  queue.push(node.right);
  }
  
  return values;
};
// n = number of nodes
// Time: O(n)
// Space: O(n)
// Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n). 
// JavaScript does not have a native queue data structure that is maximally efficient.


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

result = breadthFirstValues(a);
console.log(result)
//    -> ['a', 'b', 'c', 'd', 'e', 'f']
