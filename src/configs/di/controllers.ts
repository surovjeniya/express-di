import { object, use } from "rsdi";
import { UserController } from "../../modules/user/user.controller";
import { UserService } from "../../modules/user/user.service";

export const controllers = {
  [UserController.name]: object(UserController).construct(use(UserService)),
};
