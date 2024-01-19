/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for (let c of s) {
        if (c === ')' && stack.pop() !== '(' ||
            c === '}' && stack.pop() !== '{' ||
            c === ']' && stack.pop() !== '[') {
            return false;
        } else if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        }
    }

    return stack.length === 0;
};
