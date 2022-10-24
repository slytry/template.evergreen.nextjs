import cn from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import { ActionButton } from '@/base/Buttons';
import { DialogTrigger } from '@/base/Dialog';
import { Heading } from '@/base/Heading';
import { TUser } from 'lib/models/auth';

import { ChangeEmail } from '../ChangeEmail';
import { ChangeName } from '../ChangeName';
import { ChangePassword } from '../ChangePassword';
import { ChangePhone } from '../ChangePhone';

import CheckMarkSVG from 'public/icons/сheck-mark.svg';

import styles from './PersonalData.module.scss';

const cx = cn.bind(styles);

interface DataSectionsProps extends TUser {}

const ModalTriggerButton = () => {
	const { t } = useTranslation('common');
	return (
		<ActionButton className={cx('PersonalData__button')} variant="blue">
			{t('change')}
		</ActionButton>
	);
};

export const DataSections = ({
	phone,
	email,
	firstName,
	middleName,
	lastName,
}: DataSectionsProps) => {
	const { t } = useTranslation(['profile', 'common']);

	return (
		<>
			<section className={cx('PersonalData__item')}>
				<Heading level="3" className={cx('PersonalData__item-heading')}>
					{t('profile:phone')}
				</Heading>
				<div className={cx('PersonalData__value')}>
					<p className={cx('PersonalData__text')}>{phone.value}</p>
					{phone.subscribe && (
						<CheckMarkSVG className={cx('PersonalData__mark')} />
					)}
					<DialogTrigger isDismissable>
						<ModalTriggerButton />
						<ChangePhone />
					</DialogTrigger>
				</div>
			</section>
			<section className={cx('PersonalData__item')}>
				<Heading level="3" className={cx('PersonalData__item-heading')}>
					E-mail
				</Heading>
				<div className={cx('PersonalData__value')}>
					<p className={cx('PersonalData__text')}>{email.value}</p>
					{email.subscribe && (
						<CheckMarkSVG className={cx('PersonalData__mark')} />
					)}
					<DialogTrigger isDismissable>
						<ModalTriggerButton />
						<ChangeEmail />
					</DialogTrigger>
				</div>
			</section>
			<section className={cx('PersonalData__item')}>
				<Heading level="3" className={cx('PersonalData__item-heading')}>
					{t('profile:fullName')}
				</Heading>
				<div className={cx('PersonalData__value')}>
					<p className={cx('PersonalData__text')}>
						{[firstName, middleName, lastName].join(' ')}
					</p>
					<DialogTrigger isDismissable>
						<ModalTriggerButton />
						<ChangeName />
					</DialogTrigger>
				</div>
			</section>
			<section className={cx('PersonalData__item')}>
				<Heading level="3" className={cx('PersonalData__item-heading')}>
					{t('profile:password')}
				</Heading>
				<div className={cx('PersonalData__value')}>
					<p className={cx('PersonalData__text')}>••••••••••</p>
					<DialogTrigger isDismissable>
						<ModalTriggerButton />
						<ChangePassword />
					</DialogTrigger>
				</div>
			</section>
		</>
	);
};
