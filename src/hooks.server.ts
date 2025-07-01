import type { Handle } from '@sveltejs/kit';

// INFO(gebriish): allowed routes go here
const frontendRoutes = [
	'/',
	'/home',
	'/aboutus',
	'/login',
	'/register',
	'/changepassword',
	'/forgotpassword',
	'/ca/welcome',
	'/ca/profile'
];


export const handle: Handle = ({ event, resolve }) => {

	const path = event.url.pathname.toLowerCase();

	const isAllowed = frontendRoutes.some(route =>
		path === route || path.startsWith(route + '/')
	);

	if (!isAllowed) {
		// TODO(gebriish): redirect to error.svelte
		return new Response('Not Found', { status: 404 });
	}

	return resolve(event);
};
