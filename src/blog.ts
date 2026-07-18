import { getCollection, render, type RenderResult } from "astro:content";

export enum SortOrder {
  Ascending,
  Descending,
}

export interface Post {
  title: string;
  date: Date;
  slug: string;
  published: boolean;
  content: RenderResult;
}

export async function getPosts(): Promise<Posts> {
  const postData = await getCollection("blog").then((postData) =>
    Promise.all(
      postData.map(async (post): Promise<Post> => ({
        slug: post.id,
        title: post.data.title,
        date: post.data.date,
        published: post.data.published,
        content: await render(post),
      })),
    ),
  );
  return new Posts(...postData);
}

export class Posts extends Array<Post> {
  published() {
    return new Posts(...this.filter((post) => post.published));
  }

  sortByDate(sortOrder: SortOrder = SortOrder.Descending) {
    const sortFunc =
      sortOrder === SortOrder.Ascending
        ? (a: Post, b: Post) => a.date.getTime() - b.date.getTime()
        : (a: Post, b: Post) => b.date.getTime() - a.date.getTime();
    return new Posts(...this.sort(sortFunc));
  }

  groupByMonth() {
    return Object.entries(
      Object.groupBy(this, (post) =>
        post.date.toLocaleString("default", { month: "long", year: "numeric" }),
      ) as Record<string, Post[]>,
    );
  }
}
