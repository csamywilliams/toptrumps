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

export { sortCardKeys };
