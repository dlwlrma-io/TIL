// https://programmers.co.kr/learn/courses/30/lessons/87389
function solution(n, x = 1) {
	while (x++) {
		if (n % x === 1) {
			return x;
		}
	}
}