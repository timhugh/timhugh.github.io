import { readdir } from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface PostMetadata {
	slug: string;
	title: string;
	date: Date;
	content?: string;
}

export async function getPostsMetadata(): Promise<PostMetadata[]> {
	try {
		const postsDirectory = path.join(process.cwd(), "src", "posts");
		const files = await readdir(postsDirectory, { withFileTypes: true });

		const slugs = files
			.filter((file) => file.isFile() && file.name.endsWith(".mdx"))
			.map((file) => file.name.replace(/\.mdx$/, ""));

		const posts = await Promise.all(
			slugs.map(async (slug: string) => {
				const filePath = path.join(postsDirectory, `${slug}.mdx`);
				const file = matter.read(filePath);

				if (!file.data.title) {
					throw new Error(`Missing title in ${slug}.mdx`);
				}
				if (!file.data.date) {
					throw new Error(`Missing date in ${slug}.mdx`);
				}

				return {
					slug,
					title: file.data.title,
					date: file.data.date,
					content: file.content,
				};
			}),
		);

		return posts;
	} catch (error) {
		console.error("Error fetching posts:", error);
		return [];
	}
}
