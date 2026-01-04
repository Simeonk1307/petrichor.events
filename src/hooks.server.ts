import { error, type Handle } from '@sveltejs/kit';

const UnderConstructionRoutes = [
	'/contactUs',
	'/schedule',
	'/merch',
	'/map'
];

export const handle: Handle = async ({ event, resolve }) => {
	const path = event.url.pathname.toLowerCase();

	// Let SvelteKit resolve first
	const response = await resolve(event);

	// If SvelteKit already found an error → THROW it
	if (response.status >= 400) {
		throw error(response.status, response.statusText || 'Request failed');
	}

	// Custom errors for valid routes
	const isUnderConstruction = UnderConstructionRoutes.some(route =>
		path === route || path.startsWith(route + '/')
	);

	if (isUnderConstruction) {
		throw error(503, 'This page is under construction');
	}

	return response;
};
