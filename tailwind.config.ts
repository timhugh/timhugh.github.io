import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#fff",
                foreground: "#666",
                primary: "#84c66f",
            },
            fontFamily: {
                sans: ["Lato", "sans-serif"],
            }
        },
    },
    plugins: [],
} satisfies Config;
