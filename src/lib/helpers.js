// Parses data coming from prismic turning it into props ready to use by application.
function getMainPageProps(response) {
	let props = {};

	for (let slice of response) {
		let { primary, items } = slice;
		let sliceProps = {};
		let hasItems = JSON.stringify(items[0]) !== '{}';

		for (let [key, value] of Object.entries(primary)) {
			// Here we remove the name of the cmoponent to make prop names generic (e.g. changing "review_headline_text" into "headline_text")
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
