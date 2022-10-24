import { authHandlers } from './auth.handlers';
import { commonHandlers } from './common.handlers';
import { headerHandlers } from './header.handlers';
import { lkHandlers } from './lk.handlers';

export const handlers = [
	...authHandlers,
	...headerHandlers,
	...lkHandlers,
	...commonHandlers,
];
