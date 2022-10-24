import cn from 'classnames/bind';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import { Button } from '@/base/Buttons';
import { Dialog } from '@/base/Dialog';
import { DialogContext, DialogContextValue } from '@/base/Dialog/DialogContext';
import { Heading } from '@/base/Heading';
import { VerifyCode } from '@/shared/VerifyCode';
import { pathes } from 'lib/constants/pathes';
import { authWohleSaleURLs } from 'lib/constants/urls';
import { useAuthStore } from 'store/AuthStore/AuthRootStore';

import styles from './Confirm.module.scss';

const cx = cn.bind(styles);

export function ConfirmEmail({ setModal }) {
	const { telOrEmail } = useAuthStore();

	const { onClose } = useContext(DialogContext) || ({} as DialogContextValue);
	const router = useRouter();

	const goToPersonalAccount = () => {
		router.push(pathes.profile);
		onClose();
		setModal('logInByPassword');
	};

	const goToWhyNotComingEmail = () => {
		setModal('whyNotComingEmail');
	};

	return (
		<Dialog aria-label="Подтверждение Email" center>
			<Heading className={cx('Confirm__heading')} level="2">
				Подтвердите Email
			</Heading>
			<p className={cx('Confirm__content')}>
				Мы отправили вам письмо на почту {telOrEmail}. Перейдите по ссылке в
				письме или введите код в поле ниже.
			</p>
			<VerifyCode
				length={4}
				className={cx('Confirm__inputs')}
				buttonText="Перейти в личный кабинет"
				onComplete={goToPersonalAccount}
				url={authWohleSaleURLs.CONFIRM}
			/>

			<Button onPress={goToWhyNotComingEmail} variant="blue">
				Не приходит код?
			</Button>
		</Dialog>
	);
}
