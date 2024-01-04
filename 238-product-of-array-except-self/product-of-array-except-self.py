class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        result = [1] * n

        prefix, suffix = 1, 1

        for i in range(n):
            result[i] *= prefix
            result[n - 1 - i] *= suffix
            prefix *= nums[i]
            suffix *= nums[n - 1 - i]

        return result
