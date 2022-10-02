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
