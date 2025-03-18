import { readdir } from "fs/promises";
import path from "path";

export interface PostMetadata {
	slug: string;
	title?: string;
	date?: Date;
}

export async function getPostsMetadata(): Promise<PostMetadata[]> {
	try {
		const postsDirectory = path.join(process.cwd(), "src", "posts");
		const files = await readdir(postsDirectory, { withFileTypes: true });

		const slugs = files
			.filter((file) => file.isFile() && file.name.endsWith(".mdx"))
			.map((file) => file.name.replace(/\.mdx$/, ""));

		return slugs.map((slug: string) => {
			return { slug };
		});
	} catch (error) {
		console.error("Error fetching posts:", error);
		return [];
	}
}
