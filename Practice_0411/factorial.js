// Write  a  func, on factorial  which  accepts  a  number  and  returns  the  factorial  of that number.A factorial is the product of an integer and all the integers below it;  

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num-1)


}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));



