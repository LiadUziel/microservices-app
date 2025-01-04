import axios from "axios";
import { RequestHandler } from "express";

export const receiveEvent: RequestHandler = async (req, res, next) => {
  try {
    const { type, data } = req.body;

    if (type === "CommentCreated") {
      const { content, id, postId } = data;

      const status = content.includes("curse") ? "rejected" : "approved";

      await axios.post("http://localhost:3005/api/event", {
        type: "CommentModerated",
        data: {
          id,
          postId,
          content,
          status,
        },
      });
    }

    res.send({});
  } catch (err) {
    next(err);
  }
};
