This is a sample Jest code coverage configuration for files outside of root directory. Run `npm install && npm test` to test.

See [this jest issue](https://github.com/facebook/jest/issues/3053) for the problem and the recommended solution.

In summary, the solution are two steps,
- In `jest.config.js`, move up the `rootDir` up until it includes the original project root and the directories containing files outside
- set `roots` to include the original project root and all the other directories

BTW, here is [Jest doc](https://jestjs.io/docs/en/configuration.html).
