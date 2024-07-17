import { IChangeUserBalanceDto } from "./dtos/change-user-balance.dto";
import { IUserService } from "./user.service";
import { Request, Response } from "express";

export class UserController {
  constructor(private readonly userService: IUserService) {}

  async changeUserBalance(
    req: Request<{}, {}, IChangeUserBalanceDto>,
    res: Response
  ) {
    console.log(this);
    const { amount, userId } = req.body;
    const changeUserBalanceResult = await this.userService.changeUserBalance(
      userId,
      amount
    );
    return res.json({ changeUserBalanceResult });
  }
}
