import viCommon from './locales/vi/common.json';
import viMenu from './locales/vi/menu.json';
import viModule from './locales/vi/module.json';
import viValidation from './locales/vi/validation.json';

export default defineI18nConfig(() => {
	return {
		legacy: false,
		locale: 'vi',
		messages: {
			vi: {
				common: viCommon,
				menu: viMenu,
				module: viModule,
				validation: viValidation,
			},
		},
	};
});
