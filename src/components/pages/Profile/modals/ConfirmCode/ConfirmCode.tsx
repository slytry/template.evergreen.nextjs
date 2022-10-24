/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from 'classnames/bind';

import { ActionButton } from '@/base/Buttons';
import { Dialog } from '@/base/Dialog';
import { Heading } from '@/base/Heading';
import { ButtonWithDivider, CutdownBotton } from '@/layout/Auth/components/chunks';
import { VerifyCode } from '@/shared/VerifyCode';
import { authWohleSaleURLs } from 'lib/constants/urls';
import { useAuthStore } from 'store/AuthStore/AuthRootStore';

import styles from './ConfirmCode.module.scss';

const cx = cn.bind(styles);

export function ConfirmCode({ setModal }) {
	const { telOrEmail } = useAuthStore();

	const goToPersonalAccount = () => {
		setModal('newPhone');
	};

	const goToWhyNotComingSMS = () => {
		setModal('whyNotComingSMS');
	};

	return (
		<Dialog aria-label="Подтверждение по SMS" center withSmallPadding>
			<Heading className={cx('ConfirmCode__heading')} level="2">
				Введите код из СМС
			</Heading>
			<p className={cx('ConfirmCode__content')}>Мы отправили код на номер</p>
			<span className={cx('ConfirmCode__tel')}>
				{telOrEmail}
				{'  '}
				<ActionButton className={cx('ConfirmCode__change-number-button')} variant="blue">
					Изменить
				</ActionButton>
			</span>
			<VerifyCode
				length={4}
				className={cx('ConfirmCode__inputs')}
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
