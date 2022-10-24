import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import cn from 'classnames/bind';
import { FocusEvent } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Button } from '@/base/Buttons';
import { PhoneField } from '@/base/Fields/PhoneField/PhoneField';
import { TextFieldBase } from '@/base/Fields/TextFieldBase';
import { TextFieldWithHelp } from '@/base/Fields/TextFieldWithHelp';
import { formErrorText } from '@/base/Fields/errorMassaage';
import { normalizeNumber } from '@/base/Fields/normalization';
import { Form } from '@/base/Form';
import { ICompanyName, IQueryString } from 'lib/models/auth';
import { fetchCompanyName } from 'lib/services/http/http-dadata';
import useEventListener from 'utils/useEventListener';
import useLocalStorage from 'utils/useLocalStorage';

import { ButtonWithDivider, ModalWithTabs } from '../../chunks';

import {
	initialRegistrationState,
	registrationKey,
	usePersistRegistrationFirstStep,
	TRegistrationStepOne,
} from './usePersistRegistrationData.hook';

import styles from './Registration.module.scss';

const cx = cn.bind(styles);

const helpText = (
	<>
		Узнать свой ИНН можно на сайте{' '}
		<a
			href="https://service.nalog.ru/static/personal-data.html?svc=inn&from=%2Finn.do"
			className={cx('TextFieldWithHelp__link')}
		>
			ФНС России
		</a>
	</>
);

export function RegistrationFirstStep({ setModal }) {
	const {
		required,
		registration: { email, inn, tel },
	} = formErrorText;

	const validationSchema = Yup.object().shape({
		inn: Yup.string().min(10, inn).required(required),
		name: Yup.string().required('Введите правильно ИНН'),
		email: Yup.string().required(required).email(email),
		phone: Yup.string().required(required).min(18, tel),
	});

	const [formData, setFormState] = useLocalStorage(
		registrationKey,
		initialRegistrationState
	);

	const {
		handleSubmit,
		control,
		setValue,
		watch,
		trigger,
		formState: { errors, isValid },
	} = useForm<TRegistrationStepOne>({
		resolver: yupResolver(validationSchema),
		mode: 'onChange',
		defaultValues: formData.firstStep,
	});

	usePersistRegistrationFirstStep(watch, setFormState);

	const mutation: UseMutationResult<ICompanyName, Error, IQueryString> = useMutation<
		ICompanyName,
		Error,
		IQueryString
	>(async ({ query }) => fetchCompanyName(query), {
		onSuccess: (data) => {
			setValue('name', data.suggestions[0].value, { shouldValidate: true });
		},
		onError: () => {
			setValue('name', '', { shouldValidate: true });
			trigger('inn');
		},
	});

	const handleBlur = (e: FocusEvent) => {
		const target = e.target as typeof e.target & {
			value: string;
		};
		mutation.mutate({ query: target.value });
	};

	const onSubmit = () => {
		handleSubmit((data) => {
			console.log(data);
		})();
		setModal('registrationSecondStep');
	};
	const goToLogin = () => {
		setModal('logInByPassword');
	};

	const onEnter = (e) => {
		if (e.keyCode === 13 && isValid) {
			onSubmit();
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
				<p className={cx('Registration__step')}>Шаг 1 из 2</p>
				<Form>
					<Controller
						name="inn"
						control={control}
						render={({ field, field: { onChange } }) => (
							<TextFieldBase
								{...field}
								onChange={(v) => {
									onChange(normalizeNumber(v));
								}}
								onBlur={handleBlur}
								label="ИНН"
								type="text"
								errorMessage={errors?.inn?.message}
								validationState={errors?.inn ? 'invalid' : 'valid'}
							/>
						)}
					/>

					<Controller
						name="name"
						control={control}
						render={({ field }) => (
							<TextFieldWithHelp
								{...field}
								label="Наименование организации / ИП"
								type="text"
								isReadOnly
								helpText={helpText}
								validationState={errors?.name ? 'invalid' : 'valid'}
								errorMessage={errors?.name?.message}
							/>
						)}
					/>

					<Controller
						name="phone"
						control={control}
						render={({ field, fieldState: { error } }) => (
							<PhoneField
								{...field}
								label="Телефон"
								type="tel"
								validationState={error ? 'invalid' : 'valid'}
								errorMessage={error?.message}
							/>
						)}
					/>

					<Controller
						name="email"
						control={control}
						render={({ field, fieldState: { error } }) => (
							<TextFieldBase
								{...field}
								label="Email"
								type="email"
								autoComplete="email"
								validationState={error ? 'invalid' : 'valid'}
								errorMessage={error?.message}
							/>
						)}
					/>

					<Button
						className={cx('Registration__enter')}
						variant="red"
						onPress={onSubmit}
						isDisabled={!isValid}
					>
						Далее
					</Button>

					<ButtonWithDivider onPress={goToLogin} variant="chevron">
						Войти в аккаунт
					</ButtonWithDivider>
				</Form>
			</>
		</ModalWithTabs>
	);
}
