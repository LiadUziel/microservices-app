import { RequestHandler } from "express";

import { COMMENTS_BY_POST_ID } from "../data/comments";
import axios from "axios";

export const receiveEvent: RequestHandler = async (req, res, next) => {
  try {
    const { type, data } = req.body;

    if (type === "CommentModerated") {
      const { postId, id, status, content } = data;
      const relevantComments = COMMENTS_BY_POST_ID[postId];

      const comment = relevantComments.find((comment) => comment.id === id)!;
      comment.status = status;
      comment.content = content;

      await axios.post("http://localhost:3005/api/event", {
        type: "CommentUpdated",
        data: { ...comment, postId },
      });
    }

    res.send({});
  } catch (err) {
    next(err);
  }
};
