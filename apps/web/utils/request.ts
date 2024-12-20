import type { H3Event } from 'h3';
import { stringifyQuery, type LocationQueryRaw } from 'vue-router';
import type { ApiResponse } from '~/types/request';
import { cookies } from '~/utils/cookies';
import { serverRequestLog } from './server-request-log';
import { api } from '~/utils/api';

type Props = {
	endpoint: string;
	options: (
		| {
				method: 'get';
				params?: object;
		  }
		| {
				method: 'post' | 'delete' | 'patch';
				body?: object;
		  }
	) & {
		token: 'access_token' | 'branch_token' | undefined;
		event?: H3Event;
	};
};

const request = async <T = unknown>({
	endpoint,
	options,
}: Props): Promise<ApiResponse<T> | null> => {
	const config = useRuntimeConfig();
	const token = cookies.get(options.token, options.event);

	const url =
		config.public['baseUrl'] +
		endpoint +
		(options?.method === 'get' && options.params
			? '?' + stringifyQuery(options.params as LocationQueryRaw)
			: '');

	let result: ApiResponse<T> | null = null;

	if (!token && ![api.login.client, api.login.server].includes(endpoint)) {
		return null;
	}

	serverRequestLog(
		url,
		options?.method !== 'get' ? options.body || {} : {},
		options?.method === 'get' ? options.params || {} : {},
		{
			key: options.token || 'access_token',
			value: token,
		},
	);

	const response = await fetch(url, {
		method: options?.method,
		body: options?.method === 'get' ? undefined : JSON.stringify(options?.body),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			...(options.event
				? {
						Authorization: 'Bearer ' + token,
					}
				: {}),
		},
	});

	try {
		result = await response.json();
	} catch (_error) {
		return null;
	}

	if (!result?.success) {
		throw createError({
			message: result?.message || response.statusText,
			statusCode: response.status,
		});
	}

	return result;
};

export { request };
