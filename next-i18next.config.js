export const DEFAULT_LOCALE = 'ru';
const LOCALES = ['ru', 'en'];

module.exports = {
	// https://www.i18next.com/overview/configuration-options#logging

	i18n: {
		defaultLocale: DEFAULT_LOCALE,
		locales: LOCALES,
	},
	debug: process.env.NODE_ENV === 'development',
	reloadOnPrerender: process.env.NODE_ENV === 'development',
};
