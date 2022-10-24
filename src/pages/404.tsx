import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { config } from 'lib/config/react-query-config';
import { queryKeys } from 'lib/constants/queryKyes';
import { getHeaderData } from 'lib/services/layout.service';

export default function Custom404() {
	return <h1>404 - Page Not Found</h1>;
}

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
