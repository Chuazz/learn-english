import { authRoutes, privateRoutes, route } from '@repo/utils';
import { useAuthStore } from '~/stores/auth-store';

export default defineNuxtRouteMiddleware(async (to) => {
	const { isLogin } = useAuthStore();

	if (isLogin && authRoutes.includes(to.path)) {
		return abortNavigation();
	}

	if (!isLogin && privateRoutes.includes(to.path)) {
		return navigateTo(route.login);
	}

	return;
});
