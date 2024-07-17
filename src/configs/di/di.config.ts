import DIContainer, { IDIContainer } from "rsdi";
import { repositories } from "./repositories";
import { services } from "./services";
import { controllers } from "./controllers";

/**
 * Функция для конфигурации DI контейнера
 */
export function diConfig(): IDIContainer {
  const container = new DIContainer();
  container.add({
    ...controllers,
    ...services,
    ...repositories,
  });
  return container;
}
