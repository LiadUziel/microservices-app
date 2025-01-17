import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { errorHandler } from "./controllers/error.controller";

import commentRouter from "./routes/comment.route";
import eventRouter from "./routes/event.route";

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use("/api", commentRouter);
app.use("/api/event", eventRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Comments Service is running at http://localhost:${PORT}`);
});
