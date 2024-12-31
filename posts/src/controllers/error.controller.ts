import { Request, Response, NextFunction } from "express";

// middleware that handles in error and sends an appropriate message
export const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.statusCode || err.status || 500;
  const message = getErrorMessage(err);

  console.error(err);
  res.status(status).send({ status, message });
};

// extract message from error object or HttpError message
function getErrorMessage(err: any): string {
  let message = err.message;

  // if has "error" key
  if (err.error) {
    try {
      // if error is object with "Message"
      if (err.error.Message) {
        message = err.error.Message;
      } else {
        // it could be a json string, parse it
        message = JSON.parse(err.Error).Message;
      }
      // otherwise just return err.error
    } catch (error) {
      message = err.error;
    }
  }
  return message;
}
