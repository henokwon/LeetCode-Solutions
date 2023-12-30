/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) {
        return nums.length;
    }

    let k = 2;
    let i = 2;

    while (i < nums.length) {
        if (nums[i] !== nums[k - 1] || nums[i] !== nums[k - 2]) {
            nums[k++] = nums[i];
        }
        i++;
    }

    return k;
};