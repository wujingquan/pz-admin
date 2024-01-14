export const model = {
  add: 'manage/withdrawal/add',
  page: 'manage/withdrawal/page',
  info: 'manage/withdrawal/info',
  update: 'manage/withdrawal/update',
  delete: 'manage/withdrawal/delete',
  process: 'manage/withdrawal/process',
} as const;

export const values = Object.values(model);

export type SysWithdrawalPerms = (typeof values)[number];

export default model;
