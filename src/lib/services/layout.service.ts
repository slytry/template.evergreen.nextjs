import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { queryKeys } from 'lib/constants/queryKyes';
import { headerUrls } from 'lib/constants/urls';
import { IHeader } from 'lib/models/header/Header.types';

import { http } from './http/http';

export const getHeaderData = async (locale = 'ru') =>
	await http.get<IHeader>(`${headerUrls.ALL_DATA}?locale=${locale}`);

export const useHeaderDataQuery = () => {
	const { locale } = useRouter();

	return useQuery<IHeader>([queryKeys.HEADER_DATA, locale], () =>
		getHeaderData(locale)
	);
};
