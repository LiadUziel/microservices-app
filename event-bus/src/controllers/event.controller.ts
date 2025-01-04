import axios from "axios";
import { RequestHandler } from "express";

import { EVENTS } from "../data/events";

export const createEvent: RequestHandler = async (req, res, next) => {
  try {
    const event = req.body;

    EVENTS.push(event);

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

export const getEvents: RequestHandler = async (req, res, next) => {
  try {
    res.send(EVENTS);
  } catch (err) {
    next(err);
  }
};
