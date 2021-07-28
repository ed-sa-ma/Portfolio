export async function get(req) {
	try {
		let {
			api,
			ctx: { previewToken }
		} = req.locals;
		let docRes = await api.getSingle('main_page', {
			...(previewToken ? { ref: previewToken } : null)
		});
		let {
			data: { body }
		} = docRes;

		return {
			status: 200,
			body
		};
	} catch (e) {
		return {
			status: 500,
			body: { message: e.message }
		};
	}
}
