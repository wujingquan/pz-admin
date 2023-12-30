export const model = {
  add: 'manage/couponLog/add',
  page: 'manage/couponLog/page',
  info: 'manage/couponLog/info',
  update: 'manage/couponLog/update',
  delete: 'manage/couponLog/delete',
} as const;

export const values = Object.values(model);

export type SysBannberPerms = (typeof values)[number];

export default model;
