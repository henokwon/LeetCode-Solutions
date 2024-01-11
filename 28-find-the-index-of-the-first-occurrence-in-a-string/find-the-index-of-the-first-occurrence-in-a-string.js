/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const hayLen = haystack.length;
    const needleLen = needle.length;

    if (needleLen === 0) {
        return 0;
    }

    for (let i = 0; i <= hayLen - needleLen; i++) {
        if (haystack.slice(i, i + needleLen) === needle) {
            return i;
        }
    }

    return -1;
};
