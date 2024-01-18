/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const output = [];
    
    for (let i = 0; i < nums.length; i++) {
        let beginRange = nums[i];
        let endRange = beginRange;

        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            endRange = nums[i + 1];
            i++;
        }

        output.push(beginRange === endRange ? `${beginRange}` : `${beginRange}->${endRange}`);
    }

    return output;
};
