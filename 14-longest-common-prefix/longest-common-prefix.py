class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ''

        prefix = min(strs)
        i = 0

        while i < len(prefix):
            if any(string[i] != prefix[i] for string in strs):
                return prefix[:i]
            i += 1

        return prefix
    