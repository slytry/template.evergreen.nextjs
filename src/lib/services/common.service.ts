import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { queryKeys } from 'lib/constants/queryKyes';
import { commonUrls } from 'lib/constants/urls';
import { TNotificationsData } from 'lib/models/notifications/notifications.data.en';

import { http } from './http/http';

export const getNotifications = async (locale = 'ru') =>
	await http.get<TNotificationsData>(commonUrls.NOTIFICATIONS, {
		headers: { 'X-Language': locale },
	});

export const useNotificationsQuery = () => {
	const { locale } = useRouter();

	return useQuery<TNotificationsData>([queryKeys.NOTIFICATIONS, locale], () =>
		getNotifications(locale)
	);
};
