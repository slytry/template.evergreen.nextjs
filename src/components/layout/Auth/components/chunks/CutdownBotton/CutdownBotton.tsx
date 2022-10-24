import cn from 'classnames/bind';

import { ActionButton, BaseButtonProps } from '@/base/Buttons';

import { useCountdown } from './useCountdown.hook';

import styles from './CutdownBotton.module.scss';

interface CutdownBottonProps extends BaseButtonProps {
	seconds?: number;
}

const cx = cn.bind(styles);

export const CutdownBotton = (props: CutdownBottonProps) => {
	const { timer, reset } = useCountdown(props.seconds);

	return timer === 0 ? (
		<ActionButton variant="blue" onPress={reset} className={cx('CutdownBotton__button')}>
			Отправить код еще раз
		</ActionButton>
	) : (
		<p className={cx('CutdownBotton__text')}>
			Повторная отправка кода будет доступна через 00:{timer}
		</p>
	);
};
