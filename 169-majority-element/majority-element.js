/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = 0;
    let  candidateC = 0;
    let i = 0;

    while (i < nums.length) {
        if (candidateC === 0) {
            candidate = nums[i];
            candidateC = 1;
        } else if (candidate === nums[i]) {
            candidateC++;
        } else {
            candidateC--;
        }
        i++;
    }

    return candidate;
};