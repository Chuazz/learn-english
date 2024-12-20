type ApiResponseMeta = {
	current_page: number;
	limit: number;
	next_page: number;
	previous_page?: number | null;
	total_item: number;
	total_page: number;
};

type ApiResponse<T = null> = {
	data: T;
	message: string;
	success: boolean;
	meta: ApiResponseMeta;
} | null;

export type { ApiResponse };
