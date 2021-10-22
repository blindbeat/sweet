import * as api from './api';

/**
 * ВНИМАНИЕ! Чтобы изменения в этом файле не перезаписывали ваши изменения
 * переименуйте файл в sandbox.ts
 * Локальная копия песочницы, создана для того, чтобы фронтенд, чтоторый написан на js
 * мог не только подбирать здесь варианты аргументов, но и оставлять их здесь, чтобы в случае изменения
 * схемы базы данных, после сенхронизации файлов api.ts и prisma.ts в этом файле ему подсказало,
 * какие методы ему надо изменить в реализации, в случае критических изменений.
 */
async () => {
  api.userFindMany({
    where: {
      id: 12,
    },
    skip: 1,
    take: 2,
  });
  const d = await api.categoryUpdate({
    where: {
      id: 1,
    },
    data: {
      image: 1,
    },
  });
};