// Your code here
function mapToNegativize(arr) {
	return arr.map((num) => num * -1);
}

function mapToNoChange(arr) {
	return arr.map((num) => num);
}

function mapToDouble(arr) {
	return arr.map((num) => num * 2);
}

function mapToSquare(arr) {
	return arr.map((num) => num ** 2);
}

function reduceToTotal(arr, i = 0) {
	for (let index = 0; index < arr.length; index++) {
		i += arr[index];
	}
	return i;
}

function reduceToAllTrue(arr) {
	for (let index = 0; index < arr.length; index++) {
		if (!arr[index]) return false;
	}
	return true;
}

function reduceToAnyTrue(array) {
	for (let index = 0; index < array.length; index++) {
		if (array[index]) return true;
	}
	return false;
}
