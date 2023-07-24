//给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。请返回 nums 的动态和。
// 输入：nums = [1,2,3,4]
// 输出：[1,3,6,10]
// 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
function runningSum(nums) {
	if (nums.length === 1 || nums.length === 0) return nums;
	for (let i = 1; i < nums.length; i++) {
		nums[i] = nums[i - 1] + nums[i];
	}
	return nums;
}
//给你一个整数数组 nums ，请计算数组的 中心下标 。
// 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
// 如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。
// 如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。

function pivotIndex(nums) {
	const total = nums.reduce((a, b) => a + b, 0);
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		if (2 * sum + nums[i] === total) {
			return i;
		}
		sum += nums[i];
	}
	return -1;
}
