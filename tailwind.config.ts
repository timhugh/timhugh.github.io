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

				code_background_light: "#f0f0f0",
				code_red_light: "#e45649",
				code_orange_light: "#c18401",
				code_yellow_light: "#986801",
				code_green_light: "#50a14f",
				code_blue_light: "#4078f2",
				code_purple_light: "#a626a4",
				code_neutral_light: "#383a42",

				code_background_dark: "#222222",
				code_red_dark: "#f87171",
				code_orange_dark: "#f59e0b",
				code_yellow_dark: "#fbbf24",
				code_green_dark: "#4ade80",
				code_blue_dark: "#61dafb",
				code_purple_dark: "#c084fc",
				code_neutral_dark: "#cccccc",
			},
			fontFamily: {
				sans: ["Lato", "sans-serif"],
				serif: ["Courier Prime", "serif"],
			},
		},
	},
	plugins: [],
} satisfies Config;
