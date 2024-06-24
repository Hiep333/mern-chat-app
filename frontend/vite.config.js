import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwincss from "tailwindcss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwincss()],
  css: {
    postcss: {
      plugins: [tailwincss()],
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://13.250.123.139",
      },
    },
  },
});
