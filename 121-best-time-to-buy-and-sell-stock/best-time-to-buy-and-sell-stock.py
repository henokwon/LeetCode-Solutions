class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices or len(prices) == 1:
            return 0

        min_price, max_profit = prices[0], 0
        i = 1

        while i < len(prices):
            max_profit = max(max_profit, prices[i] - min_price)
            min_price = min(min_price, prices[i])
            i += 1

        return max_profit