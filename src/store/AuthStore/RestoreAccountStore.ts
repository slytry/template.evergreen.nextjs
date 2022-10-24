import { types as t, Instance } from 'mobx-state-tree';

export const RestoreAccountStoreModel = t
	.model({
		email: t.optional(t.string, ''),
		tel: t.optional(t.string, ''),
	})
	.actions((self) => {
		const setEmail = (email) => {
			self.email = email;
		};
		const setTel = (tel) => {
			self.tel = tel;
		};
		return { setEmail, setTel };
	});

export type RegistrationStoreType = Instance<typeof RestoreAccountStoreModel>;
