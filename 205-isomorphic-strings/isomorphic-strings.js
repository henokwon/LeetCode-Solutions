/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    const map1 = Array(256).fill(0);
    const map2 = Array(256).fill(0);

    for (let i = 0; i < s.length; i++) {
        if (map1[s.charCodeAt(i)] !== map2[t.charCodeAt(i)]) return false;
        map1[s.charCodeAt(i)] = map2[t.charCodeAt(i)] = i + 1;
    }

    return true;
};
