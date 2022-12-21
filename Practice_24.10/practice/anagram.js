//Given two strings, write a function to determine if the second string is an anagram
//of the first.

//An anagram is a word, phrase, or name formed by rearranging the letters of another,
//such as cinema, formed from iceman.

// Time complexity - O(n)

function validAnagram(s1, s2) {
    // steps
    // compare two strings
    // return the comparision

    return s1.split("").sort().join("") === s2.split("").sort().join("");

} 

console.log(validAnagram('aaz', 'zza')) // false);

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram'))// true
console.log(validAnagram("rat","car")) // false) // false
