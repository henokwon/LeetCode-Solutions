class Solution:
    def candy(self, ratings: List[int]) -> int:
        n = len(ratings)
        candies = [1] * n

        # Left to right pass
        for i in range(1, n):
            candies[i] = candies[i - 1] + 1 if ratings[i] > ratings[i - 1] else 1

        # Right to left pass
        for i in range(n - 2, -1, -1):
            candies[i] = max(candies[i], candies[i + 1] + 1) if ratings[i] > ratings[i + 1] else candies[i]

        return sum(candies)    