/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  
 let maxProfit = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    buy = Math.min(buy, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - buy);
  }

  return maxProfit;
};