import { RequestHandler } from "express";

export const receiveEvent: RequestHandler = async (req, res, next) => {
  try {
    const { type, data } = req.body;

    console.log("Received Event", type);
    console.log(
      "🚀 ~ file: event.controller.ts:6 ~ constreceiveEvent:RequestHandler= ~ data:",
      data
    );

    res.send({});
  } catch (err) {
    next(err);
  }
};
