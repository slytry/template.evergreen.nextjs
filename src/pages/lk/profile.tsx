import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';

import { Profile } from '@/pages/Profile';
import { config } from 'lib/config/react-query-config';
import { queryKeys } from 'lib/constants/queryKyes';
import { getHeaderData } from 'lib/services/layout.service';
import { getProfileData } from 'lib/services/lk.service';

const ProfilePage = (): ReactElement => <Profile />;

export const getStaticProps: GetStaticProps = async (context) => {
	const { locale } = context;

	const queryClient = new QueryClient(config);

	await queryClient.prefetchQuery([queryKeys.HEADER_DATA, locale], () =>
		getHeaderData(locale)
	);

	await queryClient.prefetchQuery([queryKeys.PROFILE_DATA, locale], () =>
		getProfileData(locale)
	);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			...(await serverSideTranslations(locale, ['profile', 'common', 'footer'])),
		},
	};
};

export default ProfilePage;
