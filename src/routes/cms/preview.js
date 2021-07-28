import { linkResolver } from '$lib/prismic';

export async function get(req) {
	let token = req.query.get('token');
	let documentId = req.query.get('documentId');
	let { api } = req.locals;
	let redirectUrl = await api.getPreviewResolver(token, documentId).resolve(linkResolver, '/');

	return {
		status: 307,
		headers: {
			location: redirectUrl
		}
	};
}
