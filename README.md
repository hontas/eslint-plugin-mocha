# eslint-plugin-mocha

Rules for a better testing experience

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-mocha`:

```
$ npm install eslint-plugin-mocha --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-mocha` globally.

## Usage

Add `mocha` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "mocha"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "mocha/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





