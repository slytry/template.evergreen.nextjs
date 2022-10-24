import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames/bind';
import { observer } from 'mobx-react-lite';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Button } from '@/base/Buttons';
import { Dialog } from '@/base/Dialog';
import { TextFieldBase } from '@/base/Fields/TextFieldBase';
import { formErrorText } from '@/base/Fields/errorMassaage';
import { Heading } from '@/base/Heading';
import { TModals, useAuthStore } from 'store/AuthStore/AuthRootStore';
import useEventListener from 'utils/useEventListener';

import styles from './ForgotPassword.module.scss';

const cx = cn.bind(styles);

interface ForgotPasswordProps {
	setModal?: (newWindow: TModals) => void;
}

interface IForgotPassword {
	email: string;
}

export const ForgotPassword = observer<ForgotPasswordProps>(({ setModal }) => {
	const {
		required,
		registration: { email },
	} = formErrorText;

	const { setTelOrEmail } = useAuthStore();
	const validationSchema = Yup.object().shape({
		email: Yup.string().email(email).required(required),
	});
	const {
		handleSubmit,
		control,
		formState: { errors, isValid },
	} = useForm<IForgotPassword>({
		mode: 'onChange',
		resolver: yupResolver(validationSchema),
	});

	const goToLogInByPassword = () => {
		setModal('logInByPassword');
	};

	const onSubmit = () => {
		handleSubmit((data) => {
			setTelOrEmail(data.email);
		})();
		setModal('successfulSendingMail');
	};

	const onEnter = (e) => {
		if (e.keyCode === 13 && isValid) {
			onSubmit();
		}
	};
	useEventListener('keyup', onEnter);

	return (
		<Dialog aria-label="Подтверждение по SMS" center>
			<Heading className={cx('ForgotPassword__heading')} level="2">
				Забыли пароль?
			</Heading>
			<p className={cx('ForgotPassword__content')}>
				Введите email, на который мы отправим <br />
				вам ссылку для восстановления пароля
			</p>
			<Controller
				control={control}
				name="email"
				render={({ field }) => (
					<TextFieldBase
						label="Email"
						type="email"
						autoComplete="email"
						{...field}
						validationState={errors.email ? 'invalid' : 'valid'}
						errorMessage={errors?.email?.message}
					/>
				)}
			/>
			<Button
				className={cx('ForgotPassword__enter-button')}
				variant="red"
				onPress={onSubmit}
				isDisabled={!isValid}
			>
				Отправить
			</Button>
			<Button onPress={goToLogInByPassword} variant="blue">
				Вернуться к авторизации
			</Button>
		</Dialog>
	);
});
