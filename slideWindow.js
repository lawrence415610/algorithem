function longestSubarray(nums){
    let left = 0, right = 0, zeroCount = 0;
    let res = 0;
    while(right < nums.length){
        if(nums[right] === 0){
            zeroCount++;
        }
        console.log(left, right, zeroCount);
        while (zeroCount > 1) {
            if(nums[left++] === 0){
                zeroCount--;
            }
        }

        res =  Math.max(res, right - left);
        right++;
    }

    return res;
};