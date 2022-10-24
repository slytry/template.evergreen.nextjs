import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';

import { HomePage } from '@/pages/Home';
import { config } from 'lib/config/react-query-config';
import { queryKeys } from 'lib/constants/queryKyes';
import { getHeaderData } from 'lib/services/layout.service';

const Home = (props): ReactElement => <HomePage locale={props.locale} />;

export const getStaticProps: GetStaticProps = async (context) => {
	const { locale } = context;

	const queryClient = new QueryClient(config);

	await queryClient.prefetchQuery([queryKeys.HEADER_DATA, locale], () =>
		getHeaderData(locale)
	);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			...(await serverSideTranslations(locale, ['common', 'footer'])),
		},
	};
};

export default Home;
