class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        start, tank, total = 0, 0, 0

        for i in range(len(gas)):
            consume = gas[i] - cost[i]
            tank += consume
            total += consume

            if tank < 0:
                tank = 0
                start = i + 1

        return -1 if total < 0 else start
    