const path = require('path');

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`;

module.exports = {
	'*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write'],
	'*.{json,scss,html,md}': 'prettier --ignore-unknown --write',
	'*.scss': 'stylelint --fix',
};
