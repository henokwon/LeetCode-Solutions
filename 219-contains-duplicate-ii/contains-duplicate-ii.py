class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        my_set = set()

        for i in range(len(nums)):
            if i > k:
                my_set.remove(nums[i - k - 1])
            if nums[i] in my_set:
                return True
            my_set.add(nums[i])

        return False
    