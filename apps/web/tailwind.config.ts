import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
	content: [],
	theme: {
		extend: {
			colors: {
				primary: {
					'50': '#f0fdf4',
					'100': '#dcfce7',
					'200': '#bbf7d0',
					'300': '#86efac',
					'400': '#4ade80',
					'500': '#22c55e',
					'600': '#16a34a',
					'700': '#15803d',
					'800': '#166534',
					'900': '#14532d',
					'950': '#052e16',
				},
			},
			height: {},
			keyframes: {
				fadeIn: {
					'0%': {
						transform: 'translateY(100px)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1',
					},
				},
			},
			animation: {
				fadeIn: 'fadeIn 1s ease-in-out',
			},
		},
	},
	plugins: [],
};
