/* eslint-disable no-useless-escape */

export const PATTERNS = {
	userName: /^[A-z][A-z0-9-_]/,
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
	email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
	integer: /^\d+$/,
	notDigit: /^\D+$/,
	date: /^\d{4}(-)\d{2}(-)\d{2}$/,
	url: /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\\/]))?/,
} as const;

export const validation = {
	/**
	 * Находит все цифры и соединяет в одно число. Вроде
	 *
	 * @param {string} str
	 * @return {*}
	 */
	parseDigits(str: string) {
		return (PATTERNS.integer.exec(str) ?? []).join('');
	},
	/**
	 * Получается что работает так же как и parseDigits, надо тестить
	 *
	 * @param {string} str
	 */
	parseDigits2(str: string) {
		str.replace(PATTERNS.notDigit, '');
	},

	/**
	 * Парсит строку а число, если NaN возвращает 0
	 *
	 * @param {string} str
	 * @return {*}
	 */
	toNumber(str: string) {
		const parsed = parseInt(str, 10);
		return Number.isNaN(parsed) ? 0 : parsed;
	},
} as const;
