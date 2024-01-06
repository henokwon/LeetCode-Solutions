/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = 0;
    let end = s.length - 1;

    while (end >= 0 && s[end] === ' ') {
        end--;
    }

    while (end >= 0 && s[end--] !== ' ') {
        length++;
    }

    return length;
};