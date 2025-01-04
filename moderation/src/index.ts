import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { errorHandler } from "./controllers/error.controller";

import eventRouter from "./routes/event.route";

const app = express();
const PORT = 3003;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/event", eventRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Moderation Service is running at http://localhost:${PORT}`);
});
