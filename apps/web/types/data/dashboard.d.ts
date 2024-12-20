type DashboardReport = {
	group_type: 'week' | 'month' | 'year';
	group_value: string;
	id: number;
	key:
		| 'count_new_users'
		| 'count_orders'
		| 'count_products'
		| 'count_products'
		| 'revenue'
		| 'count_cancel_orders';
	previous_value: number;
	report_from: string;
	report_to: string;
	value: number;
};

type DashboardReportProduct = {
	category_name: string;
	id: number;
	image: string;
	internal_code: string;
	name: string;
	options: null;
	price: number;
	product_category_id: number;
};

type dashboardTopProducts = DashboardReport & {
	product: DashboardReportProduct;
};

export type { DashboardReport, dashboardTopProducts };
