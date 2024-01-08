/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 0) {
        return true;
    }

    let left = 0, right = s.length - 1;
    const alphanumericSet = new Set([...Array(10).keys()].map(i => String.fromCharCode(i + 48)).concat([...Array(26).keys()].map(i => String.fromCharCode(i + 65)).concat([...Array(26).keys()].map(i => String.fromCharCode(i + 97)))));

    while (left < right) {
        if (!alphanumericSet.has(s[left]))
            left++;
        else if (!alphanumericSet.has(s[right]))
            right--;
        else if (s[left].toLowerCase() !== s[right].toLowerCase())
            return false;
        else {
            left++;
            right--;
        }
    }
    return true;
}
