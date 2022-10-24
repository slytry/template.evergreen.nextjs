import cn from 'classnames/bind';

import { BaseButtonProps, Button } from '@/base/Buttons';

import styles from './ButtonWithDivider.module.scss';

interface ButtonWithDividerProps extends BaseButtonProps {}

const cx = cn.bind(styles);

export const ButtonWithDivider = (props: ButtonWithDividerProps) => {
	const { children, variant, onPress } = props;

	return (
		<>
			<div className={cx('ButtonWithDivider__divider')} />

			<Button onPress={onPress} className={cx('ButtonWithDivider__button')} variant={variant}>
				{children}
			</Button>
		</>
		// </div>
	);
};
