/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        candies[i] = ratings[i] > ratings[i - 1] ? candies[i - 1] + 1 : 1;
    }

    for (let i = n - 2; i >= 0; i--) {
        candies[i] = Math.max(candies[i], ratings[i] > ratings[i + 1] ? candies[i + 1] + 1 : 1);
    }

    return candies.reduce((a, b) => a + b, 0);

};