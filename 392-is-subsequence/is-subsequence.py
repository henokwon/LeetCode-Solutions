class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        subsequence = 0

        for char in t:
            if subsequence < len(s) and s[subsequence] == char:
                subsequence += 1

        return subsequence == len(s)
    