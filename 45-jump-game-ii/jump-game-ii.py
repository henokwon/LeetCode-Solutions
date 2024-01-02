class Solution:
    def jump(self, nums: List[int]) -> int:
        n = len(nums) - 1
        c, nxt, res = -1, 0, 0

        while nxt < n:
            res += 1
            max_idx = nxt

            for i in range(c + 1, nxt + 1):
                if i + nums[i] > max_idx + nums[max_idx]:
                    max_idx = i

            c = max_idx
            nxt = c + nums[c]

        return res