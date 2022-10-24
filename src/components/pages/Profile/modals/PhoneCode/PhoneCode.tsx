import cn from 'classnames/bind';

import { ActionButton, Button } from '@/base/Buttons';
import { Dialog } from '@/base/Dialog';
import { Heading } from '@/base/Heading';
import useEventListener from 'utils/useEventListener';

import { TSetModal } from '../..';

import styles from './PhoneCode.module.scss';

const cx = cn.bind(styles);

interface PhoneCodeProps {
	setModal: TSetModal;
}

export const PhoneCode = ({ setModal }: PhoneCodeProps) => {
	const onEnter = (e) => {
		if (e.keyCode === 13) {
			goNextModal();
		}
	};

	useEventListener('keyup', onEnter);
	const goNextModal = () => {
		setModal('confirmSMS');
	};
	return (
		<Dialog center aria-label="Поменять телефон" withSmallPadding>
			<Heading level="2">Изменить номер</Heading>
			<p className={cx('PhoneCode__text')}>
				Мы отправим код подтверждения на ваш текущий номер +7 995 135-45-98
			</p>
			<Button
				className={cx('PhoneCode__mainButton')}
				variant="red"
				fullWidth
				onPress={goNextModal}
			>
				Получить код
			</Button>
			<ActionButton variant="blue" className={cx('PhoneCode__secButton')}>
				Нет доступа к номеру
			</ActionButton>
		</Dialog>
	);
};
