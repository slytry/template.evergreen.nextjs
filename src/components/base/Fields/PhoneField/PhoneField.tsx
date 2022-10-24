import cn from 'classnames/bind';
import React, { forwardRef } from 'react';
import { mergeProps, useFocusRing, useTextField } from 'react-aria';
import { Item } from 'react-stately';

import { Picker } from '@/base/Picker';
import { useObjectRef } from 'utils/useObjectRef';

import { PhoneFieldProps } from '..';
import { normalizePhone } from '../normalization';

import styles from './PhoneField.module.scss';

const cx = cn.bind(styles);

export const PhoneField = forwardRef<HTMLInputElement, PhoneFieldProps>(
	({ ...props }, forwardedRef) => {
		const {
			validationState,
			isDisabled,
			label,
			errorMessage,
			onChange: initOnChange,
			className,
		} = props;

		const handleTelChange = (value: string) => {
			const formatedTel = normalizePhone(value);
			initOnChange(formatedTel);
		};

		const inputRef = useObjectRef(forwardedRef);

		const { labelProps, inputProps, errorMessageProps } = useTextField(
			{ ...props, type: 'tel', onChange: handleTelChange },
			inputRef
		);

		const isInvalid = validationState === 'invalid';

		const { isFocused, focusProps, isFocusVisible } = useFocusRing({
			...props,
			isTextInput: true,
		});
		return (
			<div
				className={cx(
					'PhoneField',
					{
						'Textfield--invalid': isInvalid,
					},
					className
				)}
			>
				<div style={{ position: 'relative' }}>
					<Picker aria-label="Страна" variant="tel">
						<Item aria-label="Россия" key={0}>
							<img src="/icons/registration/flag-ru.svg" alt="Флаг России" />
						</Item>
						<Item aria-label="Казахстан" key={1}>
							<img src="/icons/registration/flag-kz.svg" alt="Флаг Казахстана" />
						</Item>
					</Picker>

					<label
						className={cx('PhoneField__label', {
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
						className={cx('PhoneField__input', {
							'is-hovered': isDisabled,
							'is-focusVisible': isFocusVisible,
						})}
					/>
				</div>
				{errorMessage && (
					<div {...errorMessageProps} className={cx('PhoneField__error')}>
						{errorMessage}
					</div>
				)}
			</div>
		);
	}
);
