import { Router } from "express";
import { receiveEvent } from "../controllers/event.controller";

const eventRouter = Router();

eventRouter.post("/", receiveEvent);

export default eventRouter;
