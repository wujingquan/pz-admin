export const model = {
  add: 'manage/order/add',
  page: 'manage/order/page',
  info: 'manage/order/info',
  update: 'manage/order/update',
  delete: 'manage/order/delete',
} as const;

export const values = Object.values(model);

export type SysOrderPerms = (typeof values)[number];

export default model;
