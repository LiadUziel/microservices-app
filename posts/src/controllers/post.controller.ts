import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";

import { posts } from "../data/posts";
import { Post } from "../models/post.model";

export const getAllPosts: RequestHandler = async (req, res, next) => {
  res.status(200).send(posts);
};

export const createPost: RequestHandler = async (req, res, next) => {
  const id = uuidv4();

  const { title } = req.body;

  const post: Post = { id, title };

  // Add the new posts to the array
  posts.push(post);
  res.status(201).send(post);
};
