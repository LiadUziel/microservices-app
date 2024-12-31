import { Router } from "express";
import { createPost, getAllPosts } from "../controllers/post.controller";

const postRouter = Router();

postRouter.get("/", getAllPosts);

postRouter.post("/", createPost);

export default postRouter;
