/**
 * @fileoverview Disallow the use of .only in tests
 * @author hontas
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow .only in tests",
            category: "Possible Errors",
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create(context) {

        const dotOnlyCandidates = ["describe", "context", "specify", "it", "before", "beforeEach", "after", "afterEach", "suite", "test", "setup", "suiteSetup", "teardown", "suiteTeardown"];

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        const isIt = (obj) => (obj && obj.type === "Identifier" && dotOnlyCandidates.includes(obj.name));
        const hasDotOnly = (prop) => (prop && prop.type === "Identifier" && prop.name === "only");

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            MemberExpression(node) {
              //console.log(node);
              if (isIt(node.object) && hasDotOnly(node.property)) {
                context.report(node, `Don't use ${node.object.name}.only`);
              }
            }
        };
    }
};
