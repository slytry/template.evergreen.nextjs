/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from 'classnames/bind';
import router from 'next/router';
import { useContext } from 'react';

import { ActionButton } from '@/base/Buttons';
import { Dialog, DialogContext } from '@/base/Dialog';
import { DialogContextValue } from '@/base/Dialog/DialogContext';
import { Heading } from '@/base/Heading';
import { VerifyCode } from '@/shared/VerifyCode';
import { pathes } from 'lib/constants/pathes';
import { authWohleSaleURLs } from 'lib/constants/urls';
import { useAuthStore } from 'store/AuthStore/AuthRootStore';

import { ButtonWithDivider, CutdownBotton } from '../../chunks';

import styles from './Confirm.module.scss';

const cx = cn.bind(styles);

export function ConfirmSMS({ setModal }) {
	const { telOrEmail } = useAuthStore();

	const { onClose } = useContext(DialogContext) || ({} as DialogContextValue);

	const goToPersonalAccount = () => {
		router.push(pathes.profile);
		onClose();
		setModal('logInByPassword');
	};

	const goToWhyNotComingSMS = () => {
		setModal('whyNotComingSMS');
	};

	return (
		<Dialog aria-label="Подтверждение по SMS" center withSmallPadding>
			<Heading className={cx('Confirm__heading')} level="2">
				Введите код из СМС
			</Heading>
			<p className={cx('Confirm__content')}>Мы отправили код на номер</p>
			<p className={cx('Confirm__tel')}>
				{telOrEmail}
				{'  '}
				<ActionButton
					className={cx('Confirm__change-number-button')}
					variant="blue"
				>
					Изменить
				</ActionButton>
			</p>
			<VerifyCode
				length={4}
				className={cx('Confirm__inputs')}
				onComplete={goToPersonalAccount}
				url={authWohleSaleURLs.CONFIRM}
			/>
			<CutdownBotton />
			<ButtonWithDivider onPress={goToWhyNotComingSMS} variant="blue">
				Не приходит код?
			</ButtonWithDivider>
		</Dialog>
	);
}
