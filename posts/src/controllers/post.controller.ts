import { RequestHandler } from "express";
import { posts } from "../data/posts";

export const getAllPosts: RequestHandler = async (req, res, next) => {
  res.status(201).send(posts);
};
