import type { MarkdownInstance } from "astro";

export interface PostFrontmatter {
	title: string;
	date: string | Date;
}

export interface PostMetadata {
	slug: string;
	title: string;
	date: Date;
}

export type PostModule = MarkdownInstance<PostFrontmatter>;

const postModules = import.meta.glob<PostModule>("../posts/*.md", {
	eager: true,
});

export function getPosts(): PostModule[] {
	return Object.values(postModules).sort(
		(a, b) =>
			getPostDate(b.frontmatter.date).getTime() -
			getPostDate(a.frontmatter.date).getTime(),
	);
}

export function getPostsMetadata(): PostMetadata[] {
	return getPosts().map((post) => ({
		slug: getPostSlug(post),
		title: post.frontmatter.title,
		date: getPostDate(post.frontmatter.date),
	}));
}

export function getPostSlug(post: PostModule): string {
	return post.file.split("/").pop()?.replace(/\.md$/, "") ?? "";
}

export function getPostDate(date: string | Date): Date {
	return date instanceof Date ? date : new Date(date);
}
