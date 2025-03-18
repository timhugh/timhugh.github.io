import React from "react";
import { getPostsMetadata } from "@/posts";
import BlogPost from "@/components/BlogPost";

interface BlogPostLoaderProps {
	params: Promise<{ slug: string }>;
}

export default async function BlogPostLoader({ params }: BlogPostLoaderProps) {
	const { slug } = await params;
	const Post = await import(`@/posts/${slug}.mdx`);
	const date = new Date(Date.parse(Post.frontmatter.date));

	return (
		<BlogPost title={Post.frontmatter.title} date={date}>
			<Post.default />
		</BlogPost>
	);
}

export async function generateStaticParams() {
	const posts = await getPostsMetadata();
	return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;
