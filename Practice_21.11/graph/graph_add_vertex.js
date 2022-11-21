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

let g = new Graph()
g.addVertex("Tokyo")
console.log(g.adjacencyList)
g.addVertex("Helsinki")
console.log(g.adjacencyList)
g.addVertex("Kyiv")
console.log(g.adjacencyList)
g.addEdge("Kyiv", "Helsinki")
console.log(g.adjacencyList)
