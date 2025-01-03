import { Router } from "express";
import {
  createCommentForPost,
  getCommentsByPostId,
} from "../controllers/comment.controller";

const commentRouter = Router();

commentRouter.get("/post/:id/comment", getCommentsByPostId);

commentRouter.post("/post/:id/comment", createCommentForPost);

export default commentRouter;
