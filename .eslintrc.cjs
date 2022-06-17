module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'airbnb-typescript',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: [
		'playwright.config.ts',
		'env.d.ts',
		'*.cjs',
		'tests/*.ts',
		'*.js',
	],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript'),
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		project: ['./tsconfig.json'],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
};
