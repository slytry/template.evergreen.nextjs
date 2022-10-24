import { AriaCheckboxGroupItemProps } from '@react-types/checkbox';
import cn from 'classnames/bind';
import { ReactElement, useRef } from 'react';
import { useCheckboxGroupItem, useFocusRing, useHover } from 'react-aria';

import { useCheckboxGroupContext } from '../CheckboxGroup';

import styles from './Checkbox.module.scss';

const cx = cn.bind(styles);

type CheckboxProps = AriaCheckboxGroupItemProps;

const Checkbox = (props: CheckboxProps): ReactElement => {
	const { children } = props;

	const state = useCheckboxGroupContext();
	const ref = useRef<HTMLInputElement>();
	const { inputProps } = useCheckboxGroupItem(props, state, ref);

	const isDisabled = state.isDisabled || props.isDisabled;
	const isSelected = state.isSelected(props.value);

	const { hoverProps, isHovered } = useHover({ isDisabled });
	const { isFocusVisible, focusProps } = useFocusRing();

	return (
		<label className={cx('Checkbox')} {...hoverProps}>
			<input className={cx('Checkbox__input')} {...inputProps} {...focusProps} ref={ref} />

			<svg className={cx('Checkbox__svg')} aria-hidden="true">
				<rect
					className={cx(
						'Checkbox__mainRect',
						{ 'Checkbox__mainRect--checked': isSelected },
						{ 'Checkbox__mainRect--hover': isHovered },
						{ 'Checkbox__mainRect--disabled': isDisabled }
					)}
					x="4"
					y="4"
					rx="4"
					ry="4"
				/>

				<g
					className={cx('Checkbox__checkMark', {
						'Checkbox__checkMark--checked': isSelected,
					})}
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className={cx('Checkbox__arrow', {
							'Checkbox__arrow--disabled': isDisabled,
						})}
						d="M3.8457 8.64111L7.3457 12.1411L13.3457 5.14111"
					/>
				</g>

				<rect
					className={cx('Checkbox__focusVisible', {
						'Checkbox__focusVisible--inFocus': isFocusVisible,
					})}
					x="1"
					y="1"
					rx="6"
					ry="6"
				/>
			</svg>
			{children}
		</label>
	);
};

export { Checkbox };
