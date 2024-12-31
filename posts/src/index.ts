import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import postRouter from "./routes/post.route";
import { errorHandler } from "./controllers/error.controller";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/post", postRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
