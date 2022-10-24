/* eslint-disable @typescript-eslint/no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames/bind';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Button } from '@/base/Buttons';
import { Dialog } from '@/base/Dialog';
import { PhoneField } from '@/base/Fields/PhoneField';
import { formErrorText } from '@/base/Fields/errorMassaage';
import { Heading } from '@/base/Heading';
import useEventListener from 'utils/useEventListener';

import { ISetModal } from '../..';

import styles from './NewPhone.module.scss';

export interface ILogInByPhone {
	tel: string;
}

const cx = cn.bind(styles);

export const NewPhone = ({ setModal }: ISetModal) => {
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

	const onSubmit = () => {
		handleSubmit((data) => {})();
		setModal('successChange');
	};
	const onEnter = (e) => {
		if (e.keyCode === 13 && isValid) {
			onSubmit();
		}
	};

	useEventListener('keyup', onEnter);

	return (
		<Dialog center aria-label="Поменять телефон" withSmallPadding>
			<Heading level="2">Введите новый номер</Heading>
			<p className={cx('NewPhone__text')}>На него мы отправим код подтверждения</p>
			<form className={cx('NewPhone__form')}>
				<Controller
					control={control}
					name="tel"
					render={({ field }) => (
						<PhoneField
							{...field}
							className={cx('NewPhone__field')}
							label="Телефон"
							errorMessage={errors?.tel?.message}
							validationState={errors?.tel ? 'invalid' : 'valid'}
						/>
					)}
				/>

				<Button
					className={cx('NewPhone__button')}
					variant="red"
					fullWidth
					isDisabled={!isValid}
					onPress={onSubmit}
				>
					Получить код
				</Button>
			</form>
		</Dialog>
	);
};
