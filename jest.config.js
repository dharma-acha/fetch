export default {
  testEnvironment: "jest-environment-jsdom", //  environment for testing
  setupFilesAfterEnv: ["@testing-library/jest-dom", "<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Use Babel to transform JavaScript and JSX files
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // Mock CSS and SCSS imports
  },
};
