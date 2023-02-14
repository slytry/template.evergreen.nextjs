// @ts-check

// TODO: переменные с локалями дублируются в lib/constans/locales. Не понятно разрулить два разных виды модулей
const DEFAULT_LOCALE = 'ru';
const LOCALES = ['ru', 'en'];

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
	// https://www.i18next.com/overview/configuration-options#logging

	i18n: {
		defaultLocale: DEFAULT_LOCALE,
		locales: LOCALES,
	},
	debug: process.env.NODE_ENV === 'development',
	reloadOnPrerender: process.env.NODE_ENV === 'development',
};
