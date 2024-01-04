var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = Array(n).fill(1);

    for (let i = 0, prefix = 1; i < n; prefix *= nums[i++]) {
        result[i] *= prefix;
    }

    for (let i = n - 1, suffix = 1; i >= 0; suffix *= nums[i--]) {
        result[i] *= suffix;
    }

    return result;
};
