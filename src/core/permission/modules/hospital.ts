export const model = {
  add: 'manage/hospital/add',
  page: 'manage/hospital/page',
  info: 'manage/hospital/info',
  update: 'manage/hospital/update',
  delete: 'manage/hospital/delete',
} as const;

export const values = Object.values(model);

export type SysHospitalPerms = (typeof values)[number];

export default model;
