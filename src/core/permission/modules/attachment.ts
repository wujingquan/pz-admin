export const model = {
  add: 'common/attachment/add',
  page: 'common/attachment/page',
  info: 'common/attachment/info',
  update: 'common/attachment/update',
  delete: 'common/attachment/delete',
} as const;

export const values = Object.values(model);

export type SysBannberPerms = (typeof values)[number];

export default model;
