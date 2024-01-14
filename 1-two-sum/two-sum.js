/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create a map to store the number and its index
    const numIndexMap = new Map();

    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        const currentNum = nums[currentIndex];
        const complement = target - currentNum;

        // Check if the complement is in the map
        if (numIndexMap.has(complement)) {
            // Return the indices of the two numbers that add up to the target
            return [currentIndex, numIndexMap.get(complement)];
        }

        // Add the current number and its index to the map
        numIndexMap.set(currentNum, currentIndex);
    }
};

