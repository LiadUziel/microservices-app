import { RequestHandler } from "express";
import { FULL_POSTS } from "../data/full-posts";
import { FullPost } from "../models/full-post.model";

export const handleEvent = (
  type:
    | "PostCreated"
    | "CommentCreated"
    | "CommentModerated"
    | "CommentUpdated",
  data: any
) => {
  if (type === "PostCreated") {
    const { id, title } = data;

    const fullPost: FullPost = { id, title, comments: [] };

    // Add full post to data
    FULL_POSTS[id] = fullPost;
  }

  if (type === "CommentCreated") {
    const { postId, id, content, status } = data;

    const post = FULL_POSTS[postId];

    // Add new comment to relevant post
    post.comments.push({ id, content, status });
  }

  if (type === "CommentUpdated") {
    const { postId, id, content, status } = data;

    const post = FULL_POSTS[postId];

    const comment = post.comments.find((comment) => {
      comment.id === id;
    })!;

    comment.status = status;
    comment.content = content;
  }
};

export const receiveEvent: RequestHandler = async (req, res, next) => {
  try {
    const { type, data } = req.body;

    handleEvent(type, data);

    res.send({});
  } catch (err) {
    next(err);
  }
};
