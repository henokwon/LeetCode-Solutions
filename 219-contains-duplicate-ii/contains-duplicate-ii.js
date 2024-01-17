/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hasmap = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (i > k) {
            hasmap.delete(nums[i - k - 1]);
        }

        if (hasmap.has(nums[i])) {
            return true;
        }

        hasmap.add(nums[i]);
    }

    return false;
};
