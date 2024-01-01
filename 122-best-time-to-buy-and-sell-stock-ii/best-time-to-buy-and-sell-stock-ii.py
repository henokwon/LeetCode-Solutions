class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        total_profit = 0

        for i in range(len(prices) - 1):
            current_price, next_price = prices[i], prices[i + 1]

            if current_price < next_price:
                profit = next_price - current_price
                total_profit += profit

        return total_profit