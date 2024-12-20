import type { ComponentProps } from 'vue-component-type-helpers';

type ModalMap = {
	[K in keyof typeof modal]: {
		name: K;
		props?: Partial<ComponentProps<(typeof modal)[K]>>;
	};
};

type Modal = ModalMap[keyof ModalMap];

export type { Modal };
