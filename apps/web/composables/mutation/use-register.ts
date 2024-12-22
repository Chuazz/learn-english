import type { Register } from '@repo/types';
import { api } from '@repo/utils';
import { useMutation } from '@tanstack/vue-query';

const useRegister = () => {
	const toast = useShowToast();

	return useMutation<boolean, Error, Partial<Register>>({
		mutationFn: async (data) => {
			delete data.confirm_password;

			await request({
				endpoint: api.register,
				options: {
					method: 'post',
					body: data,
				},
			});

			return true;
		},
		onError(error) {
			toast.error({
				title: error.message,
			});
		},
	});
};

export { useRegister };
