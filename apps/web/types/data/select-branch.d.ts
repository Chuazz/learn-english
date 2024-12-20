type SelectBranchUser = {
	id: number;
	name: string;
	avatar: string;
	gender: string;
	date_of_birth: string;
	email_verified_at: string;
	phone_number_verified: number;
	presenter_id: number;
	created_at: string;
};

type SelectBranchCompany = {
	id: number;
	short_name: string;
	name: string;
	name_en: string;
	logo: string;
	address: string;
	status: string;
	created_at: string;
	updated_at: string;
};

type SelectBranchResponse = {
	branch_token: string;
	expired_at: number;
	user: SelectBranchUser;
	company_info: SelectBranchCompany;
	permissions: string[];
};

export type { SelectBranchResponse, SelectBranchCompany, SelectBranchUser };
