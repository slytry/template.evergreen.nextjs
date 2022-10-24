/* eslint-disable no-redeclare */

import { baseURL } from '.';

function _withBase(BASE: string, url) {
	const entires = Object.entries(url);

	const hydratedUrls = entires.reduce(
		(p, [k, val]) =>
			Object.assign(p, {
				[k]: BASE + val,
			}),
		{}
	);

	return hydratedUrls;
}

export const withBase = _withBase.bind(null, baseURL);
