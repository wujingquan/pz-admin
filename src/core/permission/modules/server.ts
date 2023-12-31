export const model = {
  add: 'manage/server/add',
  page: 'manage/server/page',
  info: 'manage/server/info',
  update: 'manage/server/update',
  delete: 'manage/server/delete',
} as const;

export const values = Object.values(model);

export type SysServerTypePerms = (typeof values)[number];

export default model;
