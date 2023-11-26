/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const isPrime = new Uint8Array(n);
    let count = 0;

    for (let num = 2; num < n; num++) {
        if (isPrime[num]) continue;

        count++;

        for (let mult = num * num; mult < n; mult += num) {
            isPrime[mult] = 1;
        }
    }

    return count;
};