import cn from 'classnames/bind';
import { forwardRef } from 'react';
import { mergeProps, useFocusRing, useTextField } from 'react-aria';

import { useObjectRef } from 'utils/useObjectRef';

import { PasswordFieldProps } from '..';
import { Button } from '../../Buttons';

import { useInputType } from './useInputType.hook';

import styles from './PasswordField.module.scss';

const cx = cn.bind(styles);

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
	({ ...props }, forwardedRef) => {
		const { validationState, isDisabled, label, errorMessage } = props;

		const inputRef = useObjectRef(forwardedRef);
		const { currentType, currentSvg, togglePasswordVisiblity } = useInputType({
			type: 'password',
		});

		const { labelProps, inputProps, errorMessageProps } = useTextField(
			{ ...props, type: currentType },
			inputRef
		);

		const isInvalid = validationState === 'invalid';

		const { isFocused, focusProps, isFocusVisible } = useFocusRing({
			...props,
			isTextInput: true,
		});
		return (
			<div
				className={cx('PasswordField', {
					'PasswordField--invalid': isInvalid,
				})}
			>
				<label
					className={cx('PasswordField__label', {
						'is-filled': inputProps.value,
						'is-focused': isFocused,
					})}
					{...labelProps}
				>
					{label}
				</label>

				<input
					{...mergeProps(inputProps, focusProps)}
					ref={inputRef}
					className={cx('PasswordField__input', {
						'is-hovered': isDisabled,
						'is-focusVisible': isFocusVisible,
					})}
				/>
				{errorMessage && (
					<div {...errorMessageProps} className={cx('PasswordField__error')}>
						{errorMessage}
					</div>
				)}

				<Button
					onPress={togglePasswordVisiblity}
					variant="white"
					className={cx('PasswordField__toggleVisability')}
				>
					{currentSvg}
				</Button>
			</div>
		);
	}
);
