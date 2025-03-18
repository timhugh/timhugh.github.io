import React from "react";
import { getPostsMetadata } from "@/posts";
import TimeStamp from "@/components/TimeStamp";

interface BlogPostProps {
	params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
	const { slug } = await params;
	const Post = await import(`@/posts/${slug}.mdx`);
	const date = new Date(Date.parse(Post.frontmatter.date));
	return (
		<article>
			<h1>{Post.frontmatter.title}</h1>
			<TimeStamp date={date} />
			<Post.default />
		</article>
	);
}

export async function generateStaticParams() {
	const posts = await getPostsMetadata();
	return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;
