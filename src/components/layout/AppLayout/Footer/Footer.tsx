import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const Footer = () => {
	const router = useRouter();
	const { t } = useTranslation(['footer']);

	return (
		<footer>
			<p>{t('description')}</p>
		</footer>
	);
};
