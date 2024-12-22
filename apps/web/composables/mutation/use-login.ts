import type { Login, LoginResponse } from '@repo/types';
import { useMutation } from '@tanstack/vue-query';
import { ACCESS_TOKEN, api } from '@repo/utils';

const useLogin = () => {
	return useMutation<LoginResponse | undefined, Error, Login>({
		mutationFn: async (data) => {
			const response = await request<LoginResponse>({
				endpoint: api.login,
				options: {
					method: 'post',
					body: data,
				},
			});

			if (response?.expires) {
				const accessToken = useCookie(ACCESS_TOKEN, {
					expires: new Date(Date.now() + response?.expires),
				});

				accessToken.value = response?.access_token;
			}

			await navigateTo({
				path: '/:email/dashboard',
				params: {
					email: data.email.split('@')[0],
				},
			});

			return response;
		},
	});
};

export { useLogin };
