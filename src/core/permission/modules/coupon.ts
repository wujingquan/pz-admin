export const model = {
  add: 'manage/coupon/add',
  page: 'manage/coupon/page',
  info: 'manage/coupon/info',
  update: 'manage/coupon/update',
  delete: 'manage/coupon/delete',
} as const;

export const values = Object.values(model);

export type SysBannberPerms = (typeof values)[number];

export default model;
