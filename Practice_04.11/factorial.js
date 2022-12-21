// Write  a  func, on factorial  which  accepts  a  number  and  returns  the  factorial  of that number.A factorial is the product of an integer and all the integers below it;  

// function factorial(num) {
//     if (num === 1) return 1;
//     return num * factorial(num-1)


// }

// function factorial(num) {
//     let totalNumber = 1;
  
//     for (let i = 1; i <=num; i++) {
//         totalNumber = i * totalNumber;
//     }
//     return totalNumber;
// }


function factorial(num) {
    let totalNumber = 1;
  
    while(num) {
        totalNumber = num * totalNumber;
        num--;
    }
    return totalNumber;
}

console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(3));
console.log(factorial(4));



