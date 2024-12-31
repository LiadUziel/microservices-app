import express, { Request, Response } from "express";
import postRouter from "./routes/post.route";

const app = express();
const PORT = 3000;

app.use("/api/post", postRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
