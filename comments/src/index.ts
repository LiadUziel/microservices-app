import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import { errorHandler } from "./controllers/error.controller";

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
