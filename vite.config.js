import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  build: {
    assetsDir: "assets",
    outDir: "dist",
    rollupOptions: {
      output: {
        assetFileNames: "pdfmake/[name][extname]",
      },
    },
  },
});
