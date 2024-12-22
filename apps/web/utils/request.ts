import { stringifyQuery, type LocationQueryRaw } from 'vue-router';
import { ACCESS_TOKEN, api, API_BASE_URL } from '@repo/utils';
import type { ApiResponse } from '@repo/types';

type Props = {
	endpoint: string;
	options:
		| {
				method: 'get';
				params?: object;
		  }
		| {
				method: 'post' | 'delete' | 'patch';
				body?: object;
		  };
};

const request = async <T = unknown>({ endpoint, options }: Props): Promise<T | undefined> => {
	const accessToken = useCookie(ACCESS_TOKEN);

	const url =
		API_BASE_URL +
		endpoint +
		(options?.method === 'get' && options.params
			? '?' + stringifyQuery(options.params as LocationQueryRaw)
			: '');

	let result: ApiResponse<T> | null = null;

	if (!accessToken.value && ![api.login, api.register].includes(endpoint)) {
		return;
	}

	const responseHeader: Record<string, string> = {};

	if (accessToken.value) {
		responseHeader['Authorization'] = 'Bearer ' + accessToken.value;
	}

	const response = await fetch(url, {
		method: options?.method,
		body: options?.method === 'get' ? undefined : JSON.stringify(options?.body),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			...responseHeader,
		},
	});

	try {
		result = await response.json();
	} catch (_error) {
		return;
	}

	// if (!response.ok) {
	// 	throw createError({
	// 		message: result?.message,
	// 	});
	// }

	return result?.data;
};

export { request };
