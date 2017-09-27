# Disallow the use of .only in tests (disallow-only)

It's great to use .only during development but could
be a disaster if checked in. This rule can help with that.


## Rule Details

This rule aims to tell you when you left .only in your tests

Examples of **incorrect** code for this rule:

```js

describe.only('should pass', function() {});
it.only('should pass', function() {});

```

Examples of **correct** code for this rule:

```js

describe('should pass', function() {});
it('should pass', function() {});

```

## When Not To Use It

Never.

## Further Reading

[mochajs docs on exclusive tests](https://mochajs.org/#exclusive-tests)
