import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { DEFAULT_LOCALE } from 'src/lib/constants/locales';

import { Second } from '@/pages/Second';

const SecondPage = () => <Second />;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, ['common'])),
	},
});

export default SecondPage;
