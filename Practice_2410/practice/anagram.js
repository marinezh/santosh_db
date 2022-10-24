//Given two strings, write a function to determine if the second string is an anagram
//of the first.

//An anagram is a word, phrase, or name formed by rearranging the letters of another,
//such as cinema, formed from iceman.

// Time complexity - O(n)

function validAnagram(stringA, stringB) {
    // steps
    // compare two strings
    // return the comparision

    arrA = stringA.split("");
    arrB = stringB.split("")

    return arrA



} 

console.log(validAnagram('aaz', 'zza')) // false);

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
