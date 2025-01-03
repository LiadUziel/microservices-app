import { RequestHandler } from "express";

export const receiveEvent: RequestHandler = async (req, res, next) => {
  try {
    const { type, data } = req.body;

    console.log("Received Event", type);
    console.log(
      "🚀 ~ file: event.controller.ts:6 ~ constreceiveEvent:RequestHandler= ~ data:",
      data
    );

    if (type === "CommentModerated") {
      // const { id, postId, status } = data;
      // const relevantComments = COMMENTS_BY_POST_ID.filter(
      //   (comment) => comment.postId === postId
      // );
      // const comment = relevantComments.find((comment) => comment.id === id)!;
      // comment.status = status;
    }

    res.send({});
  } catch (err) {
    next(err);
  }
};
