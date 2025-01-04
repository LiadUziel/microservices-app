import { Router } from "express";
import { createEvent, getEvents } from "../controllers/event.controller";

const eventRouter = Router();

eventRouter.post("/", createEvent);

eventRouter.get("/", getEvents);

export default eventRouter;
