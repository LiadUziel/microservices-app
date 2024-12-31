import { RequestHandler } from "express";
import { Comment } from "../models/comment.model";
import { COMMENTS } from "../data/comments";

export const getCommentsByPostId: RequestHandler = async (req, res, next) => {
  try {
    const postId = req.params.id;

    const commentsByPostId: Comment[] = COMMENTS.filter(
      (comment) => comment.postId === postId
    );

    res.status(201).send(commentsByPostId);
  } catch (err) {
    next(err);
  }
};
