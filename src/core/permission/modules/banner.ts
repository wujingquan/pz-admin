export const model = {
  add: 'manage/banner/add',
  page: 'manage/banner/page',
  info: 'manage/banner/info',
  update: 'manage/banner/update',
  delete: 'manage/banner/delete',
} as const;

export const values = Object.values(model);

export type SysBannberPerms = (typeof values)[number];

export default model;
