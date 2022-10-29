import { rest } from 'msw';

import { commonUrls } from 'lib/constants/urls';
import { withBase } from 'lib/constants/urls/withBase.utils';
import { TodoDataRu } from 'lib/models/pages/Home/Todo.data.ru';
import { TodoDataEn, TTodoData } from 'lib/models/pages/Home/Todo.data.en';

const URL = withBase(commonUrls) as typeof commonUrls;

export const commonHandlers = [
	rest.get(URL.TODO, async (req, res, ctx) => {
		const locale = req.headers.get('X-Language');

		if (locale === 'ru')
			return res(ctx.status(200), ctx.json<TTodoData>(TodoDataRu));
		if (locale === 'en')
			return res(ctx.status(200), ctx.json<TTodoData>(TodoDataEn));

		return res(ctx.status(404));
	}),
];
