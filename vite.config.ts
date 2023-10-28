/** @type {import('vite').UserConfig} */
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      $: path.resolve(__dirname, "./style-library"),
    },
  },
  publicDir: "./style-library",
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "components",
    },
    minify: false,
    cssMinify: false,
    sourcemap: true,
    rollupOptions: {
      external: ["react", "react-dom", "storybook"],
    },
  },
});
