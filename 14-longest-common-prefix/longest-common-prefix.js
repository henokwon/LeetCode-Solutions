/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }

    let ans = strs[0];

    for (let i = 1; i < strs.length && ans.length > 0; i++) {
        let j = 0;
        while (j < ans.length && j < strs[i].length && ans[j] === strs[i][j]) {
            j++;
        }
        ans = ans.substring(0, j);
    }

    return ans;
};