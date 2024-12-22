const route = {
	login: '/auth/login',
	register: '/auth/register',
	dashboard: '/:email/dashboard',
};

const authRoutes = [route.login, route.register];

const publicRoutes = [];

const privateRoutes = [route.dashboard];

export { route, publicRoutes, privateRoutes, authRoutes };
