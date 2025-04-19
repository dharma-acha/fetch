import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] }, // Ignore the 'dist' folder
  {
    files: ["**/*.{js,jsx}"], // Apply ESLint rules to JavaScript and JSX files
    languageOptions: {
      ecmaVersion: 2020, // Use ECMAScript 2020 syntax
      globals: globals.browser, // Include browser global variables
      parserOptions: {
        ecmaVersion: "latest", // Support the latest ECMAScript version
        ecmaFeatures: { jsx: true }, // Enable JSX syntax
        sourceType: "module", // Use ES modules
      },
    },
    plugins: {
      "react-hooks": reactHooks, // Enforce React Hooks rules
      "react-refresh": reactRefresh, // Support React Refresh for fast refresh
    },
    rules: {
      ...js.configs.recommended.rules, // Include recommended JavaScript rules
      ...reactHooks.configs.recommended.rules, // Include recommended React Hooks rules
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }], // Ignore unused variables matching the pattern
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }, // Warn if non-components are exported
      ],
    },
  },
];
