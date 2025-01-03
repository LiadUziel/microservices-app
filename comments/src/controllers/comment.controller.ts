import { RequestHandler } from "express";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { Comment } from "../models/comment.model";
import { COMMENTS_BY_POST_ID } from "../data/comments";

export const getCommentsByPostId: RequestHandler = async (req, res, next) => {
  try {
    const postId = req.params.id;

    res.send(COMMENTS_BY_POST_ID[postId] || []);
  } catch (err) {
    next(err);
  }
};

export const createCommentForPost: RequestHandler = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const { content } = req.body;

    const id = uuidv4().slice(0, 8);

    const comments = COMMENTS_BY_POST_ID[req.params.id] || [];

    const newComment: Comment = { id, content, status: "pending" };

    comments.push(newComment);

    COMMENTS_BY_POST_ID[postId] = comments;

    await axios.post("http://localhost:3005/api/event", {
      type: "CommentCreated",
      data: {
        ...newComment,
        postId,
      },
    });

    res.status(201).send(newComment);
  } catch (err) {
    next(err);
  }
};
