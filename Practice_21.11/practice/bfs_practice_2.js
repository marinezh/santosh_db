// Write a function, sumTree(root), that takes in the root of a binary
// as an arguments

// The function should return total sum of all values in the trees.
// You can assume that the tree only contains number values


//     3
//   2    7
// 4   -2   5

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
  
  const sumTree = (root) => {
    const queue = [root];
  //   console.log(queue);
   const sum = 0;
    while (queue.length > 0) {
        const curr = queue.shift();
        sum += curr.val
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
  
 
  
  console.log(sumTree()); // true
  