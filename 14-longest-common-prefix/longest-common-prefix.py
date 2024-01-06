class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ''

        prefix = min(strs)

        for i, char in enumerate(prefix):
            for string in strs:
                if string[i] != char:
                    return prefix[:i]

        return prefix

    