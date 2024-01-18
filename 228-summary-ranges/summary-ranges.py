class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        output = []

        i = 0
        while i < len(nums):
            begin, end = nums[i], nums[i]
            while i + 1 < len(nums) and nums[i + 1] == nums[i] + 1:
                end = nums[i + 1]
                i += 1
            output.append(f"{begin}" if begin == end else f"{begin}->{end}")
            i += 1

        return output
    