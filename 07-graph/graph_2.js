class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        this.adjacentList[node] = [];
        this.nodes++;
    }
    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}

const myGraph = new Graph();

// input
myGraph.addVertex("1");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addVertex("8");

// result
adjacentList: 
1: [],
3: [],
4: [],
5: [],
6: [],
8: [],
[[Prototype]]
: 
Object
nodes: 6


// input
myGraph.addEdge("5", "3");
myGraph.addEdge("3", "6");
myGraph.addEdge("6", "1");
myGraph.addEdge("1", "3");
myGraph.addEdge("4", "1");
myGraph.addEdge("4", "5");
myGraph.addEdge("8", "4");

//result
adjacentList: 
1: (3) ['6', '3', '4'],
3: (3) ['5', '6', '1'],
4: (3) ['1', '5', '8'],
5: (2) ['3', '4'],
6: (2) ['3', '1'],
8: ['4'],
[[Prototype]]
: 
Object
nodes: 6