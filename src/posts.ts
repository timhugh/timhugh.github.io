import type { MarkdownInstance } from "astro";

interface PostFrontmatter {
  title: string;
  date: Date;
  published: boolean;
}

export enum SortOrder {
  Ascending,
  Descending,
}

export interface Post {
  slug: string;
  title: string;
  date: Date;
  published: boolean;
  content: string;
}

export class Posts extends Array<Post> {
  published() {
    return new Posts(...this.filter((post) => post.published ?? true));
  }

  newerThan(date: Date) {
    return new Posts(...this.filter((post) => post.date > date));
  }

  limit(count: number) {
    return new Posts(...this.slice(0, count));
  }

  sortedByDate(sortOrder: SortOrder = SortOrder.Descending) {
    const sortFunc = (a: Post, b: Post) => {
      if (sortOrder === SortOrder.Ascending) {
        return a.date.getTime() - b.date.getTime();
      } else {
        return b.date.getTime() - a.date.getTime();
      }
    };

    return new Posts(...this.sort(sortFunc));
  }
}

const posts = Object.values(
  import.meta.glob<MarkdownInstance<PostFrontmatter>>("@/posts/**/*.md", {
    eager: true,
  }),
);

async function resolvePost(
  post: MarkdownInstance<PostFrontmatter>,
): Promise<Post> {
  return {
    slug: post.file.split("/").pop()?.replace(".md", "") ?? "",
    title: post.frontmatter.title,
    date: new Date(post.frontmatter.date),
    published: post.frontmatter.published ?? true,
    content: await post.compiledContent(),
  };
}

export async function getPosts(): Promise<Posts> {
  const postData = await Promise.all(posts.map((post) => resolvePost(post)));
  return new Posts(...postData).sortedByDate();
}
