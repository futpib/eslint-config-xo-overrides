/* eslint sort-keys: ["error", "asc", {"caseSensitive": false}] */

module.exports = {
	rules: {
		'array-bracket-spacing': [ 'error', 'always' ],

		camelcase: [ 'error', {
			properties: 'never',
		} ],

		'comma-dangle': [ 'error', 'always-multiline' ],
		'object-curly-spacing': [ 'error', 'always' ],
		'operator-linebreak': [ 'error', 'before' ],

		'unicorn/custom-error-definition': 'off',
		'unicorn/filename-case': 'off',
		'unicorn/no-array-reduce': 'off',
		'unicorn/prefer-module': 'off',
	},
};
