import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export const Error404 = () => {
	const { t } = useTranslation(['common']);

	return (
		<>
			<main>
				<div>
					<Link href="/">
						<button type="button">{t('common:back-to-home')}</button>
					</Link>
				</div>
			</main>
		</>
	);
};
