import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { errorHandler } from "./controllers/error.controller";

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
