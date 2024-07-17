import * as core from "express-serve-static-core";
import { IDIContainer } from "rsdi";
import { UserController } from "../../modules/user/user.controller";
import { changeUserBalanceValidator } from "../../modules/user/validators/change-user-balance.validator";

const APP_ROUTES = {
  USER: {
    CHANGE_USER_BALANCE: "/change-user-balance",
  },
};

/**
 * Функция для генерации роута
 * @param app - инстанс express
 * @param url - url роута
 * @param method - метод запроса
 * @param handlers - массив обработчикв (middleware и конечная точка маршрутка - контроллер)
 */
const generateRoute = (
  app: core.Express,
  url: string,
  method: "post" | "get" | "put",
  handlers: Function[]
  //@ts-ignore
) => app.route(url)[method](...handlers);

/**
 * Функция для роутера приложения с использованием DI контейнера
 */
export function routeConfig(app: core.Express, diContainer: IDIContainer) {
  const userController = diContainer.get(UserController);

  generateRoute(app, APP_ROUTES.USER.CHANGE_USER_BALANCE, "post", [
    changeUserBalanceValidator,
    userController.changeUserBalance.bind(userController),
  ]);
}
