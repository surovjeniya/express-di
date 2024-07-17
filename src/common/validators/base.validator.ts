import { NextFunction, Request, Response } from "express";
import * as Joi from "joi";

export const baseValidator = <T>(
  schema: Joi.ObjectSchema<T>,
  filedToValidate: "body" | "params",
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (filedToValidate === "body") {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
  }

  if (filedToValidate === "params") {
    const { error } = schema.validate(req.params);
    console.log(error);
    if (error)
      return res
        .status(400)
        .json({ validationError: error.details[0].message });
  }
  next();
};
