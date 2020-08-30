const sortCardKeys = (data) => {
	const tempData = { ...data };
	const sortedObj = {};

	Object.keys(tempData)
		.sort()
		.map((v, i) => {
			return (sortedObj[v] = tempData[v]);
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
