/**
 * @fileoverview Disallow the use of .only in tests
 * @author hontas
 */
 "use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/disallow-only"),
RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var keyWords = ["describe", "context", "specify", "it", "before", "beforeEach", "after", "afterEach", "suite", "test", "setup", "suiteSetup", "teardown", "suiteTeardown"];
var ruleTester = new RuleTester();
ruleTester.run("disallow-only", rule, {

  valid: keyWords.map((word) => `${word}('should pass', function() {})`),

  invalid: keyWords.map((word) => ({
    code: `${word}.only('should pass', function() {})`,
    errors: [{
      message: `Don't use ${word}.only`,
      type: "MemberExpression"
    }]
  }))
});

var ruleTesterES6 = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
});
ruleTesterES6.run("disallow-only", rule, {

  valid: keyWords.map((word) => `${word}('should pass', () => {})`),

  invalid: keyWords.map((word) => ({
    code: `${word}.only('should pass', () => {})`,
    errors: [{
      message: `Don't use ${word}.only`,
      type: "MemberExpression"
    }]
  }))
});
