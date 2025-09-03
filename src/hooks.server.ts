import { error, type Handle } from '@sveltejs/kit';

// INFO(gebriish): allowed routes go here
const frontendRoutes = [
	'/',
	'/home',
	'/aboutus',
	// '/contactus',
	'/login',
	'/register',
	'/changepassword',
	'/forgotpassword',
	'/ca/welcome',
	'/ca/profile',
	'/comingsoon',	
	'/workshop',
	'/profile',
];
const UnderConstructionRoutes = [
	'/contactus',
	'/events',
	'/schedule',
	'/merch',
	'/sponsors',
	'/map'
];


export const handle: Handle = ({ event, resolve }) => {

	const path = event.url.pathname.toLowerCase();

	const isAllowed = frontendRoutes.some(route =>
		path === route || path.startsWith(route + '/')
	);
	const isUnderConstruction = UnderConstructionRoutes.some(route =>
		path === route || path.startsWith(route + '/')
	);

	if (isAllowed) {
			return resolve(event);
	}
  
	if (isUnderConstruction) {
			const errorUrl = new URL("/comingsoon", event.url)
			return Response.redirect(errorUrl, 302);
	}

	throw error(404, 'Page not found');
};
