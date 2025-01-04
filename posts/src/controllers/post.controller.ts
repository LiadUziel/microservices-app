import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";

import { posts } from "../data/posts";
import { Post } from "../models/post.model";
import axios from "axios";

export const getAllPosts: RequestHandler = async (req, res, next) => {
  try {
    res.status(200).send(posts);
  } catch (err) {
    next(err);
  }
};

export const createPost: RequestHandler = async (req, res, next) => {
  try {
    const id = uuidv4().slice(0, 8);

    const { title } = req.body;

    const post: Post = { id, title };

    // Add the new posts to the array
    posts.push(post);

    // Send event to event bus
    await axios.post("http://localhost:3005/api/event", {
      type: "PostCreated",
      data: {
        ...post,
      },
    });
    res.status(201).send(post);
  } catch (err) {
    next(err);
  }
};
