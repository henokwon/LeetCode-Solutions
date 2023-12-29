/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    let n = nums.length;

    while (k < n) {
        if (nums[k] === val) {
            nums[k] = nums[--n];
        } else {
            k++;
        }
    }

    return k;
};