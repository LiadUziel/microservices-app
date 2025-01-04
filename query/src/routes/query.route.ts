import { Router } from "express";
import { getFullPosts } from "../controllers/query.controller";

const queryRouter = Router();

queryRouter.get("/full-posts", getFullPosts);

export default queryRouter;
