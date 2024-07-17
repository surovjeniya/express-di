import { object, use } from "rsdi";
import { UserService } from "../../modules/user/user.service";
import { UserRepository } from "../../modules/user/user.repository";

export const services = {
  [UserService.name]: object(UserService).construct(use(UserRepository)),
};
