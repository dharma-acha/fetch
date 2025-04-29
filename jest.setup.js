// This is the Jest setup file (jest.setup.js).
// It configures global mocks and setups required for Jest tests to run smoothly.

import "@testing-library/jest-dom/";

// Mock TextEncoder and TextDecoder for Jest
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

// Mock environment variables for Jest
process.env.VITE_API_BASE_URL = "https://mock-api-url.com"; // Mock API base URL
