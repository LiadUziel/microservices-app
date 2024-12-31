import { Router } from "express";
import {
  createCommentForPosts,
  getCommentsByPostId,
} from "../controllers/comment.controller";

const commentRouter = Router();

commentRouter.get("/post/:id/comment", getCommentsByPostId);

commentRouter.post("/post/:id/comment", createCommentForPosts);

export default commentRouter;
