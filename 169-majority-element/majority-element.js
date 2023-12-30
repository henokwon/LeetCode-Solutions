/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = 0;
    let  candidateCount = 0;
    let i = 0;

    while (i < nums.length) {
        if (candidateCount === 0) {
            candidate = nums[i];
            candidateCount = 1;
        } else if (candidate === nums[i]) {
            candidateCount++;
        } else {
            candidateCount--;
        }
        i++;
    }

    return candidate;
};