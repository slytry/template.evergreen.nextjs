/* eslint-disable react/no-unstable-nested-components */
import { useState } from 'react';

import { FadeSwitchTransition } from '@/shared/FadeSwitchTransition';

import { NewEmail, SuccessChange } from '../../modals';

export const ChangeEmail = () => {
	const [currentModalWindow, updateModal] = useState('phoneCode');

	const CurrentComponent = () => {
		switch (currentModalWindow) {
			case 'phoneCode':
				return <NewEmail setModal={updateModal} />;
			case 'successChange':
				return <SuccessChange type="email" />;

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
