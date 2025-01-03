export interface Comment {
  id: string;

  content: string;

  status: "pending" | "approved" | "rejected";
}

export interface CommentsByPostId {
  [key: string]: Comment[];
}
