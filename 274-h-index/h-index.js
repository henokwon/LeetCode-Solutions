/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
citations.sort((a, b) => a - b);
    let i = 0;

    while (i < citations.length && citations[i] < citations.length - i) i++;

    return citations.length - i;
};