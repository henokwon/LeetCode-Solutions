class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        my_set = set()

        for i, num in enumerate(nums):
            if i > k:
                my_set.remove(nums[i - k - 1])
            if num in my_set:
                return True
            my_set.add(num)

        return False

    