// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: {
		enabled: false,
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		},
		pageTransition: {
			name: 'page',
			mode: 'out-in',
		},
	},
	features: {
		devLogs: 'silent',
	},
	colorMode: {
		preference: 'light',
	},
	runtimeConfig: {
		public: {
			ENVIRONMENT: process.env.NUXT_ENVIRONMENT,

			APP_NAME: process.env.NUXT_APP_NAME,

			BASE_URL: process.env.NUXT_BASE_URL,
		},
	},
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	imports: {
		dirs: ['composables/**'],
	},
	modules: [
		'@nuxtjs/i18n',
		'@pinia/nuxt',
		'@nuxt/eslint',
		'nuxt-typed-router',
		'@vee-validate/nuxt',
		'@nuxt/ui',
	],
	i18n: {
		locales: ['vi'],
		defaultLocale: 'vi',
		vueI18n: '~/utils/i18n/index.ts',
	},
	pinia: {
		storesDirs: ['~/stores/*'],
	},
	veeValidate: {
		autoImports: true,
		componentNames: {
			Form: 'VeeForm',
			Field: 'VeeField',
			FieldArray: 'VeeFieldArray',
			ErrorMessage: 'VeeErrorMessage',
		},
	},
	ui: {
		global: true,
	},
});
