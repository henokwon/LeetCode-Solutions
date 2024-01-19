/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (let c of s) {
        if (bracketMap[c] !== undefined) {
            // If the character is a closing bracket
            if (!stack.length || stack.pop() !== bracketMap[c]) {
                return false;
            }
        } else {
            // If the character is an opening bracket
            stack.push(c);
        }
    }

    return stack.length === 0;
};
