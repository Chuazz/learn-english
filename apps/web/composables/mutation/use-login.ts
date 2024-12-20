import { useMutation } from '@tanstack/vue-query';
import type { Login, LoginResponse } from '~/types/data/login';
import type { ApiResponse } from '~/types/request';

const useLogin = () => {
	const toast = useShowToast();

	return useMutation<ApiResponse<LoginResponse>, ApiResponse, Login>({
		mutationFn: async (data) => {
			const response = await request<LoginResponse>({
				endpoint: api.login.client,
				options: {
					method: 'post',
					body: data,
					token: undefined,
				},
			});

			return response;
		},
		onError: (error) => {
			if (error?.message) {
				toast.error({
					title: error?.message,
				});
			}
		},
	});
};

export { useLogin };
