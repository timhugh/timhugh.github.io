import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import tailwindcss from "@tailwindcss/vite";
import remarkGfm from "remark-gfm";

export default defineConfig({
	site: "https://timheuett.com",
	markdown: {
		processor: unified({
			remarkPlugins: [remarkGfm],
		}),
		shikiConfig: {
			themes: {
				light: "github-light",
				dark: "github-dark",
			},
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
