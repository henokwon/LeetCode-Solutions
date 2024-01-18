/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const output = [];

    for (let i = 0; i < nums.length; i++) {
        let begin = nums[i], end = begin;
        while (nums[i + 1] === nums[i] + 1) end = nums[++i];
        output.push(`${begin}${begin === end ? '' : '->' + end}`);
    }

    return output;
};
