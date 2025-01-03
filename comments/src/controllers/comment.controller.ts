import { RequestHandler } from "express";
import axios from "axios";

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

export const createCommentForPost: RequestHandler = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const { content } = req.body;

    const comment: Comment = { postId, content };
    COMMENTS.push(comment);

    await axios.post("http://localhost:3005/api/event", {
      type: "CommentCreated",
      data: {
        ...comment,
      },
    });

    res.status(201).send(comment);
  } catch (err) {
    next(err);
  }
};
