class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle == "":
            return 0

        hay_len = len(haystack)
        needle_len = len(needle)

        for i in range(hay_len - needle_len + 1):
            if haystack[i:i + needle_len] == needle:
                return i

        return -1
    