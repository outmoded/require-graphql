# require-graphql
Adds GraphQL schema file support to require()

### Usage

Require the extension:

```js
require('require-graphql');
```

Then require your GraphQL schema file:

```js
require('./your_schema_file.graphql');
```

The extension allows dropping the GraphQL schema file extension:

```js
require('./your_schema_file');
```

As well as to skip separately requiring GraphQL:

```js
const Graphql = require('require-graphql');
```

Which is the same as:

```js
require('require-graphql');
const Graphql = require('graphql');
```

Note that this module **does not** include a dependency on the GraphQL module to avoid
version conflicts. It will load whatever GraphQL module is already loaded by your
package.json file.
