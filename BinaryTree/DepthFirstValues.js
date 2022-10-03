/*
Write a function, depthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in depth-first order.
*/

// DFS implementation using iteration
const depthFirstValues1 = (root) => {
  if (root === null)
    return [];

  const values = [];
  const stack = [ root ];

  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.val);
    
    if (node.right !== null)
      stack.push(node.right);
    
    if (node.left !== null)
      stack.push(node.left);
  }

  return values;
};
// n = number of nodes
// Time: O(n)
// Space: O(n)

// DFS implementation using recursion
const depthFirstValues = (root) => {
  if (root === null)
    return [];
  
  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [ root.val, ...leftValues, ...rightValues ];
};
// n = number of nodes
// Time: O(n)
// Space: O(n)


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

result = depthFirstValues(a); 
console.log(result)
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
