/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let n = nums.length - 1, c = -1, nxt = 0, res = 0;
//iterate
    for (; nxt < n; res++) {
        let maxIdx = nxt;
       //find max 
        for (let i = c + 1; i <= nxt; i++)
            if (i + nums[i] > maxIdx + nums[maxIdx]) maxIdx = i;
//assign max
        c = maxIdx;
        nxt = c + nums[c];
    }

    return res;
};
