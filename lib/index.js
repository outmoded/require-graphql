'use strict';

// Load modules

const Fs = require('fs');

const Graphql = require('graphql');


// Declare internals

const internals = {};


require.extensions['.graphql'] = function (localModule, filename) {

    const schema = Fs.readFileSync(filename, 'utf8');
    localModule.exports = Graphql.buildSchema(schema);
};


module.exports = Graphql;
