const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];

// The graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
  adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

//Create the Graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

// BFS Breath First Search
// Busca em largura
// Vai mostrar todas as rotas para um nó. Serve para poder mostrar todas
// as rotas e determinar qual é a melhor

function bfs(start) {
  
  const queue = [start];

  const visited = new Set();

  while (queue.length > 0) {
    const airport = queue.shift(); // mutates the queue

    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {

      if (destination === 'BKK'){
        console.log('found it!');
      }
      
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }
  }
}

bfs('PHX');

// DFS Depth First Search
// Busca em profundidade

// Usamos essa estratégia se só quisermos chegar até o nó
// Da forma mais rápida possível, não se importando se existem 
// outras rotas

function dfs(start, visited = new Set()) {
  console.log(start);

  visited.add(start);

  const destinations = adjacencyList.get(start);

  for(const destination of destinations) {
    if(destination === 'BKK') {
      console.log('DFS found Bangkok in steps')
      return;
    }

    if(!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

// dfs('PHX');