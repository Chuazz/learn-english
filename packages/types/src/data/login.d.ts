type Login = {
	email: string;
	password: string;
};

type LoginResponse = {
	access_token: string;
	expires: number;
	refresh_token: string;
};

export type { LoginResponse, Login };
