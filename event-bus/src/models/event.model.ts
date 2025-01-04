export interface Event {
  type:
    | "PostCreated"
    | "CommentCreated"
    | "CommentModerated"
    | "CommentUpdated";

  data: any;
}
