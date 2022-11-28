//Given a string with three types of brackets: (), {}, and [].
// Validate they are correctly closed and opened.

function isParenthesesValid(string) {
    const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
    ]);
    const stack = [];
    for (const c of string) {
    if (map.has(c)) stack.push(map.get(c));
    else if (c !== stack.pop()) return false;
    }
    return stack.length === 0;
   }


console.log(isParenthesesValid('(){}[]')); // true
console.log(isParenthesesValid('(')); // false (closing parentheses is missing)
console.log(isParenthesesValid('([{}])')); // true
console.log(isParenthesesValid('[{]}')); // false (brackets are not closed in the right order)
console.log(isParenthesesValid('([{)}]')); // false (closing is out of order)


// Declare an empty stack.
// Push an opening parenthesis on top of the stack.
// In case of a closing bracket, check if the stack is empty.
// If not, pop in a closing parenthesis if the top of the stack contains the corresponding opening parenthesis.
// If the parentheses are valid,​ then the stack will be empty once the input string finishes.