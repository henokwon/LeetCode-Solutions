class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        bracket_map = {')': '(', '}': '{', ']': '['}

        for c in s:
            match = bracket_map.get(c)
            if match and (not stack or stack.pop() != match) or not match:
                stack.append(c)

        return not stack

