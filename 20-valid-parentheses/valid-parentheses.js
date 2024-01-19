/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for (let c of s) {
        const match = { ')': '(', '}': '{', ']': '[' }[c];
        if (match && stack.pop() !== match || !match) stack.push(c);
    }

    return stack.length === 0;
};
