import { IUserRepository } from "./user.repository";

export interface IUserService {
  changeUserBalance(userId: number, amount: number): Promise<any>;
}

export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async changeUserBalance(userId: number, amount: number) {
    return await this.userRepository.updateById(userId, { balance: amount });
  }
}
