import { rest } from 'msw';

import { authWohleSaleURLs } from 'lib/constants/urls';
import { withBase } from 'lib/constants/urls/withBase.utils';
import { TUser, user } from 'lib/models/auth';

const URL = withBase(authWohleSaleURLs) as typeof authWohleSaleURLs;

export const authHandlers = [
	rest.post(URL.CONFIRM, async (req, res, ctx) => {
		const { code } = await req.json();

		if (code === '0000') {
			return res(ctx.status(200));
		}
		return res(ctx.status(404));
	}),
	rest.get(URL.USER, async (req, res, ctx) =>
		res(ctx.status(200), ctx.json<TUser>(user))
	),
];
