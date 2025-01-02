export interface FullPost {
  id: string;

  title: string;

  comments: { content: string }[];
}

export interface FullPosts {
  [key: string]: FullPost;
}
