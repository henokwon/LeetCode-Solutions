/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const output = [];
    
    for (let i = 0; i < nums.length; i++) {
        let begin = nums[i], end = begin;
        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) end = nums[++i];
        output.push(begin === end ? `${begin}` : `${begin}->${end}`);
    }

    return output;
};
