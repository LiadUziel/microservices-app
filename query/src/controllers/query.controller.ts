import { RequestHandler } from "express";
import { FULL_POSTS } from "../data/full-posts";

export const getFullPosts: RequestHandler = async (req, res, next) => {
  try {
    res.send(FULL_POSTS);
  } catch (err) {
    next(err);
  }
};
