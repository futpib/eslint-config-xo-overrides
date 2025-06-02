# eslint-config-xo-overrides
eslint+xo sharable config with some opinionated rule overrides

**Note:** Version 2.0.0+ uses ESLint's flat config format and requires ESLint 9.0.0 or higher.

## Overrides

### Trailing commas in multiline objects and arrays

This makes diffs simpler.

Correct :+1: code:

```js
const fizz = {
  blep: 'bloop',
};
```

### Space around object and array literals

Cause it looks better.

Correct :+1: code:

```js
const { curly } = foo;
const bar = [ square ];
```

### No camelcase in property names

We still use objects as poor man's hashmaps.

Correct :+1: code:

```js
const rates = {
	eur_usd: 1,
};
```

### Linebreak before the operator

IMO reads better. Also makes diffs simpler.

Correct :+1: code:

```js
return user.email
	|| user.phone
	|| user.slug;
```

### Other enabled rules

- [unicorn/custom-error-definition](https://github.com/sindresorhus/eslint-plugin-unicorn/tree/master/docs/rules/custom-error-definition.md) - Enforce correct `Error` subclassing.

## Usage

Installation:

```bash
yarn add --dev eslint-config-xo-overrides
```

or

```bash
npm install --save-dev eslint-config-xo-overrides
```

### With XO

Create a `xo.config.js` file:

```js
const xoOverrides = require('eslint-config-xo-overrides');

module.exports = xoOverrides;
```

### With ESLint (Flat Config)

In your `eslint.config.js`:

```js
const xoOverrides = require('eslint-config-xo-overrides');

module.exports = [
  // Your other configs...
  ...xoOverrides,
];
```

### Legacy Configuration

For the legacy eslintrc format with XO, you can use the CLI tool:

```bash
yarn eslint-config-xo-overrides
# or
./node_modules/.bin/eslint-config-xo-overrides
```

This will add the following to your `package.json`:

```json
{
  "xo": {
    "extends": ["eslint-config-xo-overrides"]
  }
}
```
