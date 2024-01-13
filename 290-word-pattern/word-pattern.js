/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  const patternToWordMap = new Map();
  const seenWords = new Set();

  for (let i = 0; i < pattern.length; i++) {
    const currentPatternChar = pattern[i];
    const currentWord = words[i];

    if (patternToWordMap.has(currentPatternChar)) {
      if (patternToWordMap.get(currentPatternChar) !== currentWord) {
        return false;
      }
    } else {
      if (seenWords.has(currentWord)) {
        return false;
      }

      patternToWordMap.set(currentPatternChar, currentWord);
      seenWords.add(currentWord);
    }
  }

  return true;
};

