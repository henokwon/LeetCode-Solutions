/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1;
    let i = 1;

    while (i < nums.length) {
        if (nums[i] !== nums[k - 1]) nums[k++] = nums[i];
        i++;
    }

    return k;
};