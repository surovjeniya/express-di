import { Sequelize } from "sequelize";

export const databaseConfig = new Sequelize({
  dialect: "postgres",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  schema: process.env.DB_SCHEMA,
});
