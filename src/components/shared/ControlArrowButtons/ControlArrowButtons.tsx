import cn from 'classnames/bind';
import { ReactElement } from 'react';

import styles from './ControlArrowButtons.module.scss';

const cx = cn.bind(styles);

interface ControlArrowButtonsProps {
	className?: string;
	variant?: 'transparent' | 'white';
	disabled?: boolean;
	onPrevClick?: () => void;
	onNextClick?: () => void;
}

const ControlArrowButtons = ({
	className,
	variant = 'white',
	disabled = false,
	onPrevClick,
	onNextClick,
}: ControlArrowButtonsProps): ReactElement => (
	<div className={cx('ControlArrowButtons')}>
		<button
			type="button"
			className={cx('ArrowButton', 'ArrowButton--left', className, [
				`ArrowButton--${variant}`,
			])}
			onClick={onPrevClick}
			disabled={disabled}
		>
			<span className={cx('ArrowButton__label')}>Назад</span>
		</button>
		<button
			type="button"
			className={cx('ArrowButton', 'ArrowButton--right', className, [
				`ArrowButton--${variant}`,
			])}
			onClick={onNextClick}
			disabled={disabled}
		>
			<span className={cx('ArrowButton__label')}>Вперед</span>
		</button>
	</div>
);
export { ControlArrowButtons };
