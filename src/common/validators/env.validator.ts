import * as Joi from "joi";

interface IEnvs {
  USERS_TABLE: string | undefined;
  DB_USERNAME: string | undefined;
  DB_PASSWORD: string | undefined;
  DB_HOST: string | undefined;
  DB_NAME: string | undefined;
  DB_SCHEMA: string | undefined;
  DB_PORT: number | undefined;
  PORT: number | undefined;
}

/**
 * Валидация env
 */
export const envValidator = (envs: IEnvs) => {
  const schema = Joi.object<IEnvs>({
    DB_HOST: Joi.string().required(),
    DB_NAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_SCHEMA: Joi.string().required(),
    DB_USERNAME: Joi.string().required(),
    PORT: Joi.number().required(),
    USERS_TABLE: Joi.string().required(),
  });
  const { error } = schema.validate(envs);
  if (error) {
    throw new Error(JSON.stringify({ error: error.details[0].message }));
  }
};
