/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;

    let count = 0;
    let start = 0;

    while (count < n) {
        let current = start;
        let prev = nums[start];

        do {
            const next = (current + k) % n;
            [prev, nums[next]] = [nums[next], prev];
            current = next;
            count++;
        } while (start !== current);
        
        start++;
    }
};