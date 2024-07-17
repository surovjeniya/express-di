import * as Joi from "joi";
import { baseValidator } from "../../../common/index";
import { IChangeUserBalanceDto } from "../dtos/change-user-balance.dto";
import { NextFunction, Request, Response } from "express";

const schema = Joi.object<IChangeUserBalanceDto>({
  amount: Joi.number().required(),
  userId: Joi.number().required(),
});

export const changeUserBalanceValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return baseValidator(schema, "body", req, res, next);
};
