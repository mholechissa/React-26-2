import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://ctd-learns-node-l4ztx.ondigitalocean.app",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});