const sortCardKeys = (data) => {
	const tempData = { ...data };
	const sortedObj = {};

	Object.keys(tempData)
		.sort()
		.forEach(function (v, i) {
			sortedObj[v] = tempData[v];
		});

	return sortedObj;
};

const addPropertyToAllObjects = (arr, name, value) => {
	return arr.map((obj) => {
		return {
			...obj,
			[name]: value,
		};
	});
};

export { sortCardKeys, addPropertyToAllObjects };
