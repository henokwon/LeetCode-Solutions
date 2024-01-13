/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const words = s.split(" ");
  
  // Check if both have the same length
  if (pattern.length !== words.length) {
    return false;
  }

  const patternToWordMap = new Map();
  const seenWords = new Set();

  for (let i = 0; i < pattern.length; i++) {
    const currentPatternChar = pattern[i];
    const currentWord = words[i];

    if (!patternToWordMap.has(currentPatternChar)) {
      // If pattern character is not mapped, check if the word is already mapped to another pattern character
      if (seenWords.has(currentWord)) {
        return false; // Word is already mapped to another pattern character
      }

      // Map the pattern character to the current word
      patternToWordMap.set(currentPatternChar, currentWord);
      seenWords.add(currentWord);
    } else {
      // Check if the mapped word for the pattern character is the same as the current word
      if (patternToWordMap.get(currentPatternChar) !== currentWord) {
        return false; // Mismatch in mapping
      }
    }
  }

  return true;
};

// Example usage:
const result = wordPattern("abba", "dog cat cat dog");
console.log(result); // Should return true
