class Solution:
    def isPalindrome(self, s: str) -> bool:
        if not s:
            return True

        def is_alpha_numeric(char):
            return char.isalnum()

        left, right = 0, len(s) - 1

        while left < right:
            if not is_alpha_numeric(s[left]):
                left += 1
            elif not is_alpha_numeric(s[right]):
                right -= 1
            elif s[left].lower() != s[right].lower():
                return False
            else:
                left += 1
                right -= 1

        return True
