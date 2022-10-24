/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react';

import { FadeSwitchTransition } from '@/shared/FadeSwitchTransition';

import { ConfirmCode, NewPhone, PhoneCode, SuccessChange } from '../../modals';

export const ChangePhone = () => {
	const [currentModalWindow, updateModal] = useState('phoneCode');

	const CurrentComponent = () => {
		switch (currentModalWindow) {
			case 'phoneCode':
				return <PhoneCode setModal={updateModal} />;
			case 'confirmSMS':
				return <ConfirmCode setModal={updateModal} />;
			case 'newPhone':
				return <NewPhone setModal={updateModal} />;
			case 'successChange':
				return <SuccessChange type="phone" />;

			default:
				throw new Error(`Модальное окно "${currentModalWindow}" не существует`);
		}
	};
	return (
		<FadeSwitchTransition formState={currentModalWindow}>
			<CurrentComponent />
		</FadeSwitchTransition>
	);
};
