import { RequestHandler } from "express";
import { FULL_POSTS } from "../data/full-posts";
import { FullPost } from "../models/full-post.model";

export const receiveEvent: RequestHandler = async (req, res, next) => {
  try {
    const { type, data } = req.body;

    console.log("Received Event", type);
    console.log(
      "🚀 ~ file: event.controller.ts:6 ~ constreceiveEvent:RequestHandler= ~ data:",
      data
    );

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

    res.send({});
  } catch (err) {
    next(err);
  }
};
