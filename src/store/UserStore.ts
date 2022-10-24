import { types as t, Instance } from 'mobx-state-tree';

const User = t.model('User', {
	name: t.string,
	email: t.string,
	role: t.string,
	_id: t.string,
	id: t.string,
	crearedAt: t.string,
	updateAt: t.string,
	__v: t.number,
});

export const UserStoreModel = t
	.model('UserStoreModel', {
		currentUser: t.maybe(t.reference(t.late(() => User))),
		errors: t.array(t.string),
	})
	.actions((self) => ({
		setCurrentUser: (user) => {
			self.currentUser = user;
		},
	}));

type UserType = Instance<typeof UserStoreModel>;
export interface UserStore extends UserType {}
