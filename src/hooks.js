import { getApi } from '$lib/prismic.js';

// This token comes from queries triggered by Prismic when clicking their "Go to Preview"
// which means that only /cms/preview endpoint will have it in its request.query object.
// Since we want it in other endpoints using the api we pass it down keeping it in a global
// varibale. See cms/content.js for an example on how we consume it.
let previewToken;

export async function handle({ request, resolve }) {
	if (request.path.startsWith('/cms/')) {
		try {
			let reqPrevToken = request.query.get('token');
			if (!previewToken || (!!reqPrevToken && reqPrevToken !== previewToken)) {
				previewToken = reqPrevToken;
			}

			request.locals.ctx = {
				previewToken
			};

			let api = await getApi(request);

			request.locals.api = api;
			resolve(request);
		} catch (error) {
			resolve(error.message);
		}
	}

	return resolve(request);
}
