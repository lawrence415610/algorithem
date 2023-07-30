function lastStoneWeight(stones) {
	const compare = (a, b) => b - a;
	stones.sort(compare);
	console.log(stones);
	while (stones.length > 1) {
		const oldStone = stones.shift();
		stones[0] = oldStone - stones[0];
		for (let i = 0; i < stones.length - 1; i++) {
			if (stones[i] < stones[i + 1]) {
				[stones[i], stones[i + 1]] = [stones[i + 1], stones[i]];
			}
		}
	}
	if (stones.length === 0) return 0;
	return stones[0];
}
