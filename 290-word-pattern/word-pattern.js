/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const words = s.split(" ");

  if (pattern.length !== words.length) return false;

  const patternToWordMap = new Map(), seenWords = new Set();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if ((patternToWordMap.has(char) && patternToWordMap.get(char) !== word) || (!patternToWordMap.has(char) && seenWords.has(word))) return false;

    patternToWordMap.set(char, word);
    seenWords.add(word);
  }

  return true;
};

