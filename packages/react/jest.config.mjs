/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest/presets/default-esm',

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },

  // Whether to use watchman for file crawling
  watchman: true,
};
