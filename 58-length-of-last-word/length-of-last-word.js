/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = 0;
    let end = s.length - 1;

    // Trim trailing spaces
    while (end >= 0 && s[end] === ' ') {
        end--;
    }

    // Calculate the length of the last word
    while (end >= 0 && s[end] !== ' ') {
        length++;
        end--;
    }

    return length;
};