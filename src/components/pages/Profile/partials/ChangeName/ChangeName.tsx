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

import styles from './ChangeName.module.scss';

export interface ILogInByPhone {
	tel: string;
}

const initValues = {
	name: 'Константин',
	surname: 'Константинопольский',
	patronymic: 'Константинович',
};

const cx = cn.bind(styles);
interface IChangeName {
	name: string;
	surname: string;
	patronymic: string;
}
export const ChangeName = () => {
	const { onClose } = useContext(DialogContext);

	const {
		required,
		registration: { name },
	} = formErrorText;

	const validationSchema = Yup.object().shape({
		name: Yup.string().min(3, name).required(required),
		surname: Yup.string().min(3, name).required(required),
		patronymic: Yup.string().min(3, name).required(required),
	});

	const {
		handleSubmit,
		control,
		formState: { errors, isValid, isDirty },
	} = useForm<IChangeName>({
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
		if (e.keyCode === 13 && isValid && isDirty) {
			onSubmit();
		}
	};
	useEventListener('keyup', onEnter);

	return (
		<Dialog center aria-label="Поменять имя">
			<Heading className={cx('ChangeName__heading')} level="2">
				Введите новый номер
			</Heading>

			<Controller
				name="surname"
				control={control}
				render={({ field }) => (
					<TextFieldBase
						{...field}
						label="Фамилия"
						type="text"
						errorMessage={errors?.surname?.message}
						validationState={errors?.surname ? 'invalid' : 'valid'}
					/>
				)}
			/>
			<Controller
				name="name"
				control={control}
				render={({ field }) => (
					<TextFieldBase
						{...field}
						label="Имя"
						type="text"
						errorMessage={errors?.name?.message}
						validationState={errors?.name ? 'invalid' : 'valid'}
					/>
				)}
			/>
			<Controller
				name="patronymic"
				control={control}
				render={({ field }) => (
					<TextFieldBase
						{...field}
						label="Отчество"
						type="text"
						errorMessage={errors?.patronymic?.message}
						validationState={errors?.patronymic ? 'invalid' : 'valid'}
					/>
				)}
			/>

			<Button
				className={cx('ChangeName__button')}
				variant="red"
				fullWidth
				isDisabled={!isValid || !isDirty}
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
