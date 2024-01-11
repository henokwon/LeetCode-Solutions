class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        return next((i for i in range(len(haystack) - len(needle) + 1) if haystack[i:i+len(needle)] == needle), -1)


    