var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = Array(n).fill(1);

    for (let i = 0, prefix = 1; i < n; i++) {
        result[i] *= prefix;
        prefix *= nums[i];
    }

    for (let i = n - 1, suffix = 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
};
