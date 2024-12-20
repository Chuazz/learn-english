import type { CookieSerializeOptions } from 'cookie-es';
import { deleteCookie, getCookie, setCookie, type H3Event } from 'h3';

const COOKIE_CHUNK_SIZE = 4000;

const handleKey = (key?: string, event?: H3Event, remove?: boolean): string | null => {
	let result = '';
	let i = 1;

	if (!key) {
		return null;
	}

	while (true) {
		const chunkKey = `${key}_${i}`;

		let chunkValue: string | null | undefined = null;

		if (event) {
			chunkValue = getCookie(event, chunkKey);
		}

		try {
			const cookie = useCookie(chunkKey);

			if (cookie.value) {
				chunkValue = cookie.value;
			}
		} catch (_error) {
			/* empty */
		}

		if (!chunkValue) {
			break;
		}

		if (remove) {
			if (event) {
				deleteCookie(event, chunkKey);
			}

			try {
				const cookie = useCookie(chunkKey);

				cookie.value = null;
			} catch (_error) {
				/* empty */
			}
		}

		result += chunkValue;

		i++;
	}

	return result || null;
};

const cookies = {
	get(key?: string, event?: H3Event): string | null {
		return handleKey(key, event);
	},

	set(key: string, value?: string, event?: H3Event, options?: CookieSerializeOptions): void {
		if (!value) {
			return;
		}

		const chunks = Math.ceil(value.length / COOKIE_CHUNK_SIZE);

		for (let i = 0; i < chunks; i++) {
			const chunkKey = `${key}_${i + 1}`;
			const chunkValue = value.slice(i * COOKIE_CHUNK_SIZE, (i + 1) * COOKIE_CHUNK_SIZE);

			if (event) {
				setCookie(event, chunkKey, chunkValue, {
					...options,
				});
			}

			try {
				const cookie = useCookie(chunkKey, options);

				cookie.value = chunkValue;
			} catch (_error) {
				/* empty */
			}
		}
	},

	delete(key: string, event?: H3Event): void {
		handleKey(key, event, true);
	},
};

export { cookies };
