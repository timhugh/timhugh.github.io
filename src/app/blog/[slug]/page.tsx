import React from "react";
import path from "path";
import fs from "fs";

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const { default: Post } = await import(`@/blog/${slug}.mdx`);

	return <Post />;
}

export async function generateStaticParams() {
	const postsDirectory = path.join(process.cwd(), "src", "blog");
	const fileNames = await fs.promises.readdir(postsDirectory);

	return fileNames.map((fileName) => ({
		slug: fileName.replace(/\.mdx$/, ""),
	}));
}

export const dynamicParams = false;
