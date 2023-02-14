import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { DEFAULT_LOCALE } from 'src/lib/constants/locales';

import { HomePage } from '@/pages/Home';

const Home = () => <HomePage />;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, ['common'])),
	},
});

export default Home;
