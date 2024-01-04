class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
    
        # Initialize the result array with all 1s
        result = [1] * n
    
        # Calculate the prefix products and store them in the result array
        prefix = 1
        for i in range(n):
            result[i] *= prefix
            prefix *= nums[i]
    
        # Calculate the suffix products and multiply them with the result array
        suffix = 1
        for i in range(n - 1, -1, -1):
            result[i] *= suffix
            suffix *= nums[i]
    
        return result
