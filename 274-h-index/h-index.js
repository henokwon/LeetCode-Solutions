/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
 const n = citations.length;
    const count = Array(n + 1).fill(0);

    for (const citation of citations) {
        count[Math.min(citation, n)]++;
    }
//iterate
    let total = 0;
    for (let i = n; i >= 0; i--) {
        total += count[i];
        if (total >= i) {
            return i;
        }
    }

    return 0;
};