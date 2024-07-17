import {
  IUserCreationAttributes,
  IUserUpdateAttributes,
  UserModel,
} from "./models/user.model";

export interface IUserRepository {
  findById(id: number): Promise<any>;
  create(data: IUserCreationAttributes): Promise<any>;
  updateById(id: number, data: IUserUpdateAttributes): Promise<any>;
}

export class UserRepository implements IUserRepository {
  async updateById(id: number, data: IUserUpdateAttributes): Promise<any> {
    return await UserModel.update({ ...data }, { where: { id } });
  }
  async create(data: IUserCreationAttributes): Promise<any> {
    return await UserModel.create({ ...data });
  }
  async findById(id: number): Promise<any> {
    return await UserModel.findOne({ where: { id } });
  }
}
