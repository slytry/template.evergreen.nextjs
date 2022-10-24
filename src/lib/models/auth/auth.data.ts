export interface ISingUpRequest {
	inn: string;
	name: string;
	phone: string;
	email: string;
	firstName: string;
	middleName: string;
	lastName: string;
	password: {
		first: string;
		second: string;
	};

	subscribe: boolean;
}

export interface ILoginResponse {
	status: string;
	access_token: string;
}

export type TUser = typeof user;

export const user = {
	firstName: 'Константин',
	middleName: 'Константинович',
	lastName: 'Константинов',
	email: {
		value: 'konstantin@gmail.com',
		subscribe: true,
	},

	phone: {
		value: '79951354598',
		subscribe: true,
	},
};
