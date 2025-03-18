import React from "react";
import { Metadata } from "next";
import RecentPosts from "@/components/RecentPosts";

export const metadata: Metadata = {
	title: "recent posts",
};

export default async function PostPage(): Promise<React.ReactNode> {
	return (
		<main>
			<RecentPosts />
		</main>
	);
}
