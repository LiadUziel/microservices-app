import { RequestHandler } from "express";

export const receiveEvent: RequestHandler = async (req, res, next) => {
  try {
    const { type, data } = req.body;

    res.send({});
  } catch (err) {
    next(err);
  }
};
