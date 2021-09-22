const qsort = (arr) => {
	if (arr.length < 2) {
		return arr;
	} else {
		const pivotPosition = Math.floor(Math.random() * arr.length);
		const pivot = arr[pivotPosition];
		const less = arr.filter((value, index) => {
			const isPivot = index === pivotPosition;
			return !isPivot && (value <= pivot);
		});
		const greater = arr.filter(value => value > pivot);
		return [...qsort(less), pivot, ...qsort(greater)];
	}
};

const arr = [1, -1, 0, 5, 2, 12, 7];
console.log(qsort(arr));