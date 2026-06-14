import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base path matches the GitHub Pages project URL: https://aoprisan.github.io/tupilati/
export default defineConfig({
  base: "/tupilati/",
  plugins: [react()],
});
