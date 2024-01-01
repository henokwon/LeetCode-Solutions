class Solution:
    def canJump(self, nums: List[int]) -> bool:
        max_reach = 0
        
        for i in range(len(nums)):
            if i > max_reach:
                return False  # Cannot reach index i
            max_reach = max(max_reach, i + nums[i])
            
            if max_reach >= len(nums) - 1:
                return True  # Can reach the end of the array
        
        return False
