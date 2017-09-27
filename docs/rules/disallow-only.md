# Disallow the use of .only in tests (disallow-only)

It's great to use .only during development but could
be a disaster if checked in. This rule can help with that.


## Rule Details

This rule aims to tell you when you left .only in your tests

Examples of **incorrect** code for this rule:

```js

describe.only('should fail', () => {});
it.only('should fail', () => {});

```

Examples of **correct** code for this rule:

```js

describe('should pass', () => {});
it('should pass', () => {});

```

## When Not To Use It

Never.

## Further Reading

[mochajs docs on exclusive tests](https://mochajs.org/#exclusive-tests)
