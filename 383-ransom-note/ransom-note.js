/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const charCount = {};

  // Count characters in magazine
  for (const char of magazine) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check if characters in ransomNote can be constructed
  for (const char of ransomNote) {
    if (charCount[char]) {
      charCount[char]--;
    } else {
      return false;
    }
  }

  return true;
};
