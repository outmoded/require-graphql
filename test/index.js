'use strict';

// Load modules

const Code = require('code');
const RequireGraphql = require('..');
const Lab = require('lab');


// Declare internals

const internals = {};


// Test shortcuts

const { describe, it } = exports.lab = Lab.script();
const expect = Code.expect;


describe('Require-GraphQL', () => {

    it('adds file support for .graphql and returns reference to the graphql module', () => {

        const schema = require('./schema');
        expect(schema).to.be.instanceof(RequireGraphql.GraphQLSchema);
    });
});
