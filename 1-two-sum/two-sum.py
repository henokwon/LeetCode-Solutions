class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_index_map = {}

        for current_index, current_num in enumerate(nums):
            complement = target - current_num

            if complement in num_index_map:
                return [current_index, num_index_map[complement]]

            num_index_map[current_num] = current_index
