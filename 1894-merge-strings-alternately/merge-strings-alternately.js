/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = '';
    for (let i = 0, j = 0; i < word1.length || j < word2.length; i++, j++) {
        if (i < word1.length) result += word1[i];
        if (j < word2.length) result += word2[j];
    }
    return result;
};