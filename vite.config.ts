/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
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
});