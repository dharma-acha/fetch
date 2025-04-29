// This is the PostCSS configuration file (postcss.config.cjs).
// It specifies the plugins PostCSS should use to process CSS files.

module.exports = {
  plugins: [
    require("@tailwindcss/postcss7-compat"), // Tailwind CSS compatibility with PostCSS 7
    require("autoprefixer"), // Add vendor prefixes for better browser support
  ],
};
