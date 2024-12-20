import type { modal } from '#build/imports';
import type { Modal } from '~/types/modal';

const useModalStore = defineStore('modal', () => {
	const modals = ref<Modal[]>([]);

	const openModal = (modal: Modal) => {
		modals.value.push(modal);
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
