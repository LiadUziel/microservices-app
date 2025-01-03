import { Comment } from "./comment.model";

export interface FullPost {
  id: string;

  title: string;

  comments: Comment[];
}

export interface FullPosts {
  [key: string]: FullPost;
}
