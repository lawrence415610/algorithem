function targetIndices(nums, target) {
	const selectionSort = (arr) => {
		for (let i = 0; i < arr.length; i++) {
			let min = i;
			for (let j = i + 1; j < arr.length; j++) {
				if (arr[j] < arr[min]) {
					[arr[i], arr[j]] = [arr[j], arr[i]];
				}
			}
		}
		return arr;
	};

	selectionSort(nums);
	let res = [];
	nums.forEach((num, index) => {
		if (num === target) {
			res.push(index);
		}
	});

	return res;
}
