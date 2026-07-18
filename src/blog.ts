import { getCollection, render, type RenderResult } from "astro:content";

export enum SortOrder {
  Ascending,
  Descending,
}

export interface Post {
  title: string;
  date: Date;
  slug: string;
  draft: boolean;
  content: RenderResult;
}

export class Posts {
  private promise: Promise<Post[]>;

  constructor() {
    this.promise = getCollection("blog").then((postData) =>
      Promise.all(
        postData.map(async (post): Promise<Post> => ({
          slug: post.id,
          title: post.data.title,
          date: post.data.date,
          draft: post.data.draft,
          content: await render(post),
        })),
      ),
    );
  }

  published() {
    this.promise.then((posts) => posts.filter((post) => !post.draft));
    return this;
  }

  sort(sortOrder: SortOrder = SortOrder.Descending) {
    const sortFunc =
      sortOrder === SortOrder.Ascending
        ? (a: Post, b: Post) => a.date.getTime() - b.date.getTime()
        : (a: Post, b: Post) => b.date.getTime() - a.date.getTime();
    this.promise.then((posts) => posts.sort(sortFunc));
    return this;
  }

  limit(numPosts: number) {
    this.promise.then((posts) => posts.slice(0, numPosts));
    return this;
  }

  async load(): Promise<Post[]> {
    return this.promise;
  }
}
