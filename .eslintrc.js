module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:jest/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['react', 'jest', 'react-hooks'],
	rules: {
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'linebreak-style': ['error', 'unix'],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
		'max-len': [2, 180],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/no-unused-prop-types': 'off',
		'react/require-default-props': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'arrow-parens': 'off',
		'no-plusplus': 'off',
		'no-mixed-operators': 'off',
		'new-cap': 'off',
		'jsx-a11y/href-no-hash': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
