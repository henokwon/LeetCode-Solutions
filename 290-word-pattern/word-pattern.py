class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        words = s.split(" ")

        if len(pattern) != len(words):
            return False

        pattern_to_word_map = {}
        seen_words = set()

        for i in range(len(pattern)):
            current_pattern_char = pattern[i]
            current_word = words[i]

            if current_pattern_char not in pattern_to_word_map:
                if current_word in seen_words:
                    return False

                pattern_to_word_map[current_pattern_char] = current_word
                seen_words.add(current_word)
            else:
                if pattern_to_word_map[current_pattern_char] != current_word:
                    return False

        return True
    