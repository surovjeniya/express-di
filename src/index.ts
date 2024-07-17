import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { diConfig, routeConfig } from "./configs";
import { envValidator } from "./common";

const app = express();
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "50mb" }));

envValidator({
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: Number(process.env.DB_PORT),
  DB_SCHEMA: process.env.DB_SCHEMA,
  DB_USERNAME: process.env.DB_USERNAME,
  PORT: Number(process.env.PORT),
  USERS_TABLE: process.env.USERS_TABLE,
});

const configuredDi = diConfig();
routeConfig(app, configuredDi);

app.listen(process.env.PORT, () =>
  console.log("Server has been started in port:", process.env.PORT)
);
