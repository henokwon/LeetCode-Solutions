class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        i = 0

        while i < len(s):
            c = s[i]
            match = {')': '(', '}': '{', ']': '['}.get(c)

            if match and (not stack or stack.pop() != match) or not match:
                stack.append(c)
        
            i += 1

        return not stack
    