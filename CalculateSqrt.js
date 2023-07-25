
function mySqrt(x) {
	if (x < 2) return x;
	let l = 0,
		r = x,
		ans = 0;
	while (l <= r) {
		const mid = Math.floor((l + r) / 2);
		if (mid * mid > x) {
			r = mid - 1;
			ans = r;
		} else if (mid * mid < x) {
			l = mid + 1;
		} else {
			return Math.floor(mid);
		}
	}
	return r;
}
