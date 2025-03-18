import React from "react";
import { getPostsMetadata, PostMetadata } from "@/posts";
import TimeStamp from "./TimeStamp";
import Link from "next/link";

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
						<Link href={`/blog/${post.slug}`}>{post.title}</Link>
						<TimeStamp
							date={post.date}
							className="text-gray-500 pl-4"
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
