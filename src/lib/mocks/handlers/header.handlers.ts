import { rest } from 'msw';

import { headerUrls } from 'lib/constants/urls';
import { withBase } from 'lib/constants/urls/withBase.utils';
import { HeaderDataEn } from 'lib/models/header/Header.data.en';
import { HeaderDataRu } from 'lib/models/header/Header.data.ru';
import { IHeader } from 'lib/models/header/Header.types';

const URL = withBase(headerUrls) as typeof headerUrls;

export const headerHandlers = [
	rest.get(URL.ALL_DATA, async (req, res, ctx) => {
		const locale = req.url.searchParams.get('locale');

		if (locale === 'ru') return res(ctx.status(200), ctx.json<IHeader>(HeaderDataRu));
		if (locale === 'en') return res(ctx.status(200), ctx.json<IHeader>(HeaderDataEn));

		return res(ctx.status(404));
	}),
];
