/**
 * Given text and words,
 * return the most common words in descending order.
 * @param {string} text - The text to parse.
 * @param {number} n - The number of results.
 * @return {string[]}
 */

mostCommonWords("The map, maps keys to values; Keys can be anything.", 1); // ['keys']
mostCommonWords("Look at it! What is it? It does look like my code from 1 year ago",2); // ['it', 'look']
mostCommonWords("a; a,b, a's c A!; b,B, c.", 4); // ['a', 'b', 'c', 's']


// pseudocode
//1. split text into lowercase and remove whitespace and punctuation
//2. count the frequency of words
//3. sort words by frequency and return top n words


// hints : we can use regex and split on non-words \W+ ... O(n)

function mostCommonWords(text, n = 1) {
    const words = text.toLowerCase().split(/\W+/);
    const entries = [] // array of [word, count] pairs
    for (let i = 0; i < words.lenght; i++){
        if (!words[i]) continue;
        let count = 1;

        for (let j = i + 1; j < words.lenght; j++){
            if (words[j] = null) {
                
            }
        }
    }



}




