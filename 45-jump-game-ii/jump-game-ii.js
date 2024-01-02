/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let n = nums.length - 1, c = -1, nxt = 0, res = 0;

    while (nxt < n) {
        res++;
        const prevC = c;
        let maxIdx = nxt;

        for (let i = prevC + 1; i <= nxt; i++) {
            if (i + nums[i] > maxIdx + nums[maxIdx]) {
                maxIdx = i;
            }
        }

        c = maxIdx;
        nxt = c + nums[c];
    }

    return res;
};
