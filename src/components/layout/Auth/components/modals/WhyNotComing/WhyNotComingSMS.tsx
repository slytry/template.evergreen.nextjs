import cn from 'classnames/bind';

import { Button } from '@/base/Buttons';
import { Dialog } from '@/base/Dialog';
import { Heading } from '@/base/Heading';

import styles from './WhyNotComing.module.scss';

const cx = cn.bind(styles);

export function WhyNotComingSMS({ setModal }) {
	const goToLogInByPhone = () => {
		setModal('logInByPhone');
	};

	return (
		<Dialog aria-label="Почему не приходит смс?">
			<Heading className={cx('WhyNotComing__heading')} level="1">
				Почему не приходит смс?
			</Heading>
			<ol className={cx('WhyNotComing__list')}>
				<li>Проверьте, нет ли ошибки в номере телефона.</li>
				<li>Находитесь не в зоне действия сети вашего мобильного оператора.</li>
				<li>Если СМС нет 20 минут, попробуйте получить код ещё раз.</li>
			</ol>

			<Button onPress={goToLogInByPhone} variant="red">
				Вернуться к номеру
			</Button>
		</Dialog>
	);
}
