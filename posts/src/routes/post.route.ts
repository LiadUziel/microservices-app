import { Router } from "express";
import { getAllPosts } from "../controllers/post.controller";

const postRouter = Router();

postRouter.get("/", getAllPosts);

export default postRouter;
