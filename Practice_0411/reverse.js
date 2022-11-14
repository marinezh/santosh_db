//Write a func,on called reverse which accepts a string and returns
//a new string in reverse

// function reverse(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverse('awesome'));
// console.log(reverse('rithmschool'));


function reverse(str) {
    if (str.length <= 1) return str;
    return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
}


console.log(reverse('awesome'));
console.log(reverse('rithmschool'));
