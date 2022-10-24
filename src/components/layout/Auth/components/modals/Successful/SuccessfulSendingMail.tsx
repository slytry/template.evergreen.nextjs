import cn from 'classnames/bind';
import { useContext } from 'react';

import { Button } from '@/base/Buttons';
import { Dialog, DialogContext } from '@/base/Dialog';
import { Heading } from '@/base/Heading';
import { useAuthStore } from 'store/AuthStore/AuthRootStore';
import useEventListener from 'utils/useEventListener';

import { CutdownBotton } from '../../chunks';

import SuccessfulSVG from 'public/icons/registration/successful-sending.svg';

import styles from './SuccessfulSendingMail.module.scss';

const cx = cn.bind(styles);
export function SuccessfulSendingMail({ setModal }) {
	const { onClose } = useContext(DialogContext);

	const { telOrEmail } = useAuthStore();

	const handlePress = () => {
		setModal('logInByPassword');
		onClose();
	};

	const onEnter = (e) => {
		if (e.keyCode === 13) {
			handlePress();
		}
	};
	useEventListener('keyup', onEnter);

	return (
		<Dialog aria-label="Подтверждение по Email" center>
			<SuccessfulSVG className={cx('SuccessfulSendingMail__icon')} />
			<Heading className={cx('SuccessfulSendingMail__heading')} level="2">
				Письмо отправлено
			</Heading>
			<p className={cx('SuccessfulSendingMail__content')}>
				Мы отправили вам письмо на почту{' '}
				<span className={cx('SuccessfulSendingMail__email')}>{telOrEmail}</span>. Перейдите
				по ссылке в письме для восстановления пароля.
			</p>
			<Button
				className={cx('SuccessfulSendingMail__enter-button')}
				onPress={handlePress}
				variant="red"
			>
				Понятно
			</Button>
			<CutdownBotton />
		</Dialog>
	);
}
