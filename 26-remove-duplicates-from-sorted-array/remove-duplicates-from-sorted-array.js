/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
     let k = 0;
    let i = 0;

    while (i < nums.length) {
        nums[k++] = nums[i++];
        while (i < nums.length && nums[i] === nums[i - 1]) i++;
    }

    return k;
};