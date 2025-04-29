// This is the Jest configuration file (jest.config.cjs).
// It sets up the testing environment and specifies how Jest should handle different file types and behaviors during testing.

module.exports = {
  // Specifies the test environment to simulate a browser-like environment
  testEnvironment: "jsdom",

  // Configures how files are transformed before testing
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },

  // Maps module imports for non-JavaScript files to mock implementations
  moduleNameMapper: {
    "^.+\\.(css|scss|png|avif|mp4)$": "identity-obj-proxy",
  },

  // Specifies setup files to run after the test environment is set up
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // Optional: Ignore transforming specific node_modules
  transformIgnorePatterns: [
    "node_modules/(?!(your-esm-package)/)", // Replace `your-esm-package` if needed
  ],

  // Optional: Enable verbose output
  verbose: true,
};
