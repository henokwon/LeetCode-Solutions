class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        map1 = [0] * 256
        map2 = [0] * 256

        for i in range(len(s)):
            if map1[ord(s[i])] != map2[ord(t[i])]:
                return False
            map1[ord(s[i])] = map2[ord(t[i])] = i + 1

        return True
    