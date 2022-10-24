import cn from 'classnames/bind';
import { forwardRef } from 'react';
import { useCheckbox, useFocusRing, useHover } from 'react-aria';
import { useToggleState } from 'react-stately';

import { useObjectRef } from 'utils/useObjectRef';

import { SimpleCheckboxProps } from '.';

import styles from './SimpleCheckbox.module.scss';

const cx = cn.bind(styles);

export const SimpleCheckbox = forwardRef<HTMLInputElement, SimpleCheckboxProps>(
	(props, forwardedRef) => {
		const { children, isDisabled } = props;

		const state = useToggleState(props);
		const inputRef = useObjectRef(forwardedRef);

		const { inputProps } = useCheckbox(props, state, inputRef);
		const { isFocusVisible, focusProps } = useFocusRing();
		const isSelected = state.isSelected && !props.isIndeterminate;

		const { hoverProps, isHovered } = useHover({ isDisabled });

		return (
			<label className={cx('Checkbox')} {...hoverProps}>
				<input
					className={cx('Checkbox__input')}
					{...inputProps}
					{...focusProps}
					ref={inputRef}
				/>

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
	}
);
