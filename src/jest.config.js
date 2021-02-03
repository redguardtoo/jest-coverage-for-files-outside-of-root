const path = require("path");

// @see https://github.com/facebook/jest/issues/3613#issuecomment-510112394
module.exports = {
  "verbose": true,
  "collectCoverage": true,
  "collectCoverageFrom": [
    // path.resolve(__dirname, '../share/util.js'),
    '../**/*.js',
    "**/*.js",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/*.config.js",
  ],
  // @see https://github.com/facebook/jest/issues/3053
  // jest bug which is not resolved yet
  rootDir: "../",
  roots: [
    '<rootDir>/src',
    '<rootDir>/share',
  ],
  "coverageReporters": ["json", "text", "html",],
  // @see https://jestjs.io/docs/en/configuration#coverageprovider-string
  // node v14+ is recommended
  "coverageProvider": "v8",
  "coverageThreshold": {
    "global": {
      "branches": 0,
      "functions": 0,
      "lines": 0,
      "statements": 0
    }
  },
};
