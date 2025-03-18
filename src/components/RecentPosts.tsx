import React from "react";
import { getPostsMetadata, PostMetadata } from "@/posts";
import TimeStamp from "./TimeStamp";
import ForwardLink from "./ForwardLink";

export default async function RecentPosts(
	props: React.ComponentProps<"div">,
): Promise<JSX.Element> {
	const posts: PostMetadata[] = await getPostsMetadata();

	return (
		<div {...props}>
			<h2>Recent Posts</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.slug}>
						<ForwardLink
							href={`/blog/${post.slug}`}
							className="font-serif text-lg"
						>
							{post.title}
						</ForwardLink>
						<TimeStamp
							date={post.date}
							className="text-foreground_dim_light dark:text-foreground_dim_dark pl-4 text-sm"
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
