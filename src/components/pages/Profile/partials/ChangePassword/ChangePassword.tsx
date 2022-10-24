/* eslint-disable @typescript-eslint/no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames/bind';
import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { ActionButton, Button } from '@/base/Buttons';
import { Dialog, DialogContext } from '@/base/Dialog';
import { PasswordField } from '@/base/Fields';
import { formErrorText } from '@/base/Fields/errorMassaage';
import { REGEX } from '@/base/Fields/normalization';
import { Heading } from '@/base/Heading';
import useEventListener from 'utils/useEventListener';

import styles from './ChangePassword.module.scss';

export interface IChangePassword {
	oldPassword: string;
	password: string;
	confirmPassword: string;
}

const initValues = {
	oldPassword: '',
	password: '',
	confirmPassword: '',
};

const cx = cn.bind(styles);

export const ChangePassword = () => {
	const { onClose } = useContext(DialogContext);

	const {
		required,
		registration: { confirmPassword, password },
	} = formErrorText;

	const validationSchema = Yup.object().shape({
		oldPassword: Yup.string()
			.required(required)
			.min(6, password.toShort)
			.max(40, password.toLong),
		password: Yup.string()
			.required(required)
			.min(6, password.toShort)
			.max(40, password.toLong)
			.matches(REGEX.password, password.toSimple),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], confirmPassword)
			.required(required),
	});

	const {
		handleSubmit,
		control,
		formState: { isValid, isDirty, errors },
	} = useForm<IChangePassword>({
		resolver: yupResolver(validationSchema),
		mode: 'onChange',
		defaultValues: initValues,
	});

	const onSubmit = () => {
		handleSubmit((data) => {
			console.log(data);
		})();
		onClose();
	};

	const onEnter = (e) => {
		if (e.keyCode === 13 && isValid) {
			onSubmit();
		}
	};

	useEventListener('keyup', onEnter);

	return (
		<Dialog center aria-label="Поменять имя">
			<Heading level="2">Изменить пароль</Heading>
			<p className={cx('ChangePassword__text')}>
				Пароль может содержать от 8 до 40 символов: латинские буквы, цифры и спецсимволы
			</p>
			<Controller
				name="oldPassword"
				control={control}
				render={({ field }) => (
					<PasswordField
						{...field}
						label="Старый пароль"
						errorMessage={errors?.oldPassword?.message}
						validationState={errors ? 'invalid' : 'valid'}
					/>
				)}
			/>
			<Controller
				name="password"
				control={control}
				render={({ field }) => (
					<PasswordField
						{...field}
						label="Новый пароль"
						errorMessage={errors?.password?.message}
						validationState={errors?.password ? 'invalid' : 'valid'}
					/>
				)}
			/>
			<Controller
				name="confirmPassword"
				control={control}
				render={({ field }) => (
					<PasswordField
						{...field}
						label="Повторите пароль"
						errorMessage={errors?.confirmPassword?.message}
						validationState={errors?.confirmPassword ? 'invalid' : 'valid'}
					/>
				)}
			/>
			<Button
				className={cx('ChangePassword__button')}
				variant="red"
				fullWidth
				isDisabled={!isValid}
				onPress={onSubmit}
			>
				Сохранить изменения
			</Button>
			<ActionButton variant="blue" onPress={onClose}>
				Отменить
			</ActionButton>
		</Dialog>
	);
};
