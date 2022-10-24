import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames/bind';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Button } from '@/base/Buttons';
import { PhoneField } from '@/base/Fields/PhoneField/PhoneField';
import { formErrorText } from '@/base/Fields/errorMassaage';
import { Form } from '@/base/Form';
import { useAuthStore } from 'store/AuthStore/AuthRootStore';

import { ButtonWithDivider, ModalWithTabs } from '../../chunks';

import styles from './LogIn.module.scss';

const cx = cn.bind(styles);
export interface ILogInByPhone {
	tel: string;
}

export function LogInByPhone({ setModal }) {
	const { setTelOrEmail } = useAuthStore();

	const {
		required,
		registration: { tel },
	} = formErrorText;

	const validationSchema = Yup.object().shape({
		tel: Yup.string().required(required).min(18, tel),
	});

	const {
		control,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm<ILogInByPhone>({
		defaultValues: { tel: '+7' },
		resolver: yupResolver(validationSchema),
		mode: 'onChange',
	});

	const goToRegistration = () => {
		setModal('registrationFirstStep');
	};
	const goToLogInByPassword = () => {
		setModal('logInByPassword');
	};

	const onSubmit = () => {
		handleSubmit((data) => {
			setTelOrEmail(data.tel);
		})();
		setModal('confirmSMS');
	};

	return (
		<ModalWithTabs aria-label="Авторизация" withSmallPadding>
			<Form>
				<PhoneField label="Телефон" type="tel" name="tel" />

				<Button className={cx('LogIn__enter-button')} variant="red">
					Войти
				</Button>

				<Button variant="blue" onPress={goToLogInByPassword}>
					Войти по почте
				</Button>

				<ButtonWithDivider onPress={goToRegistration} variant="chevron">
					Зарегистрироваться
				</ButtonWithDivider>
			</Form>

			<Form>
				<Controller
					control={control}
					name="tel"
					render={({ field }) => (
						<PhoneField
							{...field}
							label="Телефон"
							errorMessage={errors?.tel?.message}
							validationState={errors?.tel ? 'invalid' : 'valid'}
						/>
					)}
				/>

				<Button
					className={cx('LogIn__enter-button')}
					onPress={onSubmit}
					variant="red"
					isDisabled={!isValid}
				>
					Войти
				</Button>

				<Button variant="blue" onPress={goToLogInByPassword}>
					Войти по почте
				</Button>
				<ButtonWithDivider onPress={goToRegistration} variant="chevron">
					Зарегистрироваться
				</ButtonWithDivider>
			</Form>
		</ModalWithTabs>
	);
}
