export const REGEX = {
	userName: /^[A-z][A-z0-9-_]/,
	password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
	digit: /\d/g,
	notDigit: /\D/g,
};

export const normalizeNumber = (value) => value.replace(REGEX.notDigit, '');
export const normalizeString = (value) => value.replace(REGEX.digit, '');

export const normalizeCardNumber = (value) =>
	value
		.replace(REGEX.notDigit, '')
		.match(/.{1,4}/g)
		?.join(' ')
		.substr(0, 19) || '';

export const normalizePhone = (value: string) => {
	let mask = '+_ (___) ___-__-__';
	const numbers = value.replace(REGEX.notDigit, '');

	if (numbers) {
		let finaly = '';
		const maxLength = numbers.length;

		numbers
			.slice(0, maxLength)
			.split('')
			.forEach((item, index) => {
				if (!index) {
					item = '7';
				}

				const pos = mask.indexOf('_');
				if (pos !== -1) {
					finaly = mask.slice(0, pos + 1).replace('_', item);
					mask = finaly + mask.slice(pos + 1);
				}
			});
		return finaly;
	}

	return numbers;
};
