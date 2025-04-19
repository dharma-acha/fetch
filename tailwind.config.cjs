/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include the main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all source files for Tailwind CSS processing
  ],
  theme: {
    extend: {}, // Placeholder for extending the default theme
  },
  plugins: [], // Add Tailwind CSS plugins here if needed
};
