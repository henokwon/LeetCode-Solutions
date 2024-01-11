/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  let subsequence = 0;
  
  for (let char of t) {
    if (s[subsequence] === char && ++subsequence === s.length) {
      return true;
    }
  }

  return subsequence === s.length;
};

