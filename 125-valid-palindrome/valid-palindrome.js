/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     if (s.length === 0) return true;

    const isAlphaNumeric = (char) => /[a-zA-Z0-9]/.test(char);

    let left = 0, right = s.length - 1;

    while (left < right) {
        if (!isAlphaNumeric(s[left])) left++;
        else if (!isAlphaNumeric(s[right])) right--;
        else if (s[left++].toLowerCase() !== s[right--].toLowerCase()) return false;
    }

    return true;
}
