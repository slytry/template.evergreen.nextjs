import cn from 'classnames/bind';
import { useContext } from 'react';

import { Button } from '@/base/Buttons';
import { Dialog, DialogContext } from '@/base/Dialog';
import { Heading } from '@/base/Heading';
import useEventListener from 'utils/useEventListener';

import SuccessfulSVG from 'public/icons/registration/successful-sending.svg';

import styles from './SuccessChange.module.scss';

const cx = cn.bind(styles);

export interface SuccessChangeProps {
	type: 'email' | 'phone';
}

export const SuccessChange = ({ type }) => {
	const { onClose } = useContext(DialogContext);
	const heading =
		type === 'email' ? 'Заявка на смену Email принята' : 'Заявка на смену телефона принята';
	const text =
		type === 'email'
			? 'Мы сообщим Вам когда ваша почта изменится'
			: 'Мы сообщим Вам когда ваш номер изменится';

	const pressHandler = () => {
		onClose();
	};

	const onEnter = (e) => {
		if (e.keyCode === 13) {
			onClose();
		}
	};

	useEventListener('keyup', onEnter);

	return (
		<Dialog center aria-label="Поменять телефон">
			<SuccessfulSVG />
			<Heading className={cx('SuccessChange__heading')} level="2">
				{heading}
			</Heading>
			<p className={cx('SuccessChange__text')}>{text}</p>
			<Button
				className={cx('SuccessChange__button')}
				variant="red"
				fullWidth
				onPress={pressHandler}
			>
				Понятно
			</Button>
		</Dialog>
	);
};
