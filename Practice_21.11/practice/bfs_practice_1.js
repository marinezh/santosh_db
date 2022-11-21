// Write a function, bfs(root, target), that takes in the root of a binary tree and target
// and a target value as arguments.

// The function should return a boolean indicating weather or not the tree
// contains the target value

//     a
//   b   c
// d   e   f

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const bfs = (root, target) => {
  const queue = [root];
//   console.log(queue);

  while (queue.length > 0) {
      const curr = queue.shift();
    
    //   console.log(curr.val);
      
    if (curr.val === target) {
        return true;
    } 
    if (curr.left !== null) {
        queue.push(curr.left);
      }
      if (curr.right !== null) {
        queue.push(curr.right);
      }
  }
    return false
};

// bfs(a);

console.log(bfs(a, "e")); // true
console.log(bfs(a, "z")); // false
console.log(bfs(a, "x")); // false
console.log(bfs(a, "b")); // true
