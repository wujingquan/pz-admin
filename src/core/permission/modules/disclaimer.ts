export const model = {
  add: 'manage/disclaimer/add',
  page: 'manage/disclaimer/page',
  info: 'manage/disclaimer/info',
  update: 'manage/disclaimer/update',
  delete: 'manage/disclaimer/delete',
} as const;

export const values = Object.values(model);

export type SysDisclaimerPerms = (typeof values)[number];

export default model;
