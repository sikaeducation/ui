/** @type {import('vite').UserConfig} */
import libAssets from "@laynezh/vite-plugin-lib-assets";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    libAssets({
      include: [/.*.woff/],
      outputPath: "fonts",
    }),
    react(),
    dts({
      rollupTypes: true,
    }),
  ],
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
  resolve: {
    alias: {
      $: path.resolve(__dirname, "style-library"),
    },
  },
});
