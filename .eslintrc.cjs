module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'next/core-web-vitals',
		'prettier',
	],
	rules: {
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'no-console': ['error', { allow: ['warn', 'error', 'info', 'debug'] }],
		// "import/order": [
		// 	1,
		// 	{
		// 		"newlines-between": "always",
		// 		"alphabetize": {
		// 			"caseInsensitive": false,
		// 			"order": "asc"
		// 		},
		// 		"warnOnUnassignedImports": true,
		// 		"groups": [
		// 			"builtin",
		// 			"external",
		// 			"internal",
		// 			"parent",
		// 			"sibling",
		// 			"index",
		// 			"type",
		// 			"object"
		// 		],
		// 		"pathGroups": [
		// 			{
		// 				"pattern": "./**/**.scss",
		// 				"group": "object",
		// 				"position": "after"
		// 			},
		// 			{
		// 				"pattern": "**/**.svg",
		// 				"group": "object",
		// 				"position": "before"
		// 			}
		// 		]
		// 	}
		// ]
	},
};
