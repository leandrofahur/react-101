import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Now, '@' points to the 'src' directory
      components: path.resolve(__dirname, "src/components"),
      context: path.resolve(__dirname, "src/context"),
      hooks: path.resolve(__dirname, "src/hooks"),
    },
  },
});
