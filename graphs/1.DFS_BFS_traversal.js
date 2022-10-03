// Javascript implementation of DFS algo:

// Implementation using Stack and iterative loops
const depthFirstPrint1 = (graph, source) => {
  const stack = [ source ];
  
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

const breadthFirstPrint1 = (graph, source) => {
  const queue = [ source ];
  
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};


// Implementation using recursion
const depthFirstPrint2 =  = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstPrint2(graph, neighbor);
  }
};


// Adjacency list to represent a graph
cons graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
}

depthFirstPrint1(graph, 'a'); 
// output: acebdf

depthFirstPrint2(graph, 'a'); 
// output: abdfce

breadthFirstPrint1(graph, 'a'); 
// output: abcdef
