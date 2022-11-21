class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
}

let g = new Graph();
g.addVertex("Dallas");

g.addVertex("Tokyo");


g.addVertex("Aspen");
console.log(g.adjacencyList)

g.addEdge("Dallas", "Tokyo")
console.log(g.adjacencyList)

g.addEdge("Dallas", "Aspen")
console.log(g.adjacencyList)

//g.addEdge("Dallas", "Tokyo")
// g.adjacencyList

//g.addEdge("Dallas", "Aspen")
//g.adjacencyList
