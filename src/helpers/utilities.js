const isValueGreater = (val1, val2) => {
	return val1 > val2;
};

const isValueSame = (val1, val2) => {
	return val1 === val2;
};

const removeFromArray = (arr, id) => {
	return arr.filter((el) => el.id !== id);
};

const addToArray = (arr, item) => {
	arr.push(item);
	return arr;
};

const shiftFromArray = (arr) => {
	arr.shift();
	return arr;
};

export {
	isValueGreater,
	isValueSame,
	removeFromArray,
	addToArray,
	shiftFromArray,
};
