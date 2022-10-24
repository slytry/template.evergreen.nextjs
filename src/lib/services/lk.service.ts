import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { queryKeys } from 'lib/constants/queryKyes';
import { lkUrls } from 'lib/constants/urls';
import { ProfileDataType } from 'lib/models/pages/Profile/Profile.data.en';
import { ManagementDataType } from 'lib/models/pages/managment/ManagementDataEn.data';

import { http } from './http';

export const getProfileData = async (locale = 'ru') =>
	await http.get<ProfileDataType>(lkUrls.PROFILE_DATA, {
		headers: { 'X-Language': locale },
	});

export const useProfileQuery = () => {
	const { locale } = useRouter();

	return useQuery<ProfileDataType>([queryKeys.PROFILE_DATA, locale], () =>
		getProfileData(locale)
	);
};

export const getManagementeData = async (locale = 'ru') =>
	await http.get<ManagementDataType>(lkUrls.MANAGEMENT_DATA, {
		headers: { 'X-Language': locale },
	});

export const useManagementQuery = () => {
	const { locale } = useRouter();

	return useQuery<ManagementDataType>([queryKeys.MANAGEMENT_DATA, locale], () =>
		getManagementeData(locale)
	);
};
