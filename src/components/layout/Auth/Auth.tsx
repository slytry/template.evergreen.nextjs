import cn from 'classnames/bind';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { Button } from '@/base/Buttons';
import { DialogTrigger } from '@/base/Dialog';
import { FadeSwitchTransition } from '@/shared/FadeSwitchTransition';
import { pathes } from 'lib/constants/pathes';
import { useStore } from 'store';
import { useAuthStore } from 'store/AuthStore/AuthRootStore';

import {
	ConfirmEmail,
	ConfirmSMS,
	ForgotPassword,
	LogInByPassword,
	LogInByPhone,
	RegistrationFirstStep,
	RegistrationSecondStep,
	SuccessfulSendingMail,
	WhyNotComingEmail,
	WhyNotComingSMS,
} from './components/modals';

import ChevronDownSvg from 'public/icons/chevron-down.svg';
import AccoutnSvg from 'public/icons/personal-account.svg';

import styles from './Auth.module.scss';

const cx = cn.bind(styles);

const ConditionalComponent = observer(() => {
	const { currentModalWindow, updateModal } = useAuthStore();

	const CurrentComponent = () => {
		switch (currentModalWindow) {
			case 'logInByPassword':
				return <LogInByPassword setModal={updateModal} />;
			case 'logInByPhone':
				return <LogInByPhone setModal={updateModal} />;
			case 'registrationFirstStep':
				return <RegistrationFirstStep setModal={updateModal} />;
			case 'registrationSecondStep':
				return <RegistrationSecondStep setModal={updateModal} />;
			case 'confirmEmail':
				return <ConfirmEmail setModal={updateModal} />;
			case 'whyNotComingEmail':
				return <WhyNotComingEmail setModal={updateModal} />;
			case 'confirmSMS':
				return <ConfirmSMS setModal={updateModal} />;
			case 'whyNotComingSMS':
				return <WhyNotComingSMS setModal={updateModal} />;
			case 'forgotPassword':
				return <ForgotPassword setModal={updateModal} />;
			case 'successfulSendingMail':
				return <SuccessfulSendingMail setModal={updateModal} />;
			default:
				return <LogInByPassword setModal={updateModal} />;
		}
	};

	return (
		<FadeSwitchTransition formState={currentModalWindow}>
			<CurrentComponent />
		</FadeSwitchTransition>
	);
});

function AuthTrigger() {
	const { t } = useTranslation(['common']);

	return (
		<DialogTrigger isDismissable>
			<Button className={cx('Auth__account-button')} variant="pink">
				{t('common:personal-account')}
			</Button>
			<ConditionalComponent />
		</DialogTrigger>
	);
}

const AccountButton = () => {
	const router = useRouter();
	const goToRersonalAccount = () => {
		router.push(pathes.profile);
	};

	const { t } = useTranslation(['common']);

	return (
		<Button
			variant="gray"
			onPress={goToRersonalAccount}
			className={cx('Auth__account-button')}
		>
			<AccoutnSvg />
			<span>{t('common:personal-account')}</span>
			<ChevronDownSvg />
		</Button>
	);
};

export const Auth = observer(() => {
	const {
		userStore: { currentUser },
	} = useStore();

	return currentUser ? <AccountButton /> : <AuthTrigger />;
});
