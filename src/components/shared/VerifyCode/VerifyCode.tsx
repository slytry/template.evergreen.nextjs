/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable jsx-a11y/no-autofocus */

import { useMutation } from '@tanstack/react-query';
import cn from 'classnames/bind';
import React, { useState, useRef } from 'react';

import { Button } from '@/base/Buttons';
import { formErrorText } from '@/base/Fields/errorMassaage';
import { http } from 'lib/services/http/http';
import useEventListener from 'utils/useEventListener';

import { VerifyCodeProps } from '.';

import styles from './VerifyCode.module.scss';

const cx = cn.bind(styles);

export const VerifyCode = ({
	length,
	className,
	onComplete,
	url,
	buttonText = 'Отправить',
}: VerifyCodeProps) => {
	const { confirm } = formErrorText;
	const { isLoading, mutate, isError } = useMutation(
		async () => await http.post(url, { code: code.join('') }),
		{
			onSuccess: () => {
				onComplete();
			},
		}
	);
	const [code, setCode] = useState([...Array(length)].map(() => ''));
	const inputs = useRef<(HTMLInputElement | null)[]>([]);
	const buttonRef = useRef(null);

	const processInput = (e, slot) => {
		const num = e.target.value;
		if (/[^0-9]/.test(num)) return;
		const newCode = [...code];
		newCode[slot] = num;
		setCode(newCode);
		if (slot !== length - 1) {
			inputs.current[slot + 1].focus();
		}
		if (newCode.every((num) => num !== '')) {
			// onComplete(newCode.join(''));
			// buttonRef.current.focus();
		}
	};

	const onEnter = (e) => {
		if (e.keyCode === 13 && !code.includes('')) {
			mutate();
		}
	};

	useEventListener('keyup', onEnter);

	const onKeyUp = (e, slot) => {
		if (e.keyCode === 8 && !code[slot] && slot !== 0) {
			const newCode = [...code];
			newCode[slot - 1] = '';
			setCode(newCode);
			inputs.current[slot - 1].focus();
		}
	};
	const handlePress = () => {
		mutate();
	};
	return (
		<form className={cx('VerifyCode', className)}>
			<div className={cx('InputCode')}>
				{code.map((num, idx) => (
					<input
						className={cx('InputCode__input', 'VerifyCode__inputs', {
							'InputCode__input--error': isError,
						})}
						key={idx}
						type="text"
						inputMode="numeric"
						maxLength={1}
						value={num}
						autoFocus={!code[0].length && idx === 0}
						readOnly={isLoading}
						onChange={(e) => processInput(e, idx)}
						onKeyUp={(e) => onKeyUp(e, idx)}
						ref={(ref) => inputs.current.push(ref)}
					/>
				))}
			</div>
			{isError && <p className={cx('VerifyCode__error')}>{confirm}</p>}
			<Button
				ref={buttonRef}
				className={cx('VerifyCode__button')}
				variant="red"
				onPress={handlePress}
				isDisabled={code.includes('')}
			>
				{buttonText}
			</Button>
		</form>
	);
};
