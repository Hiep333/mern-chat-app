import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwincss from "tailwindcss";
import { HOST_URL } from "./src/utils/contants";
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
        target: "http://54.151.254.177",
      },
    },
  },
});
