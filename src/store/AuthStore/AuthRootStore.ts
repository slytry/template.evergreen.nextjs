import { Instance, types as t } from 'mobx-state-tree';

const modals = t.enumeration([
	'logInByPassword',
	'logInByPhone',
	'registrationFirstStep',
	'registrationSecondStep',
	'confirmEmail',
	'whyNotComingEmail',
	'confirmSMS',
	'whyNotComingSMS',
	'forgotPassword',
	'successfulSendingMail',
	'login',
]);

export type TModals = Instance<typeof modals>;
const telOrEmail = t.optional(t.string, '');

const AuthRootStoreModel = t
	.model('AuthRootStore', {
		currentModalWindow: t.optional(modals, 'logInByPassword'),
		telOrEmail,
	})
	.actions((self) => {
		const updateModal = (newWindow: TModals) => {
			self.currentModalWindow = newWindow;
		};
		const setTelOrEmail = (value: string) => {
			self.telOrEmail = value;
		};

		return { updateModal, setTelOrEmail };
	});

let _AuthStore: AuthRootStoreType;

export const useAuthStore = () => {
	if (typeof window !== 'undefined') {
		if (!_AuthStore) {
			_AuthStore = AuthRootStoreModel.create();
		}
	}

	return _AuthStore;
};

export type AuthRootStoreType = Instance<typeof AuthRootStoreModel>;
