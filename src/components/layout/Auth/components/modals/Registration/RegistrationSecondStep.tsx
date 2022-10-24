import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import cn from 'classnames/bind';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Button } from '@/base/Buttons';
import { SimpleCheckbox } from '@/base/CheckboxGroup/SimpleCheckbox';
import { PasswordField } from '@/base/Fields';
import { TextFieldBase } from '@/base/Fields/TextFieldBase';
import { formErrorText } from '@/base/Fields/errorMassaage';
import { REGEX } from '@/base/Fields/normalization';
import { Form } from '@/base/Form';
import { Link } from '@/base/Link';
import { ISingUpRequest } from 'lib/models/auth';
import { signUpUser } from 'lib/services/user.service';
import { useAuthStore } from 'store/AuthStore/AuthRootStore';
import useEventListener from 'utils/useEventListener';
import useLocalStorage from 'utils/useLocalStorage';

import { ButtonWithDivider, ModalWithTabs } from '../../chunks';

import {
	initialRegistrationState,
	registrationKey,
	TRegistrationStepTwo,
	usePersistRegistrationSecondStep,
} from './usePersistRegistrationData.hook';

import styles from './Registration.module.scss';

const cx = cn.bind(styles);

export interface IRegistrationStepTwo {
	name: string;
	surname: string;
	patronymic: string;
	password: string;
	confirmPassword: string;
	acceptTerms: boolean;
}

export function RegistrationSecondStep({ setModal }) {
	const {
		required,
		registration: {
			confirmPassword: confirmPasswordErrorText,
			name: nameErrorText,
			password: passwordErrorText,
		},
	} = formErrorText;
	useAuthStore();
	const { setTelOrEmail } = useAuthStore();

	const validationSchema = Yup.object().shape({
		firstName: Yup.string().min(3, nameErrorText).required(required),
		middleName: Yup.string().min(3, nameErrorText).required(required),
		lastName: Yup.string().min(3, nameErrorText).required(required),
		password: Yup.string()
			.required(required)
			.min(6, passwordErrorText.toShort)
			.max(40, passwordErrorText.toLong)
			.matches(REGEX.password, passwordErrorText.toSimple),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], confirmPasswordErrorText)
			.required(required),
		subscribe: Yup.bool(),
	});

	const [formState, setFormState] = useLocalStorage(
		registrationKey,
		initialRegistrationState
	);

	const {
		handleSubmit,
		control,

		watch,
		formState: { errors, isValid },
	} = useForm<TRegistrationStepTwo>({
		resolver: yupResolver(validationSchema),
		mode: 'onChange',
		defaultValues: formState.secondStep,
	});

	usePersistRegistrationSecondStep(watch, setFormState);

	const goToLogin = () => {
		setModal('login');
	};

	const mutation = useMutation(
		async (formData: ISingUpRequest) => signUpUser(formData),
		{
			onSuccess: (data) => {
				console.log(data);

				// setFormState(initialRegistrationState);
				// setModal('confirmEmail');
			},
			onError: (error) => {
				console.log('Error', error);
			},
		}
	);

	const goToConfirmEmail = () => {
		handleSubmit(
			({
				subscribe,
				firstName,
				lastName,
				middleName,
				password,
				confirmPassword,
			}) => {
				const formData = {
					...formState.firstStep,
					firstName,
					lastName,
					middleName,
					subscribe,
					password: {
						first: password,
						second: confirmPassword,
					},
				};
				setTelOrEmail(formState.firstStep.email);
				mutation.mutate(formData);
			}
		)();
	};

	const onEnter = (e) => {
		if (e.keyCode === 13 && isValid) {
			goToConfirmEmail();
		}
	};
	useEventListener('keyup', onEnter);

	return (
		<ModalWithTabs aria-label="Регистрация первый шаг" withSmallPadding>
			<Form>
				<TextFieldBase label="Email" type="email" name="email" isDisabled />
				<TextFieldBase label="Password" name="password" isDisabled />
			</Form>
			<>
				<p className={cx('Registration__step')}>Шаг 2 из 2</p>
				<Form>
					<Controller
						name="firstName"
						control={control}
						render={({ field }) => (
							<TextFieldBase
								{...field}
								label="Имя"
								type="text"
								errorMessage={errors?.firstName?.message}
								validationState={errors?.firstName ? 'invalid' : 'valid'}
							/>
						)}
					/>
					<Controller
						name="lastName"
						control={control}
						render={({ field }) => (
							<TextFieldBase
								{...field}
								label="Фамилия"
								type="text"
								errorMessage={errors?.lastName?.message}
								validationState={errors?.lastName ? 'invalid' : 'valid'}
							/>
						)}
					/>
					<Controller
						name="middleName"
						control={control}
						render={({ field }) => (
							<TextFieldBase
								{...field}
								label="Отчество"
								type="text"
								errorMessage={errors?.middleName?.message}
								validationState={errors?.middleName ? 'invalid' : 'valid'}
							/>
						)}
					/>
					<Controller
						name="password"
						control={control}
						render={({ field }) => (
							<PasswordField
								{...field}
								autoComplete="new-password"
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
								autoComplete="new-password"
								label="Повторите пароль"
								errorMessage={errors?.confirmPassword?.message}
								validationState={
									errors?.confirmPassword ? 'invalid' : 'valid'
								}
							/>
						)}
					/>
					<Controller
						name="subscribe"
						control={control}
						render={({ field }) => (
							<SimpleCheckbox
								ref={field.ref}
								isSelected={field.value}
								onBlur={field.onBlur}
								onChange={field.onChange}
								value="subscribe"
							>
								<span className={cx('Registration__pass')}>
									Подписаться на рассылку спецпредложений
								</span>
							</SimpleCheckbox>
						)}
					/>

					<p className={cx('Registration__offer')}>
						Продолжая, вы соглашаетесь с{' '}
						<Link target="_blank" href="https://vertical.ru/privacy/">
							<a> политикой конфиденциальности</a>
						</Link>{' '}
						и{' '}
						<Link target="_blank" href="https://vertical.ru/oferta/">
							<a> условиями оферты</a>
						</Link>
					</p>
					<Button
						className={cx('Registration__enter')}
						onPress={goToConfirmEmail}
						variant="red"
						isDisabled={!isValid}
					>
						Зарегистрироваться
					</Button>
					<ButtonWithDivider onPress={goToLogin} variant="chevron">
						Войти в аккаунт
					</ButtonWithDivider>
				</Form>{' '}
			</>
		</ModalWithTabs>
	);
}
