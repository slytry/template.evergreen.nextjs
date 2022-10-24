import { FocusableRef } from '@react-types/shared';
import cn from 'classnames/bind';
import { forwardRef, useRef } from 'react';
import { useFocusRing, useHover, useRadio } from 'react-aria';

import { useFocusableRef } from 'utils/useDOMRef';

import { RadioProps } from './Radio.types';
import { useRadioProvider } from './context';

import styles from './Radio.module.scss';

const cx = cn.bind(styles);

function Radio(props: RadioProps, ref: FocusableRef<HTMLLabelElement>) {
	const { children, autoFocus } = props;
	const { isFocusVisible, focusProps } = useFocusRing({ autoFocus });
	const { hoverProps, isHovered } = useHover({ isDisabled: false });
	const inputRef = useRef<HTMLInputElement>(null);
	const domRef = useFocusableRef(ref, inputRef);

	const radioGroupProps = useRadioProvider();
	const { state, variant } = radioGroupProps;

	const { inputProps } = useRadio(
		{
			...props,
			...radioGroupProps,
		},
		state,
		inputRef
	);

	return (
		<label
			{...hoverProps}
			ref={domRef}
			className={cx('Radio', `Radio--${variant}`, { 'Radio--hovered': isHovered })}
		>
			<input {...inputProps} {...focusProps} ref={inputRef} className={cx('Radio__input')} />

			{children && (
				<div
					className={cx('Radio__label', `Radio__label--${variant}`, {
						[`Radio__label--${variant}-selected`]: inputProps.checked,
						Radio__focusRing: isFocusVisible,
					})}
				>
					{children}
				</div>
			)}
		</label>
	);
}

const _Radio = forwardRef(Radio);
export { _Radio as Radio };
