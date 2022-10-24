import { ToggleProps } from '@react-types/checkbox';
import cn from 'classnames/bind';
import { ReactElement, useRef } from 'react';
import { useCheckbox, useFocusRing } from 'react-aria';
import { useToggleState } from 'react-stately';

import styles from './ToggleSwitch.module.scss';

const cx = cn.bind(styles);

interface ToggleSwitchProps extends ToggleProps {
	label?: string;
	className?: string;
}

const ToggleSwitch = (props: ToggleSwitchProps): ReactElement => {
	const { children, className } = props;
	const state = useToggleState(props);
	const ref = useRef();
	const { inputProps } = useCheckbox(props, state, ref);
	const { isFocusVisible, focusProps } = useFocusRing();

	return (
		<label
			className={cx(className, 'ToggleSwitch', {
				'ToggleSwitch--focus': isFocusVisible,
			})}
		>
			<span className={cx('ToggleSwitch__switch')}>
				<span
					className={cx('ToggleSwitch__switchBase', {
						'ToggleSwitch__switchBase--selected': state.isSelected,
					})}
				>
					<span className={cx('ToggleSwitch__thumb')} />
					<input
						{...inputProps}
						{...focusProps}
						ref={ref}
						className={cx('ToggleSwitch__input')}
					/>
				</span>
				<span
					className={cx('ToggleSwitch__track', {
						'ToggleSwitch__track--selected': state.isSelected,
					})}
				/>
			</span>

			<span className={cx('ToggleSwitch__label')}>{children}</span>
		</label>
	);
};

export { ToggleSwitch };
