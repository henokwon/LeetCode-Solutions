/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length <= 1) {
        return true;
    }

    let maximum = nums[0];
    let i = 0;

    while (i < nums.length) {
        if (maximum <= i && nums[i] === 0) {
            return false;
        }

        if (i + nums[i] > maximum) {
            maximum = i + nums[i];
        }

        if (maximum >= nums.length - 1) {
            return true;
        }

        i++;
    }

    return false;

};