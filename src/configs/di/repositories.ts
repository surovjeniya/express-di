import { object } from "rsdi";
import { UserRepository } from "../../modules/user/user.repository";

export const repositories = {
  [UserRepository.name]: object(UserRepository),
};
