/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;

    // Initialize the result array with all 1s
    const result = Array(n).fill(1);

    let prefix = 1;
    
    // Calculate the prefix products and store them in the result array
    for (let i = 0; i < n; i++) {
        result[i] *= prefix;
        prefix *= nums[i];
    }

    let suffix = 1;

    // Update the result array with the suffix products
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
};
