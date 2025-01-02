import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { errorHandler } from "./controllers/error.controller";
import eventRouter from "./routes/event.route";
import queryRouter from "./routes/query.route";

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/event", eventRouter);
app.use("/api/query", queryRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
