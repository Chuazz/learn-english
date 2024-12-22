import AlertModal from '~/components/modal/alert-modal.vue';
import ExpiredModal from '~/components/modal/expired-modal.vue';
import type { ComponentProps } from 'vue-component-type-helpers';

const modal = {
	expired: ExpiredModal,
	alert: AlertModal,
};

type ModalMap = {
	[K in keyof typeof modal]: {
		name: K;
		props?: Partial<ComponentProps<(typeof modal)[K]>>;
	};
};

type Modal = ModalMap[keyof ModalMap];

const useModalStore = defineStore('modal', () => {
	const modals = ref<Modal[]>([]);

	const openModal = (item: Modal) => {
		modals.value.push(item);
	};

	const closeModal = (modalName: keyof typeof modal) => {
		modals.value = modals.value.filter((t) => t.name !== modalName);
	};

	return {
		modals,

		openModal,
		closeModal,
	};
});

export { useModalStore };
