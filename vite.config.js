import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env.local") });

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vue()],
});
