class Solution:
    def mySqrt(self, x: int) -> int:
        if x == 0 or x == 1: 
            return x
        for i in range(x + 1):  # Iterate from 0 to x
            if i * i > x:  # Check if i**2 is greater than x
                return i - 1  # Return the nearest integer
