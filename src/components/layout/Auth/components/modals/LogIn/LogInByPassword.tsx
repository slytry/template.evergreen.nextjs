import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames/bind';
import router from 'next/router';
import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Button } from '@/base/Buttons';
import { DialogContext } from '@/base/Dialog';
import { DialogContextValue } from '@/base/Dialog/DialogContext';
import { PasswordField } from '@/base/Fields';
import { TextFieldBase } from '@/base/Fields/TextFieldBase';
import { formErrorText } from '@/base/Fields/errorMassaage';
import { REGEX } from '@/base/Fields/normalization';
import { Form } from '@/base/Form';
import { pathes } from 'lib/constants/pathes';
import useEventListener from 'utils/useEventListener';

import { ButtonWithDivider, ModalWithTabs } from '../../chunks';

import styles from './LogIn.module.scss';

const cx = cn.bind(styles);

interface ILogInByPassword {
	email: string;
	password: string;
}

export function LogInByPassword({ setModal }) {
	const { onClose } = useContext(DialogContext) || ({} as DialogContextValue);

	const {
		required,
		registration: { email, password },
	} = formErrorText;
	const validationSchema = Yup.object().shape({
		email: Yup.string().required(required).email(email),
		password: Yup.string()
			.required(required)
			.min(6, password.toShort)
			.max(40, password.toLong)
			.matches(REGEX.password, password.toSimple),
	});
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<ILogInByPassword>({
		resolver: yupResolver(validationSchema),
		mode: 'onChange',
	});

	const goToPersonalAccount = () => {
		router.push(pathes.profile);
		onClose();
		setModal('logInByPassword');
	};

	const onSubmit = () => {
		handleSubmit((data) => {
			console.log(data);
		})();
		goToPersonalAccount();
	};

	const goToRegistration = () => {
		setModal('registrationFirstStep');
	};
	const goToForgotPassword = () => {
		setModal('forgotPassword');
	};
	const goToLogInByPhone = () => {
		setModal('logInByPhone');
	};

	const onEnter = (e) => {
		if (e.keyCode === 13 && isValid) {
			onSubmit();
		}
	};
	useEventListener('keyup', onEnter);

	return (
		<ModalWithTabs aria-label="Авторизация" withSmallPadding>
			<Form>
				<TextFieldBase label="Email" type="email" name="email" isDisabled />
				<TextFieldBase label="Password" name="password" isDisabled />
			</Form>

			<Form>
				<Controller
					control={control}
					name="email"
					render={({ field }) => (
						<TextFieldBase
							label="Email"
							type="email"
							autoComplete="email"
							validationState={errors.email ? 'invalid' : 'valid'}
							errorMessage={errors?.email?.message}
							{...field}
						/>
					)}
				/>
				<Controller
					control={control}
					name="password"
					render={({ field }) => (
						<PasswordField
							autoComplete="current-password"
							label="Password"
							validationState={errors.password ? 'invalid' : 'valid'}
							errorMessage={errors?.password?.message}
							{...field}
						/>
					)}
				/>
				<Button
					className={cx('LogIn__account-recovery')}
					onPress={goToForgotPassword}
					variant="white"
				>
					Забыли пароль?
				</Button>
				<Button
					className={cx('LogIn__enter-button')}
					onPress={onSubmit}
					variant="red"
					isDisabled={!isValid}
				>
					Войти
				</Button>
				<Button variant="blue" onPress={goToLogInByPhone}>
					Войти по номеру телефона
				</Button>

				<ButtonWithDivider onPress={goToRegistration} variant="chevron">
					Зарегистрироваться
				</ButtonWithDivider>
			</Form>
		</ModalWithTabs>
	);
}
