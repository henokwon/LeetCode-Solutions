class Solution:
    def jump(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return 0

        jumps, current_end, farthest = 0, 0, 0

        for i in range(n - 1):
            farthest = max(farthest, i + nums[i])
        
            if i == current_end:
                jumps += 1
                current_end = farthest

        return jumps
