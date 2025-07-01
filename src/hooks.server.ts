import { error, type Handle } from '@sveltejs/kit';

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
	'/ca/profile',
	'/error',
	'/profile',
	// '/events',
];


export const handle: Handle = ({ event, resolve }) => {

	const path = event.url.pathname.toLowerCase();

	const isAllowed = frontendRoutes.some(route =>
		path === route || path.startsWith(route + '/')
	);

  if (!isAllowed) {
		const errorUrl = new URL("/error", event.url)
		return Response.redirect(errorUrl, 302);
  }

	return resolve(event);
};
