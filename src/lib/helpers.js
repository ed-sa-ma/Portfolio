function getMainPageProps(response) {
	let props = {};

	for (let slice of response) {
		let { primary, items } = slice;
		let sliceProps = {};
		let hasItems = JSON.stringify(items[0]) !== '{}';

		for (let [key, value] of Object.entries(primary)) {
			sliceProps[key.split('_').slice(1).join('_')] = value;
		}

		props[slice.slice_type] = {
			...sliceProps,
			...(hasItems ? { items } : null)
		};
	}

	return props;
}

export { getMainPageProps };
