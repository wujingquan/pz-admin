export const model = {
  add: 'manage/city/add',
  page: 'manage/city/page',
  info: 'manage/city/info',
  update: 'manage/city/update',
  delete: 'manage/city/delete',
} as const;

export const values = Object.values(model);

export type SysCityPerms = (typeof values)[number];

export default model;
