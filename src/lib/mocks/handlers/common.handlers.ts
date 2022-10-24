import { rest } from 'msw';

import { commonUrls } from 'lib/constants/urls';
import { withBase } from 'lib/constants/urls/withBase.utils';
import {
	notificationsDataEn,
	TNotificationsData,
} from 'lib/models/notifications/notifications.data.en';
import { notificationsDataRu } from 'lib/models/notifications/notifications.data.ru';

const URL = withBase(commonUrls) as typeof commonUrls;

export const commonHandlers = [
	rest.get(URL.NOTIFICATIONS, async (req, res, ctx) => {
		const locale = req.headers.get('X-Language');

		if (locale === 'ru')
			return res(
				ctx.status(200),
				ctx.json<TNotificationsData>(notificationsDataRu)
			);
		if (locale === 'en')
			return res(
				ctx.status(200),
				ctx.json<TNotificationsData>(notificationsDataEn)
			);

		return res(ctx.status(201));
	}),
];
