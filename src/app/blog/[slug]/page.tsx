import React from "react";
import { getPostsMetadata, PostMetadata } from "@/posts";

interface BlogPostProps {
	params: Promise<PostMetadata>;
}

export default async function BlogPost({ params }: BlogPostProps) {
	const { slug } = await params;
	try {
		const Post = await import(`@/posts/${slug}.mdx`);
		return <Post.default />;
	} catch (error) {
		console.error(`Error loading post "${slug}": ${error}`);
		return <div>Error loading post</div>;
	}
}

export async function generateStaticParams() {
	return await getPostsMetadata();
}

export const dynamicParams = false;
