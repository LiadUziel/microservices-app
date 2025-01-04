import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";

import { errorHandler } from "./controllers/error.controller";
import eventRouter from "./routes/event.route";
import queryRouter from "./routes/query.route";
import { handleEvent } from "./controllers/event.controller";

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

app.listen(PORT, async () => {
  console.log(`Query Service is running at http://localhost:${PORT}`);

  const { data: events } = await axios.get("http://localhost:3005/api/event");

  for (const event of events) {
    const { type, data } = event;
    handleEvent(type, data);
  }
});
