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
        let match = true;

        for (let j = 0; j < needleLen; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            return i;
        }
    }

    return -1;
};
