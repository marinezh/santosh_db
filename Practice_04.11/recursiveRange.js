//Write a func,on called recursiveRange which accepts a number
//and adds up all the numbers from 0 to the number passed to the func,on

function recursiveRange(x){
    if (x == 0) return 0;
    return x + recursiveRange(x - 1);
  
}
 

console.log(recursiveRange(1)) // 21
console.log(recursiveRange(2)) // 21
console.log(recursiveRange(3)) // 21

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55
