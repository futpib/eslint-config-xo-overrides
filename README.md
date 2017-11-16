# eslint-config-xo-overrides
eslint+xo sharable config with some opinionated rule overrides

## Overrides

### Trailing commas in multiline objects and arrays

This makes diffs simpler.

Correct :+1: code:

```js
const f fizz = {
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

## Usage

Installation:

```bash
yarn add --dev eslint-config-xo-overrides
```

or

```bash
npm install --save-dev eslint-config-xo-overrides
```

In your `package.json`:

```json
{
  "xo": {
    "extends": ["eslint-config-xo-overrides"]
  }
}
```
