class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ''

        prefix = min(strs)
        for i, char in enumerate(prefix):
            if any(string[i] != char for string in strs):
                return prefix[:i]

        return prefix


    