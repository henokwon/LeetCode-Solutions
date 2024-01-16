/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    const seenNumbers = new Set();

    while (n !== 1 && !seenNumbers.has(n)) {
        seenNumbers.add(n);
        n = sumOfSquares(n);
    }

    return n === 1;
};

const sumOfSquares = function(num) {
    let sum = 0;

    while (num > 0) {
        const digit = num % 10;
        sum += digit ** 2;
        num = Math.floor(num / 10);
    }

    return sum;
};
