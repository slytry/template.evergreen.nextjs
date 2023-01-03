// Улучшения XO конфига https://github.com/bizon/eslint-config-xo-bizon/blob/master/index.cjs

module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['xo', 'next/core-web-vitals', 'prettier'],
	overrides: [
		{
			extends: [
				'xo', // https://github.com/xojs/eslint-config-xo/blob/main/index.js
				'xo-typescript', // https://github.com/xojs/eslint-config-xo-typescript/blob/main/index.js
				'next/core-web-vitals', // https://www.npmjs.com/package/eslint-config-next?activeTab=explore
				'prettier', // https://github.com/prettier/eslint-config-prettier
			],
			files: ['*.ts', '*.tsx'],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json'],
	},
	rules: {
		// We prefer interfaces
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		// Organize imports

		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',

		// This sorts named imports
		// Arbitrary import order rules
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
				],
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
		// This sorts named imports
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
			},
		],
	},
};
