/*
Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). 
The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.
*/

// BFS iterative implementation that returns true if node is found in the graph

const hasPath = (graph, src, dst) => {
/*
graph: adjacency list representing the graph
src: source node
dst: destination node
*/
  const queue = [ src ];
  
  while (queue.length > 0) {
    const current = queue.shift();
    
    if (current === dst) return true;
    
    for (let neighbor of graph[current]) {
      queue.push(neighbor); 
    }
  }
  return false;
};


const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

result = hasPath(graph, 'f', 'k'); // true
console.log(result)

// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)
