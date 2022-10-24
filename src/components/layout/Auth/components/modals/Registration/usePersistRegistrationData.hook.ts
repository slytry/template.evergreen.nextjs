import { useEffect } from 'react';

export const registrationKey = 'registrationState';

export const initialRegistrationState = {
	firstStep: {
		inn: '',
		name: '',
		phone: '+7',
		email: '',
	},
	secondStep: {
		firstName: '',
		middleName: '',
		lastName: '',
		password: '',
		confirmPassword: '',
		subscribe: true,
	},
};

export type TInitialRegistrationState = typeof initialRegistrationState;
export type TRegistrationStepOne = typeof initialRegistrationState['firstStep'];
export type TRegistrationStepTwo = typeof initialRegistrationState['secondStep'];

export const usePersistRegistrationFirstStep = (watcher, setData) => {
	useEffect(() => {
		const subscription = watcher((value) => {
			setData((p) => ({ ...p, firstStep: value }));
		});
		return () => subscription.unsubscribe();
	}, [watcher]);
};

export const usePersistRegistrationSecondStep = (watcher, setData) => {
	useEffect(() => {
		const subscription = watcher((value) => {
			setData((p) => ({ ...p, secondStep: value }));
		});
		return () => subscription.unsubscribe();
	}, [watcher]);
};
