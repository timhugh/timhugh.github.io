import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";

const nextConfig: NextConfig = {
	output: "export",
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	reactStrictMode: true,
};

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [
			remarkGfm,
			remarkFrontmatter,
			[remarkMdxFrontmatter, { name: "frontmatter" }],
		],
	},
});

const completeConfig = withMDX(nextConfig);
export default completeConfig;
