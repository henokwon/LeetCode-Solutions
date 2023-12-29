/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
     let i = 0,
        j = nums.length;

    while (i < j) {
        if (nums[i] === val) {
            nums[i] = nums[--j];
        } else {
            i++;
        }
    }

    return i;
};