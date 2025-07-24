/* eslint sort-keys: ["error", "asc", {"caseSensitive": false}] */

module.exports = [
	{
		rules: {
			'@stylistic/array-bracket-spacing': [ 'error', 'always' ],
			'@stylistic/comma-dangle': [ 'error', 'always-multiline' ],
			'@stylistic/object-curly-spacing': [ 'error', 'always' ],
			'@stylistic/block-spacing': [ 'error', 'always' ],
			'@stylistic/operator-linebreak': [ 'error', 'before' ],

			camelcase: [ 'error', {
				properties: 'never',
			} ],

			'unicorn/custom-error-definition': 'off',
			'unicorn/filename-case': 'off',
			'unicorn/no-array-reduce': 'off',
			'unicorn/prefer-module': 'off',
		},
	},
];
