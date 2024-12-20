import { useLocalStorage } from '@vueuse/core';
import { defineStore, skipHydrate } from 'pinia';

const useAuthStore = defineStore('auth', () => {
	const auth = ref(
		useLocalStorage('auth', {
			user: {},
			expiredAt: 0,
		}),
	);

	const isLogin = computed(() => {
		return !!cookies.get('access_token') && !!cookies.get('branch_token');
	});

	const user = computed(() => {
		return auth.value?.user;
	});

	const expiredAt = computed(() => {
		return auth.value?.expiredAt;
	});

	const setUser = (value?: {}) => {
		if (!auth.value || !value) {
			return;
		}

		auth.value.user = value;
	};

	const setExpired = (value?: number) => {
		if (!auth.value || !value) {
			return;
		}

		auth.value.expiredAt = value;
	};

	const logout = async () => {
		auth.value = null;

		cookies.delete('access_token');
		cookies.delete('branch_token');

		await navigateTo('/auth/login');
	};

	return {
		auth: skipHydrate(auth),
		isLogin,
		expiredAt,
		user,

		setExpired,
		setUser,
		logout,
	};
});

export { useAuthStore };
