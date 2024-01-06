/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';

    let prefix = strs[0];

    for (let i = 1; i < strs.length && prefix.length > 0; i++) {
        let j = 0;
        while (j < prefix.length && prefix[j] === strs[i][j]) j++;
        prefix = prefix.slice(0, j);
    }

    return prefix;
};