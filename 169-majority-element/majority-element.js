/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = 0, count = 0, i = 0;

    while (i < nums.length) {
        (count === 0) ? (candidate = nums[i++], count = 1) :
        (candidate === nums[i++]) ? count++ : count--;
    }

    return candidate;
};