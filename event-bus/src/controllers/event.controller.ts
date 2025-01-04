import axios from "axios";
import { RequestHandler } from "express";

export const createEvent: RequestHandler = async (req, res, next) => {
  try {
    const event = req.body;

    axios
      .post("http://localhost:3000/api/event", event)
      .catch((err) => console.log(err.message));
    axios
      .post("http://localhost:3001/api/event", event)
      .catch((err) => console.log(err.message));
    axios
      .post("http://localhost:3002/api/event", event)
      .catch((err) => console.log(err.message));
    axios
      .post("http://localhost:3003/api/event", event)
      .catch((err) => console.log(err.message));

    res.send({ status: "OK" });
  } catch (err) {
    next(err);
  }
};
