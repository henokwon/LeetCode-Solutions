/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = n => {
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = [...n + ''].reduce((sum, digit) => sum + digit ** 2, 0);
    }

    return n === 1;
};
