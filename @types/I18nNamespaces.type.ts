import type errorPage from '../public/locales/en/404.json';
import type common from '../public/locales/en/common.json';
import type footer from '../public/locales/en/footer.json';
import type secondPage from '../public/locales/en/second.json';

export interface I18nNamespaces {
	common: typeof common;
	footer: typeof footer;
	second: typeof secondPage;
	'404': typeof errorPage;
}
