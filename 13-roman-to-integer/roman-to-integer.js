/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const currentSymbol = symbols[s[i]];
        const nextSymbol = symbols[s[i + 1]];

        if (currentSymbol < nextSymbol) {
            total += nextSymbol - currentSymbol;
            i++;
        } else {
            total += currentSymbol;
        }
    }

    return total;
};
