/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numIndexMap = new Map();
    
    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        const currentNum = nums[currentIndex];
        const difference = target - currentNum;

        if (numIndexMap.has(difference)) {
            return [currentIndex, numIndexMap.get(difference)];
        }
        
        numIndexMap.set(currentNum, currentIndex);
    }
};
