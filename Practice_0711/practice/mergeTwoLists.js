/*
Given two sorted linked lists merge them while keeping the asc order.

@examples
mergeTwoLists([2, 4, 6], [1, 3]); // => [1, 2, 3, 4, 6]
mergeTwoLists([2, 4, 6], []); // => [2, 4, 6]
mergeTwoLists([], [1, 3]) // => [1, 3]

*/



function mergeTwoLists(arr1, arr2) {
    let arr3

    arr3 = [...arr1, ...arr2]
    return arr3

}

console.log(mergeTwoLists([2, 4, 6], [1, 3])); // => [1, 2, 3, 4, 6]
console.log(mergeTwoLists([2, 6, 4], [])); // => [2, 4, 6]
console.log(mergeTwoLists([], [1, 3])) // => [1, 3]
console.log(mergeTwoLists([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
