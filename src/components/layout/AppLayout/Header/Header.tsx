import { useTranslation } from 'next-i18next';

import { Navigation } from '../Navigation';

export const Header = () => {
	const { t } = useTranslation(['common']);
	return (
		<header>
			<h2>{t('common:header')}</h2>
			<hr />
			<Navigation />
		</header>
	);
};
