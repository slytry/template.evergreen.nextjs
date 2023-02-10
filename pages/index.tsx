import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { HomePage } from '@/pages/Home';

import { DEFAULT_LOCALE } from '../next-i18next.config';

const Home = () => <HomePage />;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, ['common'])),
	},
});

export default Home;
