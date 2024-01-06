/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';

    let ans = strs[0];
    let i = 1;

    while (i < strs.length && ans.length > 0) {
        let j = 0;
        while (j < ans.length && ans[j] === strs[i][j]) j++;
        ans = ans.substring(0, j);
        i++;
    }

    return ans;
};