import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "media",
	theme: {
		container: {
			center: true,
			padding: "1rem",
		},
		extend: {
			colors: {
				background: "#fff",
				foreground: "#333",
				primary: "#84c66f",
			},
			fontFamily: {
				sans: ["Lato", "sans-serif"],
				serif: ["Courier Prime", "serif"],
			},
		},
	},
	plugins: [],
} satisfies Config;
