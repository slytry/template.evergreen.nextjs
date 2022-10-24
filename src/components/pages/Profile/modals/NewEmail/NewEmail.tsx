/* eslint-disable @typescript-eslint/no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames/bind';
import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { ActionButton, Button } from '@/base/Buttons';
import { Dialog, DialogContext } from '@/base/Dialog';
import { TextFieldBase } from '@/base/Fields/TextFieldBase';
import { formErrorText } from '@/base/Fields/errorMassaage';
import { Heading } from '@/base/Heading';
import useEventListener from 'utils/useEventListener';

import { ISetModal } from '../..';

import styles from './NewEmail.module.scss';

export interface IEmail {
	email: string;
}

const initEmail = 'user_konstantinopolskiykk@gmail.com';

const cx = cn.bind(styles);

export const NewEmail = ({ setModal }: ISetModal) => {
	const { onClose } = useContext(DialogContext);
	const {
		required,
		registration: { email },
	} = formErrorText;

	const validationSchema = Yup.object().shape({
		email: Yup.string().required(required).email(email),
	});

	const {
		control,
		handleSubmit,
		formState: { isValid, isDirty },
	} = useForm<IEmail>({
		defaultValues: { email: initEmail },
		resolver: yupResolver(validationSchema),
		mode: 'onChange',
	});

	const onSubmit = () => {
		handleSubmit((data) => {
			console.log(data);
		})();
		setModal('successChange');
	};

	const onEnter = (e) => {
		if (e.keyCode === 13 && isValid && isDirty) {
			onSubmit();
		}
	};
	useEventListener('keyup', onEnter);

	return (
		<Dialog center aria-label="Поменять телефон">
			<Heading level="2" className={cx('NewEmail__heading')}>
				Изменить e-mail
			</Heading>
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
				className={cx('NewEmail__button')}
				variant="red"
				fullWidth
				isDisabled={!isValid || !isDirty}
				onPress={onSubmit}
			>
				Продолжить
			</Button>
			<ActionButton variant="blue" onPress={onClose}>
				Отмена
			</ActionButton>
		</Dialog>
	);
};
