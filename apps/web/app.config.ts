export default defineAppConfig({
	ui: {
		notifications: {
			position: 'top-0 bottom-[unset]',
		},
		button: {
			base: 'transition-all duration-200',
			default: {
				size: 'xl',
				loadingIcon: 'i-octicon-sync-24',
			},
			color: {
				whiteOnGreen: {
					ghost: 'text-white hover:bg-white hover:text-primary-500 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
					solid: 'hover:bg-white/85 bg-white text-primary-500 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
				},
			},
		},
		input: {
			default: {
				size: 'xl',
			},
		},
		skeleton: {
			background: 'bg-gray-200 dark:bg-gray-800',
		},
	},
});
