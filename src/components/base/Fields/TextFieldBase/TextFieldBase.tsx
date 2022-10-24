import cn from 'classnames/bind';
import React, { forwardRef } from 'react';
import { mergeProps, useFocusRing, useTextField } from 'react-aria';

import { useObjectRef } from 'utils/useObjectRef';

import { TextFieldBaseProps } from '..';

import styles from './TextFieldBase.module.scss';

const cx = cn.bind(styles);

export const TextFieldBase = forwardRef<HTMLInputElement, TextFieldBaseProps>(
	({ renderComponent, className, inputClassName, ...props }, forwardedRef) => {
		const { validationState, isDisabled, label, errorMessage, hiddenLabel, isReadOnly } = props;

		const inputRef = useObjectRef(forwardedRef);

		const { labelProps, inputProps, errorMessageProps } = useTextField(props, inputRef);

		const { isFocused, focusProps, isFocusVisible } = useFocusRing({
			...props,
			isTextInput: true,
		});

		return (
			<div className={cx('TextFieldBase', className)}>
				<label
					className={cx('TextFieldBase__label', {
						'is-filled': inputProps.value,
						'is-focused': isFocused,
						'is-label-hidden': hiddenLabel,
					})}
					{...labelProps}
				>
					{label}
				</label>

				<input
					{...mergeProps(inputProps, focusProps)}
					ref={inputRef}
					className={cx('TextFieldBase__input', inputClassName, {
						'is-hovered': isDisabled,
						'is-focusVisible': isFocusVisible,
						'TextFieldBase__input--invalid': validationState === 'invalid',
						'TextFieldBase__input--isReadOnly': isReadOnly && inputProps.value !== '',
					})}
				/>
				{renderComponent && renderComponent()}
				{errorMessage && (
					<div {...errorMessageProps} className={cx('TextFieldBase__error')}>
						{errorMessage}
					</div>
				)}
			</div>
		);
	}
);
