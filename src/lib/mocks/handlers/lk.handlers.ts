import { rest } from 'msw';

import { lkUrls } from 'lib/constants/urls';
import { withBase } from 'lib/constants/urls/withBase.utils';
import { ProfileDataEn, ProfileDataType } from 'lib/models/pages/Profile/Profile.data.en';
import { ProfileDataRu } from 'lib/models/pages/Profile/Profile.data.ru';
import {
	ManagementDataEn,
	ManagementDataType,
} from 'lib/models/pages/managment/ManagementDataEn.data';
import { ManagementDataRu } from 'lib/models/pages/managment/ManagementDataRu.data';

const URL = withBase(lkUrls) as typeof lkUrls;

export const lkHandlers = [
	rest.get(URL.PROFILE_DATA, async (req, res, ctx) => {
		const locale = req.headers.get('X-Language');

		if (locale === 'ru')
			return res(ctx.status(200), ctx.json<ProfileDataType>(ProfileDataRu));
		if (locale === 'en')
			return res(ctx.status(200), ctx.json<ProfileDataType>(ProfileDataEn));

		return res(ctx.status(404));
	}),
	rest.get(URL.MANAGEMENT_DATA, async (req, res, ctx) => {
		const locale = req.headers.get('X-Language');

		if (locale === 'ru')
			return res(ctx.status(200), ctx.json<ManagementDataType>(ManagementDataRu));
		if (locale === 'en')
			return res(ctx.status(200), ctx.json<ManagementDataType>(ManagementDataEn));

		return res(ctx.status(404));
	}),
];
