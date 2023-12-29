/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
   var resultIndex = 0;
    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        if (nums[currentIndex] !== val) {
            nums[resultIndex++] = nums[currentIndex];
        }
    }
    return resultIndex;
};