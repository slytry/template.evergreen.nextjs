import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { HomePage } from '@/pages/Home';
import { config } from 'lib/config/react-query-config';
import { queryKeys } from 'lib/constants/queryKyes';
import { getTodos } from 'lib/services/common.service';

const Home = () => <HomePage />;

export const getStaticProps: GetStaticProps = async (context) => {
	const { locale } = context;

	const queryClient = new QueryClient(config);

	await queryClient.prefetchQuery([queryKeys.TODO, locale], () =>
		getTodos(locale)
	);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			...(await serverSideTranslations(locale, ['common', 'footer'])),
		},
	};
};

export default Home;
