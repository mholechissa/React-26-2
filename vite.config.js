import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  const env = loadEnv(mode, ".", "");

  return defineConfig({
    plugins: [react()],
    server: {
      port: 3001,
      proxy: {
        "/api": {
          target: env.VITE_TARGET,
          secure: false,
          changeOrigin: true,
        },
      },
    },
  });
};