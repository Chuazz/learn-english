import type { DehydratedState, VueQueryPluginOptions } from '@tanstack/vue-query';
import { QueryCache, QueryClient, VueQueryPlugin, dehydrate, hydrate } from '@tanstack/vue-query';
// import { useModalStore } from '~/stores/modal-store';

export default defineNuxtPlugin((nuxt) => {
	const vueQueryState = useState<DehydratedState | null>('vue-query');
	const toast = useShowToast();
	// const modalStore = useModalStore();

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 5000,
				refetchOnWindowFocus: false,
			},
		},
		queryCache: new QueryCache({
			onError(error) {
				// if (error?.statusCode === 401) {
				// 	modalStore.openModal({ name: 'expired' });

				// 	return;
				// }

				toast.error({
					title: error?.message,
				});
			},
		}),
	});

	const options: VueQueryPluginOptions = {
		queryClient,
	};

	nuxt.vueApp.use(VueQueryPlugin, options);

	if (import.meta.server) {
		nuxt.hooks.hook('app:rendered', () => {
			vueQueryState.value = dehydrate(queryClient);
		});
	}

	if (import.meta.client) {
		hydrate(queryClient, vueQueryState.value);
	}
});
