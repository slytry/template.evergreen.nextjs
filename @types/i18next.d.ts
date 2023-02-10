/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next';

import type common from '../public/locales/en/common.json';
import type footer from '../public/locales/en/footer.json';
import type secondPage from '../public/locales/en/second.json';
import type errorPage from '../public/locales/en/404.json';

export declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: 'common';
		resources: I18nNamespaces;
	}
}
