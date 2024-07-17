import { DataTypes, Model } from "sequelize";
import { IBase } from "../../../common";
import { databaseConfig } from "../../../configs";

export interface IUser extends IBase {
  balance: number;
}

export type IUserCreationAttributes = Omit<
  IUser,
  "id" | "created_at" | "updated_at"
>;

export type IUserUpdateAttributes = Partial<Omit<IUser, "id" | "created_at">>;

export class UserModel
  extends Model<IUser, IUserCreationAttributes>
  implements IUser
{
  id!: number;
  created_at!: Date;
  updated_at!: Date;
  balance!: number;
}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {
    sequelize: databaseConfig,
    schema: "public",
    tableName: process.env.USERS_TABLE,
  }
);
