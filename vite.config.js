// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // Vite configuration
// export default defineConfig({
//   plugins: [react()], // Enable React plugin for Vite
// });

// filepath: e:\git repos\fetch-buddy_THP\vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensure assets are resolved correctly
});
