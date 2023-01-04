const rules = {
	'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
	'import/first': 'error',
	'import/newline-after-import': 'error',
	'import/no-duplicates': 'error',
	'new-cap': 'off',
	'import/order': [
		'error',
		{
			groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
			pathGroups: [
				{
					pattern: '@/lib/**',
					group: 'internal',
					position: 'after',
				},
				{
					pattern: '@/tests/**',
					group: 'internal',
					position: 'after',
				},
				{
					pattern: '@/types/**',
					group: 'internal',
					position: 'after',
				},
				{
					pattern: '@/!(lib|tests|types)/**',
					group: 'internal',
					position: 'after',
				},
				{
					pattern: '**/**.svg',
					group: 'object',
					position: 'before',
				},
				{
					pattern: './**/**.scss',
					group: 'index',
					position: 'after',
				},
			],
			'newlines-between': 'always',
			alphabetize: {
				order: 'asc',
				caseInsensitive: true,
			},
		},
	],
	'sort-imports': [
		'error',
		{
			ignoreCase: true,
			ignoreDeclarationSort: true,
		},
	],
};

module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},

	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	extends: ['xo', 'next/core-web-vitals', 'prettier'],
	overrides: [
		{
			extends: ['xo', 'xo-typescript', 'next/core-web-vitals', 'prettier'],
			files: ['*.ts', '*.tsx'],
			rules,
		},
	],
	rules,
};
