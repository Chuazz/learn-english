import type { Option } from '@repo/types';

const menu: Option[] = [
	{
		key: 'dashboard',
		label: 'menu.dashboard',
		icon: 'icon-park-solid:dashboard-one',
		to: '/dashboard',
	},
	{
		key: 'master-data',
		label: 'menu.master_data',
		icon: 'fa6-solid:boxes-stacked',
		items: [
			{
				key: 'payment',
				label: 'menu.payment',
				to: '/payment',
			},
			{
				key: 'payment-term',
				label: 'menu.payment_term',
				to: '/payment-term',
			},
			{
				key: 'product-industry',
				label: 'menu.product_industry',
				to: '/product-industry',
			},
			{
				key: 'product-origin',
				label: 'menu.product_origin',
				to: '/product-origin',
			},
			{
				key: 'product-category',
				label: 'menu.product_category',
				to: '/product-category',
			},
			{
				key: 'product-brand',
				label: 'menu.product_brand',
				to: '/product-brand',
			},
			{
				key: 'manufacturer',
				label: 'menu.manufacturer',
				to: '/manufacturer',
			},
			{
				key: 'product-review',
				label: 'menu.product_review',
				to: '/product-review',
			},
			{
				key: 'product-question',
				label: 'menu.product_question',
				to: '/product-question',
			},
			{
				key: 'abuse-report',
				label: 'menu.abuse_report',
				to: '/abuse-report',
			},
		],
	},
];

export { menu };
