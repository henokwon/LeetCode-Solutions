/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let len = nums.length - 1, curr = -1, next = 0, ans = 0;

    while (next < len) {
        ans++;

        const prevCurr = curr;
        let maxIndex = next;

        for (let i = prevCurr + 1; i <= next; i++) {
            if (i + nums[i] > maxIndex + nums[maxIndex]) {
                maxIndex = i;
            }
        }

        curr = maxIndex;
        next = curr + nums[curr];
    }

    return ans;
};
