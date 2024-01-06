class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        length = 0
        end = len(s) - 1

    # Trim
        while end >= 0 and s[end] == ' ':
            end -= 1

    # Calculate the length of the last word
        while end >= 0 and s[end] != ' ':
            length += 1
            end -= 1

        return length
    