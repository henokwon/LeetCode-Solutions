/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    let i = 0;

    while (i < s.length) {
        const c = s[i++];
        const match = { ')': '(', '}': '{', ']': '[' }[c];

        if (match && stack.pop() !== match || !match) {
            stack.push(c);
        }
    }

    return stack.length === 0;
};
