import React from "react";
import { getPostsMetadata, PostMetadata } from "@/posts";

export default async function RecentPosts(
	props: React.ComponentProps<"div">,
): Promise<React.ReactNode> {
	const posts: PostMetadata[] = await getPostsMetadata();
	console.log(posts);
	const slugs: string[] = posts.map((post) => post.slug);

	return (
		<div {...props}>
			<h2>Recent Posts</h2>
			<ul>
				{slugs.map((slug) => (
					<li key={slug}>
						<a href={`/blog/${slug}`}>{slug}</a>
					</li>
				))}
			</ul>
		</div>
	);
}
