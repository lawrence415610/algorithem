function runningSum(nums) {
    if(nums.length === 1 || nums.length === 0) return nums;
    for(let i = 1; i < nums.length; i++){
        nums[i] = nums[i-1] + nums[i]
    }
    return nums;
};