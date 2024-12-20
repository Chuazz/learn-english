type Login = {
	email: string;
	password: string;
};

type LoginResponse = {
	access_token: string;
	expired_at: number;
};

export type { LoginResponse, Login };
