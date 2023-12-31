export const model = {
  add: 'manage/serverType/add',
  page: 'manage/serverType/page',
  info: 'manage/serverType/info',
  update: 'manage/serverType/update',
  delete: 'manage/serverType/delete',
} as const;

export const values = Object.values(model);

export type SysServerTypePerms = (typeof values)[number];

export default model;
