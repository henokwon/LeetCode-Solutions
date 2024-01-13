class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        words = s.split(" ")

        if len(pattern) != len(words):
            return False

        pattern_to_word_map = {}
        seen_words = set()

        for char, word in zip(pattern, words):
            if char not in pattern_to_word_map:
                if word in seen_words:
                    return False

                pattern_to_word_map[char] = word
                seen_words.add(word)
            elif pattern_to_word_map[char] != word:
                return False

        return True
