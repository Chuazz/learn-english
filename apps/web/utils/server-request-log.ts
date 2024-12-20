import { isServer } from '@tanstack/vue-query';
import { format } from 'date-fns';

const serverRequestLog = (
	url: string,
	body: object,
	params: object,
	token: {
		key?: 'access_token' | 'branch_token';
		value?: string | null;
	},
) => {
	if (url.startsWith('http://localhost') || !isServer) {
		return;
	}

	console.log(
		'*=================================== SERVER REQUEST ===================================*',
	);

	console.log('URL: ', url.split('?')[0]);
	console.log('Time: ', format(new Date(), 'dd/MM/yyyy HH:mm:ss'));
	console.log('Token: ', JSON.stringify(token, null, 3));
	console.log('Params: ', JSON.stringify(params, null, 3));
	console.log('Body: ', JSON.stringify(body, null, 3));
	console.log('');
	console.log('');
	console.log('');
};

export { serverRequestLog };
