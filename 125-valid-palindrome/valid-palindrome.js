/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     if (!s.length) return true;

    const isAlphaNumeric = (char) => /[a-zA-Z0-9]/.test(char);

    for (let left = 0, right = s.length - 1; left < right; ) {
        if (!isAlphaNumeric(s[left])) left++;
        else if (!isAlphaNumeric(s[right])) right--;
        else if (s[left++].toLowerCase() !== s[right--].toLowerCase()) return false;
    }

    return true;
}
