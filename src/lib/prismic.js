import Prismic from '@prismicio/client';

// TODO: clean this up once implementation works.

let apiEndpoint = import.meta.env.VITE_API_ENDPOINT || '';
let accessToken = import.meta.env.VITE_ACCESS_TOKEN || '';

async function getApi(req) {
	return Prismic.getApi(apiEndpoint, { accessToken, ...(req ? { req } : null) });
}

function linkResolver(doc) {
	if (doc.type === 'main_page') return '/';

	return `/${doc.uid}`;
}

export { getApi, Prismic, apiEndpoint, accessToken, linkResolver };
